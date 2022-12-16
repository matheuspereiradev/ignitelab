import { Notification } from "../entities/Notification";

export abstract class NotificationRepository {
    abstract create(notification:Notification):Promise<void>;
    abstract findByID(id:string):Promise<Notification|null>;
    abstract save(notification:Notification):Promise<void>;
}