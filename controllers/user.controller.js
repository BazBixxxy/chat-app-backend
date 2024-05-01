import User from "../models/user.model.js";

export const getUsersForSiderbar = async (req, res) => {
  try {
    const loggInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggInUserId },
    }).select("-password"); // all the users in database accept us and without the password without because of the select method

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal service error");
  }
};
