/**
 * Created by kennedy on 13/05/17.
 */
export default mongoose => mongoose.model('users', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true,
    },
    facebook: {
        id: {
            type: String,
        },
        token: {
            type: String,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        }
    },
    birthday: {
        type: Date,
    },
    address: [{
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
    }, {
        timestamps: true,
    }],
    devices: [{
        type: {
            type: String,
            enum: ['ANDROID', 'IOS'],
        },
        token: {
            type: String,
        },
        lastAcess: {
            type: Date,
        },
    }, {
        timestamps: true,
    }],
    active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
}));
