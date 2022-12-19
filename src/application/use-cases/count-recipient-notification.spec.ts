import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { Notification } from "../entities/Notification"
import { CountRecipientNotification } from "./count-recipient-notification.case"
import { SendNotification } from "./send-notification.case"


describe("Test of count recipient notifications", () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const countRecipientNotification = new CountRecipientNotification(notificationRepository)

    it("should return a quantity of notification for an recipient", async () => {
        const userID = "a1da3829"
        //creando as notifications no db
        const notification = new Notification({
            category: "Mensagem",
            content: "Teste do repositorio com sucesso",
            recipientID: userID

        })
        const notificationOtherRecipient = new Notification({
            category: "Mensagem",
            content: "Teste do repositorio de outro usuário",
            recipientID: "boutro829"

        })

        await notificationRepository.create(notification)
        await notificationRepository.create(notification)
        await notificationRepository.create(notificationOtherRecipient)

        const { count } = await countRecipientNotification.execute({
            recipientID: userID
        })

        expect(notificationRepository.notifications).toHaveLength(3)
        expect(count).toBe(2)

    })

})