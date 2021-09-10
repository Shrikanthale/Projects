import react from 'react'
import map from '../images/map.png'

const Section = () => {
    return (
        <div> 
         <div className="main">
                <div className="inner">
                    <h3>Covering every 
                    <span style={{color:'orange'}}> corner</span> of the india </h3> 
                    
                </div> 

                <div className="inner-two">
                    <img src={map} alt="image"/>
                </div> 
            </div>
        </div>
    )
}

export default Section
