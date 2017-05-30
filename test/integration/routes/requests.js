/**
 * Created by kennedy on 23/05/17.
 */
describe('Routes Requests', () => {
  const Requests = app.datasource.models.Requests;
  const defaultRequest = {
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
            .then(() => Requests.create(defaultRequest))
            .then(() => {
              done();
            });
  });

  describe('Route GET /requests', () => {
    it('Retorna uma lista de Requests', (done) => {
      request
                .get('/requests')
                .end((err, res) => {
                  expect(res.body[0].user)
                      .to.be.eql(defaultRequest.user);
                  expect(res.body[0].works[0].job)
                      .to.be.eql(defaultRequest.works[0].job);
                  expect(res.body[0].works[0].status)
                      .to.be.eql(defaultRequest.works[0].status);
                  expect(res.body[0].works[0].price)
                      .to.be.eql(defaultRequest.works[0].price);
                  expect(res.body[0].works[0].paymentType)
                      .to.be.eql(defaultRequest.works[0].paymentType);
                    // expect(res.body[0].works[0].dateAttendance)
                    // .to.be.eql(defaultRequest.works[0].dateAttendance);
                  expect(res.body[0].works[0].attendance.type)
                      .to.be.eql(defaultRequest.works[0].attendance.type);
                  expect(res.body[0].works[0].attendance.address.street)
                      .to.be.eql(defaultRequest.works[0].attendance.address.street);
                  expect(res.body[0].works[0].attendance.address.number)
                      .to.be.eql(defaultRequest.works[0].attendance.address.number);
                  expect(res.body[0].works[0].attendance.address.district)
                      .to.be.eql(defaultRequest.works[0].attendance.address.district);
                  expect(res.body[0].works[0].attendance.address.zipcode)
                      .to.be.eql(defaultRequest.works[0].attendance.address.zipcode);
                  expect(res.body[0].works[0].attendance.address.city)
                      .to.be.eql(defaultRequest.works[0].attendance.address.city);
                  expect(res.body[0].works[0].attendance.address.state)
                      .to.be.eql(defaultRequest.works[0].attendance.address.state);

                  done(err);
                });
    });
  });

  describe('Route GET /requests/{user}', () => {
    it('Retorna um Requests', (done) => {
      request
                .get('/requests/5921ea44f28eca1caba16c5c')
                .end((err, res) => {
                  expect(res.body.user)
                      .to.be.eql(defaultRequest.user);
                  expect(res.body.works[0].job)
                      .to.be.eql(defaultRequest.works[0].job);
                  expect(res.body.works[0].status)
                      .to.be.eql(defaultRequest.works[0].status);
                  expect(res.body.works[0].price)
                      .to.be.eql(defaultRequest.works[0].price);
                  expect(res.body.works[0].paymentType)
                      .to.be.eql(defaultRequest.works[0].paymentType);
                    // expect(res.body.works[0].dateAttendance)
                    // .to.be.eql(defaultRequest.works[0].dateAttendance);
                  expect(res.body.works[0].attendance.type)
                      .to.be.eql(defaultRequest.works[0].attendance.type);
                  expect(res.body.works[0].attendance.address.street)
                      .to.be.eql(defaultRequest.works[0].attendance.address.street);
                  expect(res.body.works[0].attendance.address.number)
                      .to.be.eql(defaultRequest.works[0].attendance.address.number);
                  expect(res.body.works[0].attendance.address.district)
                      .to.be.eql(defaultRequest.works[0].attendance.address.district);
                  expect(res.body.works[0].attendance.address.zipcode)
                      .to.be.eql(defaultRequest.works[0].attendance.address.zipcode);
                  expect(res.body.works[0].attendance.address.city)
                      .to.be.eql(defaultRequest.works[0].attendance.address.city);
                  expect(res.body.works[0].attendance.address.state)
                      .to.be.eql(defaultRequest.works[0].attendance.address.state);

                  done(err);
                });
    });
  });

  describe('Route POST /requests/', () => {
    it('Cria uma novo Requests', (done) => {
      const defaultRequests2 = {
        user: '592646588776ae0e45a81336',
        works: [{
          job: '5921ea44f28eca1caba16c5c',
          status: 'OPEN',
          price: 100,
          paymentType: 'MONEY',
          dateAttendance: new Date('08/22/2017 10:10'),
          attendance: {
            type: 'RESIDENCE',
            address: {
              street: 'Rua default 2',
              number: 123,
              district: 'Bairro default 2',
              zipcode: 123,
              city: 'Cidade default w',
              state: 'AB',
            },
          },
        }],
      };

      request
                .post('/requests')
                .send(defaultRequests2)
                .end((err, res) => {
                  expect(res.body.user)
                      .to.be.eql(defaultRequests2.user);
                  expect(res.body.works[0].job)
                      .to.be.eql(defaultRequests2.works[0].job);
                  expect(res.body.works[0].status)
                      .to.be.eql(defaultRequests2.works[0].status);
                  expect(res.body.works[0].price)
                      .to.be.eql(defaultRequests2.works[0].price);
                  expect(res.body.works[0].paymentType)
                      .to.be.eql(defaultRequests2.works[0].paymentType);
                    // expect(res.body.works[0].dateAttendance)
                    // .to.be.eql(defaultRequests2.works[0].dateAttendance);
                  expect(res.body.works[0].attendance.type)
                      .to.be.eql(defaultRequests2.works[0].attendance.type);
                  expect(res.body.works[0].attendance.address.street)
                      .to.be.eql(defaultRequests2.works[0].attendance.address.street);
                  expect(res.body.works[0].attendance.address.number)
                      .to.be.eql(defaultRequests2.works[0].attendance.address.number);
                  expect(res.body.works[0].attendance.address.district)
                      .to.be.eql(defaultRequests2.works[0].attendance.address.district);
                  expect(res.body.works[0].attendance.address.zipcode)
                      .to.be.eql(defaultRequests2.works[0].attendance.address.zipcode);
                  expect(res.body.works[0].attendance.address.city)
                      .to.be.eql(defaultRequests2.works[0].attendance.address.city);
                  expect(res.body.works[0].attendance.address.state)
                      .to.be.eql(defaultRequests2.works[0].attendance.address.state);

                  done(err);
                });
    });
  });

  describe('Route PUT /requests/{user}', () => {
    it('Atualiza um Requests', (done) => {
      const updateRequest = {
        works: {
          status: 'CLOSED',
        },
      };

      request
                .put('/requests/5921ea44f28eca1caba16c5c')
                .send(updateRequest)
                .end((err, res) => {
                  expect(res.body).to.be.eql({ ok: 1, nModified: 1, n: 1 });

                  done(err);
                });
    });
  });
});
