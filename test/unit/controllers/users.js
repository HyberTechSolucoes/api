/**
 * Created by kennedy on 14/05/17.
 */
import UsersController from '../../../controllers/users';

describe('Controllers: Users', () => {
  describe('Pega todos User: getAll()', () => {
    it('Retorna uma lista de Users', () => {
      const Users = {
        find: td.function(),
      };
      const expectedResponse = [{
        nome: 'Nome default',
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

      td.when(Users.find({})).thenResolve(expectedResponse);

      const usersController = new UsersController(Users);
      return usersController.getAll()
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Pega User: byEmail()', () => {
    it('Retorna um User', () => {
      const Users = {
        findOne: td.function(),
      };
      const expectedResponse = [{
        nome: 'Nome default',
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

      td.when(Users.findOne({ email: 'email@default.com.br' })).thenResolve(expectedResponse);

      const usersController = new UsersController(Users);
      return usersController.getbyEmail({ email: 'email@default.com.br' })
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Cria um User: create()', () => {
    it('Retorna a criacao de um User', () => {
      const Users = {
        create: td.function(),
      };
      const requestBody = {
        nome: 'Teste create User',
      };
      const expectedResponse = [{
        nome: 'Nome default',
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

      td.when(Users.create(requestBody)).thenResolve(expectedResponse);

      const usersController = new UsersController(Users);
      return usersController.create(requestBody)
                .then((response) => {
                  expect(response.statusCode).to.be.eql(201);
                  expect(response.data).to.be.eql(expectedResponse);
                });
    });
  });

  describe('Atualiza um User: update()', () => {
    it('Retorna o update de um User', () => {
      const Users = {
        update: td.function(),
      };
      const requestBody = {
        nome: 'Nome users update',
      };
      const expectedResponse = [{
        nome: 'Nome default',
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

      td.when(Users.update({ email: 'email@default.com.br' }, requestBody)).thenResolve(expectedResponse);

      const usersController = new UsersController(Users);
      return usersController.update({ email: 'email@default.com.br' }, requestBody)
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Deleta um User: disable()', () => {
    it('Retorna o disable de um User', () => {
      const Users = {
        update: td.function(),
      };
      const expectedResponse = [{
        ativo: false,
      }];

      td.when(Users.update({ email: 'email@default.com.br' }, { ativo: false })).thenResolve(expectedResponse);

      const usersController = new UsersController(Users);
      return usersController.disable({ email: 'email@default.com.br' })
                .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
