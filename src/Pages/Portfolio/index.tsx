import React from 'react';

import AboutMe from '../../Components/AboutMe';
import AsideBar from '../../Components/AsideBar';
import CompanyDetail from '../../Components/CompanyDetail';
import InfoSection from '../../Components/InfoSection';
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import Tabs from '../../Components/Tabs';
import TabPanel from '../../Components/Tabs/Components/TabPanel';
import ImageInfo from '../../Components/ImageInfo';
import Meter from '../../Components/Meter';
import Button from '../../Components/Button';

import { companyDetails, imageInfos, navBarItems, sidebarItems, skills } from '../../Common/Constants';

import './index.scss';

function Portfolio() {
    return (
        <div className='portfolio'>
            <Navbar navBarItems={navBarItems} />
            <div className='portfolio__wrapper'>
                <SideBar
                    sideBarItems={sidebarItems}
                    theme={{
                        nameAnimation: true
                    }}
                />
                <AsideBar />
                <div className='portfolio__wrapper__heroSection' id=''>
                    <h1 className='portfolio__wrapper__heroSection__name'>Chandan GR.</h1>
                    <h1 className='portfolio__wrapper__heroSection__tagname'>I build things for the web.</h1>
                    <p className='portfolio__wrapper__heroSection__details paragraph_text'>
                        Highly skilled software development professional bringing more than{' '}
                        <span className='text_highlight'>3.5 years of experience in on React js developer (2.5 years on MERN)</span>, Also expertise at software
                        design, development, monitoring of web applications. Also experienced at technical leadership, handling a small team. Experienced in
                        full project life cycle from design to product release. Able to effectively self-manage during independent projects, as well as
                        collaborate in a team setting.
                    </p>
                </div>
                <InfoSection headerName='About Me' id='ABOUT'>
                    <AboutMe />
                </InfoSection>
                <InfoSection headerName='Work Experience (3.5 Years)' id='EXPERIENCE'>
                    <Tabs>
                        {companyDetails.map((companyDetail) => {
                            return (
                                <TabPanel tabPanelName={companyDetail.companyName}>
                                    <CompanyDetail
                                        companyName={companyDetail.companyName}
                                        designation={companyDetail.designation}
                                        companyWorkingDate={companyDetail.companyWorkingDate}
                                        experienceDetails={companyDetail.experienceDetails}
                                    />
                                </TabPanel>
                            );
                        })}
                    </Tabs>
                </InfoSection>
                <InfoSection headerName='Some Things I Have Built' id='PROJECTS'>
                    <ul className='imageInfoWrapper'>
                        {imageInfos.map((imageInfo) => {
                            return (
                                <li className='imageInfoWrapper__list'>
                                    <ImageInfo
                                        imageUrl={imageInfo.imageUrl}
                                        boxInfo={imageInfo.boxInfo}
                                        title={imageInfo.title}
                                        subtitle={imageInfo.subTitle}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </InfoSection>
                <InfoSection headerName='What Skills I Know?' id='SKILLS'>
                    <ul className='skillsContainer'>
                        {skills.map((skill) => {
                            return (
                                <li className='skillsContainer__item'>
                                    <Meter max={skill.max} value={skill.value} label={skill.label} />
                                </li>
                            );
                        })}
                    </ul>
                </InfoSection>
                <InfoSection headerName='Get In Touch?' id='CONTACT' theme={{ headerAlign: 'center' }}>
                    <div className='contactContainer'>
                        <p className='paragraph_text'>Although I’m not currently looking for any new opportunities, my inbox is</p>
                        <p className='paragraph_text'>always open. Whether you have a question or just want to say hi, I’ll try my</p>
                        <p className='paragraph_text'>best to get back to you!</p>
                        <p className='contactContainer__email paragraph_text'>chandan2809gr@gmail.com</p>

                        <a href='mailto:chandan2809gr@gmail.com'>
                            <Button theme={{ hoverButtonAnimation: true }}>Say Hello!</Button>
                        </a>
                    </div>
                </InfoSection>
                <footer>
                    <a href='https://github.com/chandangr/my-portfolio' target={'_blank'} className='footer__info'>
                        Designed & Built By Chandan GR
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default Portfolio;
