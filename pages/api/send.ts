// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../database/connection";
import User from "../../database/models/Schema";

type SendMoney = {
  accountNumber: string;
  amount: string;
  newBalance: string;
  senderAccount: string;
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

    const { accountNumber, amount, newBalance, senderAccount }: SendMoney =
      req.body;

    const updateSender = () => {
      //  Update Sender Records Records
      User.findOneAndUpdate(
        { accountNumber: senderAccount },
        { balance: newBalance },
        { useFindAndModify: false },
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log("Sender Data Updated Successfully");
        }
      );
    };

    const updateReceiver = () => {
      updateSender();

      // Add Balance to see How much receiver will get
      User.findOne(
        { accountNumber: accountNumber },
        (error: any, data: any) => {
          if (error) {
            console.log(error);
          } else {
            const receiverBalance = data.balance;

            const calculateRecieverNewBalance =
              parseFloat(receiverBalance) + parseFloat(amount);
            const recieverNewBalance = `${calculateRecieverNewBalance}`;

            // // Update Reciever Records
            User.findOneAndUpdate(
              { accountNumber: accountNumber },
              { balance: recieverNewBalance },
              { useFindAndModify: false },
              (err) => {
                if (err) {
                  console.log(err);
                }
                console.log("Reciever Data Updated Successfully");
              }
            );
          }
        }
      );
    };
    updateReceiver();

    // Get Current Date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${day}-${month}-${year}`;

    // Get Current Time
    const currentTime =
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2) +
      `${date.getHours() >= 12 ? "pm" : "am"}`;

    // Add Transaction History To Sender
    const addSenderTran = () => {
      User.findOneAndUpdate(
        { accountNumber: senderAccount },
        {
          $push: {
            transaction: {
              date: currentDate,
              time: currentTime,
              method: "withdrawal",
              amount: amount,
            },
          },
        },
        { useFindAndModify: false },
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log("Sender Transaction Updated Successfully");
        }
      );
    };
    addSenderTran();

    // Add Transaction History To Reciever
    const addReceiverTran = () => {
      User.findOneAndUpdate(
        { accountNumber: accountNumber },
        {
          $push: {
            transaction: {
              date: currentDate,
              time: currentTime,
              method: "deposit",
              amount: amount,
            },
          },
        },
        { useFindAndModify: false },
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log("Reciever Transaction Updated Successfully");
        }
      );
    };
    addReceiverTran();

    return res.send({ message: "Seeded Succesfully" });
  }
}
