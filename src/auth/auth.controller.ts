import { Controller, Post, Body, Req, HttpStatus, HttpCode } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { Request } from 'express'; // Import Request from express for req.user access

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() dto: AuthDto) {
        return await this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signin(@Body() dto: AuthDto, @Req() req: Request) {
        // Access user from request
        console.log(req.user); // Example usage of req.user
        return await this.authService.signin(dto);
    }
}
