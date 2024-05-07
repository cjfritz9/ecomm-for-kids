import prisma from '@/db/prisma';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  console.log(body)

  try {
    const user = await prisma.user.create({ data: { email: body.email, password: body.password } });
    return NextResponse.json(
      { status: 'ok', message: `${body.email} created`, data: user },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { status: 'error', message: `${body.email} already exists`, data: null },
          { status: 400 }
        );
      } else {
        console.error('_____UNKNOWN_ERROR_____');
        console.error(error);
        console.error('_____UNKNOWN_ERROR_____');
      }
    }
  }
};
