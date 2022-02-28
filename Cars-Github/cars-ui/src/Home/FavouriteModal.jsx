import { Box, Button, colors } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedCar } from '../Redux/Actions/carsActions'


const FavouriteModal = () => {
    const dispatch = useDispatch()
    const favouriteCars = useSelector((state) => state.allFavourites.favouriteCars)
    const removefav = (e) => {
        // console.log("selected car", e)
        dispatch(removeSelectedCar(e))
    }
    return (
        <>
            <Box display='flex' justifyContent='flex-start' m={2} flexWrap='wrap'>
                {favouriteCars.length > 0 && favouriteCars.map((i) =>
                    <>
                        <Box key={i._id} textAlign='left' m={1} bgcolor={colors.amber[300]} p={2} >
                            <Box fontWeight={600}>{i.Car}</Box>
                            <Box>MPG : {i.MPG}</Box>
                            <Box>Acceleration: {i.Acceleration}</Box>
                            <Box>Cylinders : {i.Cylinders}</Box>
                            <Box>HorsePower : {i.Horsepower}</Box>
                            <Box>Displacement : {i.Displacement}</Box>
                            <Box>Weight : {i.Weight}</Box>
                            <Box>Origin: {i.Origin}</Box>
                            <Box display='flex' justifyContent='center' m={1}>
                                <Button style={{ backgroundColor: 'red', color: '#fff', padding: '.3rem .7rem', border: "1px solid #fff" }} onClick={() => removefav(i)} >Delete favourite</Button>
                            </Box>
                        </Box>
                    </>
                )}

                {favouriteCars.length === 0 && <h2>No favourite Left</h2>}
            </Box>
        </>
    )
}

export default FavouriteModal
