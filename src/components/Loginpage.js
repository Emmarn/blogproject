import { render } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";
import styles from "./Loginpage.css";
import { useState } from "react";

export const Loginpage = () => {
  // Deklarerar två React States för lyckad och misslyckad inloggning.
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Skapar Users login och password.
  const database = [
    {
      username: "anton",
      password: "anton",
    },
    {
      username: "emma",
      password: "emma",
    },
    {
      username: "jari",
      password: "jari",
    },
    {
      username: "olga",
      password: "olga",
    },
  ];

  const errors = {
    uname: "ogiltigt användarnamn",
    pass: "ogiltigt lösenord",
  };

  //Skapar en inloggningsfunktion.
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Hittar users login info.
    const userData = database.find((user) => user.username === uname.value);

    // Jämförar users info
    if (userData) {
      if (userData.password !== pass.value) {
        // Felaktigt password.
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Felaktigt username.
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Skapar en felmeddelandefunktion om users info har fel.
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Skapar login form.
  const renderForm = (
    <div className="render-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Användarnamn</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Lösenord</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <Header />
      <div className="form">
        <div className="login-form">
          <div className="title">Logga in som member</div>
          {isSubmitted ? <div>Användaren är inloggad</div> : renderForm}
        </div>
      </div>
    </>
  );
};
