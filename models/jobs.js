/**
 * Created by kennedy on 21/05/17.
 */
export default mongoose => mongoose.model('jobs', new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
  },
  fantasyName: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  hours: {
    monday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    tuesday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    wednesday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    thursday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    friday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    saturday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    sunday: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
    holidays: {
      open: String,
      intervalBegin: String,
      intervalFinish: String,
      close: String,
    },
  },
  works: [{
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    attendance: {
      type: String,
      enum: ['RESIDENCE', 'ESTABLISHMENT', 'ONLINE'],
      required: true,
    },
        // address: {
        //   type: mongoose.Schema.Types.ObjectId, ref: 'Users.endereco'
        // },
    tags: [String],
    feedbacks: [{
      user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
      },
      stars: Number,
      comment: String,
      createdAt: {
        type: Date,
        defalt: new Date(),
      },
    }, {
      timestamps: true,
    }],
  }, {
    timestamps: true,
  }],
  status: {
    type: String,
    enum: ['ACTIVE', 'DISABLED', 'REMOVED'],
    required: true,
    defalt: 'ACTIVE',
  },
}, {
  timestamps: true,
}));
