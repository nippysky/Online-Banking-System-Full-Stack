import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  accountNumber: { type: String, required: true },
  balance: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  transaction: [
    {
      date: { type: String, required: true },
      time: { type: String, required: true },
      method: { type: String, required: true },
      amount: { type: String, required: true },
    },
  ],
});

const User = models.User || model("User", userSchema);

export default User;
