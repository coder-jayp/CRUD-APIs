import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: any = ctx.switchToHttp().getRequest(); // Change type to 'any' for request
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
