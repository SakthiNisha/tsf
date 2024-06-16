import React from 'react';
import { AuthProvider } from './AuthContext';
import Navigation from './Navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
