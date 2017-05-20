/**
 * Created by kennedy on 13/05/17.
 */
const usersSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    senha: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date
    },
    endereco: [{
        rua: {
            type: String
        },
        numero: {
            type: Number
        },
        bairro: {
            type: String
        },
        cep: {
            type: Number
        },
        cidade: {
            type: String
        },
        estado: {
            type: String
        },
    }, {
        timestamps: true
    }],
    dispositivos: [{
        tipo: {
            type: String,
            enum: ['ANDROID', 'IOS']
        },
        token: {
            type: String
        },
        ultimoAcesso: {
            type: Date
        },
    }, {
        timestamps: true
    }],
    // favoriros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servicos' }],
    ativo: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

usersSchema.plugin()

export default mongoose => mongoose.model('users', usersSchema);
