const express = require('express');
const { getAllCar, filteredCar } = require('../controller/getCar');
const router = express.Router();

// const Car = require('../models/Car')




// let result = await Customer.find(query);

router.get('/', getAllCar)
router.get('/query', filteredCar)


module.exports = router


// router.get('/:postId', async(req, res) => {
//     // console.log(req.body);
//   try {
//       const post=await Post.findById(req.params.postId)
//       res.json(post);
//   } catch (error) {
//       res.json({message:error})
//   }
// })