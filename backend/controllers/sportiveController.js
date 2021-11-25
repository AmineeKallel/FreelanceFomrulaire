import asyncHandler from 'express-async-handler'
import Sportive from '../models/sportive'
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const createSportive = asyncHandler(async (req, res) => {
    const { fullname, club, nombre,classe, gender, specialite,league, hireDate, isPermanent } = req.body
  
  
  
    const sportive = await Sportive.create({
        fullname, club, nombre,classe, gender, specialite,league, hireDate, isPermanent
    })
  
    if (sportive) {
      res.status(201).json({
        _id: user._id,
        fullname: user.fullname,
        nombre: user.nombre,
        classe:user.classe, 
        gender:user.gender, 
        specialite:user.specialite,
        league:user.league, 
        hireDate:user.hireDate, 
        isPermanent:user.isPermanent
       
       
      })
    }
  })
  export default createSportive