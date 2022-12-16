import { Injectable } from "@nestjs/common"
import { Notification } from "../../../../application/entities/Notification"
import { NotificationRepository } from "../../../../application/repositories/Notification.repository"
import { PrismaNotificationMapper } from "../mappers/prisma-notification.mapper"
import { PrismaService } from "../prisma.service"

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private primaService: PrismaService) { }

    async create(notification: Notification): Promise<void> {

        const data = PrismaNotificationMapper.toPrisma(notification)
    
        await this.primaService.notification.create({
            //@ts-ignore
            data
        })
    }
}