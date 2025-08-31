import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { PortfolioContext } from "./PortfolioContext";

const sections = [
  { name: "About", path: "/user/about" },
  { name: "Skills", path: "/user/skills" },
  { name: "Projects", path: "/user/projects" },
  { name: "Contact", path: "/user/contact" },
];

const UserNavbar: React.FC = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const { portfolioData } = useContext(PortfolioContext)!;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only show first name
  const firstName = portfolioData?.firstName || "";

  return (
    <nav className="w-full bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 backdrop-blur-xl sticky top-0 z-50 shadow-2xl">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* Main navbar container with purple glow border - now centered and includes firstName */}
        <div
          className={`
            relative bg-black/60 backdrop-blur-md rounded-full 
            border-2 border-purple-500/60 shadow-lg shadow-purple-500/25
            transition-all duration-700 ease-out
            hover:border-purple-400/80 hover:shadow-purple-400/40
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          `}
          style={{
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(147, 51, 234, 0.2)'
          }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"></div>
          
          {/* Navigation items container */}
          <div className="relative flex items-center justify-center gap-2 px-8 py-3">
            {/* First name inside navbar */}
            <Link
              to="/user"
              className="text-lg font-bold text-purple-300 hover:text-purple-400 transition-colors duration-200 px-4 py-2 rounded-full mr-4"
              style={{ textShadow: "0 0 8px rgba(147, 51, 234, 0.5)" }}
            >
              {firstName || "Portfolio"}
            </Link>
            
            {/* Separator */}
            <div className="w-px h-6 bg-purple-500/30 mr-2"></div>
            
            {/* Navigation sections */}
            {sections.map((section, index) => {
              const isActive = location.pathname === section.path;
              return (
                <Link
                  key={section.path}
                  to={section.path}
                  className={`
                    relative px-6 py-2.5 rounded-full text-sm font-medium
                    transition-all duration-300 ease-out
                    transform hover:scale-105
                    ${isActive 
                      ? 'text-purple-300 bg-purple-500/20 shadow-lg shadow-purple-500/30' 
                      : 'text-purple-400 hover:text-purple-300 hover:bg-purple-500/10'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: mounted ? 'slideInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-purple-500/0 hover:bg-purple-500/20 transition-all duration-300"></div>
                  {/* Text with glow */}
                  <span 
                    className="relative z-10"
                    style={{
                      textShadow: isActive ? '0 0 10px rgba(147, 51, 234, 0.8)' : '0 0 5px rgba(147, 51, 234, 0.4)'
                    }}
                  >
                    {section.name}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                  )}
                  {/* Hover particle effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1 left-2 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
                    <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                    <div className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Animated border particles */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"></div>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-0 left-4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-400"></div>
            <div className="absolute bottom-0 right-4 w-1 h-1 bg-purple-300/60 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }
        .group:hover .animate-border {
          animation: borderGlow 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default UserNavbar;