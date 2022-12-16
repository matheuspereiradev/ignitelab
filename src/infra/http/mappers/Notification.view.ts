import { Notification } from "../../../application/entities/Notification";

export class NotificationViewMapper {
    static toHttp(notification: Notification) {
        console.log(notification)
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content,
            recipientID: notification.recipientID,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    }
}