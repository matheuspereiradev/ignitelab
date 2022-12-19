import { makeNotification } from "../../../test/factories/notification.factory"
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { CountRecipientNotification } from "./count-recipient-notification.case"
import { GetRecipientNotification } from "./get-recipient-notification.case"


describe("Test of get recipient notifications", () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const getRecipientNotification = new GetRecipientNotification(notificationRepository)

    it("should return all of notification for an recipient", async () => {
        
        
        await notificationRepository.create(makeNotification({
            recipientID: "user-2",
        }))

        await notificationRepository.create(makeNotification({
            recipientID: "user-1",
        }))
        
        await notificationRepository.create(makeNotification({
            recipientID: "user-1",
        }))

        const { notifications } = await getRecipientNotification.execute({
            recipientID: "user-1"
        })

        expect(notificationRepository.notifications).toHaveLength(3)
        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(
            expect.arrayContaining([
                expect.objectContaining({recipientID: "user-1"}),
                expect.objectContaining({recipientID: "user-1"})
            ])
        )

    })

})