"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  RiUser3Line,
  RiBook2Line,
  RiWallet3Line,
  RiEyeLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiAddLine,
  RiFileChartLine,
  RiUserAddLine,
  RiVideoLine,
  RiArticleLine,
  RiStarLine,
  RiMoneyDollarCircleLine,
  RiGroupLine,
  RiGlobalLine,
  RiTimeLine,
  RiCheckLine,
  RiCloseLine,
  RiMoreFill
} from 'react-icons/ri';

// Mock data for demonstration
const mockStats = [
  {
    title: 'Total Users',
    value: '12,456',
    change: '+12.5%',
    changeType: 'positive',
    icon: RiUser3Line,
    color: 'blue'
  },
  {
    title: 'Total Courses',
    value: '156',
    change: '+3',
    changeType: 'positive',
    icon: RiBook2Line,
    color: 'emerald'
  },
  {
    title: 'Revenue',
    value: '$48,250',
    change: '+8.2%',
    changeType: 'positive',
    icon: RiMoneyDollarCircleLine,
    color: 'green'
  },
  {
    title: 'Page Views',
    value: '89,234',
    change: '-2.4%',
    changeType: 'negative',
    icon: RiEyeLine,
    color: 'purple'
  },
];

const mockRecentUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', date: '2 mins ago', avatar: 'JD' },
  { id: 2, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Premium', date: '15 mins ago', avatar: 'SW' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Student', date: '1 hour ago', avatar: 'MJ' },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', role: 'Expert', date: '2 hours ago', avatar: 'EB' },
  { id: 5, name: 'David Lee', email: 'david@example.com', role: 'Student', date: '3 hours ago', avatar: 'DL' },
];

const mockRecentTransactions = [
  { id: 1, user: 'John Doe', amount: '$299', type: 'Course Purchase', status: 'completed', date: '5 mins ago' },
  { id: 2, user: 'Sarah Wilson', amount: '$499', type: 'Premium Membership', status: 'completed', date: '1 hour ago' },
  { id: 3, user: 'Mike Johnson', amount: '$149', type: 'Course Purchase', status: 'pending', date: '2 hours ago' },
  { id: 4, user: 'Emily Brown', amount: '$99', type: 'Course Purchase', status: 'completed', date: '3 hours ago' },
];

const mockCourses = [
  { id: 1, title: 'Forex Trading Fundamentals', students: 2341, rating: 4.8, status: 'published' },
  { id: 2, title: 'Advanced Stock Analysis', students: 1856, rating: 4.9, status: 'published' },
  { id: 3, title: 'Risk Management Masterclass', students: 987, rating: 4.7, status: 'draft' },
  { id: 4, title: 'Trading Psychology', students: 1234, rating: 4.6, status: 'published' },
];

const quickActions = [
  { icon: RiUserAddLine, label: 'Add User', href: '/admin/users/add', color: 'blue' },
  { icon: RiAddLine, label: 'Add Course', href: '/admin/courses/add', color: 'emerald' },
  { icon: RiArticleLine, label: 'Write Blog', href: '/admin/blog/add', color: 'purple' },
  { icon: RiVideoLine, label: 'Upload Video', href: '/admin/videos/add', color: 'red' },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-[#D16655] dark:text-blue-400',
    gradient: 'from-[#D16655] to-blue-600',
    ring: 'ring-blue-100 dark:ring-blue-900/50'
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    text: 'text-[#BD7579] dark:text-emerald-400',
    gradient: 'from-[#BD7579] to-emerald-600',
    ring: 'ring-emerald-100 dark:ring-emerald-900/50'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-[#2E4A5B] dark:text-green-400',
    gradient: 'from-[#2E4A5B] to-green-600',
    ring: 'ring-green-100 dark:ring-green-900/50'
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    gradient: 'from-[#D16655] to-[#BD7579]',
    ring: 'ring-purple-100 dark:ring-purple-900/50'
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-600 dark:text-red-400',
    gradient: 'from-red-500 to-red-600',
    ring: 'ring-red-100 dark:ring-red-900/50'
  }
};

function StatCard({ stat, color }) {
  const Icon = stat.icon;
  const colors = colorClasses[color];
  const isPositive = stat.changeType === 'positive';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-3 lg:p-5 shadow-lg shadow-gray-100/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-[#D16655]/10 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className={`p-2 lg:p-3 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg`}>
          <Icon className="text-lg lg:text-xl" />
        </div>
        <div className={`flex items-center gap-1 text-xs lg:text-sm font-semibold px-1.5 lg:px-2.5 py-0.5 lg:py-1 rounded-full ${isPositive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
          {isPositive ? <RiArrowUpLine /> : <RiArrowDownLine />}
          <span className="hidden xs:inline">{stat.change}</span>
        </div>
      </div>
      <div className="mt-3 lg:mt-4">
        <p className="text-xl lg:text-3xl font-bold text-[#2E4A5B] dark:text-white group-hover:text-[#D16655] transition-colors">{stat.value}</p>
        <p className="text-xs lg:text-sm text-[#505050] dark:text-gray-400 mt-1 font-medium">{stat.title}</p>
      </div>
    </div>
  );
}

function QuickActionButton({ action, color }) {
  const Icon = action.icon;
  const colors = colorClasses[color];

  return (
    <Link
      href={action.href}
      className={`flex flex-col items-center justify-center p-3 lg:p-5 rounded-xl lg:rounded-2xl ${colors.bg} hover:shadow-lg hover:shadow-[#D16655]/10 transition-all duration-300 group`}
    >
      <div className={`p-2 lg:p-3 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg mb-1 lg:mb-2 group-hover:scale-110 transition-transform`}>
        <Icon className="text-lg lg:text-2xl" />
      </div>
      <span className="text-xs lg:text-sm font-semibold text-[#2E4A5B] ">{action.label}</span>
    </Link>
  );
}

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section with Gradient Banner */}
      <div className="relative overflow-hidden rounded-2xl p-6 lg:p-8 shadow-xl shadow-[#D16655]/20 bg-gradient-to-br from-[#D16655] to-[#BD7579]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold ">
              {getGreeting()}, Admin! 👋
            </h1>
            <p className="mt-2 text-sm ">
              Here&apos;s what&apos;s happening with your platform today.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm mb-4">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-xl font-semibold ">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4 lg:gap-6">
        {mockStats.map((stat, index) => (
          <StatCard
            key={stat.title}
            stat={stat}
            color={Object.keys(colorClasses)[index % 4]}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg shadow-gray-100/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4 lg:mb-5">
          <h2 className="text-base lg:text-lg font-bold text-[#2E4A5B] dark:text-white">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {quickActions.map((action) => (
            <QuickActionButton
              key={action.label}
              action={action}
              color={action.color}
            />
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Recent Users */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl lg:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between p-4 lg:p-5 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">Recent Users</h2>
            <Link href="/admin/users" className="text-xs lg:text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
              View All
            </Link>
          </div>
          <div className="admin-table-container">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Role</th>
                  <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Joined</th>
                  <th className="px-3 lg:px-5 py-2 lg:py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {mockRecentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-3 lg:px-5 py-3 lg:py-4" data-label="User">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs lg:text-sm font-medium">
                          {user.avatar}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-800 dark:text-white truncate max-w-[120px] lg:max-w-none">{user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[120px] lg:max-w-none">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 lg:px-5 py-3 lg:py-4 hidden sm:table-cell" data-label="Role">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${user.role === 'Premium'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          : user.role === 'Expert'
                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-3 lg:px-5 py-3 lg:py-4 hidden md:table-cell" data-label="Joined">
                      <div className="flex items-center gap-1.5 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                        <RiTimeLine className="text-sm" />
                        {user.date}
                      </div>
                    </td>
                    <td className="px-3 lg:px-5 py-3 lg:py-4 text-right" data-label="Action">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <RiMoreFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between p-4 lg:p-5 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">Recent Transactions</h2>
            <Link href="/admin/transactions" className="text-xs lg:text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
              View All
            </Link>
          </div>
          <div className="p-4 lg:p-5 space-y-3 lg:space-y-4">
            {mockRecentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-2 lg:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className={`p-1.5 lg:p-2 rounded-lg ${transaction.status === 'completed'
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                    {transaction.status === 'completed' ? <RiCheckLine className="text-sm lg:text-base" /> : <RiTimeLine className="text-sm lg:text-base" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs lg:text-sm font-medium text-gray-800 dark:text-white truncate max-w-[100px] lg:max-w-none">{transaction.user}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs lg:text-sm font-semibold text-gray-800 dark:text-white">{transaction.amount}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between p-4 lg:p-5 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">Popular Courses</h2>
          <Link href="/admin/courses" className="text-xs lg:text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
            View All Courses
          </Link>
        </div>
        <div className="admin-table-container">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course</th>
                <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Students</th>
                <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Rating</th>
                <th className="px-3 lg:px-5 py-2 lg:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Status</th>
                <th className="px-3 lg:px-5 py-2 lg:py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {mockCourses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-3 lg:px-5 py-3 lg:py-4" data-label="Course">
                    <p className="text-sm font-medium text-gray-800 dark:text-white truncate max-w-[200px] lg:max-w-none">{course.title}</p>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 hidden sm:table-cell" data-label="Students">
                    <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                      <RiGroupLine />
                      {course.students.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 hidden md:table-cell" data-label="Rating">
                    <div className="flex items-center gap-1">
                      <RiStarLine className="text-amber-400 text-sm lg:text-base" />
                      <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">{course.rating}</span>
                    </div>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 hidden sm:table-cell" data-label="Status">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${course.status === 'published'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                      {course?.status?.charAt(0)?.toUpperCase() + course.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 text-right" data-label="Action">
                    <Link
                      href={`/admin/courses/${course.id}`}
                      className="text-xs lg:text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  
    </div>
  );
}

