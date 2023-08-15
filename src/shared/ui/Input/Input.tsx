import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../../utils/classnames";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      className={classNames(styles.input, props.className)}
      ref={ref}
    />
  );
});
