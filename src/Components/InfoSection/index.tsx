import React from 'react';

import './index.scss';

interface IInfoSectionTheme {
    headerAlign?: 'left' | 'center' | 'right';
}
interface IInfoSection {
    headerName?: string;
    children?: React.ReactChild;
    id?: string;
    theme?: IInfoSectionTheme;
}

function InfoSection(props: IInfoSection) {
    return (
        <div className='infoSection' id={props.id}>
            <div className={`infoSection__wrapper ${props.theme?.headerAlign ? props.theme?.headerAlign : ''}`}>
                <div className='infoSection__wrapper__header'>{props.headerName}</div>
                <span className='infoSection__wrapper__line'></span>
            </div>
            <div className='infoSection__wrapper__children'>{props.children}</div>
        </div>
    );
}

export default InfoSection;
