import { HTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../utils/classnames";

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  (props, ref) => {
    return (
      <div
        {...props}
        className={classNames(styles.wrapper, props.className)}
        ref={ref}
      />
    );
  }
);
