import React from 'react';
import '../bd.css'
import mobiles1 from '../images/mobiles1.png'
import five from '../images/five.png'
function Body(){
    return(
        <section class="home" id="home">
            <div class="max-width">
            
                <div class="home-content">
                    <div class="text-1">Raise your social</div>
                    <div class="text-2">issues in your</div>
                    {/* <div class="text-3" style={{color:'darkorange' , fontFamily:'Brush Scrtipt MT, cursive '}}> State  community<span class="typing"></span></div> */}
                    <div class="text-3"><span class="typing"  style={{color:'darkorange' , fontFamily:'Brush Scrtipt MT, cursive '}}>State</span> community</div>
                    
                    <img src={five} style = {{height:'100px' , width : '200px'}}  alt="play store and google store"></img>
                </div>
               <img src={mobiles1} style = {{height:'300px' , width : '300px' ,  position:'relative' , left:'900px' }}  alt="play store and google store"></img> 
            </div>
        </section>
    )
}
export default Body;