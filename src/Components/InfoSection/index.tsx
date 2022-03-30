import React from 'react';

import './index.scss';

interface IInfoSection {
    headerName?: string;
    children?: React.ReactChild;
    id?: string;
}

function InfoSection(props: IInfoSection) {
    return (
        <div className='infoSection' id={props.id}>
            <div className='infoSection__wrapper'>
                <div className='infoSection__wrapper__header'>{props.headerName}</div>
                <span className='infoSection__wrapper__line'></span>
            </div>
            <div className='infoSection__wrapper__children'>{props.children}</div>
        </div>
    );
}

export default InfoSection;
