import React from 'react';
import { navBarItems } from '../../Common/Constants';

import './index.scss';

function Navbar() {
    return (
        <div className='navbarContainer'>
            <a className='navbarContainer__logo' href='#'>
                C
            </a>
            <ul className='navbarContainer__links'>
                {navBarItems.map((navBarItem) => (
                    <li>
                        <a className='navbarContainer__links__link' href={`#${navBarItem.forVal}`}>
                            {navBarItem.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
