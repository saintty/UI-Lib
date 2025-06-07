import { ReactNode } from "react";

export {};

declare global {
  type DefaultProps = {
    className?: string;
    root?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
  };

  type SVG = FunctionComponent<SVGProps<SVGSVGElement>>;

  declare module "*.svg" {
    const url: string;
    const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;

    export { ReactComponent };
    export default url;
  }
}
