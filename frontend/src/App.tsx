import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import PortfolioForm from './components/Form';
import UserLayout from './components/user/userLayout';
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
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserHomepage />} />
          <Route path="about" element={<UserAboutPage />} />
          <Route path="skills" element={<UserSkillsPage />} />
          <Route path="projects" element={<UserProjectPage />} />
          <Route path="contact" element={<UserContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;