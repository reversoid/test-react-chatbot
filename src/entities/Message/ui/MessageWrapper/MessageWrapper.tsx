import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../../../../shared/utils/classnames";

export interface MessageWrapperProps extends PropsWithChildren {
  reversed: boolean;
}

export const MessageWrapper: FC<MessageWrapperProps> = ({
  reversed,
  children,
}) => {
  return (
    <div
      className={classNames(
        styles.messageWrapper,
        reversed ? styles.reversed : undefined
      )}
    >
      {children}
    </div>
  );
};
