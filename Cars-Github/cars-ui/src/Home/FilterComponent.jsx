import { Box, CircularProgress, colors, MenuItem, Slider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import RenderCar from './RenderCar'


const FilterComponent = () => {

    const [selectedMPG, setSelectedMPG] = useState([0, 40])
    const [selectedCylinder, setSelectedCylinder] = useState([0, 10])
    const [selectedDisplacement, setSelectedDisplacement] = useState([0, 300])
    const [selectedHP, setSelectedHP] = useState([0, 250])
    const [selectedWeight, setSelectedWeight] = useState([0, 6000])
    const [selectedAcceleration, setSelectedAcceleration] = useState([0, 30])


    const fetchCars = ({ queryKey }) => {
        // console.log(queryKey)

        let selectedMPG = (queryKey[1])
        let selectedCylinder = (queryKey[2])
        let selectedDisplacement = (queryKey[3])
        let selectedHP = (queryKey[4])
        let selectedAcceleration = (queryKey[5])
        let selectedWeight = (queryKey[6])

        return axios.get(`http://localhost:7000/get-cars/query?mpg=${selectedMPG[0]}&mpg=${selectedMPG[1]}&cylinder=${selectedCylinder[0]}&cylinder=${selectedCylinder[1]}&displacement=${selectedDisplacement[0]}&displacement=${selectedDisplacement[1]}&hp=${selectedHP[0]}&hp=${selectedHP[1]}&weight=${selectedWeight[0]}&weight=${selectedWeight[1]}&acceleration=${selectedAcceleration[0]}&acceleration=${selectedAcceleration[1]}`)
    }
    // const result={isLoading,data}
    const { isLoading, data, isError, error, isFetching } = useQuery(['get-cars', selectedMPG, selectedCylinder, selectedDisplacement, selectedHP, selectedAcceleration, selectedWeight], fetchCars, {
        refetchOnWindowFocus: false,
    })

    // console.log(!isLoading && data.data)

    return (
        <>
            <Box display='flex' flexDirection='row'  >
                <Box display='flex' width='20%' display='flex' flexDirection='column' height='80vh' p={3} bgcolor={colors.lightBlue[50]} style={{ position: 'sticky', top: '12vh' }}>
                    <Box my={2}>
                        <Typography fontWeight='600'>MPG</Typography>
                        <Slider
                            getAriaLabel={() => 'MPG Range'}
                            value={selectedMPG}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            onChange={(e, value) => {
                                setSelectedMPG([value[0], value[1]])
                            }}
                            marks
                            step={10}
                            min={0}
                            max={40}
                        />
                    </Box>
                    <Box my={2}>
                        <Typography fontWeight='600'>Displacement</Typography>
                        <Slider
                            getAriaLabel={() => 'Displacement Range'}
                            value={selectedDisplacement}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            onChange={(e, value) => {
                                setSelectedDisplacement([value[0], value[1]])
                            }}
                            marks
                            step={50}
                            min={0}
                            max={300}
                        />
                    </Box>
                    <Box my={2}>
                        <Typography fontWeight='600'>Horse Power</Typography>
                        <Slider
                            getAriaLabel={() => 'Horse Power'}
                            value={selectedHP}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            onChange={(e, value) => {
                                setSelectedHP([value[0], value[1]])
                            }}
                            marks
                            step={50}
                            min={0}
                            max={250} />
                    </Box>
                    <Box my={2}>
                        <Typography fontWeight='600'>Cylinder</Typography>
                        <Slider
                            getAriaLabel={() => 'Cylinder range'}
                            value={selectedCylinder}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            onChange={(e, value) => {
                                setSelectedCylinder([value[0], value[1]])
                            }}
                            marks
                            step={2}
                            min={0}
                            max={10} />
                    </Box>
                    <Box my={2}>
                        <Typography fontWeight='600'>Weight</Typography>
                        <Slider
                            getAriaLabel={() => 'Weight Range'}
                            value={selectedWeight}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            onChange={(e, value) => {
                                setSelectedWeight([value[0], value[1]])
                            }}
                            marks
                            step={1000}
                            min={0}
                            max={6000} />
                    </Box>
                    <Box my={2}>
                        <Typography fontWeight='600'>Acceleration</Typography>
                        <Slider
                            getAriaLabel={() => 'Acceleration Range'}
                            value={selectedAcceleration}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                            onChange={(e, value) => {
                                setSelectedAcceleration([value[0], value[1]])
                            }}
                            marks
                            step={10}
                            min={0}
                            max={30} />
                    </Box>
                </Box>
                <Box width='80%'>
                    {!isLoading ?
                        <RenderCar cardata={data.data} /> : <CircularProgress />
                    }
                </Box>
            </Box>
        </>
    )
}

export default FilterComponent
