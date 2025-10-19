import express from 'express';
import pingRoute from './routes/pingRoute.js';

const app = express();
const PORT = 3000;

app.use('/', pingRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
