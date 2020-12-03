import React from "react";
import Home from "../containers/Home";

function UserProfileComponent({ userInformation }) {
  return (
    <div>
      <p>
        <strong>Email:</strong> {userInformation.email}
      </p>
    </div>
  );
}

export default UserProfileComponent;
