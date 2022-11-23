import React from 'react'
import { Product } from '../models/products.models'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface props {
  key: number,
  producto: Product
  openModal:() => void;
}

const style={
  color:'#C5C5C5'
}
const Producto = ({ producto,openModal}: props) => {

  return (
    <div onClick={openModal}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            
            image={producto.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {producto.title}   <span style={style}>{producto.brand}</span>
                {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </Typography>
           
          </CardContent>
        </CardActionArea>
        
      </Card>

    </div>
  )
}

export default Producto
