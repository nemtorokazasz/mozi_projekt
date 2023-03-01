import React, { useState, useEffect } from "react";
import Chairs from "./Chairs";
import axios from "axios";

function KosarMain({ film }) {
  film = film[0];
  const [valasztottDB, setValasztottDB] = useState(0)
  const [musor, setMusor] = useState([]);
  const [szekek, setSzekek] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3002/szekek/${film.musorId}`,
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((response) => {
                if (response.data.error) {
                    alert("HIBA majd sweetalert")
                } else {
                    setSzekek(response.data);

                }
            })
    }, [])


  useEffect(() => {
    axios.get(`http://localhost:3002/musor/getByMusorId/${film.musorId}`).then((response) => {
      setMusor(response.data);
    })

  }, [])

  return (
    <div className="cart-cucc">
      <div className="cart-main">
        <div className="cart-details">
          <h1>{film.title}</h1>
          <img
            alt="keeep"
            src={"https://image.tmdb.org/t/p/w500" + film.film.poster_path}
          ></img>
        </div>
        <div className="cart-descriptions">
          <div className="cart-ticket">
            <p className="vanticket">Elérhető jegyek: {musor.ticketsLeft}</p>
            <p className="vhd">Választott helyek darabszáma: {valasztottDB}</p>
          </div>
          <div className="cart-chair">
            <Chairs setValasztottDB={setValasztottDB} valasztottDB={valasztottDB} szekek={szekek} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KosarMain;
