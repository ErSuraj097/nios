"use client";
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({ children, title = 'Dashboard', subtitle }: DashboardLayoutProps) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Protect role-specific dashboards
    const rolePaths = ['learner', 'teacher', 'admin', 'parent'];
    const currentPathRole = pathname.split('/')[2]; // assumes /dashboard/[role]

    if (pathname.startsWith('/dashboard/') && rolePaths.includes(currentPathRole)) {
      if (user?.role !== currentPathRole) {
        // Redirect to their own dashboard if they try to access another role's
        router.replace(`/dashboard/${user?.role}`);
      }
    } else if (pathname === '/dashboard') {
      // Redirect /dashboard to /dashboard/[role]
      router.replace(`/dashboard/${user?.role || 'learner'}`);
    }
  }, [isAuthenticated, user, router, pathname]);

  if (!isAuthenticated || (pathname.startsWith('/dashboard/') && user?.role !== pathname.split('/')[2])) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[280px] min-h-screen flex flex-col">
        <Topbar title={title} subtitle={`${user?.name || ''} · ${subtitle || ''}`} />
        <div className="p-8 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

