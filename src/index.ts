import express from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
