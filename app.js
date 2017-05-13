/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';

const app = express();

app.route('/pessoas')
    .get((req, res) => {
        res.json([{
            id: 1,
            nome: 'Nome default',
            sobrenome: 'Sobrenome default',
            email: 'email@default.com.br'
        }]);
    });

export default app;