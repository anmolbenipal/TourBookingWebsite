import express from 'express'
import { verifyAdmin, verifyUser} from '../utils/verifyToken.js'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/api/v1/' , verifyUser ,createBooking);
router.get('/api/v1/:id' , verifyUser ,getBooking);
router.get('/api/v1/' , verifyAdmin ,getAllBooking);

export default router
