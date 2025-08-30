import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Twitter } from "lucide-react";

interface UserContactPageProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  twitter: string;
}

const UserContactPage: React.FC<UserContactPageProps> = ({
  firstName,
  lastName,
  email,
  phone,
  location,
  linkedin,
  github,
  website,
  twitter,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            Contact
          </h1>
          <p className="text-xl text-slate-400 mb-6">
            Get in touch with {fullName}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-purple-400" />
            <span className="text-lg">{email || "Not provided"}</span>
          </div>
          {phone && (
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-400" />
              <span className="text-lg">{phone}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">{location}</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-500/10 transition-all"
            >
              <Linkedin className="w-6 h-6 text-purple-400" />
              <span className="font-semibold text-purple-300">LinkedIn</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-500/10 transition-all"
            >
              <Github className="w-6 h-6 text-purple-400" />
              <span className="font-semibold text-purple-300">GitHub</span>
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-500/10 transition-all"
            >
              <Globe className="w-6 h-6 text-purple-400" />
              <span className="font-semibold text-purple-300">Website</span>
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-500/10 transition-all"
            >
              <Twitter className="w-6 h-6 text-purple-400" />
              <span className="font-semibold text-purple-300">Twitter/X</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserContactPage;