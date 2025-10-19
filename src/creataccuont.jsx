import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //جلب البيانات
    const storeData = localStorage.getItem("userData");
    if (storeData) {
      const paresData = JSON.parse(storeData);
      setName(paresData.name);
      setEmail(paresData.email);
      setPassword(paresData.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, password };
    // تخزين البيانات في localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("Submit:", formData);
  };

  return (
    <div id="login">
      <h1 className="iconsign">
        Create Accuont:
      </h1>
      <h1>
        <label>
          User name :
          <input
          required
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
          required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </h1>
      <h1>
        <label>
          Password:
          <input
          required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </h1>
      <br />

      <button
      style={{width:"50%",height:"30px",cursor:"pointer",backgroundColor:"gray"}}
        type="submit"
        disabled={!(name || email || password)}
        onClick={handleSubmit}
      >
      <Link to={"/"}> create</Link>
      </button>
    </div>
  );
}
