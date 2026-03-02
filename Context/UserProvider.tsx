"use client";

import { loadUser } from "@/lib/lib";
import { createContext, useEffect } from "react";

const UserProviderContext = createContext({});

function UserProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <UserProviderContext.Provider value={{}}>
      {children}
    </UserProviderContext.Provider>
  );
}

export default UserProvider;
