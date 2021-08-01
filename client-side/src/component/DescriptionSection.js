import React from 'react';
import '../App.css'
 const DescriptionSection = () =>{
    
    return (
        <div>
          <div className="slider_section ">
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="full">
                        <div id="main_slider" className="carousel vert slide" >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-5 ">
                                            <div className="slider_cont">
                                                <h3>Discover Restaurants<br />That deliver near You</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <a className="main_bt_border" href="#">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="slider_image full text_align_center w-100">
                                                <img className="img-responsive mx-5 " src="images/chi.jpeg" alt="#" width="90%" />
                                            </div>
                                        </div>
                                    </div>


                                    
                                </div>
                             
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default DescriptionSection;