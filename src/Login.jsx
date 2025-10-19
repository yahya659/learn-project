import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Rivews from "./componens/Rivews";

export default function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    //جلب البيانات
    const storeData = localStorage.getItem("userData");
    if (storeData) {
      const paresData = JSON.parse(storeData);
      setName(paresData.name);
      setEmail(paresData.email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email };
    // تخزين البيانات في localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("Submit:", formData);
  };

  return (
    <>
      <div id="login">
        <h1 className="iconsign">sigin-in:</h1>
        <h1>
          <label>
            User name :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </h1>
        <br />
        <h1>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </h1>
        <br />

        <button
          style={{
            width: "50%",
            height: "30px",
            cursor: "pointer",
            backgroundColor: "gray",
          }}
          type="submit"
          disabled={!(name && email)}
          onClick={handleSubmit}
        >
          <Link to={"/"}>sigin</Link>
        </button>
        <p>
          Do you have an account before?{" "}
          <Link to="/creataccaont">I don't have an account</Link>
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Rivews />
    </>
  );
}
