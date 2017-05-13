/**
 * Created by kennedy on 12/05/17.
 */
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

let database = null;

export default (app) => {
    if (!database) {
        const config = app.config;

        mongoose.connect(
            config.uri,
            config.options);

        database = {
            mongoose,
            models: {}
        };

        return database;
    }

    return database;
};