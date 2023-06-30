const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    // Other user fields...
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 8) {
          throw new Error('password should be at least 8 characters long');
        }
      },
    },
    //Write a code here to add role and groups into a userSchema
    /*     {
                                ROLE:
The role field in the User schema defines the role of the user within the system.
It allows you to categorize users into different roles based on their privileges or responsibilities.
The possible roles are:
              1)user 2)admin 3)creator
By default, if the role field is not provided during user creation, it will be set to 'user'.
    },
     */
    /*     {
                              groups
The groups field in the User schema is an array of Group references.
It allows you to associate a user with multiple groups in the system.
Each group reference is stored as a mongoose.Schema.Types.ObjectId that references a specific Group document.
To add a user to a group, you can push the ObjectId of the desired Group document into the groups array of the user.
      }
     */
  },
  { timestamps: true }
);

// pre-save hook to hash password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model('User', userSchema);
