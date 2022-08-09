import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Card } from "./Card";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";
import { PasswordField } from "./PasswordField";
import { TextField } from "./TextField";

export const LoginCard = (props: any) => {
  return (
      <Card>
        <form className="space-y-6" onSubmit={props.onHandleSubmit} id="login-form">
          <h3 className="text-xl font-medium text-gray-900">
            Sign In with your details
          </h3>
          <div>
          <Label>Your email</Label>
          <TextField type="email" id="email" name="email">
            user@example.com
          </TextField>
        </div>
        <div>
          <Label>Your password</Label>
          <PasswordField id="password" name="password" />
        </div>
          <div className="flex items-start">
          <Checkbox id="tos">Agree to TOS</Checkbox>
            <p
              className="text-sm text-blue-700 hover:underline
               ml-auto">
                <NavLink to="/send-reset-password-email">Forgot Password?</NavLink>
            </p>
          </div>
          <Button
          type="expanded"
          text="Login to your account"
          isLoading={props.isLoading}
        />
          <div className="text-sm font-medium text-gray-500 flex items-start">
            Not registered?<span className="w-2"></span>
            <p
              className="text-blue-700 
              hover:underline">
                <NavLink to="/register">Create account</NavLink>
            </p>
          </div>
        </form>
        </Card>
  );
};
