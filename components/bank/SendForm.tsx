//@ts-nocheck

import { useRouter } from "next/router";
import React, { useState, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function SendForm() {
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const router = useRouter();

  const [person, setPerson] = useState<object[]>([]);
  const { data, status } = useSession();
  const email = data?.user?.email;

  useEffect(() => {
    axios
      .get("/api/user")
      .then(function (response) {
        // handle success
        const gottenArray = response.data.data;
        function filterByValue(array, value) {
          return array.filter(
            (data) =>
              JSON.stringify(data)
                .toLowerCase()
                .indexOf(value.toLowerCase()) !== -1
          );
        }
        setPerson(filterByValue(gottenArray, email));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  function handleAccountNumberChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAccountNumber(event.target.value);
  }

  function handleAmountChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAmount(event.target.value);
  }

  function handleNoteChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setNote(event.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (userAccountBalance > amountToDebit) {
      // Get new Balance
      const newBalance = `${withdrawFromBlance()}`;

      // Get Sender Account Number
      const senderAccount = person[0]?.accountNumber;

      console.log(newBalance, senderAccount);

      const data = {
        accountNumber,
        amount,
        newBalance,
        senderAccount,
      };

      // Submit Data To API
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) router.push(`/bank/accountnumber`);
        });

      // Clear Form Fields
      setAccountNumber("");
      setAmount("");
      setNote("");

      // Notify user with a toast message of successfully sending their message
      toast.success("Sent Successfully", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Notify user with a toast message of successfully sending their message
      toast.error("Account Balance Low", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  const userAccountBalance = parseFloat(person[0]?.balance);
  const amountToDebit = parseFloat(amount);

  // Withdraw From Balance
  const withdrawFromBlance = () => {
    const newBlance = userAccountBalance - amountToDebit;
    return newBlance;
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {/* Acoount Number */}
      <div className="w-full mb-16">
        <label
          className="font-semibold relative bottom-5"
          htmlFor="accountNumber"
        >
          Account Number
        </label>
        <input
          onChange={handleAccountNumberChange}
          value={accountNumber}
          required
          className="w-full h-14 p-5 focus:ring-1 focus:ring-mainRed"
          type="text"
          id="accountNumber"
          maxLength={10}
        />
      </div>

      {/* Amount */}
      <div className="w-full mb-3">
        <label className="font-semibold relative bottom-5" htmlFor="amount">
          Amount
        </label>
        <input
          onChange={handleAmountChange}
          value={amount}
          required
          className="w-full h-14 p-5 focus:ring-1 focus:ring-mainRed"
          type="number"
          id="amount"
        />
      </div>

      {/* Note */}
      <div className="w-full my-14">
        <label className="font-semibold relative bottom-5" htmlFor="note">
          Note
        </label>
        <textarea
          onChange={handleNoteChange}
          value={note}
          required
          rows={3}
          className="w-full p-5 focus:ring-1 focus:ring-mainRed"
          id="note"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full font-semibold bg-darkBrand text-white p-4 text-center mt-5 hover:bg-black border-none"
      >
        Wire Funds
      </button>
    </form>
  );
}
