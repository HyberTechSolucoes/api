/**
 * Created by kennedy on 07/05/17.
 */
class PessoaController {
    constructor(Pessoa) {
        this.Pessoa = Pessoa;
    };

    get(req, res) {
        return this.Pessoa.find({})
            .then(pessoas => res.send(pessoas))
            .catch(err => res.status(400).send(err.message));
    }
}

export default PessoaController;
