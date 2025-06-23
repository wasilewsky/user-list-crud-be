import { Request, Response } from 'express';
import prisma from '../config/db';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, role: true }
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, role: true }
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

