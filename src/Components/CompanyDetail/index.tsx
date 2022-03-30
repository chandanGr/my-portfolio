import React from 'react';

import './index.scss';

interface ICompanyDetail {
    designation: string;
    companyName: string;
    companyWorkingDate: string;
    experienceDetails: string[];
}

function CompanyDetail(props: ICompanyDetail) {
    return (
        <div className='companyDetail'>
            <h2 className='companyDetail__designation'>{props.designation}</h2>
            <h3 className='companyDetail__companyName'>
                {props.companyName} | {props.companyWorkingDate}
            </h3>
            <ul className='companyDetail__experienceDetails'>
                {props.experienceDetails.map((experienceDetail) => {
                    return <li className='companyDetail__experienceDetails__text paragraph_text'>{experienceDetail}</li>;
                })}
            </ul>
        </div>
    );
}

export default CompanyDetail;
