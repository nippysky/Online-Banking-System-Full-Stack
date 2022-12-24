import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function NewUserForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [transaction, setTransaction] = useState([
    { date: "", time: "", method: "", amount: "" },
  ]);

  const router = useRouter();

  function handleFirstNameChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setEmail(event.target.value);
  }

  function handleGenderChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setGender(event.target.value);
  }

  function handleAccountNumberChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAccountNumber(event.target.value);
  }

  function handleBalanceChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setBalance(event.target.value);
  }

  function handleMaritalStatusChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setMaritalStatus(event.target.value);
  }

  function handleAddressChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAddress(event.target.value);
  }

  function handlePasswordChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassword(event.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      gender,
      maritalStatus,
      accountNumber,
      balance,
      address,
      password,
    };

    // Submit Data To API
    await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("/login");
      });

    // Clear Form Fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setMaritalStatus("");
    setAccountNumber("");
    setBalance("");
    setAddress("");
    setPassword("");
    setTransaction([{ date: "", time: "", method: "", amount: "" }]);

    // Notify user with a toast message of successfully sending their message
    toast.success("Creation Successfully", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {/* NAME */}
      <div className="w-full flex flex-col lg:flex-row lg:gap-5 gap-14 justify-between items-center mb-16">
        {/* fname */}
        <div className="lg:w-1/2 w-full">
          <label className="font-semibold relative bottom-5" htmlFor="fName">
            First Name
          </label>
          <input
            onChange={handleFirstNameChange}
            value={firstName}
            required
            className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
            type="text"
            id="fName"
            placeholder="Legal First Name"
          />
        </div>

        {/* lname */}
        <div className="lg:w-1/2 w-full">
          <label className="font-semibold relative bottom-5" htmlFor="lName">
            Last Name
          </label>
          <input
            onChange={handleLastNameChange}
            value={lastName}
            required
            className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
            type="text"
            id="lName"
            placeholder="Legal Last Name"
          />
        </div>
      </div>

      {/* EMAIL */}
      <div className="w-full mb-16">
        <label className="font-semibold relative bottom-5" htmlFor="email">
          Email Address
        </label>
        <input
          onChange={handleEmailChange}
          value={email}
          required
          className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
          type="email"
          id="email"
          placeholder="Enter Your Email Address"
        />
      </div>

      {/* GENDER & MARITAL STATUS */}
      <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-5 justify-between items-center mb-16">
        {/* gender */}
        <div className="lg:w-1/2 w-full">
          <label className="font-semibold relative bottom-5" htmlFor="gender">
            Gender
          </label>
          <select
            onChange={handleGenderChange}
            value={gender}
            required
            id="gender"
            name="gender"
            className="w-full h-14 focus:ring-1 focus:ring-darkBrand rounded-lg"
          >
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
        </div>

        {/* marital-status */}
        <div className="lg:w-1/2 w-full">
          <label className="font-semibold relative bottom-5" htmlFor="marital">
            Marital Status
          </label>
          <select
            onChange={handleMaritalStatusChange}
            value={maritalStatus}
            required
            id="marital"
            name="marital"
            className="w-full h-14 focus:ring-1 focus:ring-darkBrand rounded-lg"
          >
            <option value="Select">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Seperated">Seperated</option>
          </select>
        </div>
      </div>

      {/* ACCOUNT NUMBER AND BALANCE */}
      <div className="w-full flex flex-col lg:flex-row lg:gap-5 gap-14 justify-between items-center mb-16">
        {/* account number */}
        <div className="lg:w-1/2 w-full">
          <label className="font-semibold relative bottom-5" htmlFor="account">
            Account Number
          </label>
          <input
            onChange={handleAccountNumberChange}
            value={accountNumber}
            required
            className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
            type="text"
            id="account"
            placeholder="Enter 10 Digits Number"
            maxLength={10}
          />
        </div>

        {/* lname */}
        <div className="lg:w-1/2 w-full">
          <label className="font-semibold relative bottom-5" htmlFor="balance">
            Account Balance
          </label>
          <input
            onChange={handleBalanceChange}
            value={balance}
            required
            className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
            type="number"
            id="balance"
            placeholder="Enter Balance In USD"
          />
        </div>
      </div>

      {/* PASSWORD */}
      <div className="w-full mb-16">
        <label className="font-semibold relative bottom-5" htmlFor="password">
          Password
        </label>
        <input
          onChange={handlePasswordChange}
          value={password}
          required
          className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
          type="text"
          id="password"
          placeholder="Create Password"
        />
      </div>

      {/* ADDRESS */}
      <div className="w-full mt-16">
        <label className="font-semibold relative bottom-5" htmlFor="address">
          Your Address
        </label>
        <textarea
          onChange={handleAddressChange}
          value={address}
          required
          rows={2}
          id="address"
          placeholder="6, Brooklyn Street, New York, USA"
          className="w-full p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full font-semibold bg-darkBrand rounded-lg text-white p-4 text-center hover:bg-black border-none  mt-10"
      >
        Create Account
      </button>
    </form>
  );
}
