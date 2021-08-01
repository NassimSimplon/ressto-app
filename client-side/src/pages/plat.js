import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllPlats } from "../redux/actions/platsAction";
import { getToCommandPage } from "../redux/actions/commandPageActions";
import Navbar from "../shared/navbar";


const Plats = () => {
  const plats = useSelector((state) => state.platsStore.plats);
  const dispatch = useDispatch();
  const commandPage = useSelector((state) => state.commandPageStore.commandPage);
const jod = (el) =>{
  commandPage.push(el)
  console.log(commandPage)
}

  useEffect(() => {
    dispatch(getAllPlats());
  }, []);
  console.log(plats);
  return (
    <div>
    <Navbar />
    <br />
    <div className="container" >
      <h1 className="esm text-center mt-5">
        <span className="co">O</span>ur  <span className="co">P</span>lats
       </h1>
       <div className="container" >
      <div className="row "  id="ines" >
      
          {plats.map((el) => (
               <div className="card mt-5">
                <img src={el.platImage} alt="Avatar" className="img-card" />
                <div className="container">
                  <h4 className="mt-2">
                    <b>{el.platName}</b>
                  </h4>
                  <p className="mt-4">Prix: {el.prix}</p>
                  <p className="mb-2">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <button className="buy mt-3" onClick={jod}>Order Now</button>
              </div>
             
          ))}</div>
         
      </div>
    </div></div>
  );
};

export default Plats;
