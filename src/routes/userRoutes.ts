import { Router } from 'express';
import { deleteUser, getUsers, getUserById, updateUser } from '../controllers/userController';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, authorizeAdmin, getUsers);
router.get('/:id', authenticate, authorizeAdmin, getUserById);
router.put('/:id', authenticate, authorizeAdmin, updateUser);
router.delete('/:id', authenticate, authorizeAdmin, deleteUser);

export default router;
