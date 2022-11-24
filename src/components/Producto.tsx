import React from 'react'
import { Product } from '../models/products.models'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct } from '../features/selectedProductSlice';

interface props {
  key: number,
  producto: Product
  openModal:() => void;
}

const style={
  color:'#C5C5C5'
}

const imgStyle={
 
  heigth:200

}

const Producto = ({ producto,openModal}: props) => {
  const selectedProduct = useSelector((state: RootState) => state.selectedProduct.value)
  
  const dispatch = useDispatch()  

  const handleSelect =()=>{
    openModal();
    dispatch(selectProduct(producto))
  }
  return (
    <div onClick={handleSelect}>
      <Card sx={{ Width:400,height:325 }}>
       
          <CardMedia
            component="img"
            style={{height:200,width:300}}
            image={producto.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {producto.title}  
            </Typography>
            <Typography gutterBottom variant="overline" component="div">
            <span style={style}>{producto.brand}</span>
            </Typography>
           
          </CardContent>
        
        
      </Card>

    </div>
  )
}

export default Producto
