/// <reference types="react" />
interface StyledInputProps {
    disabled?: boolean;
    id: string;
    placeholder?: string;
}
export declare type InputProps = StyledInputProps & {
    label: string;
};
declare const Input: ({ disabled, id, label, placeholder }: InputProps) => JSX.Element;
export default Input;
