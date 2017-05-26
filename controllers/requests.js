/**
 * Created by kennedy on 23/05/17.
 */
import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});
const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class RequestsController {
  constructor(Requests) {
    this.Requests = Requests;
  }

  getAll() {
    return this.Requests.find({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  getbyUserId(params) {
    return this.Requests.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  create(data) {
    return this.Requests.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(params, data) {
    return this.Requests.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

    // disable(params) {
    //     return this.Requests.update(params, { works: { status: 'DISABLED' }})
    //         .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
    //         .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    // }
}

export default RequestsController;
