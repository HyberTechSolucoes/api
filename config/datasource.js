/**
 * Created by kennedy on 12/05/17.
 */
import mongoose from 'mongoose';
import Users from '../models/users';
import Jobs from '../models/jobs';

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
      models: {},
    };

    database.models = {
      Users: Users(mongoose),
      Jobs: Jobs(mongoose),
    };

    return database;
  }
  return database;
};
