/**
 * Created by kennedy on 17/05/17.
 */
import supertest from 'supertest';
import chai from 'chai';
import Joi from 'joi';
import JoiAssert from 'joi-assert';
import app from '../../es6/app';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
global.Joi = Joi;
global.joiAssert = JoiAssert;
