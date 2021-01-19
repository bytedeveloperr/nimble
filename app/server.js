import http from 'http';
import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import routes from './routes/index.js';

const app = express();
const server = http.createServer(app);

app.use(express.json({}));
app.use(cors());
app.use(methodOverride('_method'));
app.use(routes(express));

export default server;
