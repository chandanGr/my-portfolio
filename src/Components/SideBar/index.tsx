import React from 'react';

import './index.scss';

const sidebarItems = [
    {
        name: 'L',
        link: ''
    },
    {
        name: 'G',
        link: ''
    },
    {
        name: 'M',
        link: ''
    }
];

function SideBar() {
    return (
        <ul className='sidebarContainer'>
            {sidebarItems.map((sidebarItem) => (
                <li className='sidebarContainer__item'>{sidebarItem.name}</li>
            ))}
            <span className='sidebarContainer__line'></span>
        </ul>
    );
}

export default SideBar;
