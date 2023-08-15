import { HTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";
import { classNames } from "../../utils/classnames";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  isContrast?: boolean;
}

export const P = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ isContrast, ...props }, ref) => {
    return (
      <p
        className={classNames(
          styles.p,
          props.className,
          isContrast ? styles.contrast : ""
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
