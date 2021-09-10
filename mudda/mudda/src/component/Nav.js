import React from 'react';
import '../nav.css'
import logo from '../images/logo.png'


function Nav(){
    return(<nav class="navbar">
    <div class="max-width">
        <div class="logo"><a href="#"><img src={logo} alt="image" style={{width:'30px',height:'30px',position:'relative' , top:'10px' , right:'20px'}}/>Mudda</a></div>
        <ul class="menu">
            {/* <li><a href="#home" class="menu-btn">Home</a></li> */}
            <li><a href="#about" class="menu-btn" style = {{borderRadius:'5px', paddingLeft:'10px' , backgroundColor:'blue' , border:'1px solid white' , padding:'5px' , width:'80px' , alignItems:'center' , justifyContent:'center' }} >login in</a></li>
            {/* <li><a href="#services" class="menu-btn">Services</a></li> */}
            <li><a href="#skills" class="menu-btn" style = {{borderRadius:'5px', paddingLeft:'10px' , backgroundColor:'white',color:'blue' , border:'1px solid white' , padding:'5px' , width:'80px' , alignItems:'center' , justifyContent:'center' }}>Sign up</a></li>
            
        </ul>
        <div class="menu-btn">
            <i class="btn"></i>
        </div>
        
    </div>
</nav>
    )
}
export default Nav;