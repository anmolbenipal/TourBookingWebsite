import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router()

router.post('/api/v1/register', register)
router.post('/api/v1/login', login)

export default router
