/**
 * Created by kennedy on 07/05/17.
 */
import PessoasController from '../../../src/controllers/pessoa';
import sinon from 'sinon';
import Pessoa from '../../../src/models/pessoa';

describe('Constrollers: Pessoas', () => {
    const defaultPessoa = [{
        nome: 'Kennedy',
        sobrenome: 'S. Dias',
        email: 'kennedysouzadias@gmail.com',
        senha: '123',
        nascimento: Date('1996-03-22'),
        insert: Date('2017-05-07')
    }];

    describe('get() pessoas', () => {
        it('should call send with a list of pessoas', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };
            Pessoa.find = sinon.stub();

            Pessoa.find.withArgs({}).resolves(defaultPessoa);

            const pessoasController = new PessoasController(Pessoa);

            return pessoasController.get(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, defaultPessoa);
                });
        });

        it('should return 400 when an error occurs', () => {
            const request = {};
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };

            response.status.withArgs(400).returns(response);
            Pessoa.find = sinon.stub();
            Pessoa.find.withArgs({}).rejects({ message: 'Error' });

            const pessoasController = new PessoasController(Pessoa);

            return pessoasController.get(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, 'Error');
                });
        });
    });
});