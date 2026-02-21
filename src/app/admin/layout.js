"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  RiDashboardLine, 
  RiUser3Line,  
  RiSettings4Line, 
  RiLogoutCircleLine,
  RiMenu3Line,
  RiCloseLine,
  RiNotification3Line,
  RiMoonLine,
  RiSunLine,
  RiArrowDownSLine,
  RiContactsBookLine,
  RiArticleLine,
} from 'react-icons/ri';
import { 
  RiFolderLine, 
} from "react-icons/ri";

import ReduxProvider from '../components/ReduxProvider';
import { Toaster } from 'react-hot-toast';
import './admin.css';

const menuItems = [
  { icon: RiDashboardLine, label: 'Dashboard', href: '/admin', badge: null },
  { icon: RiContactsBookLine, label: 'Contact Us', href: '/admin/contact', badge: '3' },
  { icon: RiFolderLine, label: 'Category', href: '/admin/category', badge: null },
  { icon: RiArticleLine, label: 'Blog', href: '/admin/blog', badge: null },
];

// Helper function to get token from storage
const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token') || sessionStorage.getItem('token');
};

// Helper function to get user data from storage
const getUserData = () => {
  if (typeof window === 'undefined') return null;
  const userData = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
  if (userData) {
    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }
  return null;
};

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);
const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Close sidebar when navigating to a new page
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Mock user data
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@nupis.com',
    role: 'Super Admin',
    avatar: null
  });

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const token = getToken();
      const userData = getUserData();
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(userData);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkAuth();

    // Listen for auth changes from login/logout
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  useEffect(() => {
    // Check for dark mode preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Redirect to login if not authenticated (but allow login page to render)
  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  // Don't render layout on login page - just render children
  const isLoginPage = pathname === '/admin/login';

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogout = () => {
    // Clear auth data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('currentUser');
    }
    setIsAuthenticated(false);
    router.push('/admin/login');
  };
  
  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

// If not authenticated and on login page, render just the children without layout
  if (!isAuthenticated && isLoginPage) {
    return (
      <ReduxProvider>
        <Toaster position="top-right" />
        <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
          </div>
        </div>
      </ReduxProvider>
    );
  }

  // If not authenticated and not on login page, don't render content
  if (!isAuthenticated) {
    return null;
  }

return (
    <ReduxProvider>
      <Toaster position="top-right" />
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
          {/* Sidebar */}
          <aside 
            className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col bg-[#29d2cc] dark:bg-[#2E4A5B] border-r border-[#e6edfd] dark:border-gray-700 transition-all duration-300 ${
              sidebarOpen ? 'w-64' : 'w-0 lg:w-20'
            } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
          >
            {/* Logo */}
            <div className="h-16 lg:h-20 flex items-center justify-between px-2 lg:px-4 border-b border-white/20 dark:border-gray-700 bg-transparent dark:bg-transparent">
              {sidebarOpen ? (
                <Link href="/admin" className="flex items-center gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
                    <span className="text-[#D16655] font-bold text-sm lg:text-lg">N</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm lg:text-lg text-white dark:text-white tracking-tight">NUPIS</span>
                    <span className="text-[8px] lg:text-[10px] text-white/80 -mt-1 hidden lg:block">Admin Panel</span>
                  </div>
                </Link>
              ) : (
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
                  <span className="text-[#D16655] font-bold text-sm lg:text-lg">N</span>
                </div>
              )}
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-1.5 lg:p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700 text-white dark:text-gray-300 transition-colors"
              >
                <RiCloseLine className="text-lg lg:text-xl" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              <ul className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                          isActive 
                            ? 'bg-white text-[#D16655] shadow-lg' 
                            : 'text-white/90 hover:bg-white/20 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`text-xl flex-shrink-0 ${isActive ? 'text-[#D16655]' : 'text-white group-hover:text-white'}`} />
                          {sidebarOpen && (
                            <span className="font-medium text-black">{item.label}</span>
                          )}
                        </div>
                        {sidebarOpen && item.badge && (
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                            isActive 
                              ? 'bg-[#D16655]/20 text-[#D16655]' 
                              : 'bg-white/20 text-black'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Logout */}
            <div className="p-3 border-t border-white/20 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-white/90 hover:bg-white/20 transition-colors"
              >
                <RiLogoutCircleLine className="text-xl flex-shrink-0" />
                {sidebarOpen && <span className="font-medium text-white">Logout</span>}
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
            sidebarOpen ? 'lg:ml-64 ml-0' : 'lg:ml-20 ml-0'
          }`}>
            {/* Header */}
            <header className="h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-[#e6edfd] dark:border-gray-700 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
              {/* Left side */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="hidden lg:flex p-2.5 rounded-xl hover:bg-[#F8EBE5] dark:hover:bg-gray-700 text-[#505050] dark:text-gray-300 transition-colors"
                >
                  <RiMenu3Line className="text-xl" />
                </button>
                
                {/* Mobile menu button */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2.5 rounded-xl hover:bg-[#F8EBE5] dark:hover:bg-gray-700 text-[#505050] dark:text-gray-300 transition-colors"
                >
                  <RiMenu3Line className="text-xl" />
                </button>

                
              </div>

              {/* Right side */}
              <div className="flex items-center gap-2 lg:gap-4">
                {/* Theme Toggle */}
                {/* <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl hover:bg-[#F8EBE5] dark:hover:bg-gray-700 text-[#505050] dark:text-gray-300 transition-colors"
                  title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {isDark ? <RiSunLine className="text-xl" /> : <RiMoonLine className="text-xl" />}
                </button> */}

                {/* Notifications */}
                <button className="relative p-2.5 rounded-xl hover:bg-[#F8EBE5] dark:hover:bg-gray-700 text-[#505050] dark:text-gray-300 transition-colors">
                  <RiNotification3Line className="text-xl" />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#D16655] rounded-full border-2 border-white dark:border-gray-800"></span>
                </button>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 lg:gap-3 p-1.5 lg:p-2 rounded-xl hover:bg-[#F8EBE5] dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#D16655] to-[#BD7579] flex items-center justify-center text-white font-medium text-sm shadow-lg shadow-[#D16655]/20">
                      {user?.name?.charAt(0)}
                    </div>
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-semibold text-[#2E4A5B] dark:text-white">{user.name}</p>
                      <p className="text-xs text-[#BD7579] dark:text-gray-400">{user.role}</p>
                    </div>
                    <RiArrowDownSLine className={`hidden lg:block text-[#BD7579] dark:text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-800 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                      </div>
                      <Link
                        href="/admin/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <RiUser3Line className="text-lg" />
                        Profile
                      </Link>
                      <Link
                        href="/admin/settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <RiSettings4Line className="text-lg" />
                        Settings
                      </Link>
                      <hr className="my-1 border-gray-200 dark:border-gray-700" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <RiLogoutCircleLine className="text-lg" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-4 lg:p-6 w-full">
              {children}
            </main>
          </div>

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>
      </div>
    </ReduxProvider>
  );
}

