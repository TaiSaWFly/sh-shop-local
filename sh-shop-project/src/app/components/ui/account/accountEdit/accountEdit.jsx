import React from "react";
import EditProfileForm from "../../forms/editProfileForm/editProfileForm";

const AccountEdit = ({ user }) => {
  return (
    <>
      <EditProfileForm {...{ user }} />
    </>
  );
};

export default AccountEdit;
