import { Notification } from "../entities/Notification";

export abstract class NotificationRepository {
    abstract create(notification:Notification):Promise<void>;
    abstract findByID(id:string):Promise<Notification|null>;
    abstract findByRecipientID(recipientID:string):Promise<Notification[]>;
    abstract countByRecipientID(recipientID:string):Promise<number>;
    abstract save(notification:Notification):Promise<void>;
}