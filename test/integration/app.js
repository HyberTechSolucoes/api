/**
 * Created by kennedy on 12/05/17.
 */
describe('Routes Pessoas', () => {
    const Pessoas = app.datasource.models.Pessoas;
    const defaultPessoa = {
        nome: 'Nome default',
        sobrenome: 'Sobrenome default',
        email: 'email@default.com.br',
        senha: 'Senha default',
        nascimento: '03/22/1996',
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
    };

    beforeEach((done) => {
        Pessoas
            .remove({})
            .then(() => Pessoas.create(defaultPessoa))
            .then(() => {
                done();
            });
    });

    describe('Route GET /pessoas', () => {
        it('Retorna uma lista de Pessoas', (done) => {
            request
                .get('/pessoas')
                .end((err, res) => {
                    expect(res.body[0].nome)
                        .to.be.eql(defaultPessoa.nome);
                    expect(res.body[0].sobrenome)
                        .to.be.eql(defaultPessoa.sobrenome);
                    expect(res.body[0].email)
                        .to.be.eql(defaultPessoa.email);
                    expect(res.body[0].senha)
                        .to.be.eql(defaultPessoa.senha);
                    // expect(res.body[0].nascimento)
                    // .to.be.eql(defaultPessoa.nascimento);
                    expect(res.body[0].endereco[0].id)
                        .to.be.eql(defaultPessoa.endereco[0].id);
                    expect(res.body[0].endereco[0].rua)
                        .to.be.eql(defaultPessoa.endereco[0].rua);
                    expect(res.body[0].endereco[0].numero)
                        .to.be.eql(defaultPessoa.endereco[0].numero);
                    expect(res.body[0].endereco[0].bairro)
                        .to.be.eql(defaultPessoa.endereco[0].bairro);
                    expect(res.body[0].endereco[0].cep)
                        .to.be.eql(defaultPessoa.endereco[0].cep);
                    expect(res.body[0].endereco[0].cidade)
                        .to.be.eql(defaultPessoa.endereco[0].cidade);
                    expect(res.body[0].endereco[0].estado)
                        .to.be.eql(defaultPessoa.endereco[0].estado);
                    expect(res.body[0].endereco[0].cidade)
                        .to.be.eql(defaultPessoa.endereco[0].cidade);
                    expect(res.body[0].dispositivos[0].tipo)
                        .to.be.eql(defaultPessoa.dispositivos[0].tipo);
                    expect(res.body[0].dispositivos[0].token)
                        .to.be.eql(defaultPessoa.dispositivos[0].token);
                    // expect(res.body[0].dispositivos[0].ultimoAcesso)
                    // .to.be.eql(defaultPessoa.dispositivos[0].ultimoAcesso);
                    // expect(res.body[0].favoriros[0])
                    // .to.be.eql(defaultPessoa.favoriros[0]);
                    expect(res.body[0].ativo)
                        .to.be.eql(defaultPessoa.ativo);

                    done(err);
                });
        });
    });

    describe('Route GET /pessoas/{email}', () => {
        it('Retorna uma Pessoa', (done) => {
            request
                .get('/pessoas/email@default.com.br')
                .end((err, res) => {
                    expect(res.body.nome)
                        .to.be.eql(defaultPessoa.nome);
                    expect(res.body.sobrenome)
                        .to.be.eql(defaultPessoa.sobrenome);
                    expect(res.body.email)
                        .to.be.eql(defaultPessoa.email);
                    expect(res.body.senha)
                        .to.be.eql(defaultPessoa.senha);
                    // expect(res.body.nascimento)
                    // .to.be.eql(defaultPessoa.nascimento);
                    expect(res.body.endereco[0].id)
                        .to.be.eql(defaultPessoa.endereco[0].id);
                    expect(res.body.endereco[0].rua)
                        .to.be.eql(defaultPessoa.endereco[0].rua);
                    expect(res.body.endereco[0].numero)
                        .to.be.eql(defaultPessoa.endereco[0].numero);
                    expect(res.body.endereco[0].bairro)
                        .to.be.eql(defaultPessoa.endereco[0].bairro);
                    expect(res.body.endereco[0].cep)
                        .to.be.eql(defaultPessoa.endereco[0].cep);
                    expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultPessoa.endereco[0].cidade);
                    expect(res.body.endereco[0].estado)
                        .to.be.eql(defaultPessoa.endereco[0].estado);
                    expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultPessoa.endereco[0].cidade);
                    expect(res.body.dispositivos[0].tipo)
                        .to.be.eql(defaultPessoa.dispositivos[0].tipo);
                    expect(res.body.dispositivos[0].token)
                        .to.be.eql(defaultPessoa.dispositivos[0].token);
                    // expect(res.body.dispositivos[0].ultimoAcesso)
                    // .to.be.eql(defaultPessoa.dispositivos[0].ultimoAcesso);
                    // expect(res.body.favoriros[0])
                    // .to.be.eql(defaultPessoa.favoriros[0]);
                    expect(res.body.ativo)
                        .to.be.eql(defaultPessoa.ativo);

                    done(err);
                });
        });
    });

    describe('Route POST /pessoas/', () => {
        it('Cria uma nova Pessoa', (done) => {
            const defaultPessoa2 = {
                nome: 'Nome default2',
                sobrenome: 'Sobrenome default2',
                email: 'email@default2.com.br',
                senha: 'Senha default2',
                nascimento: '03/22/1996',
                endereco: [{
                    rua: 'Rua default2',
                    numero: 123,
                    bairro: 'Bairro default2',
                    cep: 12345678,
                    cidade: 'Cidade default2',
                    estado: 'AB',
                }],
                dispositivos: [{
                    tipo: 'ANDROID',
                    token: 'Token default2',
                    ultimoAcesso: new Date('03/22/1996 10:10'),
                }],
                // favoriros: ['123'],
                ativo: true,
            };

            request
                .post('/pessoas')
                .send(defaultPessoa2)
                .end((err, res) => {
                    expect(res.body.nome)
                        .to.be.eql(defaultPessoa2.nome);
                    expect(res.body.sobrenome)
                        .to.be.eql(defaultPessoa2.sobrenome);
                    expect(res.body.email)
                        .to.be.eql(defaultPessoa2.email);
                    expect(res.body.senha)
                        .to.be.eql(defaultPessoa2.senha);
                    // expect(res.body.nascimento)
                    // .to.be.eql(defaultPessoa2.nascimento);
                    expect(res.body.endereco[0].id)
                        .to.be.eql(defaultPessoa2.endereco[0].id);
                    expect(res.body.endereco[0].rua)
                        .to.be.eql(defaultPessoa2.endereco[0].rua);
                    expect(res.body.endereco[0].numero)
                        .to.be.eql(defaultPessoa2.endereco[0].numero);
                    expect(res.body.endereco[0].bairro)
                        .to.be.eql(defaultPessoa2.endereco[0].bairro);
                    expect(res.body.endereco[0].cep)
                        .to.be.eql(defaultPessoa2.endereco[0].cep);
                    expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultPessoa2.endereco[0].cidade);
                    expect(res.body.endereco[0].estado)
                        .to.be.eql(defaultPessoa2.endereco[0].estado);
                    expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultPessoa2.endereco[0].cidade);
                    expect(res.body.dispositivos[0].tipo)
                        .to.be.eql(defaultPessoa2.dispositivos[0].tipo);
                    expect(res.body.dispositivos[0].token)
                        .to.be.eql(defaultPessoa2.dispositivos[0].token);
                    // expect(res.body.dispositivos[0].ultimoAcesso)
                    // .to.be.eql(defaultPessoa2.dispositivos[0].ultimoAcesso);
                    // expect(res.body.favoriros[0])
                    // .to.be.eql(defaultPessoa2.favoriros[0]);
                    expect(res.body.ativo)
                        .to.be.eql(defaultPessoa2.ativo);

                    done(err);
                });
        });
    });

    describe('Route PUT /pessoas/{email}', () => {
        it('Atualiza uma Pessoa', (done) => {
            const updatePessoa = {
                nome: 'Nome update',
            };

            request
                .put('/pessoas/email@default.com.br')
                .send(updatePessoa)
                .end((err, res) => {

                    expect(res.body).to.be.eql({ ok: 1, nModified: 1, n: 1 });

                    done(err);
                });
        });
    });

    describe('Route DELETE /pessoas/{email}', () => {
        it('Remove uma Pessoa (Faz o atributo ATIVO = false)', (done) => {
            request
                .delete('/pessoas/email@default.com.br')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);

                    done(err);
                });
        });
    });
});
