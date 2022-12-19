import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/Notification.repository";
import { NotificationNotFound } from "./errors/NotificationNotFound.error";

interface IReadNotificationRequest {
    notificationID: string
}

type IReadNotificationResponse = void

@Injectable()
export class ReadNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(data: IReadNotificationRequest): Promise<IReadNotificationResponse> {
        const { notificationID } = data
        const notification = await this.notificationRepository.findByID(notificationID)

        if (!notification)
            throw new NotificationNotFound()

        notification.read()

        await this.notificationRepository.save(notification)

        return
    }
}