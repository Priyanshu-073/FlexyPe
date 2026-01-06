import User from "../models/User.js";

export const profileOverview = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");

  res.json({
    name: user.name,
    avatar: user.avatar,
    tier: user.tier,
    memberSince: user.createdAt
  });
};
