import { FC } from "react";
import { MessageWrapper } from "./ui/MessageWrapper/MessageWrapper";
import { SenderImage } from "./ui/SenderImage/SenderImage";
import botImage from "../../assets/images/bot.svg";
import userImage from "../../assets/images/user.svg";
import { MessageBubble } from "./ui/MessageBubble/MessageBubble";

export interface Message {
  text: string;
  isYourMessage: boolean;
  id: string;
}

export type MessageProps = { message: Message };

export const Message: FC<MessageProps> = ({
  message: { text, isYourMessage },
}) => {
  const image = isYourMessage ? userImage : botImage;

  return (
    <MessageWrapper reversed={isYourMessage}>
      <SenderImage imageUrl={image} />
      <MessageBubble text={text} alternativeView={!isYourMessage} />
    </MessageWrapper>
  );
};
