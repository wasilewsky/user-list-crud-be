import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/userController';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, authorizeAdmin, getUsers);
router.get('/:id', authenticate, authorizeAdmin, getUserById);

export default router;
