import { IsNotEmpty,IsUUID } from "class-validator";

export class CreateNotificationBody{
    @IsNotEmpty()
    @IsUUID()
    recipientID: string;
    content: string;
    category: string;
}