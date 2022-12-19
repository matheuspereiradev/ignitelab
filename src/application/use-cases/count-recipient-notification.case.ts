import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/Notification.repository";
import { NotificationNotFound } from "./errors/NotificationNotFound.error";

interface ICountRecipientNotificationRequest {
    recipientID: string
}

interface ICountRecipientNotificationResponse {
    count: number
}

@Injectable()
export class CountRecipientNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(data: ICountRecipientNotificationRequest): Promise<ICountRecipientNotificationResponse> {
        const { recipientID } = data
        const quantity = await this.notificationRepository.countByRecipientID(recipientID)

        return {
            count: quantity
        }
    }
}