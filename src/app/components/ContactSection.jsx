"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = ({PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey:'5KZZD01LEtlpC6UDv'},
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-[90%] mx-auto mt-[77px]" id="contact">
      <p className="text-[#FF8911] text-center text-[18px] font-semibold leading-[150%] tracking-[-0.36px]">
        CONTACT
      </p>
      <p className="text-black text-opacity-85 mb-[20px]  text-center text-[25px] sm:text-[38px] font-bold leading-[150%] tracking-[-0.76px]">
        Do you have any queries ?
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="w-[80%] md:w-[60%] mx-auto p-5 gap-2 grid grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Name"
            required
            className="w-full text-black text-opacity-60 border rounded-[9px] bg-[#5C5BDB] font-normal leading-[150%] tracking-[-0.32px] bg-opacity-10  py-2 px-3 focus:outline-none focus:border-[#5C5BDB]"
          />
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="E-mail"
            required
            className="w-full text-black text-opacity-60 border rounded-[9px] bg-[#5C5BDB] font-normal leading-[150%] tracking-[-0.32px] bg-opacity-10  py-2 px-3 focus:outline-none focus:border-[#5C5BDB]"
          />
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              cols=""
              placeholder="Message"
              required
              className="w-full text-black text-opacity-60 border rounded-[9px] bg-[#5C5BDB] font-normal leading-[150%] tracking-[-0.32px] bg-opacity-10 py-2 px-3 focus:outline-none focus:border-[#5C5BDB]"
              defaultValue={""}
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              value="Send"
              className="py-3 text-[14px] font-medium rounded-[6px] text-white bg-[#FF8911] w-full"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
