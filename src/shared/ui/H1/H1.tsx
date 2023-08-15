import { HTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../../utils/classnames";

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>((props, ref) => {
  return (
    <h1
      {...props}
      className={classNames(styles.h1, props.className)}
      ref={ref}
    />
  );
});
