import { InputForm } from "../../features/send-message";
import { ChatContainer } from "./ui/ChatContainer/ChatContainer";
import { MessagesBox } from "./ui/MessagesBox/MessagesBox";

export const Chat = () => {
  return (
    <ChatContainer>
      <MessagesBox />
      <InputForm />
    </ChatContainer>
  );
};
