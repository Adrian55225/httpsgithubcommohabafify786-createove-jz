import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DiscoverPage from './pages/DiscoverPage';
import MatchesPage from './pages/MatchesPage';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import UpgradePage from './pages/UpgradePage';
import SettingsPage from './pages/SettingsPage';
import PayPalReturn from './pages/PayPalReturn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route 
            path="/discover" 
            element={
              <ProtectedRoute>
                <DiscoverPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/messages" 
            element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/matches" 
            element={
              <ProtectedRoute>
                <MatchesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/upgrade" 
            element={
              <ProtectedRoute>
                <UpgradePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/paypal/return" 
            element={
              <ProtectedRoute>
                <PayPalReturn />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <SubscriptionProvider>
          <Router>
            <AppRoutes />
          </Router>
        </SubscriptionProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
