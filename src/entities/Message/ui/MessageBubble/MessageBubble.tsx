import { FC } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../../../../shared/utils/classnames";
import { P } from "../../../../shared/ui/P/P";

export interface MessageBubbleProps {
  text: string;
  alternativeView: boolean;
}

export const MessageBubble: FC<MessageBubbleProps> = ({
  text,
  alternativeView,
}) => {
  return (
    <div
      className={classNames(
        styles.messageBubble,
        alternativeView ? styles.alternativeView : undefined
      )}
    >
      <P>{text}</P>
    </div>
  );
};
