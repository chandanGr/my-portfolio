import React, { ReactNode, useEffect, useState } from 'react';

import './index.scss';

interface ILogoProps {
    letter?: string;
    backgroundColor?: string;
    padding?: string;
    numberOfBoxes?: number;
}

Logo.defaultProps = {
    backgroundColor: '#163460',
    numberOfBoxes: 5
};

function Logo(props: ILogoProps) {
    const [padding, setPadding] = useState('40px');

    useEffect(() => {
        const interval = setInterval(() => {
            if (padding === '40px') {
                setPadding('80px');
                return;
            }
            if (padding === '80px') {
                setPadding('40px');
                return;
            }
        }, 600);

        return () => {
            clearInterval(interval);
        };
    }, [padding]);

    function getChildren(n: number): ReactNode {
        if (n === props.numberOfBoxes) {
            return <span className='logoContainer__letter'>{props.letter}</span>;
        }
        return React.createElement(
            'div',
            {
                className: `logoContainer__${n} logoContainer__box`,
                style: {
                    width: `calc( ( ${props.numberOfBoxes} * 10px ) + ( 5 * ${padding} ) - ( ${n} * ${padding} ) )`,
                    height: `calc( ( ${props.numberOfBoxes} * 10px ) + ( 5 * ${padding} ) - ( ${n} * ${padding} ) )`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    backgroundColor: `rgba( 22, 52, 96, ${(1 / props.numberOfBoxes!) * n - 0.2})`,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.6s ease-in-out',
                    position: `${n === props.numberOfBoxes ? 'relative' : 'static'}`
                }
            },
            getChildren(n + 1)
        );
    }
    return <div className='logoContainer'>{getChildren(1)}</div>;
}

export default Logo;
