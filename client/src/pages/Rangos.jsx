import { Helmet, HelmetProvider } from "react-helmet-async";
import LayoutPrincipal from "../layouts/LayoutPrincipal";

const Rangos = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <script src="../../scripts/index.js"></script>
                </Helmet>
            </HelmetProvider>
            <LayoutPrincipal>
                <div className="flex bg-gradient-to-bl from-[#FED4CE] to-[#FF9D90] h-screen p-20">
                    <div className="grid w-3/5 items-center content-center pr-6">
                        <h1 className="font-[ILoveGlitter] text-white text-center text-7xl font-bold justify-self-center drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-[gray]">Hazte miembro de armony</h1>
                        <p className="text-4xl text-center text-white justify-self-center mt-4 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[gray]">Conoce los beneficios que cada rango tiene para ti</p>
                    </div>
                    <div className="grid w-2/5 items-center">
                        <img className="justify-self-center pr-6" src="../../pictures/RangosInfo.png" alt="" />
                    </div>
                    <div className="deg"></div>
                </div>
                <div className="grid p-10 px-16">
                    <h1 className="font-[ILoveGlitter] py-10 justify-self-center text-6xl text-[#036C65]">Descubre lo que cada rango tiene para ti</h1>
                    <div className='border-4 border-[#B49947] rounded-[30px]'>
                        <div className="grid justify-center h-auto grid-cols-2 gap-4 p-10 border-[1rem] border-[#F1DA88] rounded-3xl place-content-center md:grid-cols-1 md:gap-8  md:h-[40vw] md:place-content-start ">
                            <h1 className="col-span-2 font-bold text-3xl text-center text-[#F1DA88] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[black] ">Rango oro</h1>
                            <div className="grid w-full m-auto md:col-span-2">
                                <img className='rounded-2xl w-40 justify-self-center duration-200 hover:w-44' src="../../pictures/rangoOro.png" alt="" />
                            </div>
                            <div className="grid gap-1 text-center divide-black divide- md:gap-4 md:col-span-2">
                                <p className='bg-[#616C8926] py-4 text-2xl rounded-xl border-2 border-[#B49947] duration-200 hover:border-[#F1DA88] hover:font-bold'>1,000 puntos</p>
                                <p className="text-xl">Válido para 1 persona</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Envío prioritario</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Promociones exclusivas</p>
                            </div>
                        </div>
                    </div>

                    <div className='border-4 border-[#4873C8] rounded-[30px] mt-12'>
                        <div className="grid justify-center h-auto grid-cols-2 gap-4 p-10 border-[1rem] border-[#99B3F6] rounded-3xl place-content-center md:grid-cols-1 md:gap-8  md:h-[44vw] md:place-content-start ">
                            <h1 className="col-span-2 font-bold text-3xl text-center text-[#99B3F6] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[black] ">Rango platino</h1>
                            <div className="grid w-full m-auto md:col-span-2">
                                <img className='rounded-2xl w-40 justify-self-center duration-200 hover:w-44' src="../../pictures/rangoPlatino.png" alt="" />
                            </div>
                            <div className="grid gap-1 text-center divide-black divide- md:gap-4 md:col-span-2">
                                <p className='bg-[#616C8926] py-4 text-2xl rounded-xl border-2 border-[#4873C8] duration-200 hover:border-[#99B3F6] hover:font-bold'>2,000 puntos</p>
                                <p className="text-xl">Válido para 2 personas</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Regalos exclusivos</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Descuentos generosos en spa</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Acceso anticipado a ventas</p>
                            </div>
                        </div>
                    </div>

                    <div className='border-4 border-[#A93F74] rounded-[30px] my-12'>
                        <div className="grid justify-center h-auto grid-cols-2 gap-4 p-10 border-[1rem] border-[#F584A7] rounded-3xl place-content-center md:grid-cols-1 md:gap-8  md:h-[48vw] md:place-content-start ">
                            <h1 className="col-span-2 font-bold text-3xl text-center text-[#F584A7] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[black] ">Rango platino</h1>
                            <div className="grid w-full m-auto md:col-span-2">
                                <img className='rounded-2xl w-40 justify-self-center duration-200 hover:w-44' src="../../pictures/rangoVIP.png" alt="" />
                            </div>
                            <div className="grid gap-1 text-center divide-black divide- md:gap-4 md:col-span-2">
                                <p className='bg-[#616C8926] py-4 text-2xl rounded-xl border-2 border-[#A93F74] duration-200 hover:border-[#F584A7] hover:font-bold'>5,000 puntos</p>
                                <p className="text-xl">Válido para 4 personas</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Invitaciones a eventos VIP de élite</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Acceso anticipado a ventas exclusivas</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Contenido premium ilimitado</p>
                                <hr className="border-2 border-gray-500 w-[80%] justify-self-center" />
                                <p className="text-xl">Acceso a todos los servicios de nuestro spa</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-[ILoveGlitter] my-10 justify-self-center text-center text-6xl text-[#036C65]">Para subir de rango en armony se hace mediante la acumulación de puntos, los cuales se suman en tus compras y reservaciones.</h1>
                </div>
            </LayoutPrincipal>
        </>
    )
}

export default Rangos;