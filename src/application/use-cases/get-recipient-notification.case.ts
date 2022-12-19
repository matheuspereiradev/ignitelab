import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/Notification";
import { NotificationRepository } from "../repositories/Notification.repository";
import { NotificationNotFound } from "./errors/NotificationNotFound.error";

interface IGetRecipientNotificationRequest {
    recipientID: string
}

interface IGetRecipientNotificationResponse {
    notifications: Notification[]
}

@Injectable()
export class GetRecipientNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(data: IGetRecipientNotificationRequest): Promise<IGetRecipientNotificationResponse> {
        const { recipientID } = data
        const notifications = await this.notificationRepository.findByRecipientID(recipientID)

        return {
            notifications
        }
    }
}