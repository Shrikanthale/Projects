import React from 'react';
import '../footer.css'
function Footer() {
    return (
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get in Touch</div>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Amey Palshetkar</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Guhagar</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">palshetkaramey96@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Message me</div>
                        <form action="#">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="Name" required/>
                                </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required/>
                                    </div>
                            </div>
                            
                            <div class="field">
                                <input type="text" placeholder="Subject" required/>
                            </div>
                            <div class="field textarea">
                                <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                            </div>
                            <div class="button">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Footer;