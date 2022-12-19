import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification.case';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notification.controller';
import { UnreadNotification } from '../../application/use-cases/unread-notification.case';
import { CancelNotification } from '../../application/use-cases/cancel-notification.case';
import { ReadNotification } from '../../application/use-cases/read-notification.case';
import { CountRecipientNotification } from '../../application/use-cases/count-recipient-notification.case';
import { GetRecipientNotification } from '../../application/use-cases/get-recipient-notification.case';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    UnreadNotification,
    ReadNotification,
    CountRecipientNotification,
    GetRecipientNotification
  ],
})
export class HttpModule { }
