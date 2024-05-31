import { motion } from 'framer-motion'
import TelleGroup from '../../img/TelleGroup.jpeg'


export default function ExpProfissional (){
    return (
        <>
            <div className="alturaCompetenciaPag font-abc tracking-widest md:px-16 px-4 bg-slate-900">
                <div className=" pt-10 w-full h-full   text-white 2xl:text-xl text-lg abc ">
                <div className="w-full md:h-1/5  h-1/6">
                    <div className="text-emerald-500">
                    <p>
                        ../Experiência
                    </p>
                    </div>
                    <div className="text-2xl 2xl:text-4xl  mt-4">
                    <p>
                        Experiência Profissional
                    </p>
                    </div>
              </div>
              <div className="md:h-3/5 h-4/5  flex md:flex-row flex-col-reverse">
                <div class="flex justify-center md:items-center  items-start md:w-2/5 w-full mx-auto">
                        <div className=' bg-black  w-full'>
                        <img 
                            src={TelleGroup} 
                            className=' shadow-lg  shadow-emerald-400'
                            alt="Invista CG"
                            ></img>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col 2xl:text-2xl text-base  font-light font-open items-start md:pl-6 justify-center">
                        <motion.div 
                         initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -100 }}
                                transition={{ duration: 0.5 }}
                                >
                            <p className="text-emerald-500" ><strong>TelleGroup </strong></p>
                            <p className="md:pt-10 pt-4">Participaçao no desenvolvimento do CRM, realizando refatoração de código, responsividade do sistema, melhoria da performance de carregamento de páginas, criação de layouts e novas páginas, identificação e solução de Bug</p>
                        </motion.div>
                            <div class="flex md:mt-10 gap-4 mt-4 ">
                                <button type="button" class="bg-emerald-800 inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                    <span class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM9.75 8.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z"/>
                                        </svg>
                                    </span>
                                    <span class="text-white opacity-90">Next</span>
                                </button>

                                <button type="button" class="bg-emerald-800 inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                    <span class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365-9.75-9.75-4.365-9.75-9.75-9.75zM9.75 8.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z"/>
                                        </svg>
                                    </span>
                                    <span class="text-white">Java</span>
                                </button>

                                <button type="button" class="bg-emerald-800 inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-xs font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                    <span class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365-9.75-9.75-4.365-9.75-9.75-9.75zM9.75 8.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z"/>
                                        </svg>
                                    </span>
                                    <span class="text-white">GitHub</span>
                                </button>
                            </div>
                        </div>
                

                     </div>
                 </div>

            </div>
        </>
    )
}