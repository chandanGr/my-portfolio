
import chart from '../../charts.png';
import github from '../../github.png';
import linkedin from '../../linkedin.png';
import medium from '../../medium.png';
import resume from '../../resume.png';
import { INavbar } from '../../Components/Navbar/Interface';
import { ISideBarItem } from '../../Components/SideBar/Interface';

export const companyDetails = [
    {
        companyName: 'GoCool Inc (Microsoft)',
        companyWorkingDate: ' May 2021 - Present (Client - Microsoft)',
        designation: 'React js developer',
        experienceDetails: [
            'Implemented and worked on many features on one of the Microsoft projects.',
            'Gained experience on Azure, had ownership and monitoring over pipelines. Implemented application modules under the direction of Microsoft Senior Managers.',
            ' Effectively coded many react components and alterations based on specific design specifications. Introduced and implemented design software skills to assist with improving the project performance.'
        ]
    },
    {
        companyName: 'SwitchOn',
        designation: 'Full stack developer - MERN',
        companyWorkingDate: ' May 2020 - May 2021',
        experienceDetails: [
            'Implemented Real time Dashboards and pages using React and Node js (MERN). Worked on PWA, Chart.js, d3.js, Material UI and created HTML Templates.',
            'Have knowledge on Docker, AWS, Jenkins, WireFrames (figma), worked on real time applications using sockets.',
            'Worked on MongoDB and message queues such as rabbitMQ and chain streams. Experience  in handling a  small team  (4-6 members)  and  managing complete full project life cycle.'
        ]
    },
    {
        companyName: 'EqTribe (ZestMoney)',
        designation: 'Full stack developer - MERN',
        companyWorkingDate: 'Sep 2018 - May 2020 (Client - ZestMoney)',
        experienceDetails: [
            'Designed, Implemented real-time dashboards, charts (d3 js), and form pages using reactjs.',
            'Implemented authentication using JWT with Nodejs and Express. Designed and implemented payment pages for the customers.',
            'Developed Web Application using lasted React.js features like hooks, context API, ant-design, PWA.'
        ]
    }
];

export const imageInfos = [
    {
        imageUrl: chart,
        title: 'Real-time charts',
        subTitle: 'Using sockets and D3.js',
        boxInfo: 'Implemented the real-time charts using d3.js, React.js'
    },
    {
        imageUrl: chart,
        title: 'Real-time charts',
        subTitle: 'Using sockets and D3.js',
        boxInfo: 'Implemented the real-time charts using d3.js, React.js'
    },
    {
        imageUrl: chart,
        title: 'Real-time charts',
        subTitle: 'Using sockets and D3.js',
        boxInfo: 'Implemented the real-time charts using d3.js, React.js'
    },
]

export const navBarItems: INavbar[] = [
    {
        name: 'About',
        href: '#ABOUT',
        theme: {
            linkHoverAnimation: true
        }
    },
    {
        name: 'Experience',
        href: '#EXPERIENCE',
        theme: {
            linkHoverAnimation: true
        }
    },
    {
        name: 'Projects',
        href: '#PROJECTS',
        theme: {
            linkHoverAnimation: true
        }
    },
    {
        name: 'Skills',
        href: '#SKILLS',
        theme: {
            linkHoverAnimation: true
        }
    },
    {
        name: 'Contact',
        href: '#CONTACT',
        theme: {
            linkHoverAnimation: true
        }
    },
    {
        name: 'Resume',
        href: resume,
        type: 'button',
        downloadLink: true

    }
];

export const skills = [
    {
        label: 'React JS',
        max: 5,
        value: 4,
    },
    {
        label: 'Node JS',
        max: 5,
        value: 3.5,
    },
    {
        label: 'Javascript',
        max: 5,
        value: 4,
    },
    {
        label: 'Mongo DB',
        max: 5,
        value: 3.5,
    },
    {
        label: 'HTML',
        max: 5,
        value: 4,
    },
    {
        label: 'CSS/SCSS',
        max: 5,
        value: 4,
    },
    {
        label: 'Sockets',
        max: 5,
        value: 2.5,
    },
    {
        label: 'AWS/GCP',
        max: 5,
        value: 2,
    },
    {
        label: 'Docker',
        max: 5,
        value: 2.5,
    },
    {
        label: 'Linux',
        max: 5,
        value: 2.5,
    },
]

export const sidebarItems: ISideBarItem[] = [
    {
        name: 'LinkedIn',
        imageSrc: linkedin,
        link: 'https://www.linkedin.com/in/chandan-gr-5b18bb136/',
        target: '_blank'
    },
    {
        name: 'Github',
        imageSrc: github,
        link: 'https://github.com/chandangr/',
        target: '_blank'
    },
    {
        name: 'Medium',
        imageSrc: medium,
        target: '_blank',
        link: 'https://chandan2809gr.medium.com/'
    }
];