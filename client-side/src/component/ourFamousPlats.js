import React from "react";
import "../App.css";
function ourFamousPlatsSection() {
  return (
    <div>
           <h1 className="esm text-center mt-5"><span className="co">O</span>ur  <span className="co">F</span>amous  <span className="co">P</span>lats</h1> 
    
      <div className="container  mt-5 ">
        <div className="row shan mt-3 ">
          <div className=" col-md-3 text-center">
            <img src="images/rs1.png" alt="#" />

            <h3 className="mt-5">Homemade</h3>
            <h4>
            10  <span className="theme_color">DT</span>
            </h4>
          </div>
          <div className="col-md-3 text-center">
            <img src="images/rs2.png" alt="#" />
            <h3 className="mt-5">Noodles</h3>
            <h4>
            20    <span className="theme_color">DT</span>
            </h4>
          </div>
          <div className="col-md-3 text-center">
            <img src="images/rs3.png" alt="#" />
            <h3 className="mt-5">Egg</h3>
            <h4>
            30   <span className="theme_color">DT</span>
            </h4>
          </div>
          <div className="col-md-3 text-center">
            <img src="images/rs4.png" alt="#" />
            <h3 className="mt-5">Sushi Dizzy</h3>
            <h4>
            40  <span className="theme_color">DT</span>
            </h4>
          </div>  
       
        </div>
      </div>
      <br/><br/>
    </div>
  );
}

export default ourFamousPlatsSection;
