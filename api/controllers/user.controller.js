import user from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import Listing from "../models/listing.model.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own profile."));
  try {
    if (req.body.password)
      req.body.password = bcrypt.hashSync(req.body.password, 10);

    const updatedUser = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true },
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "Youc an only delete your own account."));
  try {
    await user.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted. ");
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler("Youc an only view your own listings"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const User = await user.findById(req.params.id);
    if (!User) {
      return next(errorHandler(404, "User not found"));
    }
    const { password: pass, ...rest } = User._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
