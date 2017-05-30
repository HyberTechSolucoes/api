/**
 * Created by kennedy on 21/05/17.
 */
describe('Routes Jobs', () => {
    const Jobs = app.datasource.models.Jobs;
    const defaultJob01 = {
        user: '5921ea44f28eca1caba16c5c',
        fantasyName: 'André Rosa',
        job: 'Cabeleireiro',
        category: 'BELEZA',
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
                open: '00:00',
                close: '00:00',
            },
            sunday: {
                open: '00:00',
                close: '00:00',
            },
        },
        works: [{
            name: 'Corte de cabelo',
            description: 'Descrição do serviço',
            price: 100,
            attendance: {
                type: 'RESIDENCE',
                address: {
                    street: 'Rua ...',
                    number: 123,
                    district: 'Bairro ...',
                    zipcode: 12345678,
                    city: 'Cidade ...',
                    state: 'SP',
                },
            },
            tags: ['CABELEIREIRO', 'CORTE DE CABELO', 'CABELO'],
            feedbacks: [{
                user: '5921ea44f28eca1caba16c5c',
                stars: 4.5,
                comment: 'Muito bom!',
            }],
        }],
        status: 'ACTIVE',
    };
    const defaultJob02 = {
        user: '2921ea44f28eca1caba16c5c',
        fantasyName: 'Danillo Lange',
        job: 'Encanador',
        category: 'CONSTRUCAO',
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
                open: '00:00',
                close: '00:00',
            },
            sunday: {
                open: '00:00',
                close: '00:00',
            },
        },
        works: [{
            name: 'Conserto de encanamentos',
            description: 'Descrição do serviço',
            price: 100,
            attendance: {
                type: 'RESIDENCE',
                address: {
                    street: 'Rua ...',
                    number: 123,
                    district: 'Bairro ...',
                    zipcode: 12345678,
                    city: 'Cidade ...',
                    state: 'SP',
                },
            },
            tags: ['ENCANAMENTOS', 'CANO FURADO'],
            feedbacks: [{
                user: '5921ea44f28eca1caba16c5c',
                stars: 4.5,
                comment: 'Muito bom!',
            }],
        }],
        status: 'ACTIVE',
    };

    beforeEach((done) => {
        Jobs
            .remove({})
            .then(() => Jobs.create(defaultJob01))
            .then(() => Jobs.create(defaultJob02))
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
                        .to.be.eql(defaultJob01.fantasyName);
                    expect(res.body[0].job)
                        .to.be.eql(defaultJob01.job);
                    expect(res.body[0].category)
                        .to.be.eql(defaultJob01.category);
                    expect(res.body[0].paymentType)
                        .to.be.eql(defaultJob01.paymentType);

                    // monday
                    expect(res.body[0].hours.monday.open)
                        .to.be.eql(defaultJob01.hours.monday.open);
                    expect(res.body[0].hours.monday.close)
                        .to.be.eql(defaultJob01.hours.monday.close);
                    // tuesday
                    expect(res.body[0].hours.tuesday.open)
                        .to.be.eql(defaultJob01.hours.tuesday.open);
                    expect(res.body[0].hours.tuesday.close)
                        .to.be.eql(defaultJob01.hours.tuesday.close);
                    // wednesday
                    expect(res.body[0].hours.wednesday.open)
                        .to.be.eql(defaultJob01.hours.wednesday.open);
                    expect(res.body[0].hours.wednesday.close)
                        .to.be.eql(defaultJob01.hours.wednesday.close);
                    // thursday
                    expect(res.body[0].hours.thursday.open)
                        .to.be.eql(defaultJob01.hours.thursday.open);
                    expect(res.body[0].hours.thursday.close)
                        .to.be.eql(defaultJob01.hours.thursday.close);
                    // friday
                    expect(res.body[0].hours.friday.open)
                        .to.be.eql(defaultJob01.hours.friday.open);
                    expect(res.body[0].hours.friday.close)
                        .to.be.eql(defaultJob01.hours.friday.close);
                    // saturday
                    expect(res.body[0].hours.saturday.open)
                        .to.be.eql(defaultJob01.hours.saturday.open);
                    expect(res.body[0].hours.saturday.close)
                        .to.be.eql(defaultJob01.hours.saturday.close);
                    // sunday
                    expect(res.body[0].hours.sunday.open)
                        .to.be.eql(defaultJob01.hours.sunday.open);
                    expect(res.body[0].hours.sunday.close)
                        .to.be.eql(defaultJob01.hours.sunday.close);

                    // works
                    expect(res.body[0].works[0].name)
                        .to.be.eql(defaultJob01.works[0].name);
                    expect(res.body[0].works[0].description)
                        .to.be.eql(defaultJob01.works[0].description);
                    expect(res.body[0].works[0].price)
                        .to.be.eql(defaultJob01.works[0].price);
                    expect(res.body[0].works[0].attendance.type)
                        .to.be.eql(defaultJob01.works[0].attendance.type);
                    expect(res.body[0].works[0].attendance.address.street)
                        .to.be.eql(defaultJob01.works[0].attendance.address.street);
                    expect(res.body[0].works[0].attendance.address.number)
                        .to.be.eql(defaultJob01.works[0].attendance.address.number);
                    expect(res.body[0].works[0].attendance.address.district)
                        .to.be.eql(defaultJob01.works[0].attendance.address.district);
                    expect(res.body[0].works[0].attendance.address.zipcode)
                        .to.be.eql(defaultJob01.works[0].attendance.address.zipcode);
                    expect(res.body[0].works[0].attendance.address.city)
                        .to.be.eql(defaultJob01.works[0].attendance.address.city);
                    expect(res.body[0].works[0].attendance.address.state)
                        .to.be.eql(defaultJob01.works[0].attendance.address.state);

                    expect(res.body[0].works[0].tags)
                        .to.be.eql(defaultJob01.works[0].tags);
                    expect(res.body[0].works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob01.works[0].feedbacks[0].user);
                    expect(res.body[0].works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob01.works[0].feedbacks[0].stars);
                    expect(res.body[0].works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob01.works[0].feedbacks[0].comment);

                    // jobs
                    expect(res.body[0].status)
                        .to.be.eql(defaultJob01.status);

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
                        .to.be.eql(defaultJob01.fantasyName);
                    expect(res.body.job)
                        .to.be.eql(defaultJob01.job);
                    expect(res.body.category)
                        .to.be.eql(defaultJob01.category);
                    expect(res.body.paymentType)
                        .to.be.eql(defaultJob01.paymentType);
                    // monday
                    expect(res.body.hours.monday.open)
                        .to.be.eql(defaultJob01.hours.monday.open);
                    expect(res.body.hours.monday.close)
                        .to.be.eql(defaultJob01.hours.monday.close);
                    // tuesday
                    expect(res.body.hours.tuesday.open)
                        .to.be.eql(defaultJob01.hours.tuesday.open);
                    expect(res.body.hours.tuesday.close)
                        .to.be.eql(defaultJob01.hours.tuesday.close);
                    // wednesday
                    expect(res.body.hours.wednesday.open)
                        .to.be.eql(defaultJob01.hours.wednesday.open);
                    expect(res.body.hours.wednesday.close)
                        .to.be.eql(defaultJob01.hours.wednesday.close);
                    // thursday
                    expect(res.body.hours.thursday.open)
                        .to.be.eql(defaultJob01.hours.thursday.open);
                    expect(res.body.hours.thursday.close)
                        .to.be.eql(defaultJob01.hours.thursday.close);
                    // friday
                    expect(res.body.hours.friday.open)
                        .to.be.eql(defaultJob01.hours.friday.open);
                    expect(res.body.hours.friday.close)
                        .to.be.eql(defaultJob01.hours.friday.close);
                    // saturday
                    expect(res.body.hours.saturday.open)
                        .to.be.eql(defaultJob01.hours.saturday.open);
                    expect(res.body.hours.saturday.close)
                        .to.be.eql(defaultJob01.hours.saturday.close);
                    // sunday
                    expect(res.body.hours.sunday.open)
                        .to.be.eql(defaultJob01.hours.sunday.open);
                    expect(res.body.hours.sunday.close)
                        .to.be.eql(defaultJob01.hours.sunday.close);

                    // works
                    expect(res.body.works[0].name)
                        .to.be.eql(defaultJob01.works[0].name);
                    expect(res.body.works[0].description)
                        .to.be.eql(defaultJob01.works[0].description);
                    expect(res.body.works[0].price)
                        .to.be.eql(defaultJob01.works[0].price);
                    expect(res.body.works[0].attendance.type)
                        .to.be.eql(defaultJob01.works[0].attendance.type);
                    expect(res.body.works[0].attendance.address.street)
                        .to.be.eql(defaultJob01.works[0].attendance.address.street);
                    expect(res.body.works[0].attendance.address.number)
                        .to.be.eql(defaultJob01.works[0].attendance.address.number);
                    expect(res.body.works[0].attendance.address.district)
                        .to.be.eql(defaultJob01.works[0].attendance.address.district);
                    expect(res.body.works[0].attendance.address.zipcode)
                        .to.be.eql(defaultJob01.works[0].attendance.address.zipcode);
                    expect(res.body.works[0].attendance.address.city)
                        .to.be.eql(defaultJob01.works[0].attendance.address.city);
                    expect(res.body.works[0].attendance.address.state)
                        .to.be.eql(defaultJob01.works[0].attendance.address.state);
                    expect(res.body.works[0].tags)
                        .to.be.eql(defaultJob01.works[0].tags);
                    expect(res.body.works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob01.works[0].feedbacks[0].user);
                    expect(res.body.works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob01.works[0].feedbacks[0].stars);
                    expect(res.body.works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob01.works[0].feedbacks[0].comment);

                    // jobs
                    expect(res.body.status)
                        .to.be.eql(defaultJob01.status);

                    done(err);
                });
        });
    });
    describe('Route GET /jobs/find/category/{category}/filters', () => {
        it('Retorna uma lista de Jobs por categoria', (done) => {
            request
                .get('/jobs/find/category/CONSTRUCAO/?fantasyName=1')
                .end((err, res) => {
                    expect(res.body[0].fantasyName)
                        .to.be.eql(defaultJob02.fantasyName);
                    expect(res.body[0].job)
                        .to.be.eql(defaultJob02.job);
                    expect(res.body[0].category)
                        .to.be.eql(defaultJob02.category);
                    expect(res.body[0].paymentType)
                        .to.be.eql(defaultJob02.paymentType);
                    // monday
                    expect(res.body[0].hours.monday.open)
                        .to.be.eql(defaultJob02.hours.monday.open);
                    expect(res.body[0].hours.monday.close)
                        .to.be.eql(defaultJob02.hours.monday.close);
                    // tuesday
                    expect(res.body[0].hours.tuesday.open)
                        .to.be.eql(defaultJob02.hours.tuesday.open);
                    expect(res.body[0].hours.tuesday.close)
                        .to.be.eql(defaultJob02.hours.tuesday.close);
                    // wednesday
                    expect(res.body[0].hours.wednesday.open)
                        .to.be.eql(defaultJob02.hours.wednesday.open);
                    expect(res.body[0].hours.wednesday.close)
                        .to.be.eql(defaultJob02.hours.wednesday.close);
                    // thursday
                    expect(res.body[0].hours.thursday.open)
                        .to.be.eql(defaultJob02.hours.thursday.open);
                    expect(res.body[0].hours.thursday.close)
                        .to.be.eql(defaultJob02.hours.thursday.close);
                    // friday
                    expect(res.body[0].hours.friday.open)
                        .to.be.eql(defaultJob02.hours.friday.open);
                    expect(res.body[0].hours.friday.close)
                        .to.be.eql(defaultJob02.hours.friday.close);
                    // saturday
                    expect(res.body[0].hours.saturday.open)
                        .to.be.eql(defaultJob02.hours.saturday.open);
                    expect(res.body[0].hours.saturday.close)
                        .to.be.eql(defaultJob02.hours.saturday.close);
                    // sunday
                    expect(res.body[0].hours.sunday.open)
                        .to.be.eql(defaultJob02.hours.sunday.open);
                    expect(res.body[0].hours.sunday.close)
                        .to.be.eql(defaultJob02.hours.sunday.close);

                    // works
                    expect(res.body[0].works[0].name)
                        .to.be.eql(defaultJob02.works[0].name);
                    expect(res.body[0].works[0].description)
                        .to.be.eql(defaultJob02.works[0].description);
                    expect(res.body[0].works[0].price)
                        .to.be.eql(defaultJob02.works[0].price);
                    expect(res.body[0].works[0].attendance.type)
                        .to.be.eql(defaultJob02.works[0].attendance.type);
                    expect(res.body[0].works[0].attendance.address.street)
                        .to.be.eql(defaultJob02.works[0].attendance.address.street);
                    expect(res.body[0].works[0].attendance.address.number)
                        .to.be.eql(defaultJob02.works[0].attendance.address.number);
                    expect(res.body[0].works[0].attendance.address.district)
                        .to.be.eql(defaultJob02.works[0].attendance.address.district);
                    expect(res.body[0].works[0].attendance.address.zipcode)
                        .to.be.eql(defaultJob02.works[0].attendance.address.zipcode);
                    expect(res.body[0].works[0].attendance.address.city)
                        .to.be.eql(defaultJob02.works[0].attendance.address.city);
                    expect(res.body[0].works[0].attendance.address.state)
                        .to.be.eql(defaultJob02.works[0].attendance.address.state);
                    expect(res.body[0].works[0].tags)
                        .to.be.eql(defaultJob02.works[0].tags);
                    expect(res.body[0].works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].user);
                    expect(res.body[0].works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].stars);
                    expect(res.body[0].works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].comment);

                    // jobs
                    expect(res.body[0].status)
                        .to.be.eql(defaultJob02.status);

                    done(err);
                });
        });
    });
    describe('Route GET /jobs/find/works/{name}/filters', () => {
        it('Retorna uma lista de Jobs por works', (done) => {
            request
                .get('/jobs/find/works/Conserto de encanamentos/?name=1')
                .end((err, res) => {
                console.log(JSON.stringify(res.body));
                    expect(res.body[0].fantasyName)
                        .to.be.eql(defaultJob02.fantasyName);
                    expect(res.body[0].job)
                        .to.be.eql(defaultJob02.job);
                    expect(res.body[0].category)
                        .to.be.eql(defaultJob02.category);
                    expect(res.body[0].paymentType)
                        .to.be.eql(defaultJob02.paymentType);
                    // monday
                    expect(res.body[0].hours.monday.open)
                        .to.be.eql(defaultJob02.hours.monday.open);
                    expect(res.body[0].hours.monday.close)
                        .to.be.eql(defaultJob02.hours.monday.close);
                    // tuesday
                    expect(res.body[0].hours.tuesday.open)
                        .to.be.eql(defaultJob02.hours.tuesday.open);
                    expect(res.body[0].hours.tuesday.close)
                        .to.be.eql(defaultJob02.hours.tuesday.close);
                    // wednesday
                    expect(res.body[0].hours.wednesday.open)
                        .to.be.eql(defaultJob02.hours.wednesday.open);
                    expect(res.body[0].hours.wednesday.close)
                        .to.be.eql(defaultJob02.hours.wednesday.close);
                    // thursday
                    expect(res.body[0].hours.thursday.open)
                        .to.be.eql(defaultJob02.hours.thursday.open);
                    expect(res.body[0].hours.thursday.close)
                        .to.be.eql(defaultJob02.hours.thursday.close);
                    // friday
                    expect(res.body[0].hours.friday.open)
                        .to.be.eql(defaultJob02.hours.friday.open);
                    expect(res.body[0].hours.friday.close)
                        .to.be.eql(defaultJob02.hours.friday.close);
                    // saturday
                    expect(res.body[0].hours.saturday.open)
                        .to.be.eql(defaultJob02.hours.saturday.open);
                    expect(res.body[0].hours.saturday.close)
                        .to.be.eql(defaultJob02.hours.saturday.close);
                    // sunday
                    expect(res.body[0].hours.sunday.open)
                        .to.be.eql(defaultJob02.hours.sunday.open);
                    expect(res.body[0].hours.sunday.close)
                        .to.be.eql(defaultJob02.hours.sunday.close);

                    // works
                    expect(res.body[0].works[0].name)
                        .to.be.eql(defaultJob02.works[0].name);
                    expect(res.body[0].works[0].description)
                        .to.be.eql(defaultJob02.works[0].description);
                    expect(res.body[0].works[0].price)
                        .to.be.eql(defaultJob02.works[0].price);
                    expect(res.body[0].works[0].attendance.type)
                        .to.be.eql(defaultJob02.works[0].attendance.type);
                    expect(res.body[0].works[0].attendance.address.street)
                        .to.be.eql(defaultJob02.works[0].attendance.address.street);
                    expect(res.body[0].works[0].attendance.address.number)
                        .to.be.eql(defaultJob02.works[0].attendance.address.number);
                    expect(res.body[0].works[0].attendance.address.district)
                        .to.be.eql(defaultJob02.works[0].attendance.address.district);
                    expect(res.body[0].works[0].attendance.address.zipcode)
                        .to.be.eql(defaultJob02.works[0].attendance.address.zipcode);
                    expect(res.body[0].works[0].attendance.address.city)
                        .to.be.eql(defaultJob02.works[0].attendance.address.city);
                    expect(res.body[0].works[0].attendance.address.state)
                        .to.be.eql(defaultJob02.works[0].attendance.address.state);
                    expect(res.body[0].works[0].tags)
                        .to.be.eql(defaultJob02.works[0].tags);
                    expect(res.body[0].works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].user);
                    expect(res.body[0].works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].stars);
                    expect(res.body[0].works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].comment);

                    // jobs
                    expect(res.body[0].status)
                        .to.be.eql(defaultJob02.status);

                    done(err);
                });
        });
    });

    describe('Route POST /jobs/', () => {
        it('Cria uma novo Jobs', (done) => {
            const defaultJob02 = {
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
                    price: 20,
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
                        stars: 1,
                        comment: 'feedbacks.comment2',
                    }],
                }],
                status: 'ACTIVE',
            };

            request
                .post('/jobs')
                .send(defaultJob02)
                .end((err, res) => {
                    expect(res.body.fantasyName)
                        .to.be.eql(defaultJob02.fantasyName);
                    expect(res.body.job)
                        .to.be.eql(defaultJob02.job);
                    expect(res.body.category)
                        .to.be.eql(defaultJob02.category);
                    expect(res.body.paymentType)
                        .to.be.eql(defaultJob02.paymentType);
                    // monday
                    expect(res.body.hours.monday.open)
                        .to.be.eql(defaultJob02.hours.monday.open);
                    expect(res.body.hours.monday.close)
                        .to.be.eql(defaultJob02.hours.monday.close);
                    // tuesday
                    expect(res.body.hours.tuesday.open)
                        .to.be.eql(defaultJob02.hours.tuesday.open);
                    expect(res.body.hours.tuesday.close)
                        .to.be.eql(defaultJob02.hours.tuesday.close);
                    // wednesday
                    expect(res.body.hours.wednesday.open)
                        .to.be.eql(defaultJob02.hours.wednesday.open);
                    expect(res.body.hours.wednesday.close)
                        .to.be.eql(defaultJob02.hours.wednesday.close);
                    // thursday
                    expect(res.body.hours.thursday.open)
                        .to.be.eql(defaultJob02.hours.thursday.open);
                    expect(res.body.hours.thursday.close)
                        .to.be.eql(defaultJob02.hours.thursday.close);
                    // friday
                    expect(res.body.hours.friday.open)
                        .to.be.eql(defaultJob02.hours.friday.open);
                    expect(res.body.hours.friday.close)
                        .to.be.eql(defaultJob02.hours.friday.close);
                    // saturday
                    expect(res.body.hours.saturday.open)
                        .to.be.eql(defaultJob02.hours.saturday.open);
                    expect(res.body.hours.saturday.close)
                        .to.be.eql(defaultJob02.hours.saturday.close);
                    // sunday
                    expect(res.body.hours.sunday.open)
                        .to.be.eql(defaultJob02.hours.sunday.open);
                    expect(res.body.hours.sunday.close)
                        .to.be.eql(defaultJob02.hours.sunday.close);

                    // works
                    expect(res.body.works[0].name)
                        .to.be.eql(defaultJob02.works[0].name);
                    expect(res.body.works[0].description)
                        .to.be.eql(defaultJob02.works[0].description);
                    expect(res.body.works[0].price)
                        .to.be.eql(defaultJob02.works[0].price);
                    expect(res.body.works[0].attendance.type)
                        .to.be.eql(defaultJob02.works[0].attendance.type);
                    expect(res.body.works[0].attendance.address.street)
                        .to.be.eql(defaultJob02.works[0].attendance.address.street);
                    expect(res.body.works[0].attendance.address.number)
                        .to.be.eql(defaultJob02.works[0].attendance.address.number);
                    expect(res.body.works[0].attendance.address.district)
                        .to.be.eql(defaultJob02.works[0].attendance.address.district);
                    expect(res.body.works[0].attendance.address.zipcode)
                        .to.be.eql(defaultJob02.works[0].attendance.address.zipcode);
                    expect(res.body.works[0].attendance.address.city)
                        .to.be.eql(defaultJob02.works[0].attendance.address.city);
                    expect(res.body.works[0].attendance.address.state)
                        .to.be.eql(defaultJob02.works[0].attendance.address.state);
                    expect(res.body.works[0].tags)
                        .to.be.eql(defaultJob02.works[0].tags);
                    expect(res.body.works[0].feedbacks[0].user)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].user);
                    expect(res.body.works[0].feedbacks[0].stars)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].stars);
                    expect(res.body.works[0].feedbacks[0].comment)
                        .to.be.eql(defaultJob02.works[0].feedbacks[0].comment);

                    // jobs
                    expect(res.body.status)
                        .to.be.eql(defaultJob02.status);

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
