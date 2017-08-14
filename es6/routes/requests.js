/**
 * Created by kennedy on 23/05/17.
 */
import RequestsController from '../controllers/requests';

export default (app) => {
  const requestsController = new RequestsController(app.datasource.models.Requests);
  app.route('/requests')
        .get((req, res) => {
          requestsController.getAll()
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        })
        .post((req, res) => {
          requestsController.create(req.body)
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        });

  app.route('/requests/:user')
        .get((req, res) => {
          requestsController.getbyUserId(req.params)
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        })
        .put((req, res) => {
          requestsController.update(req.params, req.body)
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        })
        .delete((req, res) => {
          requestsController.disable(req.params)
                .then(response => res.sendStatus(response.statusCode));
        });
};
