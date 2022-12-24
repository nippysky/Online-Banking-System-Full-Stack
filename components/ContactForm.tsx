import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleNameChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setName(event.target.value);
  }

  function handleEmailChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setMessage(event.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Clear Form Fields
    setName("");
    setEmail("");
    setMessage("");

    // Notify user with a toast message of successfully sending their message
    toast.success("Message Sent Successfully", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center">
        {/* Name */}
        <div className="lg:w-1/2 w-full">
          <input
            onChange={handleNameChange}
            value={name}
            required
            className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Email */}
        <div className="w-full lg:w-1/2">
          <input
            onChange={handleEmailChange}
            value={email}
            required
            className="w-full h-14 p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
          />
        </div>
      </div>

      {/* Message */}
      <div className="w-full mt-10">
        <div>
          <textarea
            onChange={handleMessageChange}
            value={message}
            required
            rows={10}
            placeholder="Enter Your Message."
            className="w-full p-5 focus:ring-1 focus:ring-darkBrand rounded-lg"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full font-semibold bg-darkBrand text-white p-4 text-center mt-5 hover:bg-black border-none rounded-lg"
      >
        Send
      </button>
    </form>
  );
}
