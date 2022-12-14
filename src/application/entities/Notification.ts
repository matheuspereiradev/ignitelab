export interface NotificationProps {
    id: string;
    category: string
    content: string;
    recipientID: string
    readAt?: Date | null | undefined
    createdAt: Date
}

export class Notification {

    private props: NotificationProps

    constructor(props: NotificationProps) {
        this.props = props
    }

    public set category(category: string){
        this.props.category = category
    }

    public get category(): string{
        return this.props.category
    }

    public set content(content: string){
        if (content.length <= 5 || content.length >= 255)
            throw new Error("Invalid content need to be between 5 and 255 characters")
            
        this.props.content = content
    }

    public get content(): string{
        return this.props.content
    }

    public set recipientID(recipientID: string){
        this.props.recipientID = recipientID
    }

    public get recipientID(): string{
        return this.props.recipientID
    }

    public set readAt(readAt: Date | null | undefined){
        this.props.readAt = readAt
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt
    }

    public get createdAt(): Date | null | undefined {
        return this.props.readAt
    }
}

