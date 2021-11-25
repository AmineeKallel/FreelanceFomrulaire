import express from 'express'
const router = express.Router()
import createSportive from '../controllers/sportiveController'
router.route('/add').post( createSportive)
export default router