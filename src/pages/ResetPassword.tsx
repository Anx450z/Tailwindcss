import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../services/userAuthApi";
import Button from "../components/Button";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { PasswordField } from "../components/PasswordField";
import { Alert } from "../components/Alert";

function ResetPassword() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [resetPassword, isLoading] = useResetPasswordMutation();
  const { id, token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      passwordConfirmation: data.get("passwordConfirmation"),
    };

    const res: any = await resetPassword({ actualData, id, token });

    if (actualData.password && actualData.passwordConfirmation) {
      if (actualData.password === actualData.passwordConfirmation) {
        (
          document.getElementById("password-reset-form") as HTMLFormElement
        ).reset();

        if (res.data.status === "success") {
          setError({
            status: true,
            msg: res.data.msg,
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
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
        msg: "all fields are required",
        type: "error",
      });
    }
  };

  return (
    <>
    <div className="flex mx-auto justify-center item-center  overflow-hidden">
      <Card>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          id="password-reset-form">
          <h3 className="text-xl font-medium text-gray-900">
            Change your password
          </h3>
          <div>
            <Label>Password</Label>
            <PasswordField id="password" name="password" />
          </div>

          <div>
            <Label>Confirm Password</Label>
            <PasswordField
              id="passwordConfirmation"
              name="passwordConfirmation"
            />
          </div>
          <Button
            type="expanded"
            text="Change Password"
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </form>
      </Card>
    </div>
    {error.status ? <Alert error={error} /> : "" }
    </>
  );
}

export default ResetPassword;
