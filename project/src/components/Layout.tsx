import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Newspaper, Settings, Bookmark, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import clsx from 'clsx';

export default function Layout() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const navigation = [
    { name: 'News Feed', href: '/', icon: Newspaper },
    { name: 'Preferences', href: '/preferences', icon: Settings },
    { name: 'Saved Articles', href: '/saved', icon: Bookmark },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-gray-800">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <Newspaper className="h-8 w-8 text-indigo-500" />
                  <span className="ml-2 text-xl font-bold text-white">NewsAggregator</span>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={clsx(
                          isActive
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={clsx(
                            isActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                        />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <button
                  onClick={handleSignOut}
                  className="flex-1 flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  <LogOut className="mr-3 flex-shrink-0 h-6 w-6" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}