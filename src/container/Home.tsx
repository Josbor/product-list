import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductModal from '../components/Modal'
import Producto from '../components/Producto'
import { getProductList } from '../data/api'
import { Product as productModel } from '../models/products.models'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'

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
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: 15,
    justifyItems: 'center'
  }
  return (
    <div className='main-container'>
      <h1> this is the container of product list</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cantidad de Columnas</InputLabel>
        <Select
          labelId="Selecciona cantidad de columnas"
          id="select"
          value={col}
          label="Age"
          onChange={e => setCol(Number(e.target.value))}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </Select >
      </FormControl>
      <div className="content-container">

        <div className='list-container' style={styleList}>
          {list.length > 0 ?
            list.map((e: productModel) => <Producto
              openModal={openModal}
              key={e.id}
              producto={e}
            />) : 'caraota'

          }
        </div>
      </div>
      {modal && <ProductModal setModal={setModal} />}
    </div>
  )
}

export default Home
