import "./loadEnvironment.js";
import createdebug from "debug";
import mongoose from "mongoose";
import connectDataBase from "./database/connectDataBase.js";
import chalk from "chalk";
import startServer from "./server/startServer.js";

export const debug = createdebug("social:*");

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_CONNECTION_URL;

mongoose.set("toJSON", {
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

try {
  await connectDataBase(mongoDbUrl!);
  debug(chalk.green(`Connected to database`));

  await startServer(+port);
  debug(chalk.green(`Server listening on port ${port}`));
} catch (error) {
  debug(error.message);
}
