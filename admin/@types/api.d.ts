import { NextResponse } from 'next/server';

export type StatusMessage = 'ok' | 'error';
export type StatusCode = 200 | 201 | 400 | 401 | 403 | 500;
export type Data = {
  [key: string]: any;
} | null;

export interface ServerResponse extends NextResponse {
  statusMessage: statusMessage;
  statusCode: statusCode;
  message: message;
  data: data;
}
