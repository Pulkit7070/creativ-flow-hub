
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: "influencer" | "freelancer" | null;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  setRole: (role: "influencer" | "freelancer") => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // In a real app, you'd make an API call here
      // This is just a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      if (email && password) {
        // Mock successful login
        const newUser: User = {
          id: "user-123",
          name: email.split('@')[0],
          email,
          role: null,
          avatarUrl: "",
        };
        
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        toast.success("Successfully logged in!");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Mock signup function
  const signup = async (email: string, password: string, name: string) => {
    setLoading(true);
    
    try {
      // In a real app, you'd make an API call here
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      if (email && password && name) {
        // Mock successful signup
        const newUser: User = {
          id: "user-" + Math.floor(Math.random() * 1000),
          name,
          email,
          role: null,
          avatarUrl: "",
        };
        
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        toast.success("Account created successfully!");
      } else {
        throw new Error("Please fill out all required fields");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Signup failed. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const setRole = (role: "influencer" | "freelancer") => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.success(`Profile set up as ${role} successfully!`);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("You've been logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, setRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
