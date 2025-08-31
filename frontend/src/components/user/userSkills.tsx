import React, { useContext } from 'react';
import { Code2, Globe, Award, Star } from 'lucide-react';
import { PortfolioContext } from './PortfolioContext';

const UserSkillsPage: React.FC = () => {
  const { portfolioData } = useContext(PortfolioContext)!;

  const fullName = `${portfolioData?.firstName || ''} ${portfolioData?.lastName || ''}`;
  const technicalSkills = portfolioData?.skills || '';
  const languages = portfolioData?.languages ? portfolioData.languages.split(',').map((lang: string) => ({ name: lang.trim(), proficiency: 'Advanced' })) : [];
  const certifications = portfolioData?.certifications ? portfolioData.certifications.split(',').map((cert: string) => ({ name: cert.trim() })) : [];

  const skillsArray = technicalSkills ? technicalSkills.split(',').map(skill => skill.trim()).filter(skill => skill) : [];

  const getSkillIcon = (skillName: string) => {
    const skill = skillName.toLowerCase();
    if (skill.includes('javascript') || skill.includes('js')) return '⚡';
    if (skill.includes('python')) return '🐍';
    if (skill.includes('react')) return '⚛️';
    if (skill.includes('node')) return '🟢';
    if (skill.includes('html')) return '🌐';
    if (skill.includes('css')) return '🎨';
    if (skill.includes('java')) return '☕';
    if (skill.includes('php')) return '🐘';
    if (skill.includes('sql') || skill.includes('database')) return '🗄️';
    if (skill.includes('git')) return '📦';
    if (skill.includes('docker')) return '🐳';
    if (skill.includes('aws')) return '☁️';
    if (skill.includes('linux')) return '🐧';
    if (skill.includes('typescript')) return '📘';
    if (skill.includes('angular')) return '🅰️';
    if (skill.includes('vue')) return '💚';
    if (skill.includes('mongodb')) return '🍃';
    if (skill.includes('redis')) return '🔴';
    if (skill.includes('kubernetes')) return '⚓';
    if (skill.includes('firebase')) return '🔥';
    return '⚙️';
  };

  const renderProficiencyStars = (proficiency: string) => {
    const levels = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Native': 4 };
    const level = levels[proficiency as keyof typeof levels] || 1;
    const stars = [];
    for (let i = 1; i <= 4; i++) {
      stars.push(
        <Star key={i} className={`w-5 h-5 ${i <= level ? 'fill-yellow-400 text-yellow-400' : 'text-slate-500'}`} />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-400 mb-6">
            {fullName}'s Technical Capabilities & Knowledge
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"></div>
        </div>
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-xl mr-4">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-200">Technical Skills</h2>
          </div>
          {skillsArray.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skillsArray.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{getSkillIcon(skill)}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{skill}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              <Code2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No technical skills listed</p>
            </div>
          )}
        </div>
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl mr-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-200">Languages</h2>
          </div>
          {languages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{language.name}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                      {language.proficiency}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderProficiencyStars(language.proficiency)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No languages listed</p>
            </div>
          )}
        </div>
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-green-400 to-purple-400 rounded-xl mr-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-200">Certifications</h2>
          </div>
          {certifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No certifications listed</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSkillsPage;