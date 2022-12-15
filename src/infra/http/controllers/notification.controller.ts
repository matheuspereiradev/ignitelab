import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from "node:crypto"
import { SendNotification } from 'src/application/use-cases/send-notification.case';
import { CreateNotificationBody } from '../dtos/createNotification.body';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {

    const { content, category, recipientID } = body;

    const { notification } = await this.sendNotification.execute({
      recipientID,
      category,
      content
    });
    
    return notification;
  }
}
