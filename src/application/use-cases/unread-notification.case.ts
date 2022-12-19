import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/Notification.repository";
import { NotificationNotFound } from "./errors/NotificationNotFound.error";

interface IUnreadNotificationRequest {
    notificationID: string
}

type IUnreadNotificationResponse = void

@Injectable()
export class UnreadNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(data: IUnreadNotificationRequest): Promise<IUnreadNotificationResponse> {
        const { notificationID } = data
        const notification = await this.notificationRepository.findByID(notificationID)

        if (!notification)
            throw new NotificationNotFound()

        notification.unread()

        await this.notificationRepository.save(notification)

        return
    }
}