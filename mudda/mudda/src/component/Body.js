import React from 'react';
import '../bd.css'
function Body(){
    return(
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Raise your social</div>
                    <div class="text-2">issues in your</div>
                    {/* <div class="text-3" style={{color:'darkorange' , fontFamily:'Brush Scrtipt MT, cursive '}}> State  community<span class="typing"></span></div> */}
                    <div class="text-3"><span class="typing"  style={{color:'darkorange' , fontFamily:'Brush Scrtipt MT, cursive '}}>State</span> community</div>
                    
                </div>
            </div>
        </section>
    )
}
export default Body;