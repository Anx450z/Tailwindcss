import Button from "../components/Button";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { PasswordField } from "../components/PasswordField";
import React, { useState } from "react";
import { useChangeUserPasswordMutation } from "../services/userAuthApi";
import { getToken } from "../services/LocalStorageService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [changeUserPassword] = useChangeUserPasswordMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      passwordConfirmation: data.get("passwordConfirmation"),
    };

    const token = getToken();

    if (actualData.password && actualData.passwordConfirmation) {
      if (actualData.password === actualData.passwordConfirmation) {
        const res: any = await changeUserPassword({ actualData, token });
        if (res.data.status === "success") {
          (
            document.getElementById("password-reset-form") as HTMLFormElement
          ).reset();
          setError({
            status: true,
            msg: res.data.msg,
            type: "success",
          });
          setTimeout(() => {
            navigate("/profile");
          }, 2000);
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
  // getting Data from Redux Store
  const myData = useSelector((state) => (state as any).user);

  return (
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
          />
        </form>
      </Card>
    </div>
  );
}

export default ChangePassword;
