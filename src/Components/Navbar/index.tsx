import React, { useState } from 'react';
import Button from '../Button';

import { INavbar } from './Interface';

import './index.scss';
import { addNavLinksTag } from '../../tagging/tagEvents';
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
        <>
            {!mobileModelOpen && (
                <div className='navbarContainer'>
                    <a className='navbarContainer__logo' href='#'>
                        C
                    </a>
                    <ul className='navbarContainer__links'>
                        {props.navBarItems.map((navBarItem, index) => {
                            if (navBarItem.type === 'button') {
                                return (
                                    <li className={`navbarContainer__links__button ${navBarItem.theme?.linkHoverAnimation ? 'link-hover-animation' : ''}`}>
                                        <a href={navBarItem.href} {...navBarItem.attributes}>
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
                                <li className={`${navBarItem.theme?.linkHoverAnimation ? 'link-hover-animation' : ''}`}>
                                    <a className='navbarContainer__links__link' href={navBarItem.href} {...navBarItem.attributes}
                                        onClick={() => {
                                            addNavLinksTag(navBarItem.name, navBarItem.href ?? '', index+1)
                                        }
                                        }>
                                        {navBarItem.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        className='navbarContainer__mobileMenu'
                        onClick={() => {
                            setMobileModelOpen(true);
                        }}
                    >
                        <i className='fa fa-bars'></i>
                    </button>
                </div>
            )}
            {mobileModelOpen && (
                <ul className='mobile__navbarContainer__links'>
                    <div
                        className='mobile__navbarContainer__links__close'
                        onClick={() => {
                            setMobileModelOpen(false);
                        }}
                    >
                        <i className='fa fa-times-circle' aria-hidden='true'></i>
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
                                    <a href={navBarItem.href} {...navBarItem.attributes}>
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
                                <a className='mobile__navbarContainer__links__link' href={navBarItem.href} {...navBarItem.attributes}>
                                    {navBarItem.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default Navbar;
