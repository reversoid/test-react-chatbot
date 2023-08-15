import { FC, PropsWithChildren } from "react";
import styles from './styles.module.scss'

export const ChatWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.chatWrapper}>{children}</div>;
};
