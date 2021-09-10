import React from 'react';
import f1 from '../images/f1.png'
import f4 from '../images/f4.png'
import f6 from '../images/f6.png'
import one from '../images/one.png'
import five from '../images/five.png'

const Features = () => {
    return (
        <div>
            <h1 style = {{alignItems:'center' , textAlign:'center'}}>Features</h1>
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <div className="card" style={{width: '20rem',height:'5px'}}>
                            <img src={f6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Timeline (owe community)</h4>
                                <p className="card-text"> Genral info about this feature can be added but it but should be short </p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>        
        </div>
    )
}

export default Features
