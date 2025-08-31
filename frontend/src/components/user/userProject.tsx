import React, { useContext } from "react";
import { FolderGit2, Link2, Code2 } from "lucide-react";
import { PortfolioContext } from "./PortfolioContext";


const UserProjectPage: React.FC = () => {
  const { portfolioData } = useContext(PortfolioContext)!;

  const fullName = `${portfolioData?.firstName || ''} ${portfolioData?.lastName || ''}`;
  const projects = portfolioData?.projects || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            Projects
          </h1>
          <p className="text-xl text-slate-400 mb-6">
            {fullName}'s Portfolio Projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Projects List */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FolderGit2 className="w-7 h-7 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                {project.tech && (
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300 font-medium">{project.tech}</span>
                  </div>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold mt-auto"
                  >
                    <Link2 className="w-5 h-5" />
                    Visit Project
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400">
            <FolderGit2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No projects added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProjectPage;