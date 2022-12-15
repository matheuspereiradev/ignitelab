import { Notification } from "../../src/application/entities/Notification"
import { NotificationRepository } from "../../src/application/repositories/Notification.repository"

export class InMemoryNotificationRepository implements NotificationRepository {
    public notifications: Notification[] = []

    async create(notification: Notification): Promise<void> {
        this.notifications.push(notification)
    }
}