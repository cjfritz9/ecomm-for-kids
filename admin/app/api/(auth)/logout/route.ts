import prisma from '@/prisma/client';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserCredentials } from '@/@types/auth';
import { cookies } from 'next/headers';
import logger from '../../logger';
import { APIResponse } from '../../response';

export const POST = async (_req: NextRequest) => {
  try {
    const token = cookies().get('accessToken');

    if (token) {
      cookies().delete('accessToken');
    } else {
      logger.warn(`
        No token found in cookies during logout
        source: /api/logout
      `);
    }
    return new APIResponse('ok', 200, 'Sucessfully logged out', null).asNextResponse();
  } catch (error) {
    logger.error(`
      Error during logout
      source: /api/logout
      ${error}
    `);

    return new APIResponse('error', 500, 'Internal server error', null).asNextResponse();
  }
};
