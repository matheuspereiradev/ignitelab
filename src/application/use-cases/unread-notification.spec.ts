import { makeNotification } from "../../../test/factories/notification.factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { CancelNotification } from "./cancel-notification.case"
import { NotificationNotFound } from "./errors/NotificationNotFound.error"
import { ReadNotification } from "./read-notification.case"
import { UnreadNotification } from "./unread-notification.case"


describe("Test of unread notification", () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const readNotification = new UnreadNotification(notificationRepository)

    it("should set a readed notification as unread", async () => {

        const notification = makeNotification({
            readAt: new Date()
        })
        await notificationRepository.create(notification)

        await readNotification.execute({
            notificationID: notification.id
        })

        expect(notificationRepository.notifications[0].readAt).toBeNull()

    })

    it("should not to be able set as unread a non existing notification", async () => {

        expect(() => {
            return readNotification.execute({
                notificationID: "fake-notification-id"
            })
        }).rejects.toThrow(NotificationNotFound)

    })

})