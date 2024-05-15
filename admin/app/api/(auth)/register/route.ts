import prisma from '@/prisma/client';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserCredentials } from '@/@types/auth';
import { APIResponse } from '../../response';
import logger from '../../logger';
import { cookies } from 'next/headers';

const SALT_ROUNDS = 10;

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as UserCredentials;
  const { email, password } = body;

  try {
    if (!email || !password) {
      return new APIResponse('error', 400, 'Missing Username/Password', null).asNextResponse();
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword, createdAt: new Date() },
    });

    if (user) {
      const store = await prisma.store.create({
        data: {
          name: 'My Store',
          handle: `default-store-${user.id}-${new Date().getMilliseconds()}`,
          createdAt: new Date(),
          ownerId: user.id,
        },
      });

      if (store) {
        const token = jwt.sign({ userId: user.id, storeId: store.id }, process.env.JWT_SECRET!, {
          expiresIn: '30d',
        });
        cookies().set('accessToken', token);
        prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            activeStoreId: store.id,
          },
        });

        return new APIResponse('ok', 201, `${email} created`, {
          id: user.id,
          email,
          token,
        }).asNextResponse();
      }
    } else {
      prisma.user.delete({
        where: {
          email,
        },
      });
    }
    return new APIResponse('error', 500, 'Error creating store', null).asNextResponse();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002' && error.meta?.target === 'User_email_key') {
        logger.error(`
          ${error}
          source: POST User Registration API - Prisma Non-Unique Email
        `);
        return new APIResponse('error', 400, `${email} is taken`, null).asNextResponse();
      } else {
        logger.error(`
          ${error}
          source: POST User Registration API - Unknown
        `);
      }
    }

    return new APIResponse('error', 500, 'Server error', null).asNextResponse();
  }
};
