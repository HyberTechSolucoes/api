/**
 * Created by kennedy on 12/05/17.
 */
import mongoose from 'mongoose';
import Pessoas from '../models/Pessoas';

let database = null;

export default (app) => {
    if (!database) {
        const config = app.config;
        mongoose.Promise = global.Promise;
        mongoose.connect(
            config.uri,
            config.options);

        database = {
            mongoose,
            models: {}
        };

        database.models = {
            Pessoas: Pessoas(mongoose)
        };

        return database;

    } else {
        return database;
    }
};