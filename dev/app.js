/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import jobsRouter from './routes/jobs';
import requestsRouter from './routes/requests';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port', 3000);
app.use(bodyParser.json());

// Rotas
indexRouter(app);
usersRouter(app);
jobsRouter(app);
requestsRouter(app);

export default app;
