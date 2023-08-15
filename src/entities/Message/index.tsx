import { FC } from "react";
import { MessageWrapper } from "./ui/MessageWrapper/MessageWrapper";
import { SenderImage } from "./ui/SenderImage/SenderImage";
import botImage from "../../assets/images/bot.svg";
import userImage from "../../assets/images/user.svg";
import { MessageBubble } from "./ui/MessageBubble/MessageBubble";

export interface MessageProps {
  text: string;
  isYourMessage: boolean;
}

export const Message: FC<MessageProps> = ({ text, isYourMessage }) => {
  const image = isYourMessage ? userImage : botImage;

  return (
    <MessageWrapper reversed={isYourMessage}>
      <SenderImage imageUrl={image} />
      <MessageBubble text={text} alternativeView={!isYourMessage} />
    </MessageWrapper>
  );
};
