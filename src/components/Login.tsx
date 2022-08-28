import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../types/typeLogin";
import { useUser } from "../context/InitContext";
import Swal from "sweetalert2";

function Login() {
  let navigate = useNavigate();

  const [getData, setDat] = useState("");
  const {data, setData} = useUser();//Global

  useEffect(() => {
    setDat(getData);
    setData(getData);
  });

  const onSubmit = (getData: any) => {
    setDat(getData);//Actualizar el del componente
    setData(getData);//Actualizar el context

//----------Usuario quemado----------------
    if (getData.user === "Dayan" && getData.password === "123") {
      
      navigate("Home");

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Acceso denegado',
      })
    }
//--------------------------

  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<login>();

  return (
    <div className="row col-md-12">
      <div className="col-md-7 col-lg-4 col-sm-8 mx-auto">
        <div className="card">
          <div className="card-body p-5">
            <div className="container">
            <img
              className="image"
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="">
                <label>Usuario</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Usuario"
                  {...register("user", { required: true })}
                />
              </div>

              <div className="">
                <label>Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
              </div>

              <button className="btn btn-outline-primary mt-3" type="submit">
                Ingresar
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
