import LayoutPrincipal from '../layouts/LayoutPrincipal.jsx'
import { Helmet } from "react-helmet";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronRight } from 'lucide-react';
import pilar1 from '../../public/pictures/pilar1.png'
import pilar2 from '../../public/pictures/pilar2.png'
import pilar3 from '../../public/pictures/pilar3.png'
import pilar4 from '../../public/pictures/pilar4.png'
import ContenedorProductos from '../components/ui/ContenedorProductos.jsx'
import Filtros from '../components/ui/Filtros.jsx'
import Foot from '../components/ui/Footer.jsx';


const Tienda = () => {
    return (
        <>
            <Helmet>
                <script src="../../scripts/index.js"></script>
            </Helmet>
            <LayoutPrincipal>

                <main className='bg-[#F4F1ED] pt-20 '>
                    <img className="w-48 translate-y-24 float-start" src="../../public/pictures/left.png" alt="" />
                    <img className="translate-y-12 w-80 float-end" src="../../public/pictures/right.png" alt="" />
                    <section className='w-full p-16 bg-white'>
                        <div className='m-auto text-center'>
                            <h1 className='text-6xl text-[#036C65] text-shadow-2xl drop-shadow-[2px_3px_var(--tw-shadow-color)] shadow-gray-200  font-[ILoveGlitter]'>Sumerjete en la serenidad</h1>
                            <p className='pt-6 text-xl w-1/3 m-auto  text-[#036C65] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-gray-400 '>Descubre nuestra exquisita gama de productos para el bienestar en armony.</p>
                        </div>
                    </section>

                    <section className='w-[80%] m-auto'>
                        <Filtros />
                    </section>

                    <section className='w-[80%] m-auto mt-12'>
                        <ContenedorProductos />
                    </section>

                    <section className='w-[80%] bg-white my-6 m-auto p-6 rounded-xl border-8 border-[#E2B3B7]'>
                        <h1 className='pb-4 text-xl ml-28'>Ofertas en descuento</h1>
                        <hr />
                        <div className='mx-auto p-6 md:mx-28 md:p-0 selection:bg-[#EB5765] selection:text-white'>
                            <Carousel
                                additionalTransfrom={0}
                                arrows
                                autoPlay
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="container-with-dots z-0"
                                dotListClass=""
                                // draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 4,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                                class=''
                            >
                                <div className='m-2 font-[abeatbyKai]'>
                                    <a href="/spa"><img className=' w-60 h-60' src={'../../public/pictures/oferta1.png'} alt="" /></a>
                                    <hr />
                                    <h6 className='pt-4 text-lg font-bold text-center'>Esponjabon</h6>
                                    <p className='text-center'>Esponjabon floor para baño, formul...</p>
                                    <div className='flex justify-center mt-4'>
                                        <a className='flex justify-center' href="/spa"
                                            class="relative flex cursor-pointer  before:bg-[#036C65]  before:absolute before:-bottom-1 before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                            Ver más<ChevronRight color="#036c65" />
                                        </a>
                                    </div>
                                </div>
                                <div className='m-2 font-[abeatbyKai]'>
                                    <img className='rounded-2xl w-60 h-60' src={'../../public/pictures/oferta2.png'} alt="" />
                                    <hr />
                                    <h6 className='pt-4 text-lg font-bold text-center'>Body butter</h6>
                                    <p className='text-center'>Crema corporal, artesanal, 239 ml.</p>
                                    <div className='flex justify-center mt-4'>
                                        <a className='flex justify-center' href="#"
                                            class="relative flex cursor-pointer  before:bg-[#036C65]  before:absolute before:-bottom-1 before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                            Ver más<ChevronRight color="#036c65" />
                                        </a>
                                    </div>
                                </div>
                                <div className='m-2 font-[abeatbyKai]'>
                                    <img className='rounded-2xl w-60 h-60' src={'../../public/pictures/oferta3.png'} alt="" />
                                    <hr />
                                    <h6 className='pt-4 text-lg font-bold text-center'>Tónito facial</h6>
                                    <p className='text-center'>Tónito facial dermatológico... </p>
                                    <div className='flex justify-center mt-4'>
                                        <a className='flex justify-center' href="#"
                                            class="relative flex cursor-pointer  before:bg-[#036C65]  before:absolute before:-bottom-1 before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                            Ver más<ChevronRight color="#036c65" />
                                        </a>
                                    </div>
                                </div>
                                <div className='m-2 font-[abeatbyKai]' >
                                    <img className='rounded-2xl w-60 h-60' src={'../../public/pictures/oferta4.png'} alt="" />
                                    <hr />
                                    <h6 className='pt-4 text-lg font-bold text-center'>Mascarilla</h6>
                                    <p className='text-center'>Combina el poder de la arcilla verde...</p>
                                    <div className='flex justify-center mt-4'>
                                        <a className='flex justify-center' href="#"
                                            class="relative flex cursor-pointer  before:bg-[#036C65]  before:absolute before:-bottom-1 before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                                            Ver más<ChevronRight color="#036c65" />
                                        </a>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </section>

                    <section className='my-12 m-auto w-[80%] grid grid-cols-4 gap-8 text-center'>
                        <a href='#' className='grid items-center content-center justify-center max-w-xs grid-cols-1 gap-4 p-6 align-bottom transition duration-300 ease-in-out bg-white hover:scale-105 rounded-xl '>
                            <h1 className='m-auto text-xl '>Cuidado facial</h1>
                            <img className='h-64 m-auto rounded-xl border- w-60' src={'../../public/pictures/facial.png'} alt="" />
                            <button class="m-auto transition-all duration-300 w-36  hover:bg-[#036C65] hover:ring-2 hover:[#036C65] hover:ring-offset-1 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl border-2 bg-[#EB5765] p-4 font-[abeatbykai] text-neutral-200"><span>Ver más...</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </div>
                            </button>
                        </a>
                        <a href='#' className='grid items-center content-center justify-center max-w-xs grid-cols-1 gap-4 p-6 align-bottom transition duration-300 ease-in-out bg-white hover:scale-105 rounded-xl '>
                            <h1 className='m-auto text-xl '>Manicura y pedicura</h1>
                            <img className='h-64 m-auto rounded-xl border- w-60' src={'../../public/pictures/manicura.png'} alt="" />
                            <button class="m-auto transition-all duration-300 w-36  hover:bg-[#036C65] hover:ring-2 hover:[#036C65] hover:ring-offset-1 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl border-2 bg-[#EB5765] p-4 font-[abeatbykai] text-neutral-200"><span>Ver más...</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </div>
                            </button>
                        </a>
                        <a href='#' className='grid items-center content-center justify-center max-w-xs grid-cols-1 gap-4 p-6 align-bottom transition duration-300 ease-in-out bg-white hover:scale-105 rounded-xl '>
                            <h1 className='m-auto text-xl '>Cuidado capilarl</h1>
                            <img className='h-64 m-auto rounded-xl border- w-60' src={'../../public/pictures/capilar.png'} alt="" />
                            <button class="m-auto transition-all duration-300 w-36  hover:bg-[#036C65] hover:ring-2 hover:[#036C65] hover:ring-offset-1 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl border-2 bg-[#EB5765] p-4 font-[abeatbykai] text-neutral-200"><span>Ver más...</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </div>
                            </button>
                        </a>
                        <a href='#' className='grid items-center content-center justify-center max-w-xs grid-cols-1 gap-4 p-6 align-bottom transition duration-300 ease-in-out bg-white hover:scale-105 rounded-xl '>
                            <h1 className='m-auto text-xl '>Productos de spa</h1>
                            <img className='h-64 m-auto rounded-xl border- w-60' src={'../../public/pictures/spa.png'} alt="" />
                            <button class="m-auto transition-all duration-300 w-36  hover:bg-[#036C65] hover:ring-2 hover:[#036C65] hover:ring-offset-1 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl border-2 bg-[#EB5765] p-4 font-[abeatbykai] text-neutral-200"><span>Ver más...</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </div>
                            </button>
                        </a>
                    </section>

                </main>
                <footer>
                    {/* <img className='m-auto' src="../../public/pictures/footer.png" alt="" /> */}
                </footer>

            </LayoutPrincipal>
        </>
    )
}

export default Tienda