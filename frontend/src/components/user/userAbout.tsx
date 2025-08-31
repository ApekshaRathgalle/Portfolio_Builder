import React, { useContext } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { PortfolioContext } from './PortfolioContext';


const UserAboutPage: React.FC = () => {
  const { portfolioData } = useContext(PortfolioContext)!;

  const fullName = `${portfolioData?.firstName || ''} ${portfolioData?.lastName || ''}`;
  const education = portfolioData?.education || [];
  const experience = portfolioData?.experience || [];

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
     
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            About {fullName}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-xl mr-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-200">Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div 
                  key={edu.id || index} 
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-cyan-400/10 to-green-400/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degreeType} in {edu.fieldOfStudy}
                        </h3>
                        <p className="text-xl text-cyan-300 font-semibold mb-3">
                          {edu.institutionName}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-slate-400 bg-slate-700/50 px-4 py-2 rounded-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-medium">{formatDate(edu.graduationDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-400">
                <GraduationCap className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No education information available</p>
              </div>
            )}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl mr-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-200">Professional Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experience.length > 0 ? (
              experience.map((exp, index) => (
                <div 
                  key={exp.id || index} 
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-purple-400/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.jobTitle}
                        </h3>
                        <p className="text-xl text-green-300 font-semibold mb-4">
                          {exp.companyName}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-slate-400 bg-slate-700/50 px-4 py-2 rounded-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-medium">
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    
                    {exp.jobDescription && (
                      <div className="bg-slate-700/30 rounded-lg p-6 border-l-4 border-cyan-400">
                        <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                          {exp.jobDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-400">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No professional experience available</p>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-green-400 to-purple-400 rounded-full animate-bounce opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default UserAboutPage;