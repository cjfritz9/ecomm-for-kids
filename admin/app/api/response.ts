import { NextResponse } from 'next/server';
import { Data, StatusCode, StatusMessage } from '@/@types/api';

export class APIResponse {
  private statusMessage: StatusMessage;
  private statusCode: StatusCode;
  private message: string;
  private data: Data;

  constructor(statusMessage: StatusMessage, statusCode: StatusCode, message: string, data: Data) {
    this.statusMessage = statusMessage;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  public asNextResponse = () => {
    return NextResponse.json(this, { status: this.statusCode });
  };
}
