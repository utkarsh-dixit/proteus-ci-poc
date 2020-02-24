import { ReactNode } from "react";

export const Conditional = (props): ReactNode => (props.if ? props.children : null);
