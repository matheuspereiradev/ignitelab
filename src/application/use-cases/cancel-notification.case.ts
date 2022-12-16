import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/Notification.repository";
import { NotificationNotFound } from "./errors/NotificationNotFound.error";

interface ICancelNotificationRequest {
    notificationID: string
}

type ICancelNotificationResponse = void

@Injectable()
export class CancelNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(data: ICancelNotificationRequest): Promise<ICancelNotificationResponse> {
        const { notificationID } = data
        const notification = await this.notificationRepository.findByID(notificationID)

        if (!notification)
            throw new NotificationNotFound()

        notification.cancel()

        await this.notificationRepository.save(notification)

        return
    }
}