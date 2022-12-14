import { makeNotification } from "../../../test/factories/notification.factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { CancelNotification } from "./cancel-notification.case"
import { NotificationNotFound } from "./errors/NotificationNotFound.error"


describe("Test of cancel notification", () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)

    it("should cancel a notification", async () => {

        const notification = makeNotification()

        await notificationRepository.create(notification)
        expect(notificationRepository.notifications).toHaveLength(1)

        await cancelNotification.execute({
            notificationID: notification.id
        })

        expect(notificationRepository.notifications[0].deletedAt).toEqual(
            expect.any(Date)
        )

    })

    it("should not to be able cancel a non existing notification", async () => {

        expect(() => {
            return cancelNotification.execute({
                notificationID: "fake-notification-id"
            })
        }).rejects.toThrow(NotificationNotFound)

    })

})