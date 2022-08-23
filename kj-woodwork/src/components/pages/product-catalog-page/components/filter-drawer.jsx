import { Box, Drawer } from '@mui/material'
import React from 'react'

const FilterDrawer = ({ 
  filterDrawerOpen, 
  setFilterDrawerOpen, 
  children 
}) => {
  return (
    <Drawer
          anchor='left'
          variant='temporary'
          open={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(!filterDrawerOpen)}
          sx={{ zIndex: 1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: `calc(100vh - 64px)`,
              gap: 6,
              p: 4,
            }}
          >
            {children}
          </Box>
        </Drawer>
  )
}

export default FilterDrawer