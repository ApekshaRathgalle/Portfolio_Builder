# Portfolio Builder

Portfolio Builder is a modern, responsive web app for creating professional portfolios. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Firebase**, it allows users to sign in, fill out a customizable form, upload a profile photo and resume, and showcase their skills, projects, education, and more.

## Features

- ⚡ **Fast & Responsive:** Built with Vite and Tailwind CSS for instant load and mobile-friendly design.
- 🔒 **Authentication:** Sign in with email/password or Google using Firebase Auth.
- 📝 **Customizable Portfolio:** Add personal info, education, experience, skills, languages, certifications, projects, and social links.
- 📸 **Profile Photo & Resume Upload:** Upload a profile image and (optionally) a resume PDF.
- 📤 **Download Resume:** Visitors can download your resume from your portfolio.
- 🔗 **Shareable Portfolio Link:** Get a unique link to your portfolio after creation.
- 🌈 **Beautiful UI:** Modern gradients, animated effects, and professional templates.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase (Auth, Firestore, Storage)](https://firebase.google.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)


## Deployment

### Vercel
https://portfolio-builder-three-zeta.vercel.app/

1. **Build the project:**

   ```sh
   npm run build
   ```

2. **Add a `_redirects` file for React Router:**

   Create `public/_redirects` with:

   ```
   /*    /index.html   200
   ```

3. **Deploy:**

   - Push your code to GitHub.
   - Connect your repo on [Netlify](https://app.netlify.com/).
   - Set build command: `npm run build`
   - Set publish directory: `frontend/dist`
   - Add your Firebase environment variables in Netlify dashboard.



**Made with ❤️ using React, Vite, and Firebase**