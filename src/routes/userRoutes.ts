import { Router } from 'express';
import { deleteUser, getUsers, getUserById, updateUser, createUser } from '../controllers/userController';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, authorizeAdmin, getUsers);
router.post('/', authenticate, authorizeAdmin, createUser);
router.get('/:id', authenticate, authorizeAdmin, getUserById);
router.put('/:id', authenticate, authorizeAdmin, updateUser);
router.delete('/:id', authenticate, authorizeAdmin, deleteUser);

export default router;
