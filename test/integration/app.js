/**
 * Created by kennedy on 12/05/17.
 */
describe('Routes Pessoas', () => {
    const defaultPessoa = {
        id: 1,
        nome: 'Nome default',
        sobrenome: 'Sobrenome default',
        email: 'email@default.com.br'
    };

    describe('Route GET /pessoas', () => {
        it('Retorna uma lista de Pessoas', done => {

            request
                .get('/pessoas')
                .end((err, res) => {

                    expect(res.body[0].id).to.be.eql(defaultPessoa.id);
                    expect(res.body[0].nome).to.be.eql(defaultPessoa.nome);
                    expect(res.body[0].sobrenome).to.be.eql(defaultPessoa.sobrenome);
                    expect(res.body[0].email).to.be.eql(defaultPessoa.email);

                    done(err);
                });
        });
    });
});