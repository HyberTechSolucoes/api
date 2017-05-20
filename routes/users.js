/**
 * Created by kennedy on 14/05/17.
 */
import UsersController from '../constrollers/users';

export default (app) => {
  const usersController = new UsersController(app.datasource.models.Users);
  app.route('/users')
        .get((req, res) => {
          usersController.getAll()
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        })
        .post((req, res) => {
          usersController.create(req.body)
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        });

  app.route('/users/:email')
        .get((req, res) => {
          usersController.getbyEmail(req.params)
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        })
        .put((req, res) => {
          usersController.update(req.params, req.body)
                .then((response) => {
                  res.status(response.statusCode);
                  res.json(response.data);
                });
        })
        .delete((req, res) => {
          usersController.disable(req.params)
                .then(response => res.sendStatus(response.statusCode));
        });
};
