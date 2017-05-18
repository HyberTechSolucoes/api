/**
 * Created by kennedy on 14/05/17.
 */
const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});
const errorResponse = (message, statusCode = 400) => defaultResponse({
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
            .then(result => defaultResponse(result, 201))
            .catch(error => errorResponse(error.message, 422));
  }

  update(params, data) {
    return this.Pessoas.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, 422));
  }

  disable(params) {
    return this.Pessoas.update(params, { ativo: false })
            .then(result => defaultResponse(result, 204))
            .catch(error => errorResponse(error.message, 422));
  }
}

export default PessoasController;
