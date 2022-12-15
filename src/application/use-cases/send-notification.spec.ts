import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification.repository"
import { SendNotification } from "./send-notification.case"


describe("Test of send notifications", () => {

    it("should create a notification", async () => {
        const notificationRepository = new InMemoryNotificationRepository()
        const sendNotification = new SendNotification(notificationRepository)

        const { notification } = await sendNotification.execute({
            category: "Mensagem",
            content: "Teste do repositorio com sucesso",
            recipientID: "a1da3829-9b52-4da7-84f5-24f56a655297"
        })

        expect(notificationRepository.notifications).toHaveLength(1)
        expect(notificationRepository.notifications[0]).toEqual(notification)

    })

})