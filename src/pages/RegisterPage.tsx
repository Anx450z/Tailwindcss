import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../services/LocalStorageService";
import { useRegisterUserMutation } from "../services/userAuthApi";
import { Register } from "../components/Register";
import { Alert } from "../components/Alert";

function RegisterPage() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form_data = new FormData(event.currentTarget);
    const actualData = {
      email: form_data.get("email"),
      password: form_data.get("password"),
      userName: form_data.get("userName"),
      firstName: form_data.get("firstName"),
      lastName: form_data.get("lastName"),
      passwordConfirmation: form_data.get("passwordConfirmation"),
    };
    
    if (
      actualData.email &&
      actualData.password &&
      actualData.userName &&
      actualData.passwordConfirmation !== null
    ) {
      if (actualData.password === actualData.passwordConfirmation) {
        (document.getElementById("register-form") as HTMLFormElement).reset();

        const res: any = await registerUser(actualData);
        if (res.data.status === "success") {
          setError({
            status: true,
            msg: "Registration Success",
            type: "success",
          });
          storeToken(res.data.token);
          navigate("/login");
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
          msg: "password and confirm password did not match",
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
    <div className="flex mx-auto justify-center item-center  overflow-hidden">
      <Register
        onHandleSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
      />
    </div>
    {error.status ? <Alert error={error} /> : "" }
    </>
  );
}

export default RegisterPage;
