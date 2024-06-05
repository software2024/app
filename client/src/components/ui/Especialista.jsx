import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import { ChevronRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { jwtDecode } from "jwt-decode";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});


function Especialista({ props }) {
  const [uid, setUid] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [fav, setFav] = useState(props.favorito);
  const [login, setLogin] = useState(false);
  const [seleccionado, setSeleccionado] = useState(false);
  function exp(xp) {
    return xp == 1 ? xp + " año" : xp + " años";
  }

  const agregarEspe = (id, nombre) => {
    if (!seleccionado) {
      setSeleccionado(true);
      localStorage.setItem("Especialista", id);
      localStorage.setItem("NombreEspecialista", nombre);
    } else {
      alert("ya escogiste un especialista");
    }
  };

  useEffect(() => {
    const cookie = obteneridCookie('Naruto_cookie');
    if (cookie) {
      const decoded = jwtDecode(cookie);
      setUid(decoded.user);
    }
  }, []);


  const obteneridCookie = (cookieName) => {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.trim().startsWith(cookieName + "="));
    return cookie ? cookie.split('=')[1] : null;
  };

  const callFav = async () => {
    try {
      console.log("no deberia entrar");
      const respuesta = await fetch("/api/admin/productos/setFavorito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: props.id,
          idPS: props.ps,
          estado: props.favorito,
        }),
      });

      let respuestaJson = await respuesta.json();
      if ((await respuestaJson[0].res) == true) {
        setFav(!fav);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    if (fav !== props.favorito) {
      props.st();
    }
  }, [fav]);

  console.log(localStorage.getItem("favoritosEsp"));

  const toggleFavorite = async (idProducto) => {
    console.log("entrando a toggleFavorite", idProducto);

    // Verificar si el producto ya está en favoritos
    let favoritos = JSON.parse(localStorage.getItem("favoritosEsp")) || [];
    const estaEnFavoritos = favoritos.some(fav => fav.pkIdPS === idProducto.ps);

    // Actualizar el estado de favoritos en React
    setFavorites(prev => ({
      ...prev,
      [idProducto.ps]: !estaEnFavoritos
    }));

    if (!estaEnFavoritos) {
      // Agregar el producto con pkIdPS al localStorage
      const nuevoFavorito = { ...idProducto, pkIdPS: idProducto.ps };
      favoritos.push(nuevoFavorito);
    } else {
      // Eliminar el producto del localStorage
      favoritos = favoritos.filter(fav => fav.pkIdPS !== idProducto.ps);
    }

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("favoritosEsp", JSON.stringify(favoritos));
  }

  // const toggleFavorite = async (especialista) => {
  //   const estaEnFavoritos = favorites[especialista];
  //   if (uid) {
  //     try {
  //       fetch('/api/admin/favoritos/invertirFavEmp', {
  //         method: "POST",
  //         body: JSON.stringify({ idCliente: uid, IdEmp: especialista }),
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       setFavorites(prev => ({
  //         ...prev,
  //         [especialista]: !estaEnFavoritos
  //       }));

  //     } catch (error) {
  //       console.error('Error en la solicitud:', error);
  //     }
  //   }
  // };


  return (
    <div className="md:px-8 md:py-2 rounded-3xl font-[abeatbyKai]  w-2/3 m-auto bg-rose-200">
      <div className='flex justify-end'>
        {props.log ?
          (<Box
            className="absolute flex justify-end float-right -mr-3"
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <StyledRating
              name="customized-color"
              max={1}
              value={fav ? 1 : 0}

              // value={uid ? (producto.favorito || favorites[producto.pkIdPS]) ? 1 : 0 : JSON.parse(localStorage.getItem("favoritos"))?.some(fav => fav.pkIdPS === producto.pkIdPS) ? 1 : 0}
              // value={uid ? favorites[producto.pkIdPS] ? 1 : 0 : JSON.parse(localStorage.getItem("favoritos"))?.some(fav => fav.pkIdPS === producto.pkIdPS) ? 1 : 0}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={1}
              defaultValue={props.favorito}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              onClick={() => callFav()}
            />
          </Box>)
          :
          (<Box
            className="absolute flex justify-end float-right -mr-3"
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <StyledRating
              name="customized-color"
              max={1}
              value={localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")).some(fav => fav.pkIdPS === props.ps) ? 1 : 0 : favorites[props.ps] ? 1 : 0}
              // value={favorites[producto.pkIdPS] ? 1 : 0}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              onChange={() => toggleFavorite(props)}
            />
          </Box>)}
        {/* <Box
          className="absolute z-20 flex justify-end float-right"
          sx={{
            '& > legend': { mt: 0 },
          }}
        >
          <StyledRating
            name="customized-color"
            max={1}
            // value={especialista.favorito || especialista[producto.pkIdPS] ? 1 : 0}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          // onChange={() => toggleFavorite(producto)}
          />
        </Box> */}
      </div>
      <img
        className="w-2/3 m-auto rounded-full aspect-square"
        src={props.img}
        alt=""
      />
      <p className="pt-4 text-lg font-bold text-center">
        {props.nombre}
      </p>
      <p className="pt-4 text-lg font-bold text-center">
        Experiencia: {exp(props.experiencia)}
      </p>
      <div className="flex justify-center w-1/2 pt-4 m-auto">
        <Rating
          className=""
          value={Math.floor(parseFloat(props.valoracion))}
          unratedColor="amber"
          readOnly
          ratedColor="amber"
        />
      </div>
      {/* <p className='pt-4 text-lg font-bold'>Experta en:</p> */}
      {/* <div className='flex justify-start gap-2 m-auto'>
                {especialista.areas.map(area => (
                    <p className='gap-2 px-1 pt-2 text-center bg-white text-rose-400'>{area}</p>
                ))}
            </div> */}

      <div div className="flex justify-center mt-2">
        <button
          onClick={() => agregarEspe(props.ps, props.nombre)}
          className="mt-2 transition-all duration-300  m-auto hover:bg-[#036C65] hover:ring-2 hover:[#036C65] hover:ring-offset-1 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg border-2 bg-[#EB5765] px-6 font-[abeatbykai] text-neutral-200"
        >
          <span>Elegir</span>
        </button>
      </div>
    </div>
  );
}

export default Especialista;
