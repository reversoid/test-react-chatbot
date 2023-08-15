import { InputForm } from "../../features/send-message";
import { ChatContainer } from "./ui/ChatContainer";
import { MessagesBox } from "./ui/MessagesBox";

export const Chat = () => {
  return (
    <ChatContainer>
      <MessagesBox />
      <InputForm />
    </ChatContainer>
  );
};
