import { model, Schema } from "mongoose";

const friendSchema = new Schema({
  name: String,
  age: Number,
  country: String,
});

export const Friend = model("Friend", friendSchema, "friends");
