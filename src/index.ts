import express from 'express';
import 'reflect-metadata';

import './database/connect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server stated at http://localhost:3333'));