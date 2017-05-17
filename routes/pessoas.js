/**
 * Created by kennedy on 14/05/17.
 */
import PessoasController from '../constrollers/pessoas';

export default (app, Pessoas) => {
    const pessoasController = new PessoasController(app.datasource.models.Pessoas);
    app.route('/pessoas')
        .get((req, res) => {
            pessoasController.getAll()
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .post((req, res) => {
            pessoasController.create(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/pessoas/:email')
        .get((req, res) => {
            pessoasController.getbyEmail(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .put((req, res) => {
            pessoasController.update(req.params, req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            pessoasController.disable(req.params)
                .then(response => res.sendStatus(response.statusCode));
        });
};