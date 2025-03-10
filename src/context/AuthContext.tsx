import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: string | null; // Username of the logged-in user, or null if not logged in
  login: (username: string, password: string) => void; // Function to log in the user
  register: (username: string, email: string, password: string) => void; // Function to register a new user
}

// Create a context with an initial value of undefined (will be populated later)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to access the AuthContext values
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  // If the context is not available, throw an error (ensure it's used inside AuthProvider)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Return the context values (user, login, and register functions)
  return context;
};

// Define the props for the AuthProvider component, which includes 'children' (the wrapped components)
interface AuthProviderProps {
  children: ReactNode; // ReactNode is the type for any valid React content (JSX, strings, numbers, etc.)
}

// The AuthProvider component that wraps the app with the AuthContext provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null); // State to store the logged-in user's username

  // Function to log in a user (called when the user enters login credentials)
  const login = async (username: string, password: string) => {
    // Handle the login logic (e.g., fetch API, JWT token validation)
    console.log("Logging in:", username, password);
  };

  // Function to register a new user (called when the user submits registration details)
  const register = async (username: string, email: string, password: string) => {
    // Handle the registration logic (e.g., save user to database, hash password)
    console.log("Registering:", username, email, password);
  };

  return (
    // Provide the context values (user, login, register) to any child components
    <AuthContext.Provider value={{ user, login, register }}>
      {children} {/* This renders any child components inside the AuthProvider */}
    </AuthContext.Provider>
  );
};
