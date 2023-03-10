import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';


@Module({
controllers: [AuthController],
providers: [AuthService],

})
export class AppModule {}
