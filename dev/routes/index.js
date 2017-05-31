/**
 * Created by kennedy on 31/05/17.
 */
import HttpStatus from 'http-status';

export default (app) => {
    app.route('/')
        .get((req, res) => {
            res.status(HttpStatus.OK);
            res.json({
                result: 'OK'
            });
        });
};