import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <div className="ChangePassword">
      <form className="changePasswordForm"></form>
    </div>
  );
};

export default ChangePassword;
