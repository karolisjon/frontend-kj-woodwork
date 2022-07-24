import { 
  // Box, 
  Drawer,
} from '@mui/material'
import React from 'react'

const Products = () => {
  return (
    <>
    <Drawer 
    anchor='top'
    variant='permanent'
    sx={{
      height: '64px',
      backgroundColor: 'red',
    }}
    >

    </Drawer>

    {/* <Box sx={{ backgroundColor: 'blue' }}>Products</Box> */}
    </>
  )
}

export default Products;
