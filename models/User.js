const { model, Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: {
            validator(email) {
                return isEmail(email);
            }
        }
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator(age) {
                if (age < 0) {
                    throw new Error(`Age should be greater than 0`);
                }
            }
        },
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

UserSchema.statics.findByEmailAndPasswordForAuth = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error("Invalid Credentials");
        }
        if (password != user.password) {
            throw new Error("Invalid Credentials");
        }
        console.log(`Login Successful`);
        return user;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};

const UserModel = model("User", UserSchema);

module.exports = UserModel;