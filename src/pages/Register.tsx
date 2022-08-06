import React from "react";
import Button from "../components/Button";
import { Card } from "../components/Card";
import { Checkbox } from "../components/Checkbox";
import { Label } from "../components/Label";
import { PasswordField } from "../components/PasswordField";
import { TextField } from "../components/TextField";

export const Register = () => {
  return (
    <Card>
      <form className="space-y-6" action="#">
        <h3 className="text-xl font-medium text-gray-900">
          Register with you details
        </h3>
        <div>
          <Label>User Name</Label>
          <TextField type="text" id="UserName" name="UserName">
            User Name
          </TextField>
        </div>
        <div>
          <Label>First Name</Label>
          <TextField type="text" id="firstName" name="firstName">
            First Name
          </TextField>
        </div>
        <div>
          <Label>Last Name</Label>
          <TextField type="text" id="lastName" name="lastName">
            Last Name
          </TextField>
        </div>
        <div>
          <Label>Email</Label>
          <TextField type="email" id="email" name="email">
            user@example.com
          </TextField>
        </div>
        <div>
          <Label>Password</Label>
          <PasswordField id="password" name="password" />
        </div>

        <div>
          <Label>Confirm Password</Label>
          <PasswordField id="ConfirmPassword" name="ConfirmPassword" />
        </div>
        <Checkbox>Agree to TOS</Checkbox>
        <Button type="expanded" text="Sign up as new user" />
        <div className="text-sm font-medium text-gray-500">
          Already Registere?{" "}
          <a
            href="#"
            className="text-blue-700 
              hover:underline">
            Login
          </a>
        </div>
      </form>
    </Card>
  );
};
