import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {randomUUID} from "node:crypto"
import { CreateNotificationBody } from './createNotification.body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  find() {
    return this.prismaService.notification.findMany();
  }
  @Post()
  async create(@Body() body:CreateNotificationBody) {

    const {content,category,recipientID} = body;
    const data = await this.prismaService.notification.create({
      data:{
        id: randomUUID(),
        recipientID,
        category,
        content
      }
    });
    return data;
  }
}
