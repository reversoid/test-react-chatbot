import { HTMLAttributes, forwardRef } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

export const P = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  return <p ref={ref} {...props} />;
});
