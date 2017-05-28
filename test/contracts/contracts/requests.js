/**
 * Created by kennedy on 25/05/17.
 */
describe('Routes Requests', () => {
  const Requests = app.datasource.models.Requests;
  const defaultRequests = {
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

  beforeEach((done) => {
    Requests
            .remove({})
            .then(() => Requests.create(defaultRequests))
            .then(() => {
              done();
            });
  });

  describe('Route GET /requests', () => {
    it('Retorna uma lista de Requests', (done) => {
      const listRequests = Joi.array().items(Joi.object().keys({
        _id: Joi.string(),
        user: Joi.string(),
        works: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          job: Joi.string(),
          status: Joi.string(),
          price: Joi.number(),
          paymentType: Joi.string(),
          dateAttendance: Joi.date(),
          attendance: Joi.object().keys({
            type: Joi.string(),
            address: Joi.object().keys({
              street: Joi.string(),
              number: Joi.number(),
              district: Joi.string(),
              zipcode: Joi.number(),
              city: Joi.string(),
              state: Joi.string(),
            }),
          }),
        })),
        createdAt: Joi.date(),
        updatedAt: Joi.date(),
        __v: Joi.number(),
      }));

      request
                .get('/requests')
                .end((err, res) => {
                  joiAssert(res.body, listRequests);
                  done(err);
                });
    });
  });

  describe('Route GET /requests/{user}', () => {
    it('Retorna um Request', (done) => {
      const requests = Joi.object().keys({
        _id: Joi.string(),
        user: Joi.string(),
        works: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          job: Joi.string(),
          status: Joi.string(),
          price: Joi.number(),
          paymentType: Joi.string(),
          dateAttendance: Joi.date(),
          attendance: Joi.object().keys({
            type: Joi.string(),
            address: Joi.object().keys({
              street: Joi.string(),
              number: Joi.number(),
              district: Joi.string(),
              zipcode: Joi.number(),
              city: Joi.string(),
              state: Joi.string(),
            }),
          }),
        })),
        createdAt: Joi.date(),
        updatedAt: Joi.date(),
        __v: Joi.number(),
      });
      request
                .get('/requests/5921ea44f28eca1caba16c5c')
                .end((err, res) => {
                  joiAssert(res.body, requests);
                  done(err);
                });
    });
  });

  describe('Route POST /requests/', () => {
    it('Cria um novo Request', (done) => {
      const defaultRequests2 = {
        user: '5921ea44f28eca1caba16111',
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
      const requests = Joi.object().keys({
        _id: Joi.string(),
        user: Joi.string(),
        works: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          job: Joi.string(),
          status: Joi.string(),
          price: Joi.number(),
          paymentType: Joi.string(),
          dateAttendance: Joi.date(),
          attendance: Joi.object().keys({
            type: Joi.string(),
            address: Joi.object().keys({
              street: Joi.string(),
              number: Joi.number(),
              district: Joi.string(),
              zipcode: Joi.number(),
              city: Joi.string(),
              state: Joi.string(),
            }),
          }),
        })),
        createdAt: Joi.date(),
        updatedAt: Joi.date(),
        __v: Joi.number(),
      });

      request
                .post('/requests')
                .send(defaultRequests2)
                .end((err, res) => {
                  joiAssert(res.body, requests);
                  done(err);
                });
    });
  });

  describe('Route PUT /requests/{user}', () => {
    it('Atualiza um Request', (done) => {
      const updateRequest = {
        works: {
          status: 'CLOSED',
        },
      };

      const updatedCount = Joi.object().keys({
        ok: Joi.number(),
        nModified: Joi.number(),
        n: Joi.number(),
      });

      request
                .put('/requests/5921ea44f28eca1caba16111')
                .send(updateRequest)
                .end((err, res) => {
                  joiAssert(res.body, updatedCount);
                  done(err);
                });
    });
  });

    // describe('Route DELETE /requests/{user}', () => {
    //     it('Remove um Request (Faz o atributo STATUS = CLOSES)', (done) => {
    //         request
    //             .delete('/requests/5921ea44f28eca1caba16c5c')
    //             .end((err, res) => {
    //                 expect(res.statusCode).to.be.eql(204);
    //
    //                 done(err);
    //             });
    //     });
    // });
});
