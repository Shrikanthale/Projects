import react from 'react'
import mobiles2 from '../images/mobiles2.png'

const Section4 = () => {
    return( 
     <div>
         <div style = { { display:'flex' , backgroundimage: 'linear-gradient(blue,skyblue)' , height: '100vh' }} >
         <h1>
            Download the app
         </h1>
         <p>
             Get the mudda app on google play store and connect with the app
             community across india to disucess the latest <strong> <i> MUDDA </i> </strong> 
         </p>
         <img src={mobiles2} style = {{height:'300px' , width : '300px' }}  alt="play store and google store"></img>
        </div>
     </div>
    )
}

export default Section4