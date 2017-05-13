/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';
import config from './config/config';
import datasource from './config/datasourse';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 3000);
const Pessoas = app.datasource.models.Pessoas;

app.route('/pessoas')
    .get((req, res) => {
        Pessoas.find({})
            .then(result => res.json(result))
            .catch(err => res.status(412));
    });

export default app;