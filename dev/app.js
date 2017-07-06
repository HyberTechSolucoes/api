/**
 * Created by kennedy on 12/05/17.
 */
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import config from './config/config';
import datasource from './config/datasource';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import jobsRouter from './routes/jobs';
import requestsRouter from './routes/requests';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port', 3000);
app.use(bodyParser.json());

passport.use(new FacebookStrategy({
        clientID: '318873928552846',
        clientSecret: '3537143b5afe2ee42a0bb04bc0823d17',
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);
        console.log('cb',cb);
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

// Rotas
indexRouter(app, passport);
usersRouter(app);
jobsRouter(app);
requestsRouter(app);

export default app;
