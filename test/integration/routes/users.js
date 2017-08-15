/**
 * Created by kennedy on 12/05/17.
 */
describe('Routes Users', () => {
    const Users = app.datasource.models.Users;
    const defaultUser = {
        _id: '59221411d1df91548c875454',
        name: 'Nome default',
        email: 'email@default.com.br',
        password: 'Senha default',
        birthday: '03/22/1996',
        address: [{
            street: 'Rua default',
            number: 123,
            district: 'Bairro default',
            zipcode: 12345678,
            city: 'Cidade default',
            state: 'AB',
        }],
        devices: [{
            type: 'ANDROID',
            token: 'Token default',
            lastAcess: new Date('03/22/1996 10:10'),
        }],
        // favoriros: ['123'],
        active: true,
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
            request
                .get('/users')
                .end((err, res) => {
                    expect(res.body[0].name)
                        .to.be.eql(defaultUser.name);
                    expect(res.body[0].email)
                        .to.be.eql(defaultUser.email);
                    expect(res.body[0].password)
                        .to.be.eql(defaultUser.password);
                    // expect(res.body[0].birthday)
                    // .to.be.eql(defaultUser.birthday);
                    expect(res.body[0].address[0].id)
                        .to.be.eql(defaultUser.address[0].id);
                    expect(res.body[0].address[0].street)
                        .to.be.eql(defaultUser.address[0].street);
                    expect(res.body[0].address[0].number)
                        .to.be.eql(defaultUser.address[0].number);
                    expect(res.body[0].address[0].district)
                        .to.be.eql(defaultUser.address[0].district);
                    expect(res.body[0].address[0].zipcode)
                        .to.be.eql(defaultUser.address[0].zipcode);
                    expect(res.body[0].address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body[0].address[0].state)
                        .to.be.eql(defaultUser.address[0].state);
                    expect(res.body[0].address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body[0].devices[0].type)
                        .to.be.eql(defaultUser.devices[0].type);
                    expect(res.body[0].devices[0].token)
                        .to.be.eql(defaultUser.devices[0].token);
                    // expect(res.body[0].devices[0].lastAcess)
                    // .to.be.eql(defaultUser.devices[0].lastAcess);
                    // expect(res.body[0].favoriros[0])
                    // .to.be.eql(defaultUser.favoriros[0]);
                    expect(res.body[0].active)
                        .to.be.eql(defaultUser.active);

                    done(err);
                });
        });
    });

    describe('Route GET /users/{email}', () => {
        it('Retorna um User', (done) => {
            request
                .get('/users/email@default.com.br')
                .end((err, res) => {
                    expect(res.body.name)
                        .to.be.eql(defaultUser.name);
                    expect(res.body.email)
                        .to.be.eql(defaultUser.email);
                    expect(res.body.password)
                        .to.be.eql(defaultUser.password);
                    // expect(res.body.birthday)
                    // .to.be.eql(defaultUser.birthday);
                    expect(res.body.address[0].id)
                        .to.be.eql(defaultUser.address[0].id);
                    expect(res.body.address[0].street)
                        .to.be.eql(defaultUser.address[0].street);
                    expect(res.body.address[0].number)
                        .to.be.eql(defaultUser.address[0].number);
                    expect(res.body.address[0].district)
                        .to.be.eql(defaultUser.address[0].district);
                    expect(res.body.address[0].zipcode)
                        .to.be.eql(defaultUser.address[0].zipcode);
                    expect(res.body.address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body.address[0].state)
                        .to.be.eql(defaultUser.address[0].state);
                    expect(res.body.address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body.devices[0].type)
                        .to.be.eql(defaultUser.devices[0].type);
                    expect(res.body.devices[0].token)
                        .to.be.eql(defaultUser.devices[0].token);
                    // expect(res.body.devices[0].lastAcess)
                    // .to.be.eql(defaultUser.devices[0].lastAcess);
                    // expect(res.body.favoriros[0])
                    // .to.be.eql(defaultUser.favoriros[0]);
                    expect(res.body.active)
                        .to.be.eql(defaultUser.active);

                    done(err);
                });
        });
    });

    describe('Route POST /users/', () => {
        it('Cria uma novo User', (done) => {
            const defaultUser2 = {
                name: 'Nome default2',
                email: 'email@default2.com.br',
                password: 'Senha default2',
                birthday: '03/22/1996',
                address: [{
                    street: 'Rua default2',
                    number: 123,
                    district: 'Bairro default2',
                    zipcode: 12345678,
                    city: 'Cidade default2',
                    state: 'AB',
                }],
                devices: [{
                    type: 'ANDROID',
                    token: 'Token default2',
                    lastAcess: new Date('03/22/1996 10:10'),
                }],
                // favoriros: ['123'],
                active: true,
            };

            request
                .post('/users')
                .send(defaultUser2)
                .end((err, res) => {
                    expect(res.body.name)
                        .to.be.eql(defaultUser2.name);
                    expect(res.body.email)
                        .to.be.eql(defaultUser2.email);
                    expect(res.body.password)
                        .to.be.eql(defaultUser2.password);
                    // expect(res.body.birthday)
                    // .to.be.eql(defaultUser2.birthday);
                    expect(res.body.address[0].id)
                        .to.be.eql(defaultUser2.address[0].id);
                    expect(res.body.address[0].street)
                        .to.be.eql(defaultUser2.address[0].street);
                    expect(res.body.address[0].number)
                        .to.be.eql(defaultUser2.address[0].number);
                    expect(res.body.address[0].district)
                        .to.be.eql(defaultUser2.address[0].district);
                    expect(res.body.address[0].zipcode)
                        .to.be.eql(defaultUser2.address[0].zipcode);
                    expect(res.body.address[0].city)
                        .to.be.eql(defaultUser2.address[0].city);
                    expect(res.body.address[0].state)
                        .to.be.eql(defaultUser2.address[0].state);
                    expect(res.body.address[0].city)
                        .to.be.eql(defaultUser2.address[0].city);
                    expect(res.body.devices[0].type)
                        .to.be.eql(defaultUser2.devices[0].type);
                    expect(res.body.devices[0].token)
                        .to.be.eql(defaultUser2.devices[0].token);
                    // expect(res.body.devices[0].lastAcess)
                    // .to.be.eql(defaultUser2.devices[0].lastAcess);
                    expect(res.body.active)
                        .to.be.eql(defaultUser2.active);

                    done(err);
                });
        });
    });

    describe('Route PUT /users/{email}', () => {
        it('Atualiza um User', (done) => {
            const updateUser = {
                name: 'Nome update',
            };

            request
                .put('/users/email@default.com.br')
                .send(updateUser)
                .end((err, res) => {
                    expect(res.body).to.be.eql({ ok: 1, nModified: 1, n: 1 });

                    done(err);
                });
        });
    });

    describe('Route DELETE /users/{email}', () => {
        it('Remove um User (Faz o atributo ATIVO = false)', (done) => {
            request
                .delete('/users/email@default.com.br')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);

                    done(err);
                });
        });
    });
});
