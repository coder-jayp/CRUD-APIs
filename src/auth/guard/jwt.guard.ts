import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') implements CanActivate {
    canActivate(context: ExecutionContext) {
        // Custom logic if needed before canActivate
        return super.canActivate(context);
    }
}
