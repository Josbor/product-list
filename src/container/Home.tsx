import { FormControl, InputLabel, MenuItem, Modal, Select, tooltipClasses } from '@mui/material'
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
  const [pag,setPag]=useState<any>({})
  const [nroItems,setNroItems]=useState(10)
 
 
  useEffect(()=>{
    if (list.length>0 ){
        setPag({
          pageIni:0,
          pageEnd:0+(nroItems),
          currentPage:1,
          totalPages:(list.length/nroItems)>Math.trunc(list.length/nroItems)?(list.length/nroItems)+1:Math.trunc(list.length/nroItems),
          totalItems:list.length
        })
    }
  },[list])
  


  useEffect(() => {
    getProductList().then(e => { setList(e);  })
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
            list.slice(pag.pageIni,pag.pageEnd).map((e: productModel) => <Producto
              openModal={openModal}
              key={e.id}
              producto={e}
            />) 
          }
        </div>
      </div>
      {modal && <ModalProduct setModal={setModal} />}
      {list.length>0&&<ProductPagination pag={pag} setPag={setPag} nroItems={nroItems}/>}
    </div>

    
  )
}

export default Home
