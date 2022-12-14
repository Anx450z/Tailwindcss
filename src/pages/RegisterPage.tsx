import React, { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../services/LocalStorageService";
import { useRegisterUserMutation } from "../services/userAuthApi";
import { Alert } from "../components/common/Alert";
import { LoadingPill } from "../components/common/LoadingPill";

function RegisterPage() {
  const Register = lazy(() => import("../components/RegisterCard"));

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
        const res: any = await registerUser(actualData);
        try {
          if (res.data.status === "success") {
            setError({
              status: true,
              msg: "Registration Success",
              type: "success",
            });
            (
              document.getElementById("register-form") as HTMLFormElement
            ).reset();
            storeToken(res.data.token);
            navigate("/request-email-verification");
          }
          if (res.data.status === "failed") {
            setError({
              status: true,
              msg: res.data.msg,
              type: "error",
            });
          }
        } catch (error) {
          setError({
            status: true,
            msg: "cannot connect to server, please check your connection settings",
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
      <div className="flex mx-auto justify-center item-center">
        <Suspense fallback={<LoadingPill />}>
          <Register
            onHandleSubmit={handleSubmit}
            error={error}
            isLoading={isLoading}
          />
        </Suspense>
      </div>
      {error.status ? <Alert error={error} /> : ""}
    </>
  );
}

export default RegisterPage;
