import { Module } from '@nestjs/common';
import { NotificationRepository } from '../../application/repositories/Notification.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications.repository';

@Module({
    imports: [],
    providers: [
        PrismaService,
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationRepository
        }
    ],
    exports: [NotificationRepository]
})
export class DatabaseModule { }
