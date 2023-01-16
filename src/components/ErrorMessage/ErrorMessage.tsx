import Message from "../Message/message";

interface IErrorMessage {
  error: boolean;
  children: React.ReactNode;
  onCloseHandler: () => void;
}

const ErrorMessage: React.FC<IErrorMessage> = ({error, children, onCloseHandler}: IErrorMessage) =>{
  return (
    <>
      {error && (
        <Message type="error" onClose={onCloseHandler}>
          {children}
        </Message>
      )}
    </>
  )
}

export default ErrorMessage;