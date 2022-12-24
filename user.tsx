interface User {
  id: string;
  accountNumber: string;
  fname: string;
  lname: string;
  email: string;
  gender: string;
  maritalStatus: string;
  address: string;
  balance: string;
  transactions: {
    txid: string;
    date: string;
    time: string;
    method: string;
    amount: string;
  }[];
}

const userDetails: User = {
  id: "1",
  accountNumber: "2088567833",
  fname: "Charles",
  lname: "Okerafor",
  email: "law@gmail.com",
  gender: "male",
  maritalStatus: "Single",
  address: "6 Brookln street, Garki 3",
  balance: "4586.60",
  transactions: [
    {
      txid: "1",
      date: "12-12-2022",
      time: "9:15pm",
      method: "withdrawal",
      amount: "200",
    },
    {
      txid: "2",
      date: "18-12-2022",
      time: "01:10am",
      method: "deposit",
      amount: "700",
    },
    {
      txid: "3",
      date: "15-12-2022",
      time: "9:15pm",
      method: "withdrawal",
      amount: "1000",
    },
  ],
};

export default userDetails;
