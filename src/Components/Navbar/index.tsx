import React from 'react';
import Button from '../Button';

import './index.scss';

export interface INavbar {
    name: string;
    type?: 'link' | 'button' | undefined;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    downloadLink?: boolean;
}
interface INavbarProps {
    navBarItems: INavbar[];
    onButtonClick?: (name: string) => void;
}

Navbar.defaultProps = {
    type: 'link'
};
function Navbar(props: INavbarProps) {
    return (
        <div className='navbarContainer'>
            <a className='navbarContainer__logo' href='#'>
                C
            </a>
            <ul className='navbarContainer__links'>
                {props.navBarItems.map((navBarItem) => {
                    if (navBarItem.type === 'button') {
                        return (
                            <li className='navbarContainer__links__button'>
                                <a href={navBarItem.href} target='_blank' download={navBarItem.downloadLink}>
                                    <Button onClick={() => props.onButtonClick && props.onButtonClick(navBarItem.name)} theme={{ hoverButtonAnimation: true }}>
                                        {navBarItem.name}
                                    </Button>
                                </a>
                            </li>
                        );
                    }
                    return (
                        <li>
                            <a className='navbarContainer__links__link' href={navBarItem.href} download={navBarItem.downloadLink}>
                                {navBarItem.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;
