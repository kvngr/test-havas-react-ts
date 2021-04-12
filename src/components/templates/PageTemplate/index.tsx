import { FC, ReactNode } from 'react'
import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';

import './styles.scss';

type PageTemplateProps = {
    header?: ReactNode;
    footer?: ReactNode;
}

export const PageTemplate: FC<PageTemplateProps> = ({ children, header, footer }) => (
    <div className="page-template">
        {header && <Header />}
        <main className="page-template__main">{children}</main>
        {footer && <Footer />}
    </div>
)