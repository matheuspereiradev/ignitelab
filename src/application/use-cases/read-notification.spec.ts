import { makeNotification } from "../../../test/factories/notification.factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { CancelNotification } from "./cancel-notification.case"
import { NotificationNotFound } from "./errors/NotificationNotFound.error"
import { ReadNotification } from "./read-notification.case"


describe("Test of read notification", () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const readNotification = new ReadNotification(notificationRepository)

    it("should set as read a notification", async () => {

        const notification = makeNotification()
        await notificationRepository.create(notification)

        await readNotification.execute({
            notificationID: notification.id
        })

        expect(notificationRepository.notifications[0].readAt).toEqual(
            expect.any(Date)
        )

    })

    it("should not to be able set as read a non existing notification", async () => {

        expect(() => {
            return readNotification.execute({
                notificationID: "fake-notification-id"
            })
        }).rejects.toThrow(NotificationNotFound)

    })

})