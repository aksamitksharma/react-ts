import { GreetProps } from "../types/greet"

export const Greet = (props: GreetProps) => {
    return (
        <>
        <h1>Welcome {props.name}! in react with TS, you have {props.messagesCount} messages</h1>
        </>
    )
}