import prisma from '@/prisma/client';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { UserCredentials } from '@/@types/auth';

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

    const user = await prisma.user.findUnique({
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

    return NextResponse.json(
      { status: 'ok', message: 'Successfully logged in', data: { id: user.id, email } },
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
