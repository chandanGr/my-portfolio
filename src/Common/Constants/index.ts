import chart from '../../charts.png';
import categoryPage from '../../category-page.png';
import website from '../../website.png';
import zestDashboard from '../../zest-dashboard.png';
import github from '../../github.png';
import linkedin from '../../linkedin.png';
import medium from '../../medium.png';
// @ts-expect-error
import resume from '../../resume.pdf';
import { INavbar } from '../../Components/Navbar/Interface';
import { ISideBarItem } from '../../Components/SideBar/Interface';
import { IInfoCard } from '../../Components/InfoCard';

export const companyDetails = [
    {
        companyName: 'GoCool Inc (Microsoft)',
        companyWorkingDate: '2 years | presently working',
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
        companyWorkingDate: '1 year',
        experienceDetails: [
            'Implemented Real time Dashboards and pages using React and Node js (MERN). Worked on PWA, Chart.js, d3.js, Material UI and created HTML Templates.',
            'Have knowledge on Docker, AWS, Jenkins, WireFrames (figma), worked on real time applications using sockets.',
            'Worked on MongoDB and message queues such as rabbitMQ and chain streams. Experience  in handling a  small team  (4-6 members)  and  managing complete full project life cycle.'
        ]
    },
    {
        companyName: 'EqTribe (ZestMoney)',
        designation: 'Full stack developer - MERN',
        companyWorkingDate: '2 years',
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
        imageUrl: categoryPage,
        title: 'Product Details Page',
        subTitle: 'Using React js, scss',
        boxInfo: 'Implemented Product Details Page using React.js'
    },
    {
        imageUrl: website,
        title: 'Main Wesbite',
        subTitle: 'Using React js, scss, Node js, Express js',
        boxInfo: 'Implemented the Website using MERN stack'
    },
    {
        imageUrl: zestDashboard,
        title: 'Customer Real-time Dashboard',
        subTitle: 'React.js, Node.js, Express.js, MongoDB',
        boxInfo: 'Implemented the Real-time Dashboards using MERN stack'
    }
];

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
        attributes: {
            target: '_blank',
            download: true
        }
    }
];

export const skills = [
    {
        label: 'React JS',
        max: 5,
        value: 4
    },
    {
        label: 'Node JS',
        max: 5,
        value: 3.5
    },
    {
        label: 'Javascript',
        max: 5,
        value: 4
    },
    {
        label: 'Mongo DB',
        max: 5,
        value: 3.5
    },
    {
        label: 'HTML',
        max: 5,
        value: 4
    },
    {
        label: 'CSS/SCSS',
        max: 5,
        value: 4
    },
    {
        label: 'Sockets',
        max: 5,
        value: 2.5
    },
    {
        label: 'AWS/GCP',
        max: 5,
        value: 2
    },
    {
        label: 'Docker',
        max: 5,
        value: 2.5
    },
    {
        label: 'Linux',
        max: 5,
        value: 2.5
    }
];

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

export const infoCardData: IInfoCard[] = [
    {
        headerName: 'Front-End Developer',
        chips: ['React JS', 'Typescript', 'HTML', 'CSS/SCSS', 'Sockets', 'Material UI/Antd/Bootstrap', 'D3.js/Charts.js', 'Real-Time applications']
    },
    {
        headerName: 'Backend-End Developer',
        chips: ['Node JS', 'Express', 'Sockets', 'MongoDB', 'RabbitMQ', 'Python Scripts', 'Change Streams', 'Telemetry/sumologic']
    },
    {
        headerName: 'Mobile Developer',
        chips: ['React-Native', 'Typescript', 'HTML']
    },
    {
        headerName: 'Devops',
        chips: ['AWS/GCP', 'Docker', 'Linux', 'Jenkins', 'Git']
    }
];
