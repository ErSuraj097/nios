import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({ children, title = 'Dashboard', subtitle }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-[var(--sidebar-width)] min-h-screen flex flex-col">
        <Topbar title={title} subtitle={subtitle} />
        <div className="p-8 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
