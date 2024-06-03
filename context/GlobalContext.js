'use client';
import { createContext, useContext, useState } from 'react';

// Create context
export const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);
  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook to use context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
