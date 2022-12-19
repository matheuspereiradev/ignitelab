import { Notification, NotificationProps } from "../../src/application/entities/Notification";


type Override = Partial<NotificationProps>;
export function makeNotification(override : Override = {}){
    return new Notification({
        category: "Mensagem",
        content: "Teste do repositorio de outro usuário",
        recipientID: "user-1",
        ...override
    })
}