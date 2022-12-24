// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../database/connection";
import User from "../../database/models/Schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();

  if (req.method === "GET") {
    User.find({}, (error: any, data: any) => {
      if (error) {
        return res.status(404).json({ status: "Failure", data: error });
      } else {
        return res.status(201).json({ status: "Sucess", data: data });
      }
    });
  } else {
    return res.status(404).json({ message: "Only GET request Accepted" });
  }
}
