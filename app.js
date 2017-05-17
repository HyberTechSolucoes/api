/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';
import bodyparser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import pessoasRouter from './routes/pessoas';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 3000);
app.use(bodyparser.json());
const Pessoas = app.datasource.models.Pessoas;
pessoasRouter(app, Pessoas);

export default app;
