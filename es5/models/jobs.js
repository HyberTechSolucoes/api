'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by kennedy on 21/05/17.
 */
exports.default = function (mongoose) {
  return mongoose.model('jobs', new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId, ref: 'users'
    },
    fantasyName: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    paymentType: {
      type: String,
      enum: ['CREDIT', 'DEBIT', 'MONEY'],
      required: true,
      defalt: 'MONEY'
    },
    hours: {
      monday: {
        open: String,
        close: String
      },
      tuesday: {
        open: String,
        close: String
      },
      wednesday: {
        open: String,
        close: String
      },
      thursday: {
        open: String,
        close: String
      },
      friday: {
        open: String,
        close: String
      },
      saturday: {
        open: String,
        close: String
      },
      sunday: {
        open: String,
        close: String
      }
    },
    works: [{
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      attendance: {
        type: {
          type: String,
          enum: ['RESIDENCE', 'ESTABLISHMENT', 'ONLINE'],
          required: true
        },
        address: {
          street: {
            type: String
          },
          number: {
            type: Number
          },
          district: {
            type: String
          },
          zipcode: {
            type: Number
          },
          city: {
            type: String
          },
          state: {
            type: String
          }
        }
      },
      // address: {
      //   type: mongoose.Schema.Types.ObjectId, ref: 'Users.endereco'
      // },
      tags: [String],
      feedbacks: [{
        user: {
          type: mongoose.Schema.Types.ObjectId, ref: 'users'
        },
        stars: Number,
        comment: String,
        createdAt: {
          type: Date,
          defalt: new Date()
        }
      }, {
        timestamps: true
      }]
    }, {
      timestamps: true
    }],
    status: {
      type: String,
      enum: ['ACTIVE', 'DISABLED', 'REMOVED'],
      required: true,
      defalt: 'ACTIVE'
    }
  }, {
    timestamps: true
  }));
};