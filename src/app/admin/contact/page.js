"use client";

import { useState } from 'react';
import {
  RiSearchLine,
  RiFilterLine,
  RiMoreFill,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiCheckLine,
  RiCloseLine,
  RiEyeLine,
  RiReplyLine,
  RiDeleteBinLine,
  RiStarLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from 'react-icons/ri';

// Mock contact form submissions data
const mockContactSubmissions = [
  {
    id: 1,
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Program Inquiry',
    message: 'Hi, I am interested in your Forex Trading Fundamentals course. Could you please provide more details about the curriculum and pricing?',
    inquiryType: 'Program Information',
    status: 'new',
    date: '2024-01-15',
    time: '10:30 AM',
    phone: '+1 234 567 890',
    location: 'New York, USA'
  },
  {
    id: 2,
    fullName: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    subject: 'Partnership Opportunity',
    message: 'We are an educational institution looking to partner with NUPIS for providing financial education to our students. Would like to discuss partnership terms.',
    inquiryType: 'Partnership Opportunities',
    status: 'read',
    date: '2024-01-14',
    time: '2:15 PM',
    phone: '+44 987 654 321',
    location: 'London, UK'
  },
  {
    id: 3,
    fullName: 'Michael Chen',
    email: 'm.chen@techcorp.io',
    subject: 'Technical Support',
    message: 'I am unable to access the video content in the Risk Management course. Getting an error message when trying to play the videos.',
    inquiryType: 'Technical Support',
    status: 'replied',
    date: '2024-01-13',
    time: '9:45 AM',
    phone: '+1 555 123 456',
    location: 'San Francisco, USA'
  },
  {
    id: 4,
    fullName: 'Emily Rodriguez',
    email: 'emily.r@startup.com',
    subject: 'Course Enrollment Question',
    message: 'What is the difference between the Standard and Premium packages? Is there a money-back guarantee?',
    inquiryType: 'Program Information',
    status: 'new',
    date: '2024-01-15',
    time: '4:20 PM',
    phone: '+1 321 654 987',
    location: 'Miami, USA'
  },
  {
    id: 5,
    fullName: 'David Thompson',
    email: 'd.thompson@investments.net',
    subject: 'Media Collaboration',
    message: 'I run a financial YouTube channel with 500K subscribers. Interested in collaborating with NUPIS for content creation.',
    inquiryType: 'Media & Press',
    status: 'read',
    date: '2024-01-12',
    time: '11:00 AM',
    phone: '+1 654 321 123',
    location: 'Chicago, USA'
  },
  {
    id: 6,
    fullName: 'Lisa Anderson',
    email: 'lisa.a@university.edu',
    subject: 'Academic Partnership',
    message: 'Our university is looking to integrate your financial education courses into our business curriculum.',
    inquiryType: 'Partnership Opportunities',
    status: 'replied',
    date: '2024-01-10',
    time: '3:30 PM',
    phone: '+1 789 456 012',
    location: 'Boston, USA'
  },
  {
    id: 7,
    fullName: 'Robert Martinez',
    email: 'r.martinez@firm.com',
    subject: 'Account Access Issue',
    message: 'Cannot reset my password. The reset link is not working. Please help ASAP as I need to access the course materials.',
    inquiryType: 'Technical Support',
    status: 'new',
    date: '2024-01-15',
    time: '6:00 PM',
    phone: '+1 456 789 012',
    location: 'Los Angeles, USA'
  },
  {
    id: 8,
    fullName: 'Amanda Foster',
    email: 'amanda.f@news.org',
    subject: 'Press Interview Request',
    message: 'We are preparing an article on the rise of financial education platforms. Would like to interview your founders.',
    inquiryType: 'Media & Press',
    status: 'read',
    date: '2024-01-11',
    time: '8:15 AM',
    phone: '+1 234 567 890',
    location: 'Washington D.C., USA'
  }
];

const statusColors = {
  new: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-400',
    dot: 'bg-blue-500'
  },
  read: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-400',
    dot: 'bg-amber-500'
  },
  replied: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-400',
    dot: 'bg-green-500'
  }
};

const inquiryTypeIcons = {
  'Program Information': '📚',
  'Technical Support': '🔧',
  'Partnership Opportunities': '🤝',
  'Media & Press': '📰'
};

export default function AdminContactPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter contacts based on search and filters
  const filteredContacts = mockContactSubmissions.filter(contact => {
    const matchesSearch =
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    const matchesType = typeFilter === 'all' || contact.inquiryType === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleTypeFilterChange = (type) => {
    setTypeFilter(type);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getStatusBadge = (status) => {
    const colors = statusColors[status];
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  // Get unique inquiry types for filter
  const inquiryTypes = [...new Set(mockContactSubmissions.map(c => c.inquiryType))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
            Contact Us
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here is the list of Contact Us page .
          </p>
        </div>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-3 lg:p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">New</p>
              <p className="text-lg lg:text-2xl font-bold text-gray-800 dark:text-white truncate">
                {mockContactSubmissions.filter(c => c.status === 'new').length}
              </p>
            </div>
            <div className="p-2 lg:p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <RiMailLine className="text-lg lg:text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-3 lg:p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Read</p>
              <p className="text-lg lg:text-2xl font-bold text-gray-800 dark:text-white truncate">
                {mockContactSubmissions.filter(c => c.status === 'read').length}
              </p>
            </div>
            <div className="p-2 lg:p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex-shrink-0">
              <RiEyeLine className="text-lg lg:text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-3 lg:p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Replied</p>
              <p className="text-lg lg:text-2xl font-bold text-gray-800 dark:text-white truncate">
                {mockContactSubmissions.filter(c => c.status === 'replied').length}
              </p>
            </div>
            <div className="p-2 lg:p-3 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex-shrink-0">
              <RiReplyLine className="text-lg lg:text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-3 lg:p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">This Week</p>
              <p className="text-lg lg:text-2xl font-bold text-gray-800 dark:text-white truncate">
                {mockContactSubmissions.filter(c => {
                  const contactDate = new Date(c.date);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return contactDate >= weekAgo;
                }).length}
              </p>
            </div>
            <div className="p-2 lg:p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex-shrink-0">
              <RiTimeLine className="text-lg lg:text-xl" />
            </div>
          </div>
        </div>
      </div>


      {/* Contact List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Mobile Search & Filter Bar */}
        <div className="p-3 sm:p-4 border-b border-gray-100 dark:border-gray-700 lg:hidden">
          <div className="space-y-3">
            {/* Search */}
            <div className="relative w-full">
              <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            {/* Mobile Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleStatusFilterChange('all')}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleStatusFilterChange('new')}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  statusFilter === 'new'
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                New
              </button>
              <button
                onClick={() => handleStatusFilterChange('read')}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  statusFilter === 'read'
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                Read
              </button>
              <button
                onClick={() => handleStatusFilterChange('replied')}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  statusFilter === 'replied'
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                Replied
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Search & Filter */}
        <div className="hidden lg:flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="relative w-80">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => handleStatusFilterChange(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </div>

        <div className="admin-table-container overflow-x-auto relative">
          {/* Scroll hint for mobile */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent dark:from-gray-800 pointer-events-none lg:hidden flex items-center pr-2">
            <span className="text-gray-400 text-xs animate-pulse">→</span>
          </div>
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-3 lg:px-5 py-3 lg:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Full Name & Email</th>
                <th className="px-3 lg:px-5 py-3 lg:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap hidden md:table-cell">Subject</th>
                <th className="px-3 lg:px-5 py-3 lg:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Type</th>
                <th className="px-3 lg:px-5 py-3 lg:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Status</th>
                <th className="px-3 lg:px-5 py-3 lg:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap hidden sm:table-cell">Date</th>
                <th className="px-3 lg:px-5 py-3 lg:py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {currentItems.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-3 lg:px-5 py-3 lg:py-4" data-label="Contact">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-10 h-10 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-medium text-xs lg:text-sm flex-shrink-0">
                        {contact.fullName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-white truncate max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-none">{contact.fullName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-none">{contact.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 hidden md:table-cell" data-label="Subject">
                    <p className="text-sm text-gray-800 dark:text-white max-w-xs truncate">{contact.subject}</p>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4" data-label="Type">
                    <span className="inline-flex items-center gap-1.5 text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-base">{inquiryTypeIcons[contact.inquiryType]}</span>
                      <span className="hidden lg:inline">{contact.inquiryType}</span>
                    </span>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4" data-label="Status">
                    {getStatusBadge(contact.status)}
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 hidden sm:table-cell" data-label="Date">
                    <div className="flex items-center gap-1.5 text-xs lg:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      <RiTimeLine className="text-sm flex-shrink-0" />
                      <span className="hidden lg:inline">{contact.date} at {contact.time}</span>
                      <span className="lg:hidden">{contact.date}</span>
                    </div>
                  </td>
                  <td className="px-3 lg:px-5 py-3 lg:py-4 text-right" data-label="Actions">
                    <div className="flex items-center justify-end gap-1 lg:gap-2">
                      <button
                        onClick={() => handleViewContact(contact)}
                        className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        title="View Details"
                      >
                        <RiEyeLine className="text-base lg:text-lg" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Reply"
                      >
                        <RiReplyLine className="text-base lg:text-lg" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <RiDeleteBinLine className="text-base lg:text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredContacts.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No contact submissions found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredContacts.length > 0 && (
          <div className="px-3 lg:px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 dark:border-gray-700">
            {/* Left side - Items per page and showing info */}
            <div className="flex items-center gap-2 lg:gap-4 order-2 sm:order-1 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Show</span>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="px-2 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent min-h-[44px]"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">entries</span>
              </div>
              <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 hidden sm:inline whitespace-nowrap">
                {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredContacts.length)} of {filteredContacts.length}
              </span>
            </div>

            {/* Right side - Pagination controls */}
            <div className="flex items-center gap-1 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-end">
              {/* Previous button */}
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`min-h-[44px] min-w-[44px] p-2 rounded-lg border transition-colors ${
                  currentPage === 1
                    ? 'border-gray-200 dark:border-gray-600 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                    : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                title="Previous page"
              >
                <RiArrowLeftSLine className="text-lg" />
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-0.5 lg:gap-1 overflow-x-auto max-w-[180px] sm:max-w-none">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, and pages around current page
                  const shouldShow = 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1);
                  
                  const isEllipsis = (page === currentPage - 2 && currentPage > 3) || (page === currentPage + 2 && currentPage < totalPages - 2);
                  
                  if (!shouldShow && !isEllipsis) return null;
                  
                  if (isEllipsis) {
                    return (
                      <span key={page} className="px-1 lg:px-2 py-1.5 text-gray-400 dark:text-gray-500 text-xs">
                        ...
                      </span>
                    );
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => paginate(page)}
                      className={`min-h-[44px] min-w-[44px] px-1 lg:px-3 rounded-lg text-xs lg:text-sm font-medium transition-colors flex-shrink-0 ${
                        currentPage === page
                          ? 'bg-emerald-500 text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`min-h-[44px] min-w-[44px] p-2 rounded-lg border transition-colors ${
                  currentPage === totalPages || totalPages === 0
                    ? 'border-gray-200 dark:border-gray-600 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                    : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                title="Next page"
              >
                <RiArrowRightSLine className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-3 sm:p-4 flex items-center justify-between z-10">
              <div className="min-w-0 pr-2">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 dark:text-white truncate">Contact Details</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Submission #{selectedContact.id}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 flex-shrink-0"
              >
                <RiCloseLine className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
              {/* Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                {getStatusBadge(selectedContact.status)}
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {selectedContact.date} at {selectedContact.time}
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm sm:text-xl flex-shrink-0">
                  {selectedContact.fullName.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-white truncate">{selectedContact.fullName}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{selectedContact.email}</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <RiPhoneLine className="text-gray-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white truncate">{selectedContact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <RiMapPinLine className="text-gray-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white truncate">{selectedContact.location}</p>
                  </div>
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl">{inquiryTypeIcons[selectedContact.inquiryType]}</span>
                <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 truncate">{selectedContact.inquiryType}</span>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</label>
                <p className="mt-1 text-sm sm:text-base text-gray-800 dark:text-white">{selectedContact.subject}</p>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</label>
                <div className="mt-1 p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">{selectedContact.message}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-3">
              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm sm:text-base min-h-[44px]"
              >
                Close
              </button>
              <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]">
                <RiReplyLine />
                Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

