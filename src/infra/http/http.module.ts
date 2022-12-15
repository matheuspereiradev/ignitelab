import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification.case';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule { }
