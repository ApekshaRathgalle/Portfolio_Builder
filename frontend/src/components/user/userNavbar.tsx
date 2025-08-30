import React from "react";
import { Link } from "react-router-dom";

const sections = [
  { name: "About", path: "/user/about" },
  { name: "Skills", path: "/user/skills" },
  { name: "Projects", path: "/user/projects" },
  { name: "Contact", path: "/user/contact" },
];

const UserNavbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/20 dark:bg-gray-900/40 backdrop-blur sticky top-0 z-40 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-8 py-4">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="text-lg font-semibold text-purple-700 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-400 px-3 py-1 rounded transition-colors"
          >
            {section.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default UserNavbar;