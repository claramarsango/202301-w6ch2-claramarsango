import express from 'express';
import apiRouter from './api/api-router.js';

const app = express();
const port = 3000;

app.use('/api/v1', apiRouter);

app.get('/', (req, res) => {
  res.json(
    'Go to "https://two02301-w6ch2-claramarsango.onrender.com/api/v1/things" to see some things I already know',
  );
});

app.listen(port, () => {
  'hello world';
});
