/**
 * Created by kennedy on 23/05/17.
 */
export default mongoose => mongoose.model('requests', new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
  },
  works: [{
    job: {
      type: mongoose.Schema.Types.ObjectId, ref: 'jobs',
    },
    status: {
      type: String,
      enum: ['OPEN', 'CANCELED', 'FINALIZED'],
      default: 'OPEN',
    },
    price: Number,
    paymentType: {
      type: String,
      enum: ['CREDIT', 'DEBIT', 'MONEY'],
      required: true,
      defalt: 'MONEY',
    },
    dateAttendance: Date,
    attendance: {
      type: {
        type: String,
        enum: ['RESIDENCE', 'ESTABLISHMENT', 'ONLINE'],
        required: true,
      },
      address: {
        street: {
          type: String,
        },
        number: {
          type: Number,
        },
        district: {
          type: String,
        },
        zipcode: {
          type: Number,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
      },
    },
  }, {
    timestamps: true,
  }],
}, {
  timestamps: true,
}));
