import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"
import PopupSucesso from '../popsucesso';


  

export default function FormHome () {

    const [pageUp,setPageUp] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [showTrueorFalse, setTrueorFalse] = useState(true);

    
    const togglePopup = () => {
      setShowPopup(!showPopup);
      if(pageUp){
        window.scrollTo(0, 0);
        setPageUp(false)
      }
      
    };

    const [formState, setFormState] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(formState.message.length>5){
        setPageUp(true)
        emailjs
        .sendForm('portfolio', 'template_vc720rp', form.current, {
          publicKey: 'w3U7OdcWW025zSGUZ',
        })
        .then(
          () => {
            setTrueorFalse(true)
              togglePopup();
              setFormState({
                  email: '',
                  message: ''
              });
              
                  
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("fa")
          },   
        );
    }
    else{
        
        setTrueorFalse(false)
        togglePopup();
    }

   
  };

  return (      
    <motion.div    
        onSubmit={sendEmail}
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        class="h-screen flex font-abc bg-gradient-to-r from-slate-900 to-cyan-950 tracking-widest">
            <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
                justify-around items-center">
               
                <div class="w-full mx-auto px-12  flex-col items-center space-y-6">
                <div class="flex  justify-center lg:justify-start mt-6">
                    <a href="#" class=" hover:text-gray-900 hover:-translate-y-1 transition-all duration-500 text-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2 text-4xl">Vamos trabalhar juntos?</a>
                </div>
                </div>
            </div>
            <div 
                
                class="flex w-full lg:w-1/2 justify-center    items-center  space-y-8">
                <div class="w-full justify-end flex md:mx-12  mx-6">
                <form 
                        ref={form}
           
                        className="bg-white mx-auto rounded-md shadow-2xl md:p-20 p-8"
                    >
                        <h1 className="text-gray-800 font-bold md:text-3xl text-3xl mb-1">Entre em contato</h1>
                        <p className="text-sm font-normal text-gray-600 mb-8">Sua conexão é muito importante!</p>
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input 
                                id="email" 
                                className="pl-2 text-sm w-full outline-none border-none" 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formState.email} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M18 10c0 3.866-3.582 7-8 7a8.27 8.27 0 01-3.418-.736l-3.995.999a1 1 0 01-1.236-1.236l.999-3.995A8.27 8.27 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/>
                            </svg>
                            <input 
                                className="pl-2 text-sm w-full outline-none border-none" 
                                type="text" 
                                name="message" 
                                id="suggestion" 
                                placeholder="Mensagem"  
                                value={formState.message} 
                                onChange={handleChange} 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="block w-full bg-cyan-950  mt-5 py-2 rounded-2xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                        >
                            Enviar
                        </button>
                        {showPopup && <PopupSucesso onClose={togglePopup} showTrueorFalse={showTrueorFalse} />}
                    </form>
                </div>
                
            </div> 

        </motion.div>
)
}