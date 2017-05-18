/**
 * Created by kennedy on 18/05/17.
 */
describe('Routes Pessoas', () => {
  const Pessoas = app.datasource.models.Pessoas;
  const defaultPessoa = {
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
    Pessoas
            .remove({})
            .then(() => Pessoas.create(defaultPessoa))
            .then(() => {
              done();
            });
  });

  describe('Route GET /pessoas', () => {
    it('Retorna uma lista de Pessoas', (done) => {
      const listaPessoas = Joi.array().items(Joi.object().keys({
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
                .get('/pessoas')
                .end((err, res) => {
                  joiAssert(res.body, listaPessoas);
                  done(err);
                });
    });
  });

  describe('Route GET /pessoas/{email}', () => {
    it('Retorna uma Pessoa', (done) => {
      const pessoa = Joi.object().keys({
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
                .get('/pessoas/email@default.com.br')
                .end((err, res) => {
                  joiAssert(res.body, pessoa);
                  done(err);
                });
    });
  });

  describe('Route POST /pessoas/', () => {
    it('Cria uma nova Pessoa', (done) => {
      const defaultPessoa2 = {
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
      const pessoa = Joi.object().keys({
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
                .post('/pessoas')
                .send(defaultPessoa2)
                .end((err, res) => {
                  joiAssert(res.body, pessoa);
                  done(err);
                });
    });
  });

  describe('Route PUT /pessoas/{email}', () => {
    it('Atualiza uma Pessoa', (done) => {
      const updatePessoa = {
        nome: 'Nome update',
      };

      const updatedCount = Joi.object().keys({
        ok: Joi.number(),
        nModified: Joi.number(),
        n: Joi.number(),
      });

      request
                .put('/pessoas/email@default.com.br')
                .send(updatePessoa)
                .end((err, res) => {
                  joiAssert(res.body, updatedCount);
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
