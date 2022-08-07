import { LoginCard } from "../components/LoginCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userAuthApi";
import { storeToken } from "../services/LocalStorageService";

function LoginPage() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(actualData)
    if (actualData.email && actualData.password) {
      const res: any = await loginUser(actualData);
      if (res.data.status === "success") {
        (document.getElementById("login-form") as HTMLFormElement).reset();
        setError({
          status: true,
          msg: "Login Success",
          type: "success",
        });
        // Store Token
        storeToken(res.data.token);
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      }
      if (res.data.status === "failed") {
        setError({
          status: true,
          msg: res.data.msg,
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "All fields are required",
        type: "error",
      });
    }
  };

  return (
    <>
      {/* <LoginCard onSubmit={handleSubmit} error={error} isLoading={isLoading} /> */}
      <LoginCard onHandleSubmit={handleSubmit} error={error} isLoading={isLoading} />
    </>
  );
}

export default LoginPage;
