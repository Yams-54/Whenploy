const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

userSchema.pre('save', async (next) => {
  try {
    const hash = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
    this.password = hash;
    return next();
  } catch (err) {
    err.log = 'error hashing password';
    return next(err);
  }
});

module.exports = User;
