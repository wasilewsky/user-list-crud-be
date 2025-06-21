import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = process.env.PORT || 5001;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/seed', async (_req, res) => {
  const user = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: '123456', // później dodamy hashowanie
      role: 'admin',
    },
  });
  res.json(user);
});
