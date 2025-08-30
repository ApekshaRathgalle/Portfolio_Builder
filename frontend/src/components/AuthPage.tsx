import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
      navigate("/form");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
      navigate("/form");
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white/20 dark:bg-gray-900/40 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 border border-purple-400 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-500 hover:text-purple-700 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-2 rounded bg-white/30 dark:bg-gray-800/30 border border-purple-300 text-purple-700 dark:text-purple-200 font-semibold hover:bg-purple-100 dark:hover:bg-purple-900 transition-all mb-4 flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C36.45 2.34 30.59 0 24 0 14.73 0 6.41 5.74 2.44 14.09l8.06 6.27C12.6 14.13 17.87 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.59c0-1.64-.15-3.22-.43-4.75H24v9.02h12.45c-.54 2.92-2.17 5.39-4.62 7.06l7.19 5.59C43.97 37.09 46.1 31.29 46.1 24.59z"/><path fill="#FBBC05" d="M10.5 28.36c-1.02-2.98-1.02-6.18 0-9.16l-8.06-6.27C.82 16.99 0 20.39 0 24c0 3.61.82 7.01 2.44 10.07l8.06-6.27z"/><path fill="#EA4335" d="M24 48c6.59 0 12.45-2.17 16.98-5.91l-7.19-5.59c-2.01 1.35-4.59 2.16-7.39 2.16-6.13 0-11.4-4.63-13.5-10.97l-8.06 6.27C6.41 42.26 14.73 48 24 48z"/></g></svg>
          Continue with Google
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-white/40 dark:bg-gray-800/40 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 dark:text-white"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-white/40 dark:bg-gray-800/40 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 dark:text-white"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded bg-gradient-to-r from-green-500 to-purple-500 text-white font-semibold hover:from-green-600 hover:to-purple-600 transition-all"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-600 dark:text-purple-400 underline font-medium"
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;