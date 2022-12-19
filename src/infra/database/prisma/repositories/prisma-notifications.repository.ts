import { Injectable } from "@nestjs/common"
import { Notification } from "../../../../application/entities/Notification"
import { NotificationRepository } from "../../../../application/repositories/Notification.repository"
import { PrismaNotificationMapper } from "../mappers/prisma-notification.mapper"
import { PrismaService } from "../prisma.service"

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private primaService: PrismaService) { }

    async findByRecipientID(recipientID: string): Promise<Notification[]> {
        const notifications = await this.primaService.notification.findMany({
            where: {
                recipientID
            }
        })

        return notifications.map(notification => PrismaNotificationMapper.toDomain(notification))
    }

    async findByID(id: string): Promise<Notification | null> {
        const notification = await this.primaService.notification.findUnique({
            where: {
                id
            }
        })

        if (!notification)
            return null

        return PrismaNotificationMapper.toDomain(notification)
    }

    async countByRecipientID(recipientID: string): Promise<number> {
        const quantity = await this.primaService.notification.count({
            where: {
                recipientID
            }
        })

        return quantity
    }

    async save(notification: Notification): Promise<void> {
        const data = PrismaNotificationMapper.toPrisma(notification)

        await this.primaService.notification.update({
            where: {
                id: data.id
            },
            data
        })
    }


    async create(notification: Notification): Promise<void> {

        const data = PrismaNotificationMapper.toPrisma(notification)

        await this.primaService.notification.create({
            data
        })
    }
}