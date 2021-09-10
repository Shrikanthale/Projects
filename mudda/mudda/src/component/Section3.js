import react from 'react'
import peoples from '../images/peoples.png'
import CheckIcon from '@material-ui/icons/Check';

const Section3 = () => {
    return(
        <>
        <div>
        <div className="inner-two">
         <img src={peoples} alt="image" style={{width:'300px',height:'300px',position:'relative' , top:'-100px' , left:'100px'}}/>
        </div> 
            <div>
                
                    <h1> A <span style={{color:'orange'}}>mission</span> to reach</h1> 
                    <h1> every citizen of india </h1>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/> Goveronment scheme and work</h6>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/>Goveronment scheme and work</h6>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/>Level Wise Post rights</h6>
                    <h6><CheckIcon fontSize="small" style={{ color: 'green' }}/>Social Point System</h6>
            </div>
        </div>
        </>
    )
}

export default Section3