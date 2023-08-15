import { FC } from "react";
import styles from './styles.module.scss'


export interface SenderImageProps {
  imageUrl: string;
}

export const SenderImage: FC<SenderImageProps> = ({ imageUrl }) => {
  return <img className={styles.image} src={imageUrl} alt="sender user image"/>
};
