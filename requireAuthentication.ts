import { getSession } from "next-auth/react";

export const requireAuthentication = async (context: any, cb: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return cb({ session });
};
