import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const containerPagination = {
    width: '100%',
    display: 'flex',
    margin: '0 auto',
    height: 50,
    position: 'fixed' as 'fixed',
    top: 600,

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

export default function ProductPagination() {
    return (

        <div style={containerPagination}>
            <div style={paginationStyle}>

                <Pagination count={3} variant="text" color='primary' style={{ boxShadow: '24px' }} />
            </div>

        </div>

    );
}