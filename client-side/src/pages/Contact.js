import React from "react";
import ContactSection from "../component/contactSection";
import '../App.css'

export const Contact = () => {
  return (
    <div>
     
      <h1 className="esm mt-5">
        <span className="co">R</span>equest A <span className="co">C</span>all
        <span className="co">B</span>ack
      </h1>

      <ContactSection />
    </div>
  );
};
