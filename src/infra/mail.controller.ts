import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Controller('api')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('mail')
  sendMail(): string {
    return this.mailService.sendMail();
  }
}
