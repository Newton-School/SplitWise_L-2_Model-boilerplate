const User = require('../models/userModel');
const Group = require('../models/groupModel');
const getAllGroups = async (req, res) => {
  try {
    // Fetch all groups
    const groups = await Group.find();

    res.status(201).json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.status(201).json(users);
};

module.exports = {
  getAllGroups,
};
