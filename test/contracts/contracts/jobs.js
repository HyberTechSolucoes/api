/**
 * Created by kennedy on 21/05/17.
 */
describe('Routes Jobs', () => {
  const Jobs = app.datasource.models.Jobs;
  const defaultJob = {
    user: '5921ea44f28eca1caba16c5c',
    fantasyName: 'fantasyName',
    job: 'job',
    category: 'category',
    paymentType: 'CREDIT',
    hours: {
      monday: {
        open: '08:00',
        close: '16:00',
      },
      tuesday: {
        open: '08:00',
        close: '16:00',
      },
      wednesday: {
        open: '08:00',
        close: '16:00',
      },
      thursday: {
        open: '08:00',
        close: '16:00',
      },
      friday: {
        open: '08:00',
        close: '16:00',
      },
      saturday: {
        open: '08:00',
        close: '16:00',
      },
      sunday: {
        open: '08:00',
        close: '16:00',
      },
    },
    works: [{
      name: 'jobs.name',
      description: 'description',
      price: 100,
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
      tags: ['TAGS'],
      feedbacks: [{
        user: '5921ea44f28eca1caba16c5c',
        stars: 4.5,
        comment: 'feedbacks.comment',
      }],
    }],
    status: 'ACTIVE',
  };

  beforeEach((done) => {
    Jobs
            .remove({})
            .then(() => Jobs.create(defaultJob))
            .then(() => {
              done();
            });
  });

  describe('Route GET /jobs', () => {
    it('Retorna uma lista de Jobs', (done) => {
      const listJobs = Joi.array().items(Joi.object().keys({
        _id: Joi.string(),
        __v: Joi.number(),
        updatedAt: Joi.date().iso(),
        createdAt: Joi.date().iso(),

        user: Joi.string(),
        fantasyName: Joi.string(),
        job: Joi.string(),
        category: Joi.string(),
        paymentType: Joi.string(),
        hours: Joi.object().keys({
          monday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          tuesday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          wednesday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          thursday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          friday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          saturday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          sunday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
        }),
        works: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string(),
          description: Joi.string(),
          price: Joi.number(),
          attendance: Joi.object().keys({
            type: Joi.string(),
            address: {
              street: Joi.string(),
              number: Joi.number(),
              district: Joi.string(),
              zipcode: Joi.number(),
              city: Joi.string(),
              state: Joi.string(),
            },
          }),
          feedbacks: Joi.array().items(Joi.object().keys({
            _id: Joi.string(),
            user: Joi.string(),
            stars: Joi.number(),
            comment: Joi.string(),
            createdAt: Joi.date().iso(),
          })),
          tags: Joi.array().items(Joi.string()),
        })),
        status: Joi.string(),
      }));

      request
                .get('/jobs')
                .end((err, res) => {
                  joiAssert(res.body, listJobs);
                  done(err);
                });
    });
  });

  describe('Route GET /jobs/{user}', () => {
    it('Retorna um Job', (done) => {
      const job = Joi.object().keys({
        _id: Joi.string(),
        __v: Joi.number(),
        updatedAt: Joi.date().iso(),
        createdAt: Joi.date().iso(),

        user: Joi.string(),
        fantasyName: Joi.string(),
        job: Joi.string(),
        category: Joi.string(),
        paymentType: Joi.string(),
        hours: Joi.object().keys({
          monday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          tuesday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          wednesday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          thursday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          friday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          saturday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          sunday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
        }),
        works: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string(),
          description: Joi.string(),
          price: Joi.number(),
          attendance: Joi.object().keys({
            type: Joi.string(),
            address: {
              street: Joi.string(),
              number: Joi.number(),
              district: Joi.string(),
              zipcode: Joi.number(),
              city: Joi.string(),
              state: Joi.string(),
            },
          }),
          feedbacks: Joi.array().items(Joi.object().keys({
            _id: Joi.string(),
            user: Joi.string(),
            stars: Joi.number(),
            comment: Joi.string(),
            createdAt: Joi.date().iso(),
          })),
          tags: Joi.array().items(Joi.string()),
        })),
        status: Joi.string(),
      });
      request
                .get('/jobs/5921ea44f28eca1caba16c5c')
                .end((err, res) => {
                  joiAssert(res.body, job);
                  done(err);
                });
    });
  });

  describe('Route POST /jobs/', () => {
    it('Cria um novo Job', (done) => {
      const defaultJobs2 = {
        user: '5921ea44f28eca1caba16c5c',
        fantasyName: 'fantasyName2',
        job: 'job2',
        category: 'category2',
        paymentType: 'CREDIT',
        hours: {
          monday: {
            open: '08:00',
            close: '16:00',
          },
          tuesday: {
            open: '08:00',
            close: '16:00',
          },
          wednesday: {
            open: '08:00',
            close: '16:00',
          },
          thursday: {
            open: '08:00',
            close: '16:00',
          },
          friday: {
            open: '08:00',
            close: '16:00',
          },
          saturday: {
            open: '08:00',
            close: '16:00',
          },
          sunday: {
            open: '08:00',
            close: '16:00',
          },
        },
        works: [{
          name: 'jobs.name2',
          description: 'description2',
          price: 100,
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
          tags: ['TAGS2'],
          feedbacks: [{
            user: '5921ea44f28eca1caba16c5c',
            stars: 2,
            comment: 'feedbacks.comment2',
          }],
        }],
        status: 'ACTIVE',
      };
      const job = Joi.object().keys({
        _id: Joi.string(),
        __v: Joi.number(),
        updatedAt: Joi.date().iso(),
        createdAt: Joi.date().iso(),

        user: Joi.string(),
        fantasyName: Joi.string(),
        job: Joi.string(),
        category: Joi.string(),
        paymentType: Joi.string(),
        hours: Joi.object().keys({
          monday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          tuesday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          wednesday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          thursday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          friday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          saturday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
          sunday: Joi.object().keys({
            open: Joi.string(),
            close: Joi.string(),
          }),
        }),
        works: Joi.array().items(Joi.object().keys({
          _id: Joi.string(),
          name: Joi.string(),
          description: Joi.string(),
          price: Joi.number(),
          attendance: Joi.object().keys({
            type: Joi.string(),
            address: {
              street: Joi.string(),
              number: Joi.number(),
              district: Joi.string(),
              zipcode: Joi.number(),
              city: Joi.string(),
              state: Joi.string(),
            },
          }),
          feedbacks: Joi.array().items(Joi.object().keys({
            _id: Joi.string(),
            user: Joi.string(),
            stars: Joi.number(),
            comment: Joi.string(),
            createdAt: Joi.date().iso(),
          })),
          tags: Joi.array().items(Joi.string()),
        })),
        status: Joi.string(),
      });

      request
                .post('/jobs')
                .send(defaultJobs2)
                .end((err, res) => {
                  joiAssert(res.body, job);
                  done(err);
                });
    });
  });

  describe('Route PUT /jobs/{user}', () => {
    it('Atualiza um Job', (done) => {
      const updateJob = {
        fantasyName: 'fantasyName3',
      };

      const updatedCount = Joi.object().keys({
        ok: Joi.number(),
        nModified: Joi.number(),
        n: Joi.number(),
      });

      request
                .put('/users/5921ea44f28eca1caba16c5c')
                .send(updateJob)
                .end((err, res) => {
                  joiAssert(res.body, updatedCount);
                  done(err);
                });
    });
  });

  describe('Route DELETE /jobs/{user}', () => {
    it('Remove um Job (Faz o atributo STATUS = DISABLED)', (done) => {
      request
                .delete('/jobs/5921ea44f28eca1caba16c5c')
                .end((err, res) => {
                  expect(res.statusCode).to.be.eql(204);

                  done(err);
                });
    });
  });
});
