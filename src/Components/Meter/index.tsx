import React from 'react';

import './index.scss';

interface IMeter {
    max: number;
    value: number;
    label?: string;
}

function Meter(props: IMeter) {
    return (
        <div className='meter'>
            <label>{props.label}</label>
            <progress data-text={`${props.value} / ${props.max}`} max={props.max} value={props.value}></progress>
        </div>
    );
}

export default Meter;
