import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../../utils/classnames";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  contentRight?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ contentRight, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          {...props}
          className={classNames(
            styles.input,
            contentRight ? styles.hasRightContent : undefined,
            props.className
          )}
          ref={ref}
        />
        {contentRight && <div className={styles.rightContent}>{contentRight}</div>}
      </div>
    );
  }
);
