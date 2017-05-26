/**
 * Created by kennedy on 25/05/17.
 */
import RequestesController from '../../../controllers/requests';

describe('Controllers: Requestes', () => {
  describe('Pega todos Requestes: getAll()', () => {
    it('Retorna uma lista de Requestes', () => {
      const Requests = {
        find: td.function(),
      };
      const expectedResponse = [{
        user: '5921ea44f28eca1caba16c5c',
        works: [{
          job: '5921ea44f28eca1caba16c5c',
          status: 'OPEN',
          price: 100,
          paymentType: 'MONEY',
          dateAttendance: new Date('08/22/2017 10:10'),
          attendance: {
            type: 'RESIDENCE',
            address: {
              street: 'Rua default',
              number: 123,
              district: 'Bairro default',
              zipcode: 12345678,
              city: 'Cidade default',
              state: 'AB',
            },
          },
        }],
      }];

      td.when(Requests.find({})).thenResolve(expectedResponse);

      const requestsController = new RequestesController(Requests);
      return requestsController.getAll()
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Pega Request: byUserId()', () => {
    it('Retorna um Request', () => {
      const Requests = {
        findOne: td.function(),
      };
      const expectedResponse = [{
        user: '5921ea44f28eca1caba16c5c',
        works: [{
          job: '5921ea44f28eca1caba16c5c',
          status: 'OPEN',
          price: 100,
          paymentType: 'MONEY',
          dateAttendance: new Date('08/22/2017 10:10'),
          attendance: {
            type: 'RESIDENCE',
            address: {
              street: 'Rua default',
              number: 123,
              district: 'Bairro default',
              zipcode: 12345678,
              city: 'Cidade default',
              state: 'AB',
            },
          },
        }],
      }];

      td.when(Requests.findOne({ user: '5921ea44f28eca1caba16c5c' })).thenResolve(expectedResponse);

      const requestsController = new RequestesController(Requests);
      return requestsController.getbyUserId({ user: '5921ea44f28eca1caba16c5c' })
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Cria um Request: create()', () => {
    it('Retorna a criacao de um Request', () => {
      const Requests = {
        create: td.function(),
      };
      const requestBody = {
        user: '5921ea44f28eca1caba16c5c',
        works: [{
          job: '5921ea44f28eca1caba16c5c',
          status: 'OPEN',
          price: 100,
          paymentType: 'MONEY',
          dateAttendance: new Date('08/22/2017 10:10'),
          attendance: {
            type: 'RESIDENCE',
            address: {
              street: 'Rua default',
              number: 123,
              district: 'Bairro default',
              zipcode: 12345678,
              city: 'Cidade default',
              state: 'AB',
            },
          },
        }],
      };
      const expectedResponse = [{
        user: '5921ea44f28eca1caba16c5c1111111',
        works: [{
          job: '5921ea44f28eca1caba16c5c',
          status: 'OPEN',
          price: 100,
          paymentType: 'MONEY',
          dateAttendance: new Date('08/22/2017 10:10'),
          attendance: {
            type: 'RESIDENCE',
            address: {
              street: 'Rua default',
              number: 123,
              district: 'Bairro default',
              zipcode: 12345678,
              city: 'Cidade default',
              state: 'AB',
            },
          },
        }],
      }];

      td.when(Requests.create(requestBody)).thenResolve(expectedResponse);

      const requestsController = new RequestesController(Requests);
      return requestsController.create(requestBody)
                .then((response) => {
                  expect(response.statusCode).to.be.eql(201);
                  expect(response.data).to.be.eql(expectedResponse);
                });
    });
  });

  describe('Atualiza um Request: update()', () => {
    it('Retorna o update de um Request', () => {
      const Requests = {
        update: td.function(),
      };
      const requestBody = {
        works: {
          status: 'CLOSED',
        },
      };
      const expectedResponse = [{
        user: '5921ea44f28eca1caba16c5c1111111',
        works: [{
          job: '5921ea44f28eca1caba16c5c',
          status: 'OPEN',
          price: 100,
          paymentType: 'MONEY',
          dateAttendance: new Date('08/22/2017 10:10'),
          attendance: {
            type: 'RESIDENCE',
            address: {
              street: 'Rua default',
              number: 123,
              district: 'Bairro default',
              zipcode: 12345678,
              city: 'Cidade default',
              state: 'AB',
            },
          },
        }],
      }];

      td.when(Requests.update({ user: '5921ea44f28eca1caba16c5c1111111' }, requestBody)).thenResolve(expectedResponse);

      const requestsController = new RequestesController(Requests);
      return requestsController.update({ user: '5921ea44f28eca1caba16c5c1111111' }, requestBody)
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });
});
