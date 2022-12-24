import NextAuth, { NextAuthOptions } from "next-auth";
import { compareSync } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../database/connection";
import User from "../../../database/models/Schema";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      id: "credentials",
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { accountNumber, password } = credentials as {
          accountNumber: string;
          password: string;
        };
        // Connect to database
        await db.connect();

        //check db for account number
        const user = await User.findOne({
          accountNumber: accountNumber,
        });

        //Account Number Not found
        if (!user) {
          throw new Error("Account Number not Found. Open Account");
        }

        // Check Password
        const checkPass = compareSync(password, user.password);

        // Incorrect Password
        if (!checkPass) {
          throw new Error("Incorrect Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  secret: "XH6bp/TkLvnUkQiPDEZNyHcOCV+VV5RL/n+HDVHoHNO=",
};

export default NextAuth(authOptions);

// return {
//   firstName: user.firstName,
//   lastName: user.lastName,
//   email: user.email,
//   gender: user.gender,
//   maritalStatus: user.maritalStatus,
//   accountNumber: user.accountNumber,
//   balance: user.balance,
//   address: user.address,
//   transaction: user.transaction,
// };

// callbacks: {
//   jwt: ({ token, user }) => {
//     if (user) {
//       token.id = user.id;
//     }
//     return token;
//   },
// },

// accountNumber: { label: "Account Number", type: "text" },
// password: { label: "Password", type: "password" },
