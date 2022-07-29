import { useState } from "react";
import axios from 'axios';

const api = "https://digimon-api.vercel.app/api/digimon"


const CardDigimon = () => {


  const [digimon, setDigimon] = useState([]);

  axios
    .get(`${api}`)
    .then((response) => setDigimon(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });


  return (
    <div className="flex-wrap d-flex gap-3  justify-content-center mt-4">


      {digimon.map((data) => {
        return (

          <div className="card" style={{ width: "300px" }}>

            <img src={data.img} class="card-img-top" alt="img" />

            <div className="card-body ">

              <h5 class="card-title bg-primary text-center text-white">{data.level}</h5>

              <p className="card-text bg-success  text-white text-center" >{data.name} </p>

            </div>

          </div>


        );
      })}




    </div>
  );
}

export default CardDigimon;