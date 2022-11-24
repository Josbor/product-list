import { FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
//import ModalProduct from '../components/ModalProduct'
import Producto from '../components/Producto'
import { getProductList } from '../data/api'
import { Product as productModel } from '../models/products.models'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'

import ProductPagination from '../components/ProductPagination'
import AppBarProducts from '../components/AppBarProducts'
import ModalProduct from '../components/ModalProduct'

const Home = () => {
  const [list, setList] = useState<productModel[]>([])
  const [col, setCol] = useState<number>(4)
  const [modal, setModal] = useState(false);



  useEffect(() => {
    getProductList().then(e => { setList(e) })
  }, [])


  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }
  const styleList = {
    //gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: 15,
    justifyItems: 'center'
  }
  return (
    <div className='main-container'>
      <AppBarProducts
        setCol={setCol}
        col={col}
      />
      
      
      <div className="content-container">

        <div className='list-container' style={styleList}>
          {list.length > 0 &&
            list.map((e: productModel) => <Producto
              openModal={openModal}
              key={e.id}
              producto={e}
            />) 
          }
        </div>
      </div>
      {modal && <ModalProduct setModal={setModal} />}
      <ProductPagination/>
    </div>

    
  )
}

export default Home
