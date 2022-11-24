import React, { useEffect } from 'react'
import btn  from '../assets/btn.svg'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ImgGallery from './ImgGallery';






const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'none',
 // border: '2px solid #000',
  //boxShadow: 24,
  p: 4,
  height:400
};

export default function TransitionsModal({setModal}:any) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => 
  {setOpen(false)
    setModal(false)
  };
   
  const productSelected=useSelector((state:RootState)=>state.selectedProduct.value)
  const {images,title}:any=productSelected
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{width:800, height:400}}>
            <ImgGallery slides={images}/>
            </div>
           
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}