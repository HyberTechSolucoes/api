/**
 * Created by kennedy on 14/05/17.
 */
import JobsController from '../controllers/jobs';

export default (app) => {
    const jobsController = new JobsController(app.datasource.models.Jobs);
    app.route('/jobs')
        .get((req, res) => {
            jobsController.getAll()
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .post((req, res) => {
            jobsController.create(req.body)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/jobs/:user')
        .get((req, res) => {
            jobsController.getbyUserId(req.params)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .put((req, res) => {
            jobsController.update(req.params, req.body)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            jobsController.disable(req.params)
                .then(response => res.sendStatus(response.statusCode));
        });

    app.route('/jobs/find/category/:category')
        .get((req, res) => {
            jobsController.getAllByCategory(req.params, req.query)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
    app.route('/jobs/find/works/:name')
        .get((req, res) => {
            jobsController.getAllByWorks(req.params, req.query)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
};
