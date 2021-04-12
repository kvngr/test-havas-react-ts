import { FC } from 'react';
import { Button } from '../../atoms/Button';
import { Nav } from '../../molecules/Nav';
import * as utils from '../../../utils';
import { useToggleContext } from '../../../core/context';

import './styles.scss';

export const Header:FC<{}> = ({ children }) => {
    const { show, toggle } = useToggleContext();
    return (
        <header className="header">
            <Nav>
                <div className="header__wrapper-button">
                {utils.buttonList.map(({ labelIfShow, labelIfHide, id }) => (
                    <Button key={id} className={`button ${id === 1 && "button--tertiary"}`} type="button" onClick={() => toggle(id)}>
                        <span>
                            {show[id] ? labelIfHide : labelIfShow}
                        </span>
                    </Button>
                ))}
                </div>
            </Nav>
        </header>
    )
}