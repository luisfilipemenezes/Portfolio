import { FiChevronDown } from 'react-icons/fi';
import fotoPerfil from "../../img/fotoPerfil.png"
import { motion } from "framer-motion"

export default function DescricaoHomePag(){
    return (
        <>
            <div className="w-full font-abc tracking-widest alturaDescricaoPag bg-gradient-to-r from-slate-900 to-cyan-950 text-white flex flex-col md:flex-row ">

            <div className="flex-1 ">
                <div className="flex md:pl-16 pl-2 items-start justify-start md:pt-16 pt-4">
                    <div className="max-w-2xl   px-4">
                        <motion.div
                                initial={{ opacity: 0, x: +100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: +100 }}
                                transition={{ duration: 0.5 }}
                            >
                            <p 
                                className="text-emerald-500 2xl:text-xl text-lg abc" >Olá, meu nome é</p>
                            <p className="text-3xl 2xl:text-4xl  mt-4"><strong>Luis Menezes</strong></p>
                            <p className="mt-4 font-light font-open 2xl:text-2xl text-base">
                                Sou estudante de Sistemas de Informação UNIFACISA e desenvolvedor front-end. 
                                <strong>Com experiência de 6 meses</strong>. <div className="mt-4 2xl:text-2xl text-base">Meu objetivo é criar interfaces de usuário (UI) de uma aplicação web ou móvel, garantindo que seja visualmente atraente, funcional e intuitiva. 
                                Estou sempre aberto a novas oportunidades e desafios.</div>
                            </p>

                        </motion.div>
                        

                        <button type="button" class=" bg-emerald-800  inline-flex items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                            <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM9.75 8.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z"/>
                            </svg>
                            </span>
                            <span class="text-white opacity-90">React</span>
                        </button>

                        

                        <button type="button" class="m-4 inline-flex bg-emerald-800 items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                            <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM9.75 8.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z"/>
                            </svg>
                            </span>
                            <span class="text-white ">Node</span>
                        </button>

                        <button type="button" class=" inline-flex bg-emerald-800 items-center gap-x-2 rounded-md px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                            <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM9.75 8.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z"/>
                            </svg>
                            </span>
                            <span class="text-white">Java</span>
                        </button>

                        <div> 
                        <button type="button" className=" mt-4 inline-flex  bg-emerald-800 items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                            <span className="">
                            <FiChevronDown className="h-6 w-6" />
                            </span>
                            <span className="text-white">Entre em contato</span>
                        </button>
                        
                            
                        </div>
                        </div>
                    </div>

                    
                    <div>



                        </div>
                        

                    </div>
                    <div className="flex-1 md:pr-16 pr-2  justify-end md:flex  hidden items-start pt-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-3/5 ">
                        <img className="shadow-xl shadow-emerald-400 " src={fotoPerfil} style={{ borderRadius: '3%' }} />

                    </motion.div>
                </div>

            </div>
        </>
    )
}