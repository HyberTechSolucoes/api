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

class PessoasController {
  constructor(Pessoas) {
    this.Pessoas = Pessoas;
  }

  getAll() {
    return this.Pessoas.find({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  getbyEmail(params) {
    return this.Pessoas.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
  }

  create(data) {
    return this.Pessoas.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(params, data) {
    return this.Pessoas.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  disable(params) {
    return this.Pessoas.update(params, { ativo: false })
            .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

export default PessoasController;
