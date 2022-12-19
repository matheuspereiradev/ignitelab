import { Notification } from "../../src/application/entities/Notification"
import { NotificationRepository } from "../../src/application/repositories/Notification.repository"

export class InMemoryNotificationRepository implements NotificationRepository {
    public notifications: Notification[] = []

    async findByRecipientID(recipientID: string): Promise<Notification[]> {
        const notification = this.notifications.filter(n => n.recipientID === recipientID)
        return notification
    }

    async countByRecipientID(recipientID: string): Promise<number> {
        const notification = this.notifications.filter(n => n.recipientID === recipientID)
        return notification.length
    }

    async findByID(id: string): Promise<Notification | null> {
        const notification = this.notifications.find(n => n.id === id)
        if (!notification)
            return null
        return notification
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(n => n.id === notification.id)

        if (notificationIndex >= 0)
            this.notifications[notificationIndex] = notification
    }

    async create(notification: Notification): Promise<void> {
        this.notifications.push(notification)
    }
}