/**
 * Created by kennedy on 07/05/17.
 */
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
    nascimento: Date,
    insert: Date
});

const Pessoa = mongoose.model('Pessoa', schema);

export default Pessoa;
