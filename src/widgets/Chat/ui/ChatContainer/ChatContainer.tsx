import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const ChatContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.chatContainer}>{children}</div>;
};
