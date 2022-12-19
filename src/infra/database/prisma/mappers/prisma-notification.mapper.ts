import { Notification as NotificationEntity } from "../../../../application/entities/Notification";
import { Notification as NotificationPrisma } from "@prisma/client";

export class PrismaNotificationMapper {
    static toPrisma(notification: NotificationEntity) {
        return {
            category: notification.category,
            content: notification.content,
            createdAt: notification.createdAt,
            readAt: notification.readAt,
            recipientID: notification.recipientID,
            deletedAt: notification.deletedAt,
            id: notification.id
        }
    }
    static toDomain(notification: NotificationPrisma) {
        return new NotificationEntity({
            category: notification.category,
            content: notification.content,
            createdAt: notification.createdAt,
            readAt: notification.readAt,
            recipientID: notification.recipientID,
            deletedAt: notification.deletedAt,
        }, notification.id)
    }

}