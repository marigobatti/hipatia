import React from 'react';
import styled, { css } from 'styled-components';

import { spacing } from '@hipatia/theme';


const StyledContainer = styled.div`
    width: 100%;
`;

const StyledLabel = styled.label`
    color: #868686;
    font-family: 'Fira Sans';
    font-size: 0.8rem;
    text-transform: uppercase;
`;

interface StyledInputProps {
    disabled?: boolean;
    id: string;
    placeholder?: string;
}

const StyledInput = styled.input<StyledInputProps>`
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: none;
    box-sizing: border-box;
    caret-color: #000;
    color: #000;
    display: block;
    font-size: 14px;
    height: 40px;
    line-height: 26px;
    padding: 10px;
    margin: ${spacing.extraSmall} 0 ${spacing.small};
    width: 100%;
    ::placeholder {
        color: #999;
    }
    ${props =>
        props.disabled &&
        css`
            color: #999999;
            background-color: #fafafa;
            cursor: not-allowed;
        `}
`;

export type InputProps = StyledInputProps & { label: string };

const Input = ({ disabled, id, label, placeholder }: InputProps) => (
    <StyledContainer>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput disabled={disabled} id={id} placeholder={placeholder} type="text" />
    </StyledContainer>
);

export default Input;
