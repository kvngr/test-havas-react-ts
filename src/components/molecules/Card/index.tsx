import { FC } from 'react'

import './styles.scss';

type CardProps =  {
    label?: string;
    className?: string;
}

export const Card: FC<CardProps> = ({ children, label, ...rest }) => <div {...rest}>{children || label}</div>