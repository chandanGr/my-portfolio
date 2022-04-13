import React from 'react';

import './index.scss';

interface IImageInfo {
    imageUrl: string;
    title?: string;
    subtitle?: string;
    boxInfo?: string;
}
function ImageInfo(props: IImageInfo) {
    return (
        <div className='imageInfo'>
            <div className='imageInfo__container'>
                <img src={props.imageUrl} />
            </div>
            <div className='imageInfo__wrapper'>
                <div className='imageInfo__wrapper__title'>{props.title}</div>
                <div className='imageInfo__wrapper__subtitle'>{props.subtitle}</div>
            </div>
            <p className='imageInfo__details'>{props.boxInfo}</p>
        </div>
    );
}

export default ImageInfo;
