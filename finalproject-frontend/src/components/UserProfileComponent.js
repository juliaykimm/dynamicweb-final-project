import React from "react";

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
