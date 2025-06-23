import { Router } from 'express';
import { getUsers } from '../controllers/userController';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, authorizeAdmin, getUsers);

export default router;
