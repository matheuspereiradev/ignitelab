import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/Notification"
import { NotificationRepository } from "../repositories/Notification.repository"

export interface ISendNotificationRequest {
    recipientID: string,
    content: string,
    category: string
}

export interface ISendNotificationResponse {
    notification: Notification
}

@Injectable()
export class SendNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(data: ISendNotificationRequest): Promise<ISendNotificationResponse> {
        const { category, content, recipientID } = data;
        const notification = new Notification({ category, content, recipientID })

        await this.notificationRepository.create(notification)

        return {
            notification
        }
    }
}