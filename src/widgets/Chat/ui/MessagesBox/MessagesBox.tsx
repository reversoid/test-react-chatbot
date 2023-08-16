import { MessagesBoxContainer } from "../MessagesBoxContainer/MessagesBoxContainer";
import { Message } from "../../../../entities/Message";
import { FC } from "react";

export interface MessagesBoxProps {
  messages: Message[];
  loadingMessage?: { done: boolean; text: string };
}

export const MessagesBox: FC<MessagesBoxProps> = ({
  messages,
  loadingMessage,
}) => {

  const LoadingMessageElement = loadingMessage &&
    !loadingMessage.done &&
    loadingMessage.text && (
      <Message
        message={{
          id: "loading_message",
          isYourMessage: false,
          text: loadingMessage.text,
        }}
      />
    ) || null;

  return (
    <MessagesBoxContainer>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}

      {LoadingMessageElement}
    </MessagesBoxContainer>
  );
};
