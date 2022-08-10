import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userAuthApi";
import { storeToken, getToken } from "../services/LocalStorageService";
import { Alert } from "../components/common/Alert";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/authSlice";
import { LoadingPill } from "../components/common/LoadingPill";

function LoginPage() {
  const LoginCard = lazy(() => import("../components/LoginCard"));

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

    if (actualData.email && actualData.password) {
      try {
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
        msg: "All fields are required",
        type: "error",
      });
    }
  };

  //  saving token using Redux
  let token = getToken();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserToken({ token: token }));
  }, [token, dispatch]);

  return (
    <>
      <div className="flex mx-auto justify-center item-center">
        <Suspense
          fallback={
           <LoadingPill />
          }>
          <LoginCard
            onHandleSubmit={handleSubmit}
            error={error}
            isLoading={isLoading}
          />
        </Suspense>
        {error.status ? <Alert error={error} /> : ""}
      </div>
    </>
  );
}

export default LoginPage;
