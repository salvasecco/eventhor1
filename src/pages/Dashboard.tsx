import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

// Dashboard Pages
import ABAnalysis from './dashboard/ABAnalysis';
import IndividualAnalysis from './dashboard/IndividualAnalysis';
import VariationGenerator from './dashboard/VariationGenerator';
import NarrativeStyle from './dashboard/NarrativeStyle';
import LearningHistory from './dashboard/LearningHistory';
import Statistics from './dashboard/Statistics';
import ExploreHooks from './dashboard/ExploreHooks';
import MyVideos from './dashboard/MyVideos';
import Settings from './dashboard/Settings';

function DashboardContent() {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <Routes>
            <Route index element={<DashboardOverview />} />
            <Route path="ab-analysis" element={<ABAnalysis />} />
            <Route path="analysis" element={<IndividualAnalysis />} />
            <Route path="variations" element={<VariationGenerator />} />
            <Route path="narrative" element={<NarrativeStyle />} />
            <Route path="learning" element={<LearningHistory />} />
            <Route path="stats" element={<Statistics />} />
            <Route path="hooks" element={<ExploreHooks />} />
            <Route path="videos" element={<MyVideos />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <AuthProvider>
      <DashboardContent />
    </AuthProvider>
  );
}