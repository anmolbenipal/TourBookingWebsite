import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://tour-booking-website-md1t-anmolbenipal.vercel.app/'); // Replace with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

export default router
