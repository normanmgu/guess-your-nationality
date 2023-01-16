import Message from "../Message/message";

interface IMessageController {
  children: React.ReactNode
  condition: boolean;
  type: "error" | "warn" | "info";
  onCloseHandler: () => void;
}

const MessageController: React.FC<IMessageController> = ({children, condition, type, onCloseHandler}) =>{
  return (
    <>
      {
        condition && (
          <Message type={type} onClose={onCloseHandler}>{children}</Message>
        )
      }
    </>
  )
}

export default MessageController;