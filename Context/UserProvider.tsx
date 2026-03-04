"use client";

import { loadUser } from "@/lib/api/user";
import { fetcher } from "@/lib/axios";
import { createContext, useEffect } from "react";
import { SWRConfig } from "swr";

const UserProviderContext = createContext({});

function UserProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <SWRConfig value={{ fetcher }}>
      <UserProviderContext.Provider value={{}}>
        {children}
      </UserProviderContext.Provider>
    </SWRConfig>
  );
}

export default UserProvider;
