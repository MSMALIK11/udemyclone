import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://MERNDB:merndb7300@cluster0.ysqqg.mongodb.net/udemy?retryWrites=true&w=majority";

export const connection = async (req, res) => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongo db connected with server: ${data.connection.host}`);
    });
};
