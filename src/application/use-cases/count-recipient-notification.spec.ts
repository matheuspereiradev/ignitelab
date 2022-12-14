import { makeNotification } from "../../../test/factories/notification.factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { CountRecipientNotification } from "./count-recipient-notification.case"


describe("Test of count recipient notifications", () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const countRecipientNotification = new CountRecipientNotification(notificationRepository)

    it("should return a quantity of notification for an recipient", async () => {
        
        
        await notificationRepository.create(makeNotification({
            recipientID: "user-2",
        }))

        await notificationRepository.create(makeNotification({
            recipientID: "user-1",
        }))
        
        await notificationRepository.create(makeNotification({
            recipientID: "user-1",
        }))

        const { count } = await countRecipientNotification.execute({
            recipientID: "user-1"
        })

        expect(notificationRepository.notifications).toHaveLength(3)
        expect(count).toBe(2)

    })

})