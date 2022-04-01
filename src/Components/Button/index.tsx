import React from 'react';

import './index.scss';

interface IButtonTheme {
    hoverButtonAnimation?: boolean;
}

interface IButton {
    onClick?: () => void;
    children: React.ReactNode;
    theme?: IButtonTheme;
}

function Button(props: IButton) {
    return (
        <div className={`buttonContainer ${props.theme?.hoverButtonAnimation ? 'hover_button_animation' : ''}`} onClick={props.onClick}>
            <span>{props.children}</span>
        </div>
    );
}

export default Button;
