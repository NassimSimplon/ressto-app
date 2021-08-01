import React from 'react'
import '../App.css'
import Navbar from "../shared/navbar";

const ContactSection = () => {
    return (
        <div>
              <Navbar />
    <br />
        <div className="container">
<div className="row me-5 mt-3">
 
                  
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5">
                      
                      <form className="main_form">
                          <div className="row">
                           
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <input className="form-control" placeholder="Name" type="text" name="Name" />
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <input className="form-control" placeholder="Email" type="text" name="Email" />
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <input className="form-control" placeholder="Phone" type="text" name="Phone" />
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <button className="main_bt_border">Send</button>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="img-box">
                            <figure><img src="images/suchi.jpg" alt="img" id="img-con" /></figure>
                        </div>
                    </div>
        </div>
        <br/>
        </div></div>
    )
}

export default ContactSection
