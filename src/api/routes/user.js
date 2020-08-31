import { Router } from 'express';
import { register, login, emailVerification, forgotMyPass, sendConfirmCode } from '../controllers/user'

const router = Router();

router.post('/register', register)
router.post('/login', login)
router.post('/email-verification', emailVerification)
router.post('/forgot-my-pass', forgotMyPass)
router.post('/send-confirm-code', sendConfirmCode)

export default router