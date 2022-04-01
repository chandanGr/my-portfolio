import React, { useState } from 'react';
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
    const [mobileModelOpen, setMobileModelOpen] = useState(false);
    return (
        <div className='navbarContainer'>
            <a className='navbarContainer__logo' href='#'>
                C
            </a>
            <button
                className='navbarContainer__mobileMenu'
                onClick={() => {
                    setMobileModelOpen(true);
                }}
            >
                <i className='fa fa-bars'></i>
            </button>
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
            {mobileModelOpen && (
                <ul className='mobile__navbarContainer__links'>
                    <div
                        className='mobile__navbarContainer__links__close'
                        onClick={() => {
                            setMobileModelOpen(false);
                        }}
                    >
                        X
                    </div>
                    {props.navBarItems.map((navBarItem) => {
                        if (navBarItem.type === 'button') {
                            return (
                                <li
                                    className='mobile__navbarContainer__links__button'
                                    onClick={() => {
                                        setMobileModelOpen(false);
                                    }}
                                >
                                    <a href={navBarItem.href} target='_blank' download={navBarItem.downloadLink}>
                                        <Button
                                            onClick={() => props.onButtonClick && props.onButtonClick(navBarItem.name)}
                                            theme={{ hoverButtonAnimation: true }}
                                        >
                                            {navBarItem.name}
                                        </Button>
                                    </a>
                                </li>
                            );
                        }
                        return (
                            <li
                                onClick={() => {
                                    setMobileModelOpen(false);
                                }}
                            >
                                <a className='mobile__navbarContainer__links__link' href={navBarItem.href} download={navBarItem.downloadLink}>
                                    {navBarItem.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
