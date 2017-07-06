/**
 * Created by kennedy on 31/05/17.
 */
import HttpStatus from 'http-status';

export default (app, passport) => {
    app.route('/')
        .get((req, res) => {
            res.status(HttpStatus.OK);
            res.json({
                result: 'OK'
            });
        });

    app.route('/auth/facebook')
        .get((req, res) => {
            passport.authenticate('facebook');
        });

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });
};