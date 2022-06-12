import React, { useState } from "react";
import { sendEmail, notify } from "../utils/fetch";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    let changeName = e.target.name;
    let currValue = e.target.value;
    if (changeName === "message") {
      setMessage(currValue);
    } else if (changeName === "name") {
      setName(currValue);
    } else {
      setEmail(currValue);
    }
  };

  function triggerSendEmails(event) {
    if (!message || !name || !email) {
      alert("请填写所有信息，我才能回复您");
    } else {
      const sendRegisterRequest = async () => {
        let data = new URLSearchParams();
        data.append("message", message);
        data.append("name", name);
        data.append("email", email);
        setEmail("");
        setMessage("");
        setName("");
        alert("你的消息已经飞出去了！📮");
        await sendEmail(data);
        await notify(data);
      };

      sendRegisterRequest();
    }
  }

  return (
    <div className="container md:w-8/12 w-10/12 items-center  justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24">
      <h2 className="font-black uppercase pb-2 text-3xl text-yellow-500">
        ✉️ 联系我
      </h2>

      <p className="font-rubik font-semibold text-xl text-center text-gray-800 my-10">
        欢迎在下方给我留言 :)
      </p>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            您的留言
          </label>
        </div>
        <div className="md:w-1/3">
          <textarea
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            您的名字
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            您的邮箱
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>

      <button
        className="bg-yellow-500 w-64 mx-auto hover:shadow-lg focus:outline-none text-white font-bold py-3 px-10 rounded-full no-underline "
        onClick={triggerSendEmails}
      >
        飞封信
      </button>
    </div>
  );
}
