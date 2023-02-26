import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import { Friend } from "../../database/models/friend.js";

export const getFriends = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const friends = await Friend.find().exec();

    res.status(200).json({ friends });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      500,
      "Couldn't retrieve friends."
    );

    next(customError);
  }
};
