import { InputForm, useStreamedMessage } from "../../features/send-message";
import { ChatContainer } from "./ui/ChatContainer/ChatContainer";
import { MessagesBox } from "./ui/MessagesBox/MessagesBox";
import { useEffect, useState } from "react";
import { Message } from "../../entities/Message";
import { nanoid } from "nanoid";

export const Chat = () => {
  const { responseMessage, sendMessage } = useStreamedMessage();
  const [messages, setMessages] = useState<Message[]>([]);  

  useEffect(() => {
    if (responseMessage.done) {
      setMessages((prev) => [
        ...prev,
        { isYourMessage: false, text: responseMessage.text, id: nanoid() },
      ]);
    }
  }, [responseMessage.done, responseMessage.text]);

  const handleSendMessage = (text: string) => {
    setMessages((p) => [...p, { isYourMessage: true, text, id: nanoid() } ]);
    sendMessage(text);
  };

  return (
    <ChatContainer>
      <MessagesBox messages={messages} loadingMessage={responseMessage} />
      <InputForm onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};
