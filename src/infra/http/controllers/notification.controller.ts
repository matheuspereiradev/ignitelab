import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UnreadNotification } from '../../../application/use-cases/unread-notification.case';
import { CancelNotification } from '../../../application/use-cases/cancel-notification.case';
import { ReadNotification } from '../../../application/use-cases/read-notification.case';
import { SendNotification } from '../../../application/use-cases/send-notification.case';
import { CountRecipientNotification } from '../../../application/use-cases/count-recipient-notification.case';
import { GetRecipientNotification } from '../../../application/use-cases/get-recipient-notification.case';
import { CreateNotificationBody } from '../dtos/createNotification.body';
import { NotificationViewMapper } from '../mappers/Notification.view';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotification: SendNotification,
    private readonly cancelNotification: CancelNotification,
    private readonly readNotification: ReadNotification,
    private readonly unreadNotification: UnreadNotification,
    private readonly countRecipientNotifications: CountRecipientNotification,
    private readonly getRecipientNotifications: GetRecipientNotification,
  ) { }

  @Delete(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationID: id
    })
  }

  @Get('count/from/:recipientID')
  async count(@Param('recipientID') id: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientID: id
    })

    return {
      count
    }
  }

  @Get('list/from/:recipientID')
  async listFromRecipient(@Param('recipientID') id: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientID: id
    })

    return {
      notifications: notifications.map(NotificationViewMapper.toHttp)
    }
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationID: id
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationID: id
    })
  }


  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientID } = body;
    const { notification } = await this.sendNotification.execute({
      recipientID,
      category,
      content
    });
    return NotificationViewMapper.toHttp(notification);
  }
}
