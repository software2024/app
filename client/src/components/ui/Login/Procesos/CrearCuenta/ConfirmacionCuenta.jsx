import user1 from "../../../../../../public/pictures/userGuest.png";
import Pasos from "../../../PasosDeProcesos";
import React, { useState, useEffect } from 'react'

const ConfirmacionCuenta = () => {

  const [clave, setClave] = useState(false); //<<< PARA EL INICIO DE SESION


  async function recibido() {
    const respuesta = await fetch('/api/logueado', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (!respuesta.ok) {
        setClave(null);
    }

    let respuestaJson = await respuesta.json();

    if(respuestaJson.logueado == true) {
        setClave(respuestaJson.clave);
    }
    else {
        setClave(null);
    }
  }


  useEffect(() => {
    recibido();
  }, []);


  return (
    <div>
      <div className="md:h-20 h-[3.75rem] bg-white" />
      <div className="justify-center items-center mt-[6rem] mb-[6rem] md:mt-[5rem] md:mb-2 lg:mt-[8rem] lg:mb-4">
        <div className="h-[34rem] w-[25rem] md:h-[31rem] md:w-[37rem] lg:h-[33rem] lg:w-[45rem] flex flex-col rounded-xl ring-1 ring-slate-200 bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
          <div className="relative w-[6rem] h-[6rem] lg:w-[7rem] lg:h-[7rem] mx-auto -mt-20 grid place-items-center overflow-hidden rounded-full bg-white bg-clip-border shadow-lg">
            <img src={user1} alt="" className="logo1 absolute h-full" />
          </div>
          <h1 className="mx-auto pt-8 pb-4 md:p-5 lg:p-7 text-rose-400 text-2xl md:text-3xl lg:text-4xl">
            Crear cuenta nueva
          </h1>
          <Pasos
            props={{
              paso1: "Recuperación",
              paso2: "Verificación",
              paso3: "Nueva Contraseña",
              paso4: "Confirmación",
            }}
          />
          {/*<div className="grid grid-cols-[50px_auto_20px_50px_auto_20px_50px_auto_20px_50px_auto] place-items-center px-5 mx-auto">
          <span className="">
            <FontAwesomeIcon
              style={{ fontSize: "16px", color: "#FFFFFF" }}
              icon={fa1}
              className="relative left-6 bottom-2"
            />
            <FontAwesomeIcon
              style={{ fontSize: "36px" }}
              icon={faCircle}
            ></FontAwesomeIcon>
          </span>
          <a
            href=""
            style={{
              fontFamily: "ABeeZee",
            }}
            className="text-base mx-2"
          >
            Información básica
          </a>
          <div class="flex-grow border-t border-gray-400 pl-4 mx-0"></div>
          <span className="">
            <FontAwesomeIcon
              style={{ fontSize: "16px", color: "#FFFFFF" }}
              icon={fa2}
              className="relative left-6 bottom-2"
            />
            <FontAwesomeIcon
              style={{ fontSize: "36px" }}
              icon={faCircle}
            ></FontAwesomeIcon>
          </span>
          <a
            href=""
            style={{
              fontFamily: "ABeeZee",
            }}
            className="text-base mx-1"
          >
            Patologías
          </a>
          <div class="flex-grow border-t border-gray-400 pl-4 mx-0"></div>
          <span className="">
            <FontAwesomeIcon
              style={{ fontSize: "16px", color: "#FFFFFF" }}
              icon={fa3}
              className="relative left-6 bottom-2"
            />
            <FontAwesomeIcon
              style={{ fontSize: "36px" }}
              icon={faCircle}
            ></FontAwesomeIcon>
          </span>
          <a
            href=""
            style={{
              fontFamily: "ABeeZee",
            }}
            className="text-base mx-1"
          >
            Contraseña
          </a>
          <div class="flex-grow border-t border-gray-400 pl-4 mx-0"></div>
          <span className="">
            <FontAwesomeIcon
              style={{ fontSize: "16px", color: "#FFFFFF" }}
              icon={fa4}
              className="relative left-6 bottom-2"
            />
            <FontAwesomeIcon
              style={{ fontSize: "36px" }}
              icon={faCircle}
            ></FontAwesomeIcon>
          </span>
          <a
            href=""
            style={{
              fontFamily: "ABeeZee",
            }}
            className="text-base mx-1"
          >
            Confirmación
          </a>
          </div>*/}
          <div className="grid grid-cols-1 mx-auto my-auto place-items-center">
            <h2 className="w-5/6 md:w-2/3 text-center md:text-base lg:text-lg text-[#EB5765] my-3">
              ¡Tu contraseña ha sido creada de forma exitosa!
            </h2>
            <h2 className="w-5/6 md:w-2/3 text-center md:text-base lg:text-lg text-[#056761] mt-1 mb-3">
              El proceso ha terminado y ahora podrás iniciar sesión con una ID
              única:
            </h2>
            <div className="mb-3 bg-[#E8C3C6] rounded-full py-2 px-3">
              <p className="text-[#EB5765] text-lg">#{clave}</p>
            </div>
            <h2 className="w-5/6 lg:w-2/3 text-center text-sm">
              Recuerda que al tener cuenta, no solo sirve para puedas saber de
              ti, también sirve para que puedas guardar tus servicios favoritos,
              realizar compras, agregar a favoritos y sobre todo, para compartir
              tus experiencias con clientes como tú.
            </h2>
          </div>
          <div className="grid grid-cols-1 my-auto place-items-end">
            <a href="/">
              <button
                aria-label="Regresar al inicio"
                className="w-52 bg-rose-400 text-white text-xl rounded-full px-4 py-2 mr-8 hover:bg-red-200"
              >
                Regresar al inicio
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionCuenta;
