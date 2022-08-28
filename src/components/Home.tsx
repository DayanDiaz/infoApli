import React from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../context/InitContext";

function Home() {
  const { data } = useUser();

  return (
    <div>
      <div className="containar home row col-md-12">
        <p> Bienvenid@: {data.user}</p>
      </div>
      
    </div>
  );
}
export default Home;
