import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="contact" id="contact">
        <h1 className="contact__heading">Contact</h1>
        <p className="contact__para">
          If you have any further inquires, please let us know by filling the
          form below
        </p>
        <form
          className="contact__form flex flex-col gap-[16px] "
          onSubmit={handleSubmit}
        >
          <div className="contact__form--name flex gap-[16px] max-[576px]:flex-col max-[576px]:w-full">
            <div className="firstname flex flex-col w-[50%]  max-[576px]:w-full">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="lastname flex flex-col w-[50%] max-[576px]:w-full">
              <label htmlFor="label">Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="email flex flex-col">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="message flex flex-col">
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div className="button flex items-center justify-center pt-[16px] w-full">
            <button className="form__submit ">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
