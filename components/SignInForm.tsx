import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignInForm() {
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  function handleAccountNumberChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAccountNumber(event.target.value);
  }

  function handlePasswordChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassword(event.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const status = await signIn("credentials", {
      accountNumber: accountNumber,
      password: password,
      redirect: false,
      callbackUrl: "/bank/accountnumber",
    });

    if (status?.ok === true) {
      router.push("/bank/accountnumber");
    }

    if (status?.error || status?.ok === false || status?.status === 401) {
      toast.error("Invalid Details", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success("Login successfull", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

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
          className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
          type="text"
          maxLength={10}
          id="accountNumber"
        />
      </div>

      {/* Password */}
      <div className="w-full mb-16">
        <label className="font-semibold relative bottom-5" htmlFor="password">
          Password
        </label>
        <input
          onChange={handlePasswordChange}
          value={password}
          required
          className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
          type="password"
          id="password"
          placeholder="Enter Password"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full font-semibold bg-darkBrand text-white p-4 text-center hover:bg-black border-none rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
