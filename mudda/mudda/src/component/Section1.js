import React from 'react';
import one from '../images/one.png';
import CheckIcon from '@material-ui/icons/Check';

const Section1 = () => {
    return (
        <>
            <div className="main">
                <div className="inner">
                    <h1>EVERYTHING YOU NEED</h1>
                    <h1>TO <span style={{color:'orange'}}>KNOW</span></h1>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/> Goveronment scheme and work</h6>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/>Goveronment scheme and work</h6>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/>Level Wise Post rights</h6>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/>Social Point System</h6>
                </div> 

                <div className="inner-two">
                    <img src={one} alt="image"/>
                </div> 
            </div>
            
        </>
    )
}

export default Section1;