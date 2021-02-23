import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.info(`Listening on port: 3000`);
});
