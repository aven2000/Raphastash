import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Form } from "../components/Form";

import { createUser, getUser, changeUser, deleteUser } from "../api/users";

function SignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const navigate = useNavigate();

  const formEntries = [
    {
      label: "Username",
      placeholder: "Create a username.",
      onChange: setUsername,
      onKeyPress: handleEnter,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Create a password.",
      onChange: setPassword,
      onKeyPress: handleEnter,
    },
    {
      label: "Confirm password",
      type: "password",
      placeholder: "lets match with the password you entered above.",
      onChange: setConfirmPassword,
      onKeyPress: handleEnter,
    },
  ];

  function handleEnter(key) {
    if (key == "Enter") {
      handleSignUp();
    }
  }

  async function handleSignUp() {
    if (!username || username.length < 5) {
      window.alert("Hey, your username must be at least 5 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      window.alert("wait, password and password confirmation do not match.");
      return;
    }

    const user = await getUser(username);
    if (user.password !== null) {
      // to sign up, username must have not been taken
      window.alert(
        "oops the username has already been taken. " +
          "Did you mean to sign in instead?"
      );
      return;
    }

    createUser(username, password);
    setCookie("username", username, { path: "/" });
    navigate("/");
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        formEntries={formEntries}
        buttonText="Sign Up"
        onClick={handleSignUp}
      />
    </div>
  );
}

export { SignUp };
