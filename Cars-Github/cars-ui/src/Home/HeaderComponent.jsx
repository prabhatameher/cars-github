import { Box, colors, Typography } from '@mui/material'
import React, { useState } from 'react'
import FilterComponent from './FilterComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const HeaderComponent = () => {

    const navigate = useNavigate()

    const favouriteCars = useSelector((state) => state)
    const favNum = favouriteCars.allFavourites.favouriteCars.length


    return (
        <>
            <div>
                <Box style={{ position: 'fixed', top: 10, right: 10, color: '#fff', fontSize: '1.5rem', background: 'red', height: '50px', width: '50px', borderRadius: '50%', zIndex: 2 }} onClick={()=>navigate('/favourite_cars')}>
                    <Box marginTop={1}>{favNum}</Box>
                </Box>
                <Box bgcolor={colors.blueGrey[800]} height='75px' display='flex' justifyContent='center' alignItems='center' style={{ position: 'sticky', width: '100%', top: 0 }} >
                    <Typography fontWeight='700' fontSize='1.5rem' textAlign='center' color='#fff'>
                        World Cars Information
                    </Typography>
                </Box>
                <Box>
                    <FilterComponent />
                </Box>

            </div>
        </>
    )
}

export default HeaderComponent
