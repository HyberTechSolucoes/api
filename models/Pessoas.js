/**
 * Created by kennedy on 13/05/17.
 */
export default (mongoose, DataType) => {
    return mongoose.model('pessoas', new mongoose.Schema({
        nome: String,
        sobrenome: String,
        email: String,
        senha: String,
        nascimento: Date,
        endereco: [{
            id: Number,
            rua: String,
            numero: String,
            bairro: String,
            cep: Number,
            cidade: String,
            estado: String
        }],
        dispositivos: [{
            tipo: {type: String, enum: ["ANDROID", "IOS"]},
            token: String,
            ultimoAcesso: Date,
        }],
        favoriros: [{ type: Schema.Types.ObjectId, ref: 'Servicos' }],
        ativo: Boolean,
        dataInsert: Date,
        dataUpdate: Date
    }));    
};
