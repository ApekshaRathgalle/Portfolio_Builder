import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import PortfolioForm from './components/Form';
import UserHomepage from './components/user/userHomepage';
import UserAboutPage from './components/user/userAbout';
import UserSkillsPage from './components/user/userSkills';
import UserProjectPage from './components/user/userProject';
import UserContactPage from './components/user/userContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<PortfolioForm />} />
        <Route path="/user" element={<UserHomepage />} />
        <Route path="/user/about" element={<UserAboutPage />} />
        <Route path="/user/skills" element={<UserSkillsPage />} />
        <Route path="/user/projects" element={<UserProjectPage />} />
        <Route path="/user/contact" element={<UserContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;