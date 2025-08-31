import React, { useState, useEffect, useContext } from 'react';
import { User } from 'lucide-react';
import { PortfolioContext } from './PortfolioContext';

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
      {displayText}
      <span className="animate-pulse text-purple-500">|</span>
    </span>
  );
};

const UserHomepage: React.FC = () => {
  const { portfolioData } = useContext(PortfolioContext)!;

  const fullName = `${portfolioData?.firstName || ''} ${portfolioData?.lastName || ''}`;
  const title = portfolioData?.title || '';
  const summary = portfolioData?.bio || '';
  const profilePhoto = portfolioData?.profilePhoto;

const handleDownloadResume = () => {
    if (portfolioData?.resume) {
      const link = document.createElement('a');
      link.href = portfolioData.resume;
      link.download = 'resume.pdf';
      link.click();
    } else {
      alert('No resume uploaded.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
          
          {/* Profile Photo Section - Left Side */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>
              
              {/* Profile Photo Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-green-400 bg-slate-800 shadow-2xl">
                {profilePhoto ? (
                  <img 
                    src={profilePhoto} 
                    alt={`${fullName} profile`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                    <User className="w-24 h-24 lg:w-32 lg:h-32 text-slate-400" />
                  </div>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-bounce delay-2000"></div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            {/* Name with Typewriter Effect */}
            <div className="space-y-4">
              <div className="mb-4">
                <p className="text-lg text-slate-400 font-medium mb-2">Hello, I'm</p>
                <Typewriter text={fullName} speed={80} />
              </div>
              
              {/* Professional Title */}
              {title && (
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-2">
                    {title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto lg:mx-0 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Professional Summary/Bio */}
            {summary && (
              <div className="max-w-3xl">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {summary}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button
  onClick={handleDownloadResume}
  className="px-8 py-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
>
  Download Resume
</button>
              
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHomepage;