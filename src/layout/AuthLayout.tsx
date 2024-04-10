import React from 'react';
import { Outlet } from 'react-router-dom';

type AuthLayoutProps = {}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <div className="auth-layout">
      {/* Simple layout for authentication pages */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
