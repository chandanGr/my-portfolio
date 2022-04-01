import React from 'react';
import { useState } from 'react';
import { ITabPanel } from './Components/TabPanel';

import './index.scss';

interface ITabs {
    children: React.ReactElement<ITabPanel, string | React.JSXElementConstructor<ITabPanel>>[];
}

function Tabs(props: ITabs) {
    const [selectedTabPanel, setSelectedTabPanel] = useState<number>(0);
    const tabPanelNames = props.children.map((tab) => tab.props.tabPanelName);
    return (
        <div className='tabs'>
            <ul className='tabs__panels'>
                {tabPanelNames.map((tabPanelName, index) => {
                    return (
                        <li
                            key={index}
                            className={`tabs__panels__tab ${index === selectedTabPanel ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedTabPanel(index);
                            }}
                        >
                            {tabPanelName}
                        </li>
                    );
                })}
            </ul>
            <div className='tabs__tabSection'>{props.children[selectedTabPanel].props.children}</div>
        </div>
    );
}

export default Tabs;
