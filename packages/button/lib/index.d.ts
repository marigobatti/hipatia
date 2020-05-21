import React from 'react';
declare type Appearances = 'primary' | 'secondary';
export interface ButtonProps {
    disabled?: boolean;
    variant?: Appearances;
    children?: React.ReactNode;
}
export declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
