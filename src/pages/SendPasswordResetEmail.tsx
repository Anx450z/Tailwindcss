import Button from "../components/Button";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { TextField } from "../components/TextField";
import React, { useState } from "react";
import { useSendPasswordResetEmailMutation } from "../services/userAuthApi";
import { Alert } from "../components/Alert";

function SendPasswordResetEmail() {

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [sendPasswordResetEmail, { isLoading }] =
    useSendPasswordResetEmailMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      (
        document.getElementById("password-reset-email-form") as HTMLFormElement
      ).reset();

      const res: any = await sendPasswordResetEmail(actualData);

      if (res.data.status === "success") {
        setError({
          status: true,
          msg: res.data.msg,
          type: "success",
        });
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
        msg: "all fields are required, please enter a valid email",
        type: "error",
      });
    }
  };
  
  return (
    <>
    <div className="flex mx-auto justify-center item-center">
    <Card>
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
        id="password-reset-email-form">
        <h3 className="text-xl font-medium text-gray-900">
          Enter your registered email
        </h3>
        <div>
          <Label>Email</Label>
          <TextField type="text" id="email" name="email">
            user@example.com
          </TextField>
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
  )
}

export default SendPasswordResetEmail