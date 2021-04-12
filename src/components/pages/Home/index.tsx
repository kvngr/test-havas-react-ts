import { FC } from 'react';
import { PageTemplate } from '../../../components/templates/PageTemplate';
import { Card } from '../../../components/molecules/Card';
import { useToggleContext } from '../../../core/context';

import * as utils from '../../../utils';

import './styles.scss';

export const Home:FC<{}> = ({ children }) => {
    const { show } = useToggleContext();
    return (
        <PageTemplate header footer>
                <div className="Home-wrapper-card">
                {utils.cardList.map(({ content, title, id }) => (
                    <Card key={id} className={`card card--${show[id] ? 'show' : 'hide'}`}>
                        <div className="card__content">
                        <h3>{title}</h3>
                        <div>{content}</div>
                        </div>
                    </Card>
                ))}
                </div>
        </PageTemplate>
    )
}