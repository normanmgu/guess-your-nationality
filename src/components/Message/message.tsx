import React from "react"

import "./message.scss";

interface IMessageProps {
  children: React.ReactNode;
  type: "error" | "info" | "warn";
  onClose: () => void;
}

const Message: React.FC<IMessageProps> = ({children, type, onClose}: IMessageProps) => {
 return (
  <div className={`box ${type}`}>
    <p>{ children }</p>
    <span className="close" onClick={onClose}>x</span>
  </div>
 )
}

export default Message;