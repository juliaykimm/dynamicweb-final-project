import React from "react";

function UserProfileComponent({ userInformation }) {
  return (
    <div>
      <h1 className="SubPageTitles">
        <strong>Email:</strong> {userInformation.email}
      </h1>
    </div>
  );
}

export default UserProfileComponent;
