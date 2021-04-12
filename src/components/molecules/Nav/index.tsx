import { FC } from 'react';

import './styles.scss';

type NavProps = {
    className?: string;
}

export const Nav:FC<NavProps> = ({ className, children, ...rest }) => (
    <nav className="navigation" {...rest}>
        {children}
    </nav>
)