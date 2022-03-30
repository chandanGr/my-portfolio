import React from 'react';

import './index.scss';

export interface ITabPanel {
    tabPanelName: string;
    onClickTabPanel?: () => void;
    children?: React.ReactChild;
}

function TabPanel(props: ITabPanel) {
    return (
        <div className='tabPanel'>
            <div className='tabPanel__name' onClick={props.onClickTabPanel}>
                {props.tabPanelName}
            </div>
            <div className='tabPanel__children'>{props.children}</div>
        </div>
    );
}

export default TabPanel;
