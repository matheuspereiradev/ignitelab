import { makeNotification } from "../../../test/factories/notification.factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { SendNotification } from "./send-notification.case"


describe("Test of send notifications", () => {

    it("should create a notification", async () => {
        const notificationRepository = new InMemoryNotificationRepository()
        const sendNotification = new SendNotification(notificationRepository)

        const { notification } = await sendNotification.execute(makeNotification())

        expect(notificationRepository.notifications).toHaveLength(1)
        expect(notificationRepository.notifications[0]).toEqual(notification)

    })

})