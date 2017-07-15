/**
 * Created by kennedy on 18/05/17.
 */
describe('Routes Users', () => {
    const Users = app.datasource.models.Users;
    const defaultUser = {
        name: 'Nome default',
        local: {
            email: 'email@default.com.br',
            password: 'Senha default'
        },
        google: {
            id: 'id-google',
            token: 'token-google',
            name: 'name-google',
            email: 'email-google',
        },
        facebook: {
            id: 'id-facebook',
            token: 'token-facebook',
            name: 'name-facebooke',
            email: 'email-facebook',
        },

        birthday: '03/22/1996',
        address: [{
            street: 'Rua default',
            number: 123,
            district: 'Bairro default',
            zipcode: 12345678,
            city: 'Cidade default',
            state: 'AB',
        }],
        device: [{
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
            const listUser = Joi.array().items(Joi.object().keys({
                _id: Joi.string(),
                __v: Joi.number(),
                updatedAt: Joi.date().iso(),
                createdAt: Joi.date().iso(),
                name: Joi.string(),

                local: Joi.object().keys({
                    email: Joi.string(),
                    password: Joi.string()
                }),
                google: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),
                facebook: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),

                birthday: Joi.date().iso(),
                address: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    street: Joi.string(),
                    number: Joi.number(),
                    district: Joi.string(),
                    zipcode: Joi.number(),
                    city: Joi.string(),
                    state: Joi.string(),
                })),
                devices: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    type: Joi.string(),
                    token: Joi.string(),
                    lastAcess: Joi.date().iso(),
                })),
                // favoriros: ['123'],
                active: Joi.boolean(),
            }));
            request
                .get('/users')
                .end((err, res) => {
                    joiAssert(res.body, listUser);
                    done(err);
                });
        });
    });

    describe('Route GET /users/{email}/{origem}', () => {
        it('Retorna um User com origem LOCAL', (done) => {
            const user = Joi.object().keys({
                _id: Joi.string(),
                __v: Joi.number(),
                updatedAt: Joi.date().iso(),
                createdAt: Joi.date().iso(),
                name: Joi.string(),

                local: Joi.object().keys({
                    email: Joi.string(),
                    password: Joi.string()
                }),
                google: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),
                facebook: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),

                birthday: Joi.date().iso(),
                address: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    street: Joi.string(),
                    number: Joi.number(),
                    district: Joi.string(),
                    zipcode: Joi.number(),
                    city: Joi.string(),
                    state: Joi.string(),
                })),
                devices: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    type: Joi.string(),
                    token: Joi.string(),
                    lastAcess: Joi.date().iso(),
                })),
                // favoriros: ['123'],
                active: Joi.boolean(),
            });
            request
                .get('/users/email@default.com.br')
                .end((err, res) => {
                    joiAssert(res.body, user);
                    done(err);
                });
        });

        it('Retorna um User com origem GOOGLE', (done) => {
            const user = Joi.object().keys({
                _id: Joi.string(),
                __v: Joi.number(),
                updatedAt: Joi.date().iso(),
                createdAt: Joi.date().iso(),
                name: Joi.string(),

                local: Joi.object().keys({
                    email: Joi.string(),
                    password: Joi.string()
                }),
                google: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),
                facebook: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),

                birthday: Joi.date().iso(),
                address: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    street: Joi.string(),
                    number: Joi.number(),
                    district: Joi.string(),
                    zipcode: Joi.number(),
                    city: Joi.string(),
                    state: Joi.string(),
                })),
                devices: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    type: Joi.string(),
                    token: Joi.string(),
                    lastAcess: Joi.date().iso(),
                })),
                // favoriros: ['123'],
                active: Joi.boolean(),
            });
            request
                .get('/users/email2-google/google')
                .end((err, res) => {
                    joiAssert(res.body, user);
                    done(err);
                });
        });

        it('Retorna um User com origem FACEBOOK', (done) => {
            const user = Joi.object().keys({
                _id: Joi.string(),
                __v: Joi.number(),
                updatedAt: Joi.date().iso(),
                createdAt: Joi.date().iso(),
                name: Joi.string(),

                local: Joi.object().keys({
                    email: Joi.string(),
                    password: Joi.string()
                }),
                google: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),
                facebook: Joi.object().keys({
                    id: Joi.string(),
                    token: Joi.string(),
                    name: Joi.string(),
                    email: Joi.string()
                }),

                birthday: Joi.date().iso(),
                address: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    street: Joi.string(),
                    number: Joi.number(),
                    district: Joi.string(),
                    zipcode: Joi.number(),
                    city: Joi.string(),
                    state: Joi.string(),
                })),
                devices: Joi.array().items(Joi.object().keys({
                    _id: Joi.string(),
                    type: Joi.string(),
                    token: Joi.string(),
                    lastAcess: Joi.date().iso(),
                })),
                // favoriros: ['123'],
                active: Joi.boolean(),
            });
            request
                .get('/users/email-facebook/facebook')
                .end((err, res) => {
                    joiAssert(res.body, user);
                    done(err);
                });
        });
    });
    //
    // describe('Route POST /users/', () => {
    //     it('Cria um novo User', (done) => {
    //         const defaultUser2 = {
    //             name: 'Nome default2',
    //             local: {
    //                 email: 'email2@default.com.br',
    //                 password: 'Senha default'
    //             },
    //             google: {
    //                 id: 'id2-google',
    //                 token: 'token2-google',
    //                 name: 'name2-google',
    //                 email: 'email2-google',
    //             },
    //             facebook: {
    //                 id: 'id2-facebook',
    //                 token: 'token2-facebook',
    //                 name: 'name2-facebooke',
    //                 email: 'email2-facebook',
    //             },
    //
    //             birthday: '03/22/1996',
    //             address: [{
    //                 street: 'Rua default2',
    //                 number: 123,
    //                 district: 'Bairro default2',
    //                 zipcode: 12345678,
    //                 city: 'Cidade default2',
    //                 state: 'AB',
    //             }],
    //             devices: [{
    //                 type: 'ANDROID',
    //                 token: 'Token default2',
    //                 lastAcess: new Date('03/22/1996 10:10'),
    //             }],
    //             // favoriros: ['123'],
    //             active: true,
    //         };
    //         const user = Joi.object().keys({
    //             _id: Joi.string(),
    //             __v: Joi.number(),
    //             updatedAt: Joi.date().iso(),
    //             createdAt: Joi.date().iso(),
    //             name: Joi.string(),
    //             local: Joi.object().keys({
    //                 email: Joi.string(),
    //                 password: Joi.string()
    //             }),
    //             google: Joi.object().keys({
    //                 id: Joi.string(),
    //                 token: Joi.string(),
    //                 name: Joi.string(),
    //                 email: Joi.string()
    //             }),
    //             facebook: Joi.object().keys({
    //                 id: Joi.string(),
    //                 token: Joi.string(),
    //                 name: Joi.string(),
    //                 email: Joi.string()
    //             }),
    //
    //             birthday: Joi.date().iso(),
    //             address: Joi.array().items(Joi.object().keys({
    //                 _id: Joi.string(),
    //                 street: Joi.string(),
    //                 number: Joi.number(),
    //                 district: Joi.string(),
    //                 zipcode: Joi.number(),
    //                 city: Joi.string(),
    //                 state: Joi.string(),
    //             })),
    //             devices: Joi.array().items(Joi.object().keys({
    //                 _id: Joi.string(),
    //                 type: Joi.string(),
    //                 token: Joi.string(),
    //                 lastAcess: Joi.date().iso(),
    //             })),
    //             // favoriros: ['123'],
    //             active: Joi.boolean(),
    //         });
    //
    //         request
    //             .post('/users')
    //             .send(defaultUser2)
    //             .end((err, res) => {
    //                 joiAssert(res.body, user);
    //                 done(err);
    //             });
    //     });
    // });
    //
    // describe('Route PUT /users/{email}', () => {
    //     it('Atualiza um User', (done) => {
    //         const updateUser = {
    //             name: 'Nome update',
    //         };
    //
    //         const updatedCount = Joi.object().keys({
    //             ok: Joi.number(),
    //             nModified: Joi.number(),
    //             n: Joi.number(),
    //         });
    //
    //         request
    //             .put('/users/email@default.com.br')
    //             .send(updateUser)
    //             .end((err, res) => {
    //                 joiAssert(res.body, updatedCount);
    //                 done(err);
    //             });
    //     });
    // });
    //
    // describe('Route DELETE /users/{email}', () => {
    //     it('Remove um User (Faz o atributo ATIVO = false)', (done) => {
    //         request
    //             .delete('/users/email@default.com.br')
    //             .end((err, res) => {
    //                 expect(res.statusCode).to.be.eql(204);
    //
    //                 done(err);
    //             });
    //     });
    // });
});
