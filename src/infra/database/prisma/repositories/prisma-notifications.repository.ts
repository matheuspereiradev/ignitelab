import { Injectable } from "@nestjs/common"
import { Notification } from "../../../../application/entities/Notification"
import { NotificationRepository } from "../../../../application/repositories/Notification.repository"
import { PrismaService } from "../prisma.service"

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private primaService: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        await this.primaService.notification.create({
            data: {
                category: notification.category, 
                content: notification.content, 
                //@ts-ignore
                createdAt: notification.createdAt, 
                readAt: notification.readAt, 
                recipientID: notification.recipientID,
                id: notification.id
            }
        })
    }
}