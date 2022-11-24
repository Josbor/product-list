import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ImgGallery from './ImgGallery';
import { Backdrop, Fade } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:400,
  
  
  p: 4,
};
const cerrar={
  display:'flex',
  width:50,
  height:50,
  cursor: "pointer",
  fontSize:"50px",
  color:'white',
  zIndex:1500
}
export default function ModalProduct({setModal}:any) {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => 
    {setOpen(false)
      setModal(false)
    };
     
    const productSelected=useSelector((state:RootState)=>state.selectedProduct.value)
    const {images,title}:any=productSelected
  return (
    <div >
   
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  
 
>

         <Fade in={open}>
        
         <Box sx={style}>
               <div onClick={handleClose} style={cerrar}>x</div>
                <div style={{width:800, height:400}}>
               
                <ImgGallery slides={images}/>
                </div>
            
            
            </Box>
       </Fade>
       
      </Backdrop>
    </div>
  );
}