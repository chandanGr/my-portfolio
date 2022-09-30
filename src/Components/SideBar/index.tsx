import React from 'react';

import { ISideBarItem, ISideBarItemTheme } from './Interface';

import './index.scss';
interface ISideBar {
    sideBarItems: ISideBarItem[];
    theme?: ISideBarItemTheme;
    onClickSideBarLink?: (sidebarItem: ISideBarItem, position: number) => void;
}

function SideBar(props: ISideBar) {
    const isNameAnimation = props.theme?.nameAnimation ? 'sideBar_nameAnimation' : '';
    return (
        <ul className='sidebarContainer'>
            {props.sideBarItems.map((sidebarItem, index) => (
                <li className={`sidebarContainer__item ${isNameAnimation}`}>
                    <p className={`sidebarContainer__item__text`}>{sidebarItem.name}</p>
                    <a className={`sidebarContainer__item__link`} href={sidebarItem.link} target={sidebarItem.target}
                        onClick={() => {
                            props.onClickSideBarLink && props.onClickSideBarLink(sidebarItem, index+1)
                        }}
                    >
                        <img src={sidebarItem.imageSrc} />
                    </a>
                </li>
            ))}
            <span className='sidebarContainer__line'></span>
        </ul>
    );
}

export default SideBar;
