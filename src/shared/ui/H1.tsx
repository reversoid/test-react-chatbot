import { HTMLAttributes, forwardRef } from "react";

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>((props, ref) => {
  return <h1 ref={ref} {...props} />;
});
