/**
 * Created by kennedy on 14/05/17.
 */
import UsersController from '../controllers/users';

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

    app.route('/users/:email/:origem')
        .get((req, res) => {
            if (req.params.origem === "google"){
                // Busca por email na origem GOOGLE
                console.log('Google');
                usersController.getbyEmail({
                    google: {
                        email: req.params.email
                    }
                })
                    .then((response) => {
                        res.status(response.statusCode);
                        res.json(response.data);
                    });

            } else if (req.params.origem === "facebook"){
                // Busca por email na origem FACEBOOK
                console.log('Facebook');
                usersController.getbyEmail({
                    facebook: {
                        email: req.params.email
                    }
                })
                    .then((response) => {
                        res.status(response.statusCode);
                        res.json(response.data);
                    });

            } else {
                // Busca por email na origem LOCAL
                console.log('Local');
                usersController.getbyEmail({
                    local: {
                        email: req.params.email
                    }
                })
                    .then((response) => {
                        res.status(response.statusCode);
                        res.json(response.data);
                    });

            }
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
