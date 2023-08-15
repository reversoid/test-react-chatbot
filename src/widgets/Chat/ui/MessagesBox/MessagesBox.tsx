import { MessagesBoxContainer } from "../MessagesBoxContainer/MessagesBoxContainer";
import { Message } from "../../../../entities/Message";

export const MessagesBox = () => {
  return (
    <MessagesBoxContainer>
      <Message isYourMessage={true} text="aboba" />
      <Message isYourMessage={false} text="aboba2" />
    </MessagesBoxContainer>
  );
};
