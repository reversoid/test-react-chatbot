import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const MessagesBoxContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.messagesBox}>{children}</div>;
};
