const mongoose = require('mongoose');
/*
name: The name field in the Group schema represents the name or title of the group. It is of type String and is required, meaning that a name must be provided when creating a new group.
members: The members field in the Group schema is an array of User references. It allows you to associate multiple users with a particular group. Each member reference is stored as a mongoose.Schema.Types.ObjectId that references a specific User document.
To add a user to the members array, you can push the ObjectId of the desired User document into the array.
 */
const GroupSchema = new mongoose.Schema({
  //Write a GroupSchema Model Here
});

const Group = mongoose.model('Group', GroupSchema);
module.exports = Group;
