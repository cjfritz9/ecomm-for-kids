import prisma from '@/prisma/client';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserCredentials } from '@/@types/auth';
import { cookies } from 'next/headers';
import { APIResponse } from '../../response';

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as UserCredentials;
  const { email, password } = body;

  try {
    if (!email || !password) {
      return NextResponse.json(
        { status: 'error', message: `Missing Username/Password`, data: null },
        { status: 400 }
      );
    }

    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { status: 'error', message: `${email} not found`, data: null },
        { status: 400 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { status: 'error', message: `Incorrect password`, data: null },
        { status: 400 }
      );
    }

    const store = await prisma.store.findFirst({
      where: {
        id: user.activeStoreId!
      },
    });

    if (!store) {
      return new APIResponse('error', 401, 'No store found for user', null).asNextResponse();
    }

    if (!user.activeStoreId) {
      user = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          activeStoreId: store.id,
        },
      });
    }

    const token = jwt.sign(
      { userId: user.id, storeId: user.activeStoreId },
      process.env.JWT_SECRET!,
      {
        expiresIn: '30d',
      }
    );
    cookies().set('accessToken', token);

    return NextResponse.json(
      {
        status: 'ok',
        message: 'Login successful',
        data: {
          id: user.id,
          email,
          token: jwt.verify(token, process.env.JWT_SECRET!),
          store,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { status: 'error', message: `${email} already exists`, data: null },
          { status: 400 }
        );
      } else {
        console.error('_____UNKNOWN_ERROR_____');
        console.error(error);
        console.error('_____UNKNOWN_ERROR_____');
      }
    }

    return NextResponse.json(
      { status: 'error', message: `Unhandled server error`, data: null },
      { status: 500 }
    );
  }
};
