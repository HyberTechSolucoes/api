/**
 * Created by kennedy on 13/05/17.
 */
export default mongoose => mongoose.model('pessoas', new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  senha: { type: String, required: true },
  nascimento: Date,
  endereco: [{
    rua: String,
    numero: Number,
    bairro: String,
    cep: Number,
    cidade: String,
    estado: String,
  }, { timestamps: true }],
  dispositivos: [{
    tipo: { type: String, enum: ['ANDROID', 'IOS'] },
    token: String,
    ultimoAcesso: Date,
  }, { timestamps: true }],
    // favoriros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servicos' }],
  ativo: { type: Boolean, default: true },
}, { timestamps: true }));
