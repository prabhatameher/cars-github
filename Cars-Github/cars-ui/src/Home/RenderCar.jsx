import React, { useState } from 'react'
import { Button, colors, Modal } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { addCars, removeSelectedCar, selectedCar, } from '../Redux/Actions/carsActions'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "2rem",
    transform: "translate(-50%, -50%)",
    width: "75vw",
    height: "75vh",
    bgcolor: "#fff",
    zIndex: 4,
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
};

const RenderCar = ({ cardata }) => {
    const dispatch = useDispatch()
    const favouriteCars = useSelector((state) => state)
    const viewCars = useSelector((state) => state.selectedFavourite)
    const [modal, setModal] = useState(false)
    // console.log("favouriteCars",favouriteCars.allFavourites.favouriteCars)
    const allfavcar = favouriteCars.allFavourites.favouriteCars.map(e => e._id)
    // console.log(allfavcar)


    console.log("viewCars", viewCars)
    localStorage.setItem('favouriteCars', JSON.stringify(favouriteCars.allFavourites.favouriteCars))
    localStorage.setItem('viewCars', JSON.stringify(favouriteCars.selectedFavourite))
    const addToFav = (e) => {
        // console.log("selected car", e)
        dispatch(addCars(e))
    }
    const removefav = (e) => {
        // console.log("selected car", e)
        dispatch(removeSelectedCar(e))
    }


    const openModal = () => {
        setModal(true)
    }
    const handleModalClose = () => {
        setModal(false)
    }

    const viewItem = (e) => {
        openModal()
        dispatch(selectedCar(e))
    }
    return (
        <>
            <Box width='100%' display='flex' flexDirection='space-around' flexWrap='wrap' justifyContent='center' >
                {cardata.map(i =>
                    <>
                        <Box key={i._id} m={.5} bgcolor={colors.blue[300]} height='220px' width='32%' >
                            <Box display='flex' flexDirection='column' justifyContent='space-around' textAlign='left' mx={2} fontWeight={500} fontSize='.9rem'>
                                <Box style={{fontSize:'1.2rem', fontWeight:'bold'}}>{i.Car}</Box>
                                <Box>MPG : {i.MPG}</Box>
                                <Box>Acceleration: {i.Acceleration}</Box>
                                <Box>Cylinders : {i.Cylinders}</Box>
                                <Box>HorsePower : {i.Horsepower}</Box>
                                <Box>Displacement : {i.Displacement}</Box>
                                <Box>Weight : {i.Weight}</Box>
                                <Box>Origin: {i.Origin}</Box>
                                <Box display='flex' justifyContent='center' m={1}>
                                    {allfavcar.includes(i._id) ?
                                        <button style={{ backgroundColor: 'red', color: '#fff', padding: '.3rem .7rem', border: "1px solid #fff" }} onClick={() => removefav(i)} >Remove favourite</button>
                                        :
                                        <button style={{ backgroundColor: 'green', color: '#fff', padding: '.3rem .7rem', border: "1px solid #fff" }} onClick={() => addToFav(i)}>Add to favourite</button>
                                    }
                                    <button style={{ backgroundColor: 'yellow', color: '#000', padding: '.3rem .7rem', border: "1px solid #fff", margin: ' 0 1rem' }} onClick={() => viewItem(i)} >view item</button>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}

                <Modal
                    open={modal}
                    close={handleModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} display="flex" flexDirection="column">

                        <Box display={'flex'}  >

                            <Box width='30%'>
                                <h2>{viewCars.Car}</h2>
                                <h4>MPG : {viewCars.MPG}</h4>
                                <h4>HorsePower : {viewCars.Horsepower}</h4>
                                <h4>Cylinders : {viewCars.Cylinders}</h4>
                                <h4>Acceleration : {viewCars.Acceleration}</h4>
                                <h4>Displacement : {viewCars.Displacement}</h4>
                                <h4>Weight : {viewCars.Weight}</h4>
                                <h4>Origin : {viewCars.Origin}</h4>
                            </Box>
                            <Box width='70%'>
                                <h2>Car Description : </h2>
                                <br />
                                <b>{viewCars.Car} </b> Lorem ipsum dolor sit amet consectetur adipisicing elit.<b> MPG : {viewCars.MPG} </b> Quaerat, quis! <b> HorsePower : {viewCars.Horsepower} </b> Praesentium quam veniam facere sint vero voluptatem, eum perspiciatis neque, dicta eveniet adipisci similique quos atque, nulla officia repellendus aliquam.
                                <br /> <br />
                                Quae non ratione dolor, <b> Cylinders : {viewCars.Cylinders} </b> incidunt tenetur asperiores sunt unde, reiciendis ad odit commodi! <b> Acceleration : {viewCars.Acceleration} </b> Blanditiis, architecto exercitationem! <b> Displacement : {viewCars.Displacement} </b> Laboriosam provident sapiente repellat ratione reprehenderit ex eaque labore delectus minima quasi, maxime autem!
                                <br /> <br />
                                Libero exercitationem recusandae explicabo, modi minus fugiat error corrupti animi repudiandae molestias pariatur incidunt autem dolorem sed nihil <b> Weight : {viewCars.Weight} </b> quidem ratione ex. Error nobis perspiciatis delectus quae molestias repudiandae officiis saepe <b> Origin : {viewCars.Origin}</b>.
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='flex-end' alignItems='flex-end'>

                            <button
                                onClick={handleModalClose}
                                variant="contained"
                                size="small"
                                color="default"
                                style={{ marginRight: "2rem" }}
                            >Close</button>
                        </Box>
                    </Box>
                </Modal>

            </Box>
        </>
    )
}

export default RenderCar
