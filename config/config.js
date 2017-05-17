/**
 * Created by kennedy on 12/05/17.
 */
export default {
  uri: 'mongodb://localhost/`${process.env.NODE_ENV}`_miloo',
  options: {
    db: { native_parser: true },
    server: { poolSize: 5 },
    replset: { rs_name: 'miloo' },
    user: 'mongodbmiloo',
    pass: '',
  },
};
