/**
 * Created by kennedy on 14/05/17.
 */
import PessoasController from '../../../constrollers/pessoas';

describe('Controllers: Pessoa', () => {
    describe('Pega todas pessoas: getAll()', () => {
        it('Retorna uma lista de pessoas', () => {
            const Pessoas = {
                find: td.function()
            };
            const expectedResponse = [{
                nome: 'Nome default',
                sobrenome: 'Sobreno me default',
                email: 'email@default.com.br',
                senha: 'Senha default',
                // nascimento: '03/22/1996',
                endereco: [{
                    rua: 'Rua default',
                    numero: 123,
                    bairro: 'Bairro default',
                    cep: 12345678,
                    cidade: 'Cidade default',
                    estado: 'AB',
                }],
                dispositivos: [{
                    tipo: 'ANDROID',
                    token: 'Token default',
                    ultimoAcesso: new Date('03/22/1996 10:10'),
                }],
                // favoriros: ['123'],
                ativo: true,
                createdAt: '14/05/17 14h16min49s UTC',
                updated: '14/05/17 14h16min49s UTC',
            }];

            td.when(Pessoas.find({})).thenResolve(expectedResponse);

            const pessoasController = new PessoasController(Pessoas);
            return pessoasController.getAll()
                .then(response => expect(response.data).to.be.eql(expectedResponse));

        });
    });

    describe('Pega todas pessoas: byEmail()', () => {
        it('Retorna uma pessoas', () => {
            const Pessoas = {
                findOne: td.function()
            };
            const expectedResponse = [{
                nome: 'Nome default',
                sobrenome: 'Sobreno me default',
                email: 'email@default.com.br',
                senha: 'Senha default',
                // nascimento: '03/22/1996',
                endereco: [{
                    rua: 'Rua default',
                    numero: 123,
                    bairro: 'Bairro default',
                    cep: 12345678,
                    cidade: 'Cidade default',
                    estado: 'AB',
                }],
                dispositivos: [{
                    tipo: 'ANDROID',
                    token: 'Token default',
                    ultimoAcesso: new Date('03/22/1996 10:10'),
                }],
                // favoriros: ['123'],
                ativo: true,
                createdAt: '14/05/17 14h16min49s UTC',
                updated: '14/05/17 14h16min49s UTC',
            }];

            td.when(Pessoas.findOne({ email: 'email@default.com.br' })).thenResolve(expectedResponse);

            const pessoasController = new PessoasController(Pessoas);
            return pessoasController.getbyEmail({ email: 'email@default.com.br' })
                .then(response => expect(response.data).to.be.eql(expectedResponse));
        });
    });

    describe('Cria uma pessoa: create()', () => {
        it('Retorna a criacao de uma pessoas', () => {
            const Pessoas = {
                create: td.function()
            };
            const requestBody = {
                nome: 'Teste create Pessoa'
            };
            const expectedResponse = [{
                nome: 'Nome default',
                sobrenome: 'Sobreno me default',
                email: 'email@default.com.br',
                senha: 'Senha default',
                // nascimento: '03/22/1996',
                endereco: [{
                    rua: 'Rua default',
                    numero: 123,
                    bairro: 'Bairro default',
                    cep: 12345678,
                    cidade: 'Cidade default',
                    estado: 'AB',
                }],
                dispositivos: [{
                    tipo: 'ANDROID',
                    token: 'Token default',
                    ultimoAcesso: new Date('03/22/1996 10:10'),
                }],
                // favoriros: ['123'],
                ativo: true,
                createdAt: '14/05/17 14h16min49s UTC',
                updated: '14/05/17 14h16min49s UTC',
            }];

            td.when(Pessoas.create(requestBody)).thenResolve(expectedResponse);

            const pessoasController = new PessoasController(Pessoas);
            return pessoasController.create(requestBody)
                .then(response => {
                    expect(response.statusCode).to.be.eql(201);
                    expect(response.data).to.be.eql(expectedResponse);
                });
        });
    });

    describe('Atualiza uma pessoa: update()', () => {
        it('Retorna o update de uma pessoa', () => {
            const Pessoas = {
                update: td.function()
            };
            const requestBody = {
                nome: 'Nome pessoa update'
            };
            const expectedResponse = [{
                nome: 'Nome default',
                sobrenome: 'Sobreno me default',
                email: 'email@default.com.br',
                senha: 'Senha default',
                // nascimento: '03/22/1996',
                endereco: [{
                    rua: 'Rua default',
                    numero: 123,
                    bairro: 'Bairro default',
                    cep: 12345678,
                    cidade: 'Cidade default',
                    estado: 'AB',
                }],
                dispositivos: [{
                    tipo: 'ANDROID',
                    token: 'Token default',
                    ultimoAcesso: new Date('03/22/1996 10:10'),
                }],
                // favoriros: ['123'],
                ativo: true,
                createdAt: '14/05/17 14h16min49s UTC',
                updated: '14/05/17 14h16min49s UTC',
            }];

            td.when(Pessoas.update({email: 'email@default.com.br'}, requestBody)).thenResolve(expectedResponse);

            const pessoasController = new PessoasController(Pessoas);
            return pessoasController.update({email: 'email@default.com.br'}, requestBody)
                .then(response => expect(response.data).to.be.eql(expectedResponse));
        });
    });

    describe('Deleta uma pessoa: disable()', () => {
        it('Retorna o disable de uma pessoa', () => {
            const Pessoas = {
                update: td.function()
            };
            const expectedResponse = [{
                ativo: false,
            }];

            td.when(Pessoas.update({email: 'email@default.com.br'}, {ativo: false})).thenResolve(expectedResponse);

            const pessoasController = new PessoasController(Pessoas);
            return pessoasController.disable({email: 'email@default.com.br'})
                .then(response => expect(response.statusCode).to.be.eql(204));
        });
    });
});
