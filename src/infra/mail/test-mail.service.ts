import { MailService } from "./mail.service"
import { Injectable} from "@nestjs/common"

@Injectable()
export class TestMailService implements MailService {
    sendMail(): string {
        return "email TESTE enviado"
    }

}