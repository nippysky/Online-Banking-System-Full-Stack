import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database/connection";
import User from "../../../database/models/Schema";
import { hash } from "bcryptjs";

type SheetForm = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  maritalStatus: string;
  accountNumber: string;
  balance: string;
  address: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();

  // Only POST Method is accepted
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({ error: "Don't have form data!" });
    }

    const {
      firstName,
      lastName,
      email,
      gender,
      maritalStatus,
      accountNumber,
      balance,
      address,
      password,
    }: SheetForm = req.body;

    // console.log(req.body);

    // //Create Users
    await User.insertMany({
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      maritalStatus: maritalStatus,
      accountNumber: accountNumber,
      balance: balance,
      address: address,
      password: await hash(password, 12),
    });

    res.send({ message: "Seeded Succesfully" });
  }
}
