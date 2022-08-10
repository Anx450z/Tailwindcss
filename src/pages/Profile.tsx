import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/LocalStorageService";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setUserInfo, unSetUserInfo } from "../features/userSlice";
import { unSetUserToken } from "../features/authSlice";
import { Label } from "../components/common/Label";
import { NavLink } from "react-router-dom";
import Button from "../components/common/Button";
import { Card } from "../components/common/Card";

function Profile() {
  const navigate = useNavigate();

  const token = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(token);

  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    firstName: "",
  });
  // Store data in Local state
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.user.email,
        firstName: data.user.first_name,
        userName: data.user.user_name,
      });
    }
  }, [isSuccess, data]);
  const handleLogout = () => {
    // unset Redux State
    dispatch(unSetUserInfo({ email: "", name: "" }));
    dispatch(unSetUserToken({ token: null }));

    removeToken("token");
    navigate("/");
  };

  // Store User Data in Redux Store
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.user.email,
          name: data.user.user_name,
        })
      );
    }
  }, [isSuccess, data, dispatch]);

  return (
    <div className="flex mx-auto justify-center item-center">
      <Card>
        <h3 className="text-3xl font-medium text-gray-900 my-6">
          Welcome back {userData.firstName} !
        </h3>
        <Label>User Name : {userData.userName}</Label>
        <Label>Email : {userData.email}</Label>
        <p className="text-blue-700 hover:underline my-3">
          <NavLink to="/change-password">Change password</NavLink>
        </p>
        <Button type="expanded" text="Logout" onClick={handleLogout}/>
      </Card>
    </div>
  );
}

export default Profile;
