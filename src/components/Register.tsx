import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Card } from "./Card";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";
import { PasswordField } from "./PasswordField";
import { TextField } from "./TextField";

export const Register = (props: any) => {
  return (
    <Card>
      <form
        className="space-y-6"
        onSubmit={props.onHandleSubmit}
        id="register-form">
        <h3 className="text-xl font-medium text-gray-900">
          Register with you details
        </h3>
        <div>
          <Label>User Name</Label>
          <TextField type="text" id="userName" name="userName">
            User Name
          </TextField>
        </div>
        <div className="items-start justify-between flex">
          <div>
            <Label>First Name</Label>
            <TextField type="text" id="firstName" name="firstName">
              First Name
            </TextField>
          </div>
          {/* <span className="w-5"></span> */}
          <div>
            <Label>Last Name</Label>
            <TextField type="text" id="lastName" name="lastName">
              Last Name
            </TextField>
          </div>
        </div>
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

        <div>
          <Label>Confirm Password</Label>
          <PasswordField
            id="passwordConfirmation"
            name="passwordConfirmation"
          />
        </div>
        <Checkbox id="tos">Agree to TOS</Checkbox>
        <Button
          type="expanded"
          text="Create an account"
          isLoading={props.isLoading}
        />
        <div className="text-sm font-medium text-gray-500 flex items-start">
          Already Registered? <span className="w-2"></span>
          <p
            className="text-blue-700 
              hover:underline">
            <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </form>
    </Card>
  );
};
