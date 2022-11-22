const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
});


// userSchema.pre('save', async (next) => {
//   try {
//     console.log('1')
//     const hash = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
//     console.log('2')
//     this.password = hash;
//     console.log('3')
//     return next();
//   } catch (err) {
//     err.log = 'error hashing password';
//     return next(err);
//   }
// });

userSchema.pre('save', function(next) {
  console.log('1');
  bcrypt.hash(this.password, SALT_WORK_FACTOR).then((hash)=> {
    console.log('hashed pw', hash);
    this.password = hash;
    return next();
  })
})

const User = mongoose.model('user', userSchema);

module.exports = User;
