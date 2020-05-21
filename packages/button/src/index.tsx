import React from 'react';
import styled, { css } from 'styled-components';

import { spacing } from '@hipatia/theme';


type Appearances = 'primary' | 'secondary';

const StyledButton = styled.button<ButtonProps>`
    background-color: #000;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 0.88rem;
    font-weight: 500;
    height: 40px;
    line-height: 38px;
    min-width: 200px;
    outline: none;
    overflow: hidden;
    padding: 0 ${spacing.extraLarge};
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.2s ease 0s;
    user-select: none;
    white-space: nowrap;
    :hover {
        color: #000;
        border: 1px solid #000;
        background-color: #fff;
    }
    ${props =>
        props.variant === 'secondary' &&
        css`
            color: #666;
            background-color: white;
            border: 1px solid #eaeaea;
            :hover {
                color: #fff;
                border: 1px solid #000;
                background-color: #000;
            }
        `}
`;

export interface ButtonProps {
    disabled?: boolean;
    variant?: Appearances;
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => <StyledButton {...props} />;

export default Button;
