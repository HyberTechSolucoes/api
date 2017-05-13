/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';
import config from './config/config';
import datasource from './config/datasourse';
import bodyparser from 'body-parser';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 3000);
app.use(bodyparser.json());

const Pessoas = app.datasource.models.Pessoas;

app.route('/pessoas')
    .get((req, res) => {
        Pessoas.find({})
            .then(result => res.json(result))
            .catch(err => res.status(412));
    })
    .post((req, res) => {
        Pessoas.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(412));
    });

app.route('/pessoas/:email')
    .get((req, res) => {
        Pessoas.findOne({email: req.params.email})
            .then(result => res.json(result))
            .catch(err => res.status(412));
    })
    .put((req, res) => {
        Pessoas.update({email: req.params.email}, {$set: req.body })
            .then(result => res.json(result))
            .catch(err => res.status(412));
    });

export default app;