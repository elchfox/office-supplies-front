import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../utils/ProtectedRoute';
import Menu from '../components/menu';
import SplashScreen from './SplashScreen';

type DashboardLayoutProps = {}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
    return (
        <ProtectedRoute>
            <SplashScreen>
                <div className="dashboard-layout">
                    <header></header>
                    <Menu />
                    <main className='max-width'>
                        <Outlet />
                    </main>
                </div>
            </SplashScreen>
        </ProtectedRoute>
    );
};

export default DashboardLayout;