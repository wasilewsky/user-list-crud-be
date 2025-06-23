import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

interface JwtPayload {
  id: number;
  role: string;
}

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing or invalid token' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    // dodajemy dane użytkownika do obiektu `req`
    (req as any).user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
