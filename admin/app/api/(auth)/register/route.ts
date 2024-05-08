import prisma from '@/db/prisma';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { UserCredentials } from '@/@types/auth';

const SALT_ROUNDS = 10;

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

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword, createdAt: new Date() },
    });

    return NextResponse.json(
      { status: 'ok', message: `${body.email} created`, data: { id: user.id, email } },
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
      { status: 'error', message: `Server error`, data: null },
      { status: 500 }
    );
  }
};
