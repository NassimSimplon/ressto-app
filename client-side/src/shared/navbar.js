import React from "react";
import "../App.css";
import{Link} from 'react-router-dom'
function Navbar(props) {
 
  return (
    <div>
      <nav id="nava" class="navbar navbar-expand-lg navbar-light mt-2 ">
        <div class="container-fluid ">
         <div className="all">
          
           <h3 className="esm"><span className="co">B</span>lack & <span className="co">Y</span>ellow</h3></div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto text-decoration-none ">
              <Link to="/">
              <a className="nav-link active text-decoration-none "  >
              <span className="b-nav ">H</span>ome
              </a></Link>
              <Link to="/plat">
              <a className="nav-link active" >
              <span className="b-nav">P</span>lats
              </a></Link>
              <Link to="/contact">
              <a className="nav-link active"  >
              <span className="b-nav">C</span>ontact
              </a></Link>
              <Link to='/command'>
           <a>   <svg className="mt-2 love" 
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                id="heart"
                fill="currentColor"
                class="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg></a></Link>
            </div>
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
