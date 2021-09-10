import React from 'react';
import Body from './Body';
import Features from './Features';
import Nav from './Nav';
import Section from './Section';
import Section1 from './Section1';
import Section3 from './Section3'
import Section4 from './Section4';

const Main = () => {
    return (
        <>  
            <Nav />
            <Body /> 
            <Features/>
            <Section /> 
            <br/>
            <Section1/> 
            <Section3 /> 
            <Section4 />
        </>
    )
}

export default Main




// import React from 'react';
// import Body from '../component/Body';
// import Footer from '../component/Footer';
// import Nav from '../component/Nav';
// import Skill from '../component/Skill';
// import Section1 from '..component/Section1';

// function Main(){
//     return(
//         <div>
//             <Nav />
//             <Body/>
//             <Skill />
//             <Footer />
//             <Section1/>
//         </div>
//     )
// }
// export default Main;