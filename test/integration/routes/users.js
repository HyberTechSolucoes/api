/**
 * Created by kennedy on 12/05/17.
 */
describe('Routes Users', () => {
  const Users = app.datasource.models.Users;
  const defaultUser = {
    _id: '59221411d1df91548c875454',
    nome: 'Nome default',
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
    Users
            .remove({})
            .then(() => Users.create(defaultUser))
            .then(() => {
              done();
            });
  });

  describe('Route GET /users', () => {
    it('Retorna uma lista de Users', (done) => {
      request
                .get('/users')
                .end((err, res) => {
                  expect(res.body[0].nome)
                        .to.be.eql(defaultUser.nome);
                  expect(res.body[0].email)
                        .to.be.eql(defaultUser.email);
                  expect(res.body[0].senha)
                        .to.be.eql(defaultUser.senha);
                    // expect(res.body[0].nascimento)
                    // .to.be.eql(defaultUser.nascimento);
                  expect(res.body[0].endereco[0].id)
                        .to.be.eql(defaultUser.endereco[0].id);
                  expect(res.body[0].endereco[0].rua)
                        .to.be.eql(defaultUser.endereco[0].rua);
                  expect(res.body[0].endereco[0].numero)
                        .to.be.eql(defaultUser.endereco[0].numero);
                  expect(res.body[0].endereco[0].bairro)
                        .to.be.eql(defaultUser.endereco[0].bairro);
                  expect(res.body[0].endereco[0].cep)
                        .to.be.eql(defaultUser.endereco[0].cep);
                  expect(res.body[0].endereco[0].cidade)
                        .to.be.eql(defaultUser.endereco[0].cidade);
                  expect(res.body[0].endereco[0].estado)
                        .to.be.eql(defaultUser.endereco[0].estado);
                  expect(res.body[0].endereco[0].cidade)
                        .to.be.eql(defaultUser.endereco[0].cidade);
                  expect(res.body[0].dispositivos[0].tipo)
                        .to.be.eql(defaultUser.dispositivos[0].tipo);
                  expect(res.body[0].dispositivos[0].token)
                        .to.be.eql(defaultUser.dispositivos[0].token);
                    // expect(res.body[0].dispositivos[0].ultimoAcesso)
                    // .to.be.eql(defaultUser.dispositivos[0].ultimoAcesso);
                    // expect(res.body[0].favoriros[0])
                    // .to.be.eql(defaultUser.favoriros[0]);
                  expect(res.body[0].ativo)
                        .to.be.eql(defaultUser.ativo);

                  done(err);
                });
    });
  });

  describe('Route GET /users/{email}', () => {
    it('Retorna um User', (done) => {
      request
                .get('/users/email@default.com.br')
                .end((err, res) => {
                  expect(res.body.nome)
                        .to.be.eql(defaultUser.nome);
                  expect(res.body.email)
                        .to.be.eql(defaultUser.email);
                  expect(res.body.senha)
                        .to.be.eql(defaultUser.senha);
                    // expect(res.body.nascimento)
                    // .to.be.eql(defaultUser.nascimento);
                  expect(res.body.endereco[0].id)
                        .to.be.eql(defaultUser.endereco[0].id);
                  expect(res.body.endereco[0].rua)
                        .to.be.eql(defaultUser.endereco[0].rua);
                  expect(res.body.endereco[0].numero)
                        .to.be.eql(defaultUser.endereco[0].numero);
                  expect(res.body.endereco[0].bairro)
                        .to.be.eql(defaultUser.endereco[0].bairro);
                  expect(res.body.endereco[0].cep)
                        .to.be.eql(defaultUser.endereco[0].cep);
                  expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultUser.endereco[0].cidade);
                  expect(res.body.endereco[0].estado)
                        .to.be.eql(defaultUser.endereco[0].estado);
                  expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultUser.endereco[0].cidade);
                  expect(res.body.dispositivos[0].tipo)
                        .to.be.eql(defaultUser.dispositivos[0].tipo);
                  expect(res.body.dispositivos[0].token)
                        .to.be.eql(defaultUser.dispositivos[0].token);
                    // expect(res.body.dispositivos[0].ultimoAcesso)
                    // .to.be.eql(defaultUser.dispositivos[0].ultimoAcesso);
                    // expect(res.body.favoriros[0])
                    // .to.be.eql(defaultUser.favoriros[0]);
                  expect(res.body.ativo)
                        .to.be.eql(defaultUser.ativo);

                  done(err);
                });
    });
  });

  describe('Route POST /users/', () => {
    it('Cria uma novo User', (done) => {
      const defaultUser2 = {
        nome: 'Nome default2',
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
                .post('/users')
                .send(defaultUser2)
                .end((err, res) => {
                  expect(res.body.nome)
                        .to.be.eql(defaultUser2.nome);
                  expect(res.body.email)
                        .to.be.eql(defaultUser2.email);
                  expect(res.body.senha)
                        .to.be.eql(defaultUser2.senha);
                    // expect(res.body.nascimento)
                    // .to.be.eql(defaultUser2.nascimento);
                  expect(res.body.endereco[0].id)
                        .to.be.eql(defaultUser2.endereco[0].id);
                  expect(res.body.endereco[0].rua)
                        .to.be.eql(defaultUser2.endereco[0].rua);
                  expect(res.body.endereco[0].numero)
                        .to.be.eql(defaultUser2.endereco[0].numero);
                  expect(res.body.endereco[0].bairro)
                        .to.be.eql(defaultUser2.endereco[0].bairro);
                  expect(res.body.endereco[0].cep)
                        .to.be.eql(defaultUser2.endereco[0].cep);
                  expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultUser2.endereco[0].cidade);
                  expect(res.body.endereco[0].estado)
                        .to.be.eql(defaultUser2.endereco[0].estado);
                  expect(res.body.endereco[0].cidade)
                        .to.be.eql(defaultUser2.endereco[0].cidade);
                  expect(res.body.dispositivos[0].tipo)
                        .to.be.eql(defaultUser2.dispositivos[0].tipo);
                  expect(res.body.dispositivos[0].token)
                        .to.be.eql(defaultUser2.dispositivos[0].token);
                    // expect(res.body.dispositivos[0].ultimoAcesso)
                    // .to.be.eql(defaultUser2.dispositivos[0].ultimoAcesso);
                    // expect(res.body.favoriros[0])
                    // .to.be.eql(defaultUser2.favoriros[0]);
                  expect(res.body.ativo)
                        .to.be.eql(defaultUser2.ativo);

                  done(err);
                });
    });
  });

  describe('Route PUT /users/{email}', () => {
    it('Atualiza um User', (done) => {
      const updateUser = {
        nome: 'Nome update',
      };

      request
                .put('/users/email@default.com.br')
                .send(updateUser)
                .end((err, res) => {
                  expect(res.body).to.be.eql({ ok: 1, nModified: 1, n: 1 });

                  done(err);
                });
    });
  });

  describe('Route DELETE /users/{email}', () => {
    it('Remove um User (Faz o atributo ATIVO = false)', (done) => {
      request
                .delete('/users/email@default.com.br')
                .end((err, res) => {
                  expect(res.statusCode).to.be.eql(204);

                  done(err);
                });
    });
  });
});
