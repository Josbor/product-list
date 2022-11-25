import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const containerPagination = {
    width: '100%',
    display: 'flex',
    margin: '0 auto',
    height: 50,
    position: 'fixed' as 'fixed',
    top:'85%',

    justifyContent: 'center',


}

const paginationStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    with: 200,
    height: 50
}


export default function ProductPagination({pag,setPag,nroItems}:any) {
    const{totalPages,totalItems}=pag
    const [page,setPage]=React.useState(1)
   const [pageinit,setPageInit]=React.useState(1)
   const [pageEnd,setPageEnd]=React.useState(10)

    
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        
            if (value>totalPages ) return
               
                setPage(value)
                const newPag={
                    pageIni:value==1?1:(value*nroItems)-nroItems,
                    pageEnd:value==1?nroItems:(value*nroItems),
                    currentPage:value,
                    totalPages,
                    totalItems
                }
                setPag(newPag)
            
                
      
           
    
  };
    return (

        <div style={containerPagination}>
            <div style={paginationStyle}>

                <Pagination count={pag.totalPages} onChange={handleChange} page={page} variant="text" color='primary' style={{ boxShadow: '24px' }} />
            </div>

        </div>

    );
}