/**
 * Created by kennedy on 12/05/17.
 */
import supertest from 'supertest';
import chai from 'chai';
import app from '../../es6/app';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
