"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiSearchLine,
  RiAddLine,
  RiEditLine,
  RiDeleteBinLine,
  RiEyeLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArticleLine,
  RiCalendarLine,
  RiThumbUpLine,
  RiMessage3Line,
  RiListCheck,
  RiLayoutGridLine,
  RiCloseLine,
  RiUserLine,
  RiTimeLine,
  RiLoader4Line
} from 'react-icons/ri';
import { getBlogs, deleteBlog } from '@/app/redux/slices/blogSlice';
import { toast } from 'react-hot-toast';
import DeletePopup from '@/app/common/utils/delete-popup';

// Category color mapping
const categoryColors = {
  primary: { bg: 'bg-blue-100', text: 'text-blue-700', darkBg: 'dark:bg-blue-900/30', darkText: 'dark:text-blue-400' },
  success: { bg: 'bg-green-100', text: 'text-green-700', darkBg: 'dark:bg-green-900/30', darkText: 'dark:text-green-400' },
  info: { bg: 'bg-cyan-100', text: 'text-cyan-700', darkBg: 'dark:bg-cyan-900/30', darkText: 'dark:text-cyan-400' },
  warning: { bg: 'bg-amber-100', text: 'text-amber-700', darkBg: 'dark:bg-amber-900/30', darkText: 'dark:text-amber-400' },
  danger: { bg: 'bg-red-100', text: 'text-red-700', darkBg: 'dark:bg-red-900/30', darkText: 'dark:text-red-400' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700', darkBg: 'dark:bg-purple-900/30', darkText: 'dark:text-purple-400' }
};

export default function BlogAdminPage() {
  const dispatch = useDispatch();
  const { data: blogPosts, loading } = useSelector((state) => state.blog);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [deletePopup, setDeletePopup] = useState({ show: false, id: null });

  // Fetch blogs on mount
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter posts based on search
  const filteredPosts = blogPosts.filter(post =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.createdBy?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.metaTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.metaDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.createdDate?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of table on page change
      const tableContainer = document.getElementById('blog-table-container');
      if (tableContainer) {
        tableContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPosts(currentPosts.map(post => post.id));
    } else {
      setSelectedPosts([]);
    }
  };

  const handleSelectPost = (id) => {
    setSelectedPosts(prev =>
      prev.includes(id)
        ? prev.filter(postId => postId !== id)
        : [...prev, id]
    );
  };

  // Handle delete
  const handleDelete = async () => {
    try {
      const result = await dispatch(deleteBlog(deletePopup.id)).unwrap();
      if (result.statusCode === 200) {
        toast.success('Blog deleted successfully!');
        setSelectedPosts(prev => prev.filter(id => id !== deletePopup.id));
      }
    } catch (error) {
      toast.error(error?.message || 'Failed to delete blog');
    } finally {
      setDeletePopup({ show: false, id: null });
    }
  };

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
        <div className='md:mb-2 mb-4'>
          <h1 className="text-xl md:text-2xl font-bold text-[#2E4A5B] dark:text-white">Blog Management</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5 md:mt-1">Manage your blog posts and articles</p>
        </div>

        
      </div>

      <Link
          href="/admin/blog/add"
          className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 mb-3 md:py-2.5 bg-gradient-to-r from-[#D16655] to-[#BD7579] font-medium rounded-lg md:rounded-xl text-sm hover:shadow-lg hover:shadow-[#D16655]/20 transition-all duration-300"
        >
          <RiAddLine className="text-base md:text-lg" />
          <span className="hidden sm:inline">Add New Blog</span>
          <span className="sm:hidden">Add Blog</span>
        </Link>

      {/* Stats Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4 mb-4">

        {/* Total Posts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <RiArticleLine className="text-base md:text-lg text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0">
              <p className="text-lg md:text-xl font-bold text-[#2E4A5B] dark:text-white truncate">
                {blogPosts.length}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                Total Posts
              </p>
            </div>
          </div>
        </div>

        {/* Read Time */}
        <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <RiTimeLine className="text-base md:text-lg text-green-600 dark:text-green-400" />
            </div>
            <div className="min-w-0">
              <p className="text-lg md:text-xl font-bold text-[#2E4A5B] dark:text-white truncate">
                {blogPosts.reduce((acc, post) => acc + (post.readTime || 0), 0)}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                Total Read Time
              </p>
            </div>
          </div>
        </div>

        {/* Published */}
        <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <RiThumbUpLine className="text-base md:text-lg text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0">
              <p className="text-lg md:text-xl font-bold text-[#2E4A5B] dark:text-white truncate">
                {blogPosts.filter(post => post.status === 1).length}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                Published
              </p>
            </div>
          </div>
        </div>

        {/* Draft */}
        <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <RiMessage3Line className="text-base md:text-lg text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0">
              <p className="text-lg md:text-xl font-bold text-[#2E4A5B] dark:text-white truncate">
                {blogPosts.filter(post => post.status === 0).length}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                Draft
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg md:rounded-xl text-sm md:text-base text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* View Toggle - Desktop */}
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'table'
                    ? 'bg-white dark:bg-gray-600 text-[#D16655] shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                title="Table View"
              >
                <RiListCheck className="text-lg" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 text-[#D16655] shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                title="Grid View"
              >
                <RiLayoutGridLine className="text-lg" />
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden p-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400"
            >
              {showMobileFilters ? <RiCloseLine className="text-lg" /> : <RiSearchLine className="text-lg" />}
            </button>

            {/* Items Per Page */}
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-3 md:px-4 py-2 md:py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm md:text-base text-gray-800 dark:text-white focus:outline-none focus:border-[#D16655] transition-all"
            >
              <option value={5}>5/page</option>
              <option value={10}>10/page</option>
              <option value={25}>25/page</option>
              <option value={50}>50/page</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {showMobileFilters && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 p-2 rounded-md text-sm transition-colors ${viewMode === 'table'
                    ? 'bg-white dark:bg-gray-600 text-[#D16655] shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                <RiListCheck className="inline mr-1" /> Table
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 p-2 rounded-md text-sm transition-colors ${viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 text-[#D16655] shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                <RiLayoutGridLine className="inline mr-1" /> Grid
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content Section - Table or Grid View */}
      <div id="blog-table-container" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Table View */}
        {viewMode === 'table' ? (
          <div className="admin-table-container">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-3 md:px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedPosts.length === currentPosts.length && currentPosts.length > 0}
                      className="w-4 h-4 rounded border-gray-300 text-[#D16655] focus:ring-[#D16655]"
                    />
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Read Time
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                    Created Date
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                    Created By
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                    Status
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden xl:table-cell">
                    Meta Title
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden xl:table-cell">
                    Meta Desc
                  </th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                    Views
                  </th>
                  <th className="px-3 md:px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, index) => {
                    const blogData = {
                      id: post.id || index + 1,
                      title: post.title || post.tittle || '-',
                      image: post.image || '/assets/img/blog/blog-img-1-1.jpg',
                      date: post.createdDate || post.date || '-',
                      readTime: post.readTime || 0,
                      createdDate: post.createdDate || '-',
                      createdBy: post.createdBy || '-',
                      status: post.status !== undefined ? post.status : 1,
                      metaTitle: post.metaTitle || '-',
                      metaDescription: post.metaDescription || '-',
                      views: post.views || 0,
                      likes: post.likes || 0,
                      comments: post.comments || 0,
                      category: post.metaKeyWord || '-',
                      author: post.createdBy || '-'
                    };
                    
                    return (
                      <tr key={blogData.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                        <td className="px-3 md:px-4 py-3 md:py-4" data-label="Select">
                          <input
                            type="checkbox"
                            checked={selectedPosts.includes(blogData.id)}
                            onChange={() => handleSelectPost(blogData.id)}
                            className="w-4 h-4 rounded border-gray-300 text-[#D16655] focus:ring-[#D16655]"
                          />
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4" data-label="Post">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-12 md:w-16 h-10 md:h-12 relative rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={blogData.image}
                                alt={blogData.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs md:text-sm font-medium text-gray-800 dark:text-white truncate max-w-[120px] md:max-w-[200px] lg:max-w-[300px]">
                                {blogData.title}
                              </p>
                              <div className="flex items-center gap-1 mt-0.5">
                                <span className="flex items-center gap-0.5 text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                                  <RiCalendarLine className="text-[8px] md:text-xs" />
                                  {blogData.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden md:table-cell" data-label="Read Time">
                          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                            {blogData.readTime ? `${blogData.readTime} min` : '-'}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden lg:table-cell" data-label="Created Date">
                          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                            {blogData.createdDate}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden lg:table-cell" data-label="Created By">
                          <div className="flex items-center gap-2">
                            <div className="w-6 md:w-7 h-6 md:h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] md:text-xs font-medium text-white">
                              {blogData.createdBy ? blogData.createdBy.charAt(0) : 'U'}
                            </div>
                            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 hidden sm:inline">
                              {blogData.createdBy}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden sm:table-cell" data-label="Status">
                          <span className={`inline-flex px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${blogData.status === 1 || blogData.status === 'published' || blogData.status === 1
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                            {blogData.status === 1 ? 'Published' : blogData.status === 0 ? 'Draft' : blogData.status || 'N/A'}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden xl:table-cell" data-label="Meta Title">
                          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate block max-w-[150px]" title={blogData.metaTitle}>
                            {blogData.metaTitle}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden xl:table-cell" data-label="Meta Description">
                          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate block max-w-[150px]" title={blogData.metaDescription}>
                            {blogData.metaDescription}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 hidden md:table-cell" data-label="Views">
                          <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                            <RiEyeLine className="text-xs md:text-sm" />
                            {blogData.views?.toLocaleString() || 0}
                          </div>
                        </td>
                        <td className="px-3 md:px-4 py-3 md:py-4 text-right" data-label="Actions">
                          <div className="flex items-center justify-end gap-0.5 md:gap-1">
                            <Link
                              href={`/pages/blog/${blogData.id}`}
                              target="_blank"
                              className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-[#D16655] transition-colors"
                              title="View"
                            >
                              <RiEyeLine className="text-sm md:text-base" />
                            </Link>
                            <Link
                              href={`/admin/blog/edit/${blogData.id}`}
                              className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-[#D16655] transition-colors"
                              title="Edit"
                            >
                              <RiEditLine className="text-sm md:text-base" />
                            </Link>
                            <button
                              className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                              title="Delete"
                            >
                              <RiDeleteBinLine className="text-sm md:text-base" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={10} className="px-4 py-8 md:py-12 text-center">
                      <div className="flex flex-col items-center">
                        <RiArticleLine className="text-3xl md:text-4xl text-gray-300 dark:text-gray-600 mb-2" />
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">No blog posts found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* Grid View (Card Layout) */
          <div className="p-3 md:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => {
                  // Map API fields to table fields
                  const blogData = {
                    id: post.id || index + 1,
                    title: post.title || post.tittle || '-',
                    image: post.image || '/assets/img/blog/blog-img-1-1.jpg',
                    date: post.createdDate || post.date || '-',
                    readTime: post.readTime || 0,
                    createdDate: post.createdDate || '-',
                    createdBy: post.createdBy || '-',
                    status: post.status !== undefined ? post.status : 1,
                    metaTitle: post.metaTitle || '-',
                    metaDescription: post.metaDescription || '-',
                    views: post.views || 0,
                    likes: post.likes || 0,
                    comments: post.comments || 0,
                    category: post.metaKeyWord || '-',
                    author: post.createdBy || '-'
                  };
                  
                  const colors = categoryColors[post.categoryColor] || categoryColors.primary;
                  return (
                    <div key={blogData.id} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-32 md:h-40">
                        <Image
                          src={blogData.image}
                          alt={blogData.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}>
                            {blogData.category}
                          </span>
                        </div>
                        <div className="absolute top-2 right-2">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${blogData.status === 1 || blogData.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                            }`}>
                            {blogData.status === 1 ? 'Published' : 'Draft'}
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-gray-800 dark:text-white line-clamp-2 mb-2">
                          {blogData.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] font-medium text-white">
                            {blogData.author.charAt(0)}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{blogData.author}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <RiEyeLine /> {blogData.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <RiThumbUpLine /> {blogData.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <RiMessage3Line /> {blogData.comments}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Link
                            href={`/pages/blog/${blogData.id}`}
                            target="_blank"
                            className="flex-1 p-1.5 text-center text-xs bg-gray-200 dark:bg-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                          >
                            View
                          </Link>
                          <Link
                            href={`/admin/blog/edit/${blogData.id}`}
                            className="flex-1 p-1.5 text-center text-xs bg-[#D16655] text-white rounded hover:bg-[#c05545] transition-colors"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full py-8 md:py-12 text-center">
                  <RiArticleLine className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">No blog posts found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 md:p-4 border-t border-gray-100 dark:border-gray-700">
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left order-2 sm:order-1">
              Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, filteredPosts.length)}</span> of <span className="font-medium">{filteredPosts.length}</span> entries
            </div>
            <div className="flex items-center gap-1 order-1 sm:order-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <RiArrowLeftSLine className="text-lg md:text-xl" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[32px] md:min-w-[36px] h-8 md:h-9 px-1 md:px-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${currentPage === page
                          ? 'bg-[#D16655] text-white'
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
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <RiArrowRightSLine className="text-lg md:text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

