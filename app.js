/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import usersRouter from './routes/users';
import jobsRouter from './routes/jobs';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port', 3000);
app.use(bodyParser.json());

// Rotas
usersRouter(app);
jobsRouter(app);

export default app;
