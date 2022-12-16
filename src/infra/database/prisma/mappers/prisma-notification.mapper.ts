import { Notification } from "../../../../application/entities/Notification";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            category: notification.category,
            content: notification.content,
            createdAt: notification.createdAt,
            readAt: notification.readAt,
            recipientID: notification.recipientID,
            id: notification.id
        }
    }
}