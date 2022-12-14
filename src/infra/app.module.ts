import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailController } from './mail.controller';
import { MailService } from './mail/mail.service';
import { TestMailService } from './mail/test-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController,MailController],
  providers: [{
    provide: MailService,
    useClass: TestMailService
  },PrismaService],
})
export class AppModule { }
