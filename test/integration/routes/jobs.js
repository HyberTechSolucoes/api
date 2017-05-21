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
    hours: {
      monday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      tuesday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      wednesday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      thursday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      friday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      saturday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      sunday: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
      holidays: {
        open: '08:00',
        intervalBegin: '12:00',
        intervalFinish: '13:00',
        close: '16:00',
      },
    },
    works: [{
      name: 'jobs.name',
      description: 'description',
      price: 100,
      attendance: 'RESIDENCE',
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
      request
                .get('/jobs')
                .end((err, res) => {
                  expect(res.body[0].fantasyName)
                        .to.be.eql(defaultJob.fantasyName);
                  expect(res.body[0].job)
                        .to.be.eql(defaultJob.job);
                  expect(res.body[0].category)
                        .to.be.eql(defaultJob.category);

                    // monday
                  expect(res.body[0].hours.monday.open)
                        .to.be.eql(defaultJob.hours.monday.open);
                  expect(res.body[0].hours.monday.intervalBegin)
                        .to.be.eql(defaultJob.hours.monday.intervalBegin);
                  expect(res.body[0].hours.monday.intervalFinish)
                        .to.be.eql(defaultJob.hours.monday.intervalFinish);
                  expect(res.body[0].hours.monday.close)
                        .to.be.eql(defaultJob.hours.monday.close);
                    // tuesday
                  expect(res.body[0].hours.tuesday.open)
                        .to.be.eql(defaultJob.hours.tuesday.open);
                  expect(res.body[0].hours.tuesday.intervalBegin)
                        .to.be.eql(defaultJob.hours.tuesday.intervalBegin);
                  expect(res.body[0].hours.tuesday.intervalFinish)
                        .to.be.eql(defaultJob.hours.tuesday.intervalFinish);
                  expect(res.body[0].hours.tuesday.close)
                        .to.be.eql(defaultJob.hours.tuesday.close);
                    // wednesday
                  expect(res.body[0].hours.wednesday.open)
                        .to.be.eql(defaultJob.hours.wednesday.open);
                  expect(res.body[0].hours.wednesday.intervalBegin)
                        .to.be.eql(defaultJob.hours.wednesday.intervalBegin);
                  expect(res.body[0].hours.wednesday.intervalFinish)
                        .to.be.eql(defaultJob.hours.wednesday.intervalFinish);
                  expect(res.body[0].hours.wednesday.close)
                        .to.be.eql(defaultJob.hours.wednesday.close);
                    // thursday
                  expect(res.body[0].hours.thursday.open)
                        .to.be.eql(defaultJob.hours.thursday.open);
                  expect(res.body[0].hours.thursday.intervalBegin)
                        .to.be.eql(defaultJob.hours.thursday.intervalBegin);
                  expect(res.body[0].hours.thursday.intervalFinish)
                        .to.be.eql(defaultJob.hours.thursday.intervalFinish);
                  expect(res.body[0].hours.thursday.close)
                        .to.be.eql(defaultJob.hours.thursday.close);
                    // friday
                  expect(res.body[0].hours.friday.open)
                        .to.be.eql(defaultJob.hours.friday.open);
                  expect(res.body[0].hours.friday.intervalBegin)
                        .to.be.eql(defaultJob.hours.friday.intervalBegin);
                  expect(res.body[0].hours.friday.intervalFinish)
                        .to.be.eql(defaultJob.hours.friday.intervalFinish);
                  expect(res.body[0].hours.friday.close)
                        .to.be.eql(defaultJob.hours.friday.close);
                    // saturday
                  expect(res.body[0].hours.saturday.open)
                        .to.be.eql(defaultJob.hours.saturday.open);
                  expect(res.body[0].hours.saturday.intervalBegin)
                        .to.be.eql(defaultJob.hours.saturday.intervalBegin);
                  expect(res.body[0].hours.saturday.intervalFinish)
                        .to.be.eql(defaultJob.hours.saturday.intervalFinish);
                  expect(res.body[0].hours.saturday.close)
                        .to.be.eql(defaultJob.hours.saturday.close);
                    // sunday
                  expect(res.body[0].hours.sunday.open)
                        .to.be.eql(defaultJob.hours.sunday.open);
                  expect(res.body[0].hours.sunday.intervalBegin)
                        .to.be.eql(defaultJob.hours.sunday.intervalBegin);
                  expect(res.body[0].hours.sunday.intervalFinish)
                        .to.be.eql(defaultJob.hours.sunday.intervalFinish);
                  expect(res.body[0].hours.sunday.close)
                        .to.be.eql(defaultJob.hours.sunday.close);
                    // holidays
                  expect(res.body[0].hours.holidays.open)
                        .to.be.eql(defaultJob.hours.holidays.open);
                  expect(res.body[0].hours.holidays.intervalBegin)
                        .to.be.eql(defaultJob.hours.holidays.intervalBegin);
                  expect(res.body[0].hours.holidays.intervalFinish)
                        .to.be.eql(defaultJob.hours.holidays.intervalFinish);
                  expect(res.body[0].hours.holidays.close)
                        .to.be.eql(defaultJob.hours.holidays.close);

                    // works
                  expect(res.body[0].works[0].name)
                        .to.be.eql(defaultJob.works[0].name);
                  expect(res.body[0].works[0].description)
                        .to.be.eql(defaultJob.works[0].description);
                  expect(res.body[0].works[0].price)
                        .to.be.eql(defaultJob.works[0].price);
                  expect(res.body[0].works[0].attendance)
                        .to.be.eql(defaultJob.works[0].attendance);
                  expect(res.body[0].works[0].tags)
                        .to.be.eql(defaultJob.works[0].tags);
                  expect(res.body[0].works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob.works[0].feedbacks[0].user);
                  expect(res.body[0].works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob.works[0].feedbacks[0].stars);
                  expect(res.body[0].works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob.works[0].feedbacks[0].comment);

                    // jobs
                  expect(res.body[0].status)
                        .to.be.eql(defaultJob.status);

                  done(err);
                });
    });
  });

  describe('Route GET /jobs/{user}', () => {
    it('Retorna um Jobs', (done) => {
      request
                .get('/jobs/5921ea44f28eca1caba16c5c')
                .end((err, res) => {
                  expect(res.body.fantasyName)
                        .to.be.eql(defaultJob.fantasyName);
                  expect(res.body.job)
                        .to.be.eql(defaultJob.job);
                  expect(res.body.category)
                        .to.be.eql(defaultJob.category);

                    // monday
                  expect(res.body.hours.monday.open)
                        .to.be.eql(defaultJob.hours.monday.open);
                  expect(res.body.hours.monday.intervalBegin)
                        .to.be.eql(defaultJob.hours.monday.intervalBegin);
                  expect(res.body.hours.monday.intervalFinish)
                        .to.be.eql(defaultJob.hours.monday.intervalFinish);
                  expect(res.body.hours.monday.close)
                        .to.be.eql(defaultJob.hours.monday.close);
                    // tuesday
                  expect(res.body.hours.tuesday.open)
                        .to.be.eql(defaultJob.hours.tuesday.open);
                  expect(res.body.hours.tuesday.intervalBegin)
                        .to.be.eql(defaultJob.hours.tuesday.intervalBegin);
                  expect(res.body.hours.tuesday.intervalFinish)
                        .to.be.eql(defaultJob.hours.tuesday.intervalFinish);
                  expect(res.body.hours.tuesday.close)
                        .to.be.eql(defaultJob.hours.tuesday.close);
                    // wednesday
                  expect(res.body.hours.wednesday.open)
                        .to.be.eql(defaultJob.hours.wednesday.open);
                  expect(res.body.hours.wednesday.intervalBegin)
                        .to.be.eql(defaultJob.hours.wednesday.intervalBegin);
                  expect(res.body.hours.wednesday.intervalFinish)
                        .to.be.eql(defaultJob.hours.wednesday.intervalFinish);
                  expect(res.body.hours.wednesday.close)
                        .to.be.eql(defaultJob.hours.wednesday.close);
                    // thursday
                  expect(res.body.hours.thursday.open)
                        .to.be.eql(defaultJob.hours.thursday.open);
                  expect(res.body.hours.thursday.intervalBegin)
                        .to.be.eql(defaultJob.hours.thursday.intervalBegin);
                  expect(res.body.hours.thursday.intervalFinish)
                        .to.be.eql(defaultJob.hours.thursday.intervalFinish);
                  expect(res.body.hours.thursday.close)
                        .to.be.eql(defaultJob.hours.thursday.close);
                    // friday
                  expect(res.body.hours.friday.open)
                        .to.be.eql(defaultJob.hours.friday.open);
                  expect(res.body.hours.friday.intervalBegin)
                        .to.be.eql(defaultJob.hours.friday.intervalBegin);
                  expect(res.body.hours.friday.intervalFinish)
                        .to.be.eql(defaultJob.hours.friday.intervalFinish);
                  expect(res.body.hours.friday.close)
                        .to.be.eql(defaultJob.hours.friday.close);
                    // saturday
                  expect(res.body.hours.saturday.open)
                        .to.be.eql(defaultJob.hours.saturday.open);
                  expect(res.body.hours.saturday.intervalBegin)
                        .to.be.eql(defaultJob.hours.saturday.intervalBegin);
                  expect(res.body.hours.saturday.intervalFinish)
                        .to.be.eql(defaultJob.hours.saturday.intervalFinish);
                  expect(res.body.hours.saturday.close)
                        .to.be.eql(defaultJob.hours.saturday.close);
                    // sunday
                  expect(res.body.hours.sunday.open)
                        .to.be.eql(defaultJob.hours.sunday.open);
                  expect(res.body.hours.sunday.intervalBegin)
                        .to.be.eql(defaultJob.hours.sunday.intervalBegin);
                  expect(res.body.hours.sunday.intervalFinish)
                        .to.be.eql(defaultJob.hours.sunday.intervalFinish);
                  expect(res.body.hours.sunday.close)
                        .to.be.eql(defaultJob.hours.sunday.close);

                    // works
                  expect(res.body.works[0].name)
                        .to.be.eql(defaultJob.works[0].name);
                  expect(res.body.works[0].description)
                        .to.be.eql(defaultJob.works[0].description);
                  expect(res.body.works[0].price)
                        .to.be.eql(defaultJob.works[0].price);
                  expect(res.body.works[0].attendance)
                        .to.be.eql(defaultJob.works[0].attendance);
                  expect(res.body.works[0].tags)
                        .to.be.eql(defaultJob.works[0].tags);
                  expect(res.body.works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob.works[0].feedbacks[0].user);
                  expect(res.body.works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob.works[0].feedbacks[0].stars);
                  expect(res.body.works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob.works[0].feedbacks[0].comment);

                    // jobs
                  expect(res.body.status)
                        .to.be.eql(defaultJob.status);

                  done(err);
                });
    });
  });

  describe('Route POST /jobs/', () => {
    it('Cria uma novo Jobs', (done) => {
      const defaultJob2 = {
        user: '5921ea44f28eca1caba16c5c',
        fantasyName: 'fantasyName2',
        job: 'job2',
        category: 'category2',
        hours: {
          monday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          tuesday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          wednesday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          thursday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          friday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          saturday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          sunday: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
          holidays: {
            open: '08:00',
            intervalBegin: '12:00',
            intervalFinish: '13:00',
            close: '16:00',
          },
        },
        works: [{
          name: 'jobs.name2',
          description: 'description2',
          price: 20,
          attendance: 'RESIDENCE',
          tags: ['TAGS2'],
          feedbacks: [{
            user: '5921ea44f28eca1caba16c5c',
            stars: 1,
            comment: 'feedbacks.comment2',
          }],
        }],
        status: 'ACTIVE',
      };

      request
                .post('/jobs')
                .send(defaultJob2)
                .end((err, res) => {
                  expect(res.body.fantasyName)
                        .to.be.eql(defaultJob2.fantasyName);
                  expect(res.body.job)
                        .to.be.eql(defaultJob2.job);
                  expect(res.body.category)
                        .to.be.eql(defaultJob2.category);

                    // monday
                  expect(res.body.hours.monday.open)
                        .to.be.eql(defaultJob2.hours.monday.open);
                  expect(res.body.hours.monday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.monday.intervalBegin);
                  expect(res.body.hours.monday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.monday.intervalFinish);
                  expect(res.body.hours.monday.close)
                        .to.be.eql(defaultJob2.hours.monday.close);
                    // tuesday
                  expect(res.body.hours.tuesday.open)
                        .to.be.eql(defaultJob2.hours.tuesday.open);
                  expect(res.body.hours.tuesday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.tuesday.intervalBegin);
                  expect(res.body.hours.tuesday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.tuesday.intervalFinish);
                  expect(res.body.hours.tuesday.close)
                        .to.be.eql(defaultJob2.hours.tuesday.close);
                    // wednesday
                  expect(res.body.hours.wednesday.open)
                        .to.be.eql(defaultJob2.hours.wednesday.open);
                  expect(res.body.hours.wednesday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.wednesday.intervalBegin);
                  expect(res.body.hours.wednesday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.wednesday.intervalFinish);
                  expect(res.body.hours.wednesday.close)
                        .to.be.eql(defaultJob2.hours.wednesday.close);
                    // thursday
                  expect(res.body.hours.thursday.open)
                        .to.be.eql(defaultJob2.hours.thursday.open);
                  expect(res.body.hours.thursday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.thursday.intervalBegin);
                  expect(res.body.hours.thursday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.thursday.intervalFinish);
                  expect(res.body.hours.thursday.close)
                        .to.be.eql(defaultJob2.hours.thursday.close);
                    // friday
                  expect(res.body.hours.friday.open)
                        .to.be.eql(defaultJob2.hours.friday.open);
                  expect(res.body.hours.friday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.friday.intervalBegin);
                  expect(res.body.hours.friday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.friday.intervalFinish);
                  expect(res.body.hours.friday.close)
                        .to.be.eql(defaultJob2.hours.friday.close);
                    // saturday
                  expect(res.body.hours.saturday.open)
                        .to.be.eql(defaultJob2.hours.saturday.open);
                  expect(res.body.hours.saturday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.saturday.intervalBegin);
                  expect(res.body.hours.saturday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.saturday.intervalFinish);
                  expect(res.body.hours.saturday.close)
                        .to.be.eql(defaultJob2.hours.saturday.close);
                    // sunday
                  expect(res.body.hours.sunday.open)
                        .to.be.eql(defaultJob2.hours.sunday.open);
                  expect(res.body.hours.sunday.intervalBegin)
                        .to.be.eql(defaultJob2.hours.sunday.intervalBegin);
                  expect(res.body.hours.sunday.intervalFinish)
                        .to.be.eql(defaultJob2.hours.sunday.intervalFinish);
                  expect(res.body.hours.sunday.close)
                        .to.be.eql(defaultJob2.hours.sunday.close);
                    // holidays
                  expect(res.body.hours.holidays.open)
                        .to.be.eql(defaultJob2.hours.holidays.open);
                  expect(res.body.hours.holidays.intervalBegin)
                        .to.be.eql(defaultJob2.hours.holidays.intervalBegin);
                  expect(res.body.hours.holidays.intervalFinish)
                        .to.be.eql(defaultJob2.hours.holidays.intervalFinish);
                  expect(res.body.hours.holidays.close)
                        .to.be.eql(defaultJob2.hours.holidays.close);

                    // works
                  expect(res.body.works[0].name)
                        .to.be.eql(defaultJob2.works[0].name);
                  expect(res.body.works[0].description)
                        .to.be.eql(defaultJob2.works[0].description);
                  expect(res.body.works[0].price)
                        .to.be.eql(defaultJob2.works[0].price);
                  expect(res.body.works[0].attendance)
                        .to.be.eql(defaultJob2.works[0].attendance);
                  expect(res.body.works[0].tags)
                        .to.be.eql(defaultJob2.works[0].tags);
                  expect(res.body.works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob2.works[0].feedbacks[0].user);
                  expect(res.body.works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob2.works[0].feedbacks[0].stars);
                  expect(res.body.works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob2.works[0].feedbacks[0].comment);

                    // jobs
                  expect(res.body.status)
                        .to.be.eql(defaultJob2.status);

                  done(err);
                });
    });
  });

  describe('Route PUT /jobs/{user}', () => {
    it('Atualiza um Job', (done) => {
      const updateJob = {
        fantasyName: 'fantasyName update',
      };

      request
                .put('/jobs/5921ea44f28eca1caba16c5c')
                .send(updateJob)
                .end((err, res) => {
                  expect(res.body).to.be.eql({ ok: 1, nModified: 1, n: 1 });

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
