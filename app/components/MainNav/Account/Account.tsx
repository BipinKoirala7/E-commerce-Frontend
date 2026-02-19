"use client";

import { useState } from "react";
import LoggedInUserOptions from "./LoggedInUserOptions";
import NotLoggedInUserOptions from "./NotLoggedInUserOptions";

function Account() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return isUserLoggedIn ? <LoggedInUserOptions /> : <NotLoggedInUserOptions />;
}
export default Account;
