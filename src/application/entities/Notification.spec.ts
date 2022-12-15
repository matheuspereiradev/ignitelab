import { Notification } from "./Notification"

describe("Notification", ()=>{
    it("Deve ser possivel criar uma notificação", () => {
        const notfication = new Notification({
            category: "teste",
            recipientID: "327321",
            content: "test"
        })
    
        expect(notfication).toBeTruthy()
    })
    
    it("Não deve ser possivel alterar um conteudo com menos de 5 caracteres", () => {
        const notfication = new Notification({
            category: "teste",
            recipientID: "327321",
            content: "test"
        })
    
        expect(()=>notfication.content = "a").toThrow()
    })
    
    it("Não deve ser possivel alterar um conteudo com mais de 255 caracteres", () => {
        const notfication = new Notification({
            category: "teste",
            recipientID: "327321",
            content: "test"
        })
        expect(()=>notfication.content = "a".repeat(255)).toThrow()
    })
})
