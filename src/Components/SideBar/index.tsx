import React from 'react';

import { ISideBarItem, ISideBarItemTheme } from './Interface';

import './index.scss';
interface ISideBar {
    sideBarItems: ISideBarItem[];
    theme?: ISideBarItemTheme;
}

function SideBar(props: ISideBar) {
    const isNameAnimation = props.theme?.nameAnimation ? 'sideBar_nameAnimation' : '';
    return (
        <ul className='sidebarContainer'>
            {props.sideBarItems.map((sidebarItem) => (
                <li className={`sidebarContainer__item ${isNameAnimation}`}>
                    <p className={`sidebarContainer__item__text`}>{sidebarItem.name}</p>
                    <a className={`sidebarContainer__item__link`} href={sidebarItem.link} target={sidebarItem.target}>
                        <img src={sidebarItem.imageSrc} />
                    </a>
                </li>
            ))}
            <span className='sidebarContainer__line'></span>
        </ul>
    );
}

export default SideBar;
