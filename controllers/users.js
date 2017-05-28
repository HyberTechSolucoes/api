/**
 * Created by kennedy on 14/05/17.
 */
import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});
const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class UsersController {
  constructor(Users) {
    this.Users = Users;
  }

  getAll() {
    return this.Users.find({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  getbyEmail(params) {
    return this.Users.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  create(data) {
    return this.Users.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(params, data) {
    return this.Users.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  disable(params) {
    return this.Users.update(params, { active: false })
            .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

export default UsersController;
