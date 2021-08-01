import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlat } from "../../redux/actions/platsAction";
import { useState } from "react";
import "../../App.css";
function PlatsCrudSection() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    platName: "",
    platImage: "",
    description: "",
    prix: "",
  });
  const hanleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log("input", input);
  };

  const addNewPlat = () => {
    dispatch(
      addPlat(input.platName, input.platImage, input.description, input.prix)
    );
    console.log("inpuuuuuuuuuuuut", input);
  };
  const lola = () =>{
    window.onload( addNewPlat())
  }
  return (
    <div>
      

      <div className="container">
        <div className="row me-5 mt-3">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5">
          
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 dahs-add ">
          <form className="main_form ">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control"
                    placeholder="Plat Name"
                    name="platName"
                    onChange={hanleChange}
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control"
                    placeholder="Plat Image"
                    type="text"
                    name="platImage"
                    onChange={hanleChange}                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control"
                    placeholder="Descripstion"
                    type="text"
                    name="description"
                    onChange={hanleChange}
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <input
                    className="form-control"
                    placeholder="Prix"
                    type="text"
                    name="prix" onChange={hanleChange}                  />

                
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button onClick={lola} className="main_bt_border">Add New Plat</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default PlatsCrudSection;
