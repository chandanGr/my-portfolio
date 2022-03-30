import React from 'react';

import './index.scss';

function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className='aboutMe__details'>
                <p className='aboutMe__details__info paragraph_text'>
                    Hello! My name is Chandan GR and I enjoy creating things that live on the internet. My interest in Full stack web development started back
                    in 2018 when I decided to create mobile controlled car using raspberry PI, Python, React!
                </p>
                <p className='aboutMe__details__info paragraph_text'>
                    Fast-forward to today, and I’ve had the privilege of working at a start-up, a huge corporation, and a medium level finance company. My main
                    focus these days is building{' '}
                    <span className='text_highlight'>
                        Real-time web applications (both Frontend and Backend) using sockets, rabbitMq, chain streams, building charts (D3.js), building pages
                        using React and Node js (MERN). Worked on PWA, Chart.js, Material UI and created many HTML Templates.{' '}
                    </span>
                </p>
                <p className='aboutMe__details__info paragraph_text'>
                    I also recently started a course on medium that covers MongoDB. Eventually will start writing blogs on Node, React, HTML, CSS.
                </p>
            </div>
            <div className='aboutMe__image'></div>
        </div>
    );
}

export default AboutMe;
