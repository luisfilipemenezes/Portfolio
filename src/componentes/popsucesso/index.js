// Popup.js
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function PopupSucesso({ onClose, showTrueorFalse}) {

  
  return (
    <div className='px-4' style={popupStyles}>
      <div style={popupContentStyles}>
        
        {showTrueorFalse?
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
                <AlertTitle>Sugestão enviada com Sucesso</AlertTitle>
                Obrigado por enviar seu comentário.
            </Alert>
        </Stack>:
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="info">
            <AlertTitle>Falta pouco para nos ajudar</AlertTitle>
              Reveja : Formatação do email ou o
              mínimo de caracteres (5).
        </Alert>
        </Stack>
        }

        <button class="block w-full bg-black mt-5 py-2 rounded-2xl hover:bg-yellow-500 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

const popupStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

export default PopupSucesso;
