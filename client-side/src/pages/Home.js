import React from 'react';
import AboutSection from '../component/AboutSection';
import ContactSection from '../component/contactSection';
import DescriptionSection from '../component/DescriptionSection'; 
import ourFamousPlatsSection from '../component/ourFamousPlats'
import Navbar from "../shared/navbar";

import '../App.css'
const Home = () => {
    return (
        <div>
                <Navbar />
    <br />
            <DescriptionSection /><hr />
            <AboutSection />
            <hr className=" hrr" />
            <ourFamousPlatsSection />
            <hr />
            <h1 className="esm text-center mt-5"><span className="co">R</span>equest  A <span className="co">C</span>all  <span className="co">B</span>ack</h1> 

            <ContactSection/>
        </div>
    );
}

export default Home;