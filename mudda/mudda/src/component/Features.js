import React from 'react';
import f1 from '../images/f1.png'

const Features = () => {
    return (
        <>
            <h1>Features</h1>
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <div className="card" style={{width: '18rem',height:'1px'}}>
                            <img src={f1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                    <div className="card" style={{width: '18rem',height:'1px'}}>
                            <img src={f1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                    <div className="card" style={{width: '18rem',height:'1px'}}>
                            <img src={f1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>   
        </>
    )
}

export default Features
