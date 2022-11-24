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
import { Dialog, DialogContent, DialogTitle } from '@mui/material';






const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'blue',
  border: '2px solid #000',
  boxShadow: 24,
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
    <Dialog onClose={handleClose} open={open}
    aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
          <DialogTitle>holi</DialogTitle>
          <DialogContent>
          <Box  sx={style}>
            <div style={{width:800, height:400}}>
            <ImgGallery slides={images}/>
            </div>
           
           
          </Box>
          </DialogContent>
        
        
      </Dialog>
   
  );
}