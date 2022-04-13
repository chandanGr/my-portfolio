import React from 'react';

import './index.scss';

export interface IInfoCard {
    headerName: string;
    paragraph?: string;
    chips?: string[];
}

function InfoCard(props: IInfoCard) {
    return (
        <div className='infoCardContainer'>
            <div className='infoCardContainer__header paragraph_text'>{props.headerName}</div>
            <div className='infoCardContainer__body'>
                <div className='infoCardContainer__body__details paragraph_text'>{props.paragraph}</div>
                <div className='infoCardContainer__body__chips'>
                    {props.chips &&
                        props.chips.map((chip, index) => (
                            <div className='infoCardContainer__body__chips__chip' key={index}>
                                {chip}
                            </div>
                        ))}
                </div>
            </div>
            <div className='infoCardContainer__footer'></div>
        </div>
    );
}

export default InfoCard;
