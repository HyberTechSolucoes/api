/**
 * Created by kennedy on 18/05/17.
 */
describe('Routes Users', () => {
  const Users = app.datasource.models.Users;
  const defaultUser = {
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
      const listUser = Joi.array().items(Joi.object().keys({
        _id: Joi.string(),
        __v: Joi.number(),
        updatedAt: Joi.date().iso(),
        createdAt: Joi.date().iso(),
        nome: Joi.string(),
        email: Joi.string(),
        senha: Joi.string(),
        nascimento: Joi.date().iso(),
        endereco: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          rua: Joi.string(),
          numero: Joi.number(),
          bairro: Joi.string(),
          cep: Joi.number(),
          cidade: Joi.string(),
          estado: Joi.string(),
        })),
        dispositivos: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          tipo: Joi.string(),
          token: Joi.string(),
          ultimoAcesso: Joi.date().iso(),
        })),
                // favoriros: ['123'],
        ativo: Joi.boolean(),
      }));
      request
                .get('/users')
                .end((err, res) => {
                  joiAssert(res.body, listUser);
                  done(err);
                });
    });
  });

  describe('Route GET /users/{email}', () => {
    it('Retorna um User', (done) => {
      const user = Joi.object().keys({
        _id: Joi.string(),
        __v: Joi.number(),
        updatedAt: Joi.date().iso(),
        createdAt: Joi.date().iso(),
        nome: Joi.string(),
        email: Joi.string(),
        senha: Joi.string(),
        nascimento: Joi.date().iso(),
        endereco: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          rua: Joi.string(),
          numero: Joi.number(),
          bairro: Joi.string(),
          cep: Joi.number(),
          cidade: Joi.string(),
          estado: Joi.string(),
        })),
        dispositivos: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          tipo: Joi.string(),
          token: Joi.string(),
          ultimoAcesso: Joi.date().iso(),
        })),
                // favoriros: ['123'],
        ativo: Joi.boolean(),
      });
      request
                .get('/users/email@default.com.br')
                .end((err, res) => {
                  joiAssert(res.body, user);
                  done(err);
                });
    });
  });

  describe('Route POST /users/', () => {
    it('Cria um novo User', (done) => {
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
      const user = Joi.object().keys({
        _id: Joi.string(),
        __v: Joi.number(),
        updatedAt: Joi.date().iso(),
        createdAt: Joi.date().iso(),
        nome: Joi.string(),
        email: Joi.string(),
        senha: Joi.string(),
        nascimento: Joi.date().iso(),
        endereco: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          rua: Joi.string(),
          numero: Joi.number(),
          bairro: Joi.string(),
          cep: Joi.number(),
          cidade: Joi.string(),
          estado: Joi.string(),
        })),
        dispositivos: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          tipo: Joi.string(),
          token: Joi.string(),
          ultimoAcesso: Joi.date().iso(),
        })),
                // favoriros: ['123'],
        ativo: Joi.boolean(),
      });

      request
                .post('/users')
                .send(defaultUser2)
                .end((err, res) => {
                  joiAssert(res.body, user);
                  done(err);
                });
    });
  });

  describe('Route PUT /users/{email}', () => {
    it('Atualiza um User', (done) => {
      const updateUser = {
        nome: 'Nome update',
      };

      const updatedCount = Joi.object().keys({
        ok: Joi.number(),
        nModified: Joi.number(),
        n: Joi.number(),
      });

      request
                .put('/users/email@default.com.br')
                .send(updateUser)
                .end((err, res) => {
                  joiAssert(res.body, updatedCount);
                  done(err);
                });
    });
  });

  describe('Route DELETE /users/{email}', () => {
    it('Remove um USer (Faz o atributo ATIVO = false)', (done) => {
      request
                .delete('/users/email@default.com.br')
                .end((err, res) => {
                  expect(res.statusCode).to.be.eql(204);

                  done(err);
                });
    });
  });
});
