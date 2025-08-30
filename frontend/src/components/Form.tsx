import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioContext } from './user/PortfolioContext';

// Type definitions
interface Education {
  institution: string;
  degree: string;
  field: string;
  date: string;
}

interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Project {
  title: string;
  url: string;
  description: string;
  tech: string;
}

const PortfolioForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    bio: '',
    skills: '',
    languages: '',
    certifications: '',
    linkedin: '',
    github: '',
    website: '',
    twitter: '',
    education: [{
      institution: '',
      degree: '',
      field: '',
      date: ''
    }],
    experience: [{
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    projects: [{
      title: '',
      url: '',
      description: '',
      tech: ''
    }]
  });



  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const { setPortfolioData } = useContext(PortfolioContext)!;
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayFieldChange = (
    arrayName: 'education' | 'experience' | 'projects',
    index: number,
    field: string,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { institution: '', degree: '', field: '', date: '' }]
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', title: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, { title: '', url: '', description: '', tech: '' }]
    }));
  };

  const removeItem = (arrayName: 'education' | 'experience' | 'projects', index: number) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profilePhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPortfolioData({ ...formData, profilePhoto: reader.result as string });
        navigate('/user');
      };
      reader.readAsDataURL(profilePhoto);
    } else {
      setPortfolioData({ ...formData, profilePhoto: undefined });
      navigate('/user');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Build Your Portfolio
          </h1>
          <p className="text-xl text-slate-400 font-normal">
            Tell us about yourself and we'll create something amazing
          </p>
        </div>

        {/* Form Card */}
<div className="border border-purple-500/20 rounded-3xl p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
          
            
            {/* Personal Information */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-green-400 rounded"></div>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium text-slate-200">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, State/Country"
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">
                    Professional Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g. Full Stack Developer"
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium text-slate-200">Profile Photo</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center p-10 border-2 border-dashed border-purple-500/50 rounded-xl bg-slate-900/50 hover:border-purple-400 hover:bg-purple-400/10 transition-all">
                      <span className="text-slate-300">
                        {profilePhoto ? profilePhoto.name : 'Click to upload or drag and drop'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium text-slate-200">Professional Summary/Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    placeholder="Write a brief professional summary..."
                    rows={4}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500 resize-y"
                  />
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-green-400 rounded"></div>
                Education
              </h2>
              {formData.education.map((edu, index) => (
                <div key={index} className="border border-purple-500/20 rounded-xl p-5 mb-5 bg-slate-900/30">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeItem('education', index)}
                      className="float-right bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm mb-3 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 clear-right">
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">
                        Institution Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={edu.institution}
                        onChange={(e) => handleArrayFieldChange('education', index, 'institution', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">Degree Type</label>
                      <select
                        value={edu.degree}
                        onChange={(e) => handleArrayFieldChange('education', index, 'degree', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      >
                        <option value="">Select Degree</option>
                        <option value="bachelors">Bachelor's</option>
                        <option value="masters">Master's</option>
                        <option value="phd">PhD</option>
                        <option value="associate">Associate</option>
                        <option value="certificate">Certificate</option>
                        <option value="diploma">Diploma</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">Field of Study</label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => handleArrayFieldChange('education', index, 'field', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">Graduation Date</label>
                      <input
                        type="date"
                        value={edu.date}
                        onChange={(e) => handleArrayFieldChange('education', index, 'date', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addEducation}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-green-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
              >
                + Add More Education
              </button>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-green-400 rounded"></div>
                Professional Experience
              </h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="border border-purple-500/20 rounded-xl p-5 mb-5 bg-slate-900/30">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeItem('experience', index)}
                      className="float-right bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm mb-3 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 clear-right">
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={exp.company}
                        onChange={(e) => handleArrayFieldChange('experience', index, 'company', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">
                        Job Title <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={exp.title}
                        onChange={(e) => handleArrayFieldChange('experience', index, 'title', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">Start Date</label>
                      <input
                        type="date"
                        value={exp.startDate}
                        onChange={(e) => handleArrayFieldChange('experience', index, 'startDate', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">End Date</label>
                      <input
                        type="date"
                        value={exp.endDate}
                        onChange={(e) => handleArrayFieldChange('experience', index, 'endDate', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 font-medium text-slate-200">Job Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => handleArrayFieldChange('experience', index, 'description', e.target.value)}
                        placeholder="Describe your role and responsibilities..."
                        rows={4}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500 resize-y"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addExperience}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-green-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
              >
                + Add More Experience
              </button>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-green-400 rounded"></div>
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium text-slate-200">Technical Skills</label>
                  <textarea
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    placeholder="List your technical skills (comma-separated)"
                    rows={4}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500 resize-y"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">Languages</label>
                  <textarea
                    value={formData.languages}
                    onChange={(e) => handleInputChange('languages', e.target.value)}
                    placeholder="Languages you speak with proficiency levels"
                    rows={4}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500 resize-y"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">Certifications</label>
                  <textarea
                    value={formData.certifications}
                    onChange={(e) => handleInputChange('certifications', e.target.value)}
                    placeholder="Professional certifications"
                    rows={4}
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500 resize-y"
                  />
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-green-400 rounded"></div>
                Projects
              </h2>
              {formData.projects.map((project, index) => (
                <div key={index} className="border border-purple-500/20 rounded-xl p-5 mb-5 bg-slate-900/30">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeItem('projects', index)}
                      className="float-right bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm mb-3 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 clear-right">
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">Project Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleArrayFieldChange('projects', index, 'title', e.target.value)}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-slate-200">Project URL</label>
                      <input
                        type="url"
                        value={project.url}
                        onChange={(e) => handleArrayFieldChange('projects', index, 'url', e.target.value)}
                        placeholder="https://"
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 font-medium text-slate-200">Project Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleArrayFieldChange('projects', index, 'description', e.target.value)}
                        placeholder="Describe your project..."
                        rows={4}
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500 resize-y"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 font-medium text-slate-200">Technologies Used</label>
                      <input
                        type="text"
                        value={project.tech}
                        onChange={(e) => handleArrayFieldChange('projects', index, 'tech', e.target.value)}
                        placeholder="React, Node.js, MongoDB, etc."
                        className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addProject}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-green-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
              >
                + Add More Projects
              </button>
            </section>

            {/* Social Links */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-green-400 rounded"></div>
                Social Links
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium text-slate-200">LinkedIn Profile</label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">GitHub Profile</label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    placeholder="https://github.com/yourusername"
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">Personal Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-200">Twitter/X Profile</label>
                  <input
                    type="url"
                    value={formData.twitter}
                    onChange={(e) => handleInputChange('twitter', e.target.value)}
                    placeholder="https://twitter.com/yourusername"
                    className="w-full p-3 bg-slate-900/80 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all placeholder-slate-500"
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-400 to-green-400 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-0.5 transition-all"
              >
                Create My Portfolio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;