import React from "react";

function Header({ loggedIn, LogoutFunction }) {
  return (
    <header className="Header">
      <nav>
        {loggedIn ? (
          <>
            <a href="/">Profile</a>
            <a href="/home">Find Recipes</a>

            <a href="/create-post">New Recipe</a>
            <a onClick={() => LogoutFunction()}>Logout</a>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/create-account">New Account</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
