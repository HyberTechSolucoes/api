/**
 * Created by kennedy on 14/05/17.
 */
import JobsController from '../../../constrollers/jobs';

describe('Controllers: Jobs', () => {
  describe('Pega todos Job: getAll()', () => {
    it('Retorna uma lista de Jobs', () => {
      const Jobs = {
        find: td.function(),
      };
      const expectedResponse = [{
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
      }];

      td.when(Jobs.find({})).thenResolve(expectedResponse);

      const jobsController = new JobsController(Jobs);
      return jobsController.getAll()
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Pega Job: byUserId()', () => {
    it('Retorna um Job', () => {
      const Jobs = {
        findOne: td.function(),
      };
      const expectedResponse = [{
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
      }];

      td.when(Jobs.findOne({ user: '5921ea44f28eca1caba16c5c' })).thenResolve(expectedResponse);

      const jobsController = new JobsController(Jobs);
      return jobsController.getbyUserId({ user: '5921ea44f28eca1caba16c5c' })
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Cria um Job: create()', () => {
    it('Retorna a criacao de um Job', () => {
      const Jobs = {
        create: td.function(),
      };
      const requestBody = {
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
      const expectedResponse = [{
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
      }];

      td.when(Jobs.create(requestBody)).thenResolve(expectedResponse);

      const jobsController = new JobsController(Jobs);
      return jobsController.create(requestBody)
                .then((response) => {
                  expect(response.statusCode).to.be.eql(201);
                  expect(response.data).to.be.eql(expectedResponse);
                });
    });
  });

  describe('Atualiza um Job: update()', () => {
    it('Retorna o update de um Job', () => {
      const Jobs = {
        update: td.function(),
      };
      const requestBody = {
        fantasyName: 'fantasyName updated',
      };
      const expectedResponse = [{
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
      }];

      td.when(Jobs.update({ user: '5921ea44f28eca1caba16c5c' }, requestBody)).thenResolve(expectedResponse);

      const jobsController = new JobsController(Jobs);
      return jobsController.update({ user: '5921ea44f28eca1caba16c5c' }, requestBody)
                .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Deleta um Job: disable()', () => {
    it('Retorna o disabled de um Job', () => {
      const Jobs = {
        update: td.function(),
      };
      const expectedResponse = [{
        status: 'DISABLED',
      }];

      td.when(Jobs.update({ user: '5921ea44f28eca1caba16c5c' }, { status: 'DISABLED' })).thenResolve(expectedResponse);

      const jobsController = new JobsController(Jobs);
      return jobsController.disable({ user: '5921ea44f28eca1caba16c5c' })
                .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
