import React, { createContext, useState } from "react";



export interface PortfolioData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  bio: string;
  skills: string;
  languages: string;
  certifications: string;
  linkedin: string;
  github: string;
  website: string;
  twitter: string;
  education: any[];
  experience: any[];
  projects: any[];
  profilePhoto?: string; 
  resume?: string;
}

interface PortfolioContextType {
  portfolioData: PortfolioData;
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({} as PortfolioData);

  return (
    <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};