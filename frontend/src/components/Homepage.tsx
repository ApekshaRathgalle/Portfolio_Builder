import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Star, Users, Zap, Globe, ArrowRight } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import port from '../assets/port.png';
import AuthModal from './AuthPage';

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
    <span className="text-4xl md:text-6xl font-bold text-purple-600 dark:text-purple-400">
      {displayText}
      <span className="animate-pulse text-purple-500">|</span>
    </span>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-500">
    <div className="text-purple-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const PortfolioBuilder: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsSignedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAction = () => {
    if (isSignedIn) {
      navigate('/form');
    } else {
      setAuthOpen(true);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-green-50 via-purple-50 to-blue-50'}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent dark:from-green-400 dark:to-purple-400">
          Portfolio Builder
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setAuthOpen(true)}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
          >
            Sign In
          </button>
          <button
            onClick={handleAction}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-purple-500 text-white font-medium rounded-full hover:from-green-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-20">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <Typewriter text="Let's Build Your Portfolio" speed={60} />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              Create stunning, professional portfolios in minutes. Showcase your work, 
              skills, and achievements with our intuitive drag-and-drop builder.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleAction}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-purple-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center group"
            >
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-500 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-200">
              View Templates
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2 fill-current" />
              4.9/5 Rating
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              50K+ Users
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <img 
                src={port}
                alt="Portfolio Builder Character - Person sitting in purple chair"
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback content if image doesn't load */}
              <div className="hidden bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                    ✨ WELCOME TO MY ✨
                  </h3>
                  <h2 className="text-5xl font-black mb-6 text-gray-800 dark:text-white transform -rotate-1">
                    PORT
                    <span className="inline-block transform rotate-2">✦</span>
                    <br />
                    FOLIO
                  </h2>
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-500 to-green-500 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-40 h-40 bg-purple-600 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="text-6xl">😊</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            Why Choose Portfolio Builder?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to create a professional portfolio that stands out
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Lightning Fast"
            description="Build your portfolio in minutes with our intuitive drag-and-drop interface. No coding required!"
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="Mobile Responsive"
            description="Your portfolio looks perfect on all devices. Mobile-first design ensures great user experience."
          />
          <FeatureCard
            icon={<Star className="w-8 h-8" />}
            title="Professional Templates"
            description="Choose from dozens of professionally designed templates tailored for different industries."
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-500 via-purple-500 to-green-600 dark:from-green-600 dark:via-purple-600 dark:to-green-700 py-16">
        <div className="grid md:grid-cols-3 gap-8 px-6 lg:px-12 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-green-100">Portfolios Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-purple-100">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-green-100">Support Available</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 lg:px-12 py-16 text-center ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of professionals who've already created stunning portfolios
          </p>
          <button
            onClick={handleAction}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-purple-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder;