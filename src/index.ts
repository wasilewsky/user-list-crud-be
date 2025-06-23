import express from 'express';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (_req, res) => {
  res.send('API is running');
});
