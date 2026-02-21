"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactUs } from '@/app/redux/slices/blogSlice';
import {
  RiSearchLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
  RiLoader4Line
} from 'react-icons/ri';

const statusColors = {
  new: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-400'
  },
  read: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-400'
  },
  replied: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-400'
  },
  approved: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-400'
  }
};

export default function AdminContactPage() {
  const dispatch = useDispatch();
  const { contactUsData, loading } = useSelector((state) => state.blog);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getContactUs());
  }, [dispatch]);

  // Map API response to display format
  const contactSubmissions = contactUsData && contactUsData.length > 0 
    ? contactUsData.map((item, index) => ({
        id: item.id || index + 1,
        fullName: item.name || '-',
        email: item.email || '-',
        subject: item.subject || '-',
        message: item.message || '-',
        status: item.status?.toLowerCase() || 'new',
        date: item.createdDate ? new Date(item.createdDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        time: item.createdDate ? new Date(item.createdDate).toLocaleTimeString() : '-'
      }))
    : [];

  // Filter contacts based on search
  const filteredContacts = contactSubmissions.filter(contact => {
    const matchesSearch =
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getStatusBadge = (status) => {
    const colors = statusColors[status] || statusColors.new;
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Here is the list of Contact Us page.
          </p>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <RiLoader4Line className="text-4xl text-[#D16655] animate-spin" />
          <span className="ml-3 text-gray-500 dark:text-gray-400">Loading contact submissions...</span>
        </div>
      )}

      {/* Contact List */}
      {!loading && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Search Bar */}
          <div className="p-3 md:p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="relative w-full">
              <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Table */}
          <div className="admin-table-container">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">S.No</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Subject</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">Message</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {currentItems.length > 0 ? (
                  currentItems.map((contact, index) => (
                    <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="px-3 md:px-4 py-3 md:py-4" data-label="S.No">
                        <p className="text-sm text-gray-800 dark:text-white">{indexOfFirstItem + index + 1}</p>
                      </td>
                      <td className="px-3 md:px-4 py-3 md:py-4" data-label="Name">
                        <p className="text-sm font-medium text-gray-800 dark:text-white">{contact.fullName}</p>
                      </td>
                      <td className="px-3 md:px-4 py-3 md:py-4" data-label="Email">
                        <p className="text-sm text-gray-600 dark:text-gray-300">{contact.email}</p>
                      </td>
                      <td className="px-3 md:px-4 py-3 md:py-4 hidden sm:table-cell" data-label="Subject">
                        <p className="text-sm text-gray-800 dark:text-white max-w-xs truncate">{contact.subject}</p>
                      </td>
                      <td className="px-3 md:px-4 py-3 md:py-4 hidden lg:table-cell" data-label="Message">
                        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs truncate">{contact.message}</p>
                      </td>
                      <td className="px-3 md:px-4 py-3 md:py-4" data-label="Status">
                        {getStatusBadge(contact.status)}
                      </td>
                      <td className="px-3 md:px-4 py-3 md:py-4 hidden md:table-cell" data-label="Date">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{contact.date}</p>
                      </td>
                    
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 md:py-12 text-center">
                      <p className="text-gray-500 dark:text-gray-400">No contact submissions found.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredContacts.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 md:p-4 border-t border-gray-100 dark:border-gray-700">
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left order-2 sm:order-1">
                Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, filteredContacts.length)}</span> of <span className="font-medium">{filteredContacts.length}</span> entries
              </div>
              <div className="flex items-center gap-1 order-1 sm:order-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <RiArrowLeftSLine className="text-lg md:text-xl" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => paginate(page)}
                        className={`min-w-[32px] md:min-w-[36px] h-8 md:h-9 px-1 md:px-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-emerald-500 text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-0.5 text-gray-400 text-xs">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <RiArrowRightSLine className="text-lg md:text-xl" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* View Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Contact Details</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
              >
                <RiCloseLine className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 space-y-4">
              {/* Status & Date */}
              <div className="flex items-center justify-between">
                {getStatusBadge(selectedContact.status)}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedContact.date}
                </span>
              </div>

              {/* Name & Email */}
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</label>
                <p className="mt-1 text-base text-gray-800 dark:text-white">{selectedContact.fullName}</p>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</label>
                <p className="mt-1 text-base text-gray-800 dark:text-white">{selectedContact.email}</p>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</label>
                <p className="mt-1 text-base text-gray-800 dark:text-white">{selectedContact.subject}</p>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</label>
                <div className="mt-1 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 p-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

