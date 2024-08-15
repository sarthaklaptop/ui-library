import { ComponentPropsWithRef, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ ...props }: BoxProps, ref) => {
    return <div ref={ref} {...props} />;
  }
);
