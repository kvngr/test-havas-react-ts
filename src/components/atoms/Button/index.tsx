import { FC, ButtonHTMLAttributes } from 'react';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
}

export const Button: FC<ButtonProps> = ({ label, children, ...rest }) => (
    <button {...rest}>{label || children}</button>
)