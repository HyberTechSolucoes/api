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

class JobsController {
  constructor(Jobs) {
    this.Jobs = Jobs;
  }

  getAll() {
    return this.Jobs.find({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }
  getbyUserId(params) {
    return this.Jobs.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }
  getAllByCategory(params) {
    return this.Jobs.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }
  getAllByCategoryWithFilters(params, query) {
    console.log(JSON.stringify(params), JSON.stringify(query));

    return this.Jobs.find(params)
            .sort(query)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  create(data) {
    return this.Jobs.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(params, data) {
    return this.Jobs.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  disable(params) {
    return this.Jobs.update(params, { status: 'DISABLED' })
            .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

export default JobsController;
