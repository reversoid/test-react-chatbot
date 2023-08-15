import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";
import sendImage from "../../../../assets/images/send.svg";

export interface SendButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SendButton = forwardRef<HTMLButtonElement, SendButtonProps>(
  (props, ref) => {
    return (
      <button {...props} className={styles.sendButton} ref={ref}>
        <img src={sendImage} alt="send image" />
      </button>
    );
  }
);
