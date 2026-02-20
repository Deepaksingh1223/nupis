"use client";

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiArrowLeftSLine,
  RiImageLine,
  RiCloseLine,
  RiAddLine
} from 'react-icons/ri';
import { toast } from 'react-hot-toast';
import { getCategory } from '@/app/redux/slices/categorySlice';
import { addBlog } from '@/app/redux/slices/blogSlice';
import Spinner from '@/app/common/spinner';
import 'react-quill/dist/quill.snow.css';

// Dynamic import for React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="h-40 bg-gray-100 animate-pulse rounded-lg"></div>
});

const AddBlogPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category?.data || []);
  const categoryLoading = useSelector((state) => state.category?.loading || false);
  const blogLoading = useSelector((state) => state.blog?.loading || false);

  // Form state
  const [title, setTitle] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [readTime, setReadTime] = useState('');
  const [status, setStatus] = useState('draft');
  
  // Meta fields
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeyword, setMetaKeyword] = useState('');
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  // Get selected category name
  const selectedCategory = useMemo(() => {
    return categoryData.find(cat => cat.categoryId === parseInt(categoryId));
  }, [categoryData, categoryId]);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!createdBy.trim()) {
      newErrors.createdBy = 'Author is required';
    }
    if (!categoryId) {
      newErrors.categoryId = 'Category is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!readTime.trim()) {
      newErrors.readTime = 'Read time is required';
    }
    if (!image && !imagePreview) {
      newErrors.image = 'Image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      if (errors.image) {
        setErrors(prev => ({ ...prev, image: '' }));
      }
    }
  };

  // Remove image
  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('createdBy', createdBy);
      formData.append('categoryId', categoryId);
      formData.append('category', selectedCategory?.name || '');
      formData.append('description', description);
      formData.append('readTime', readTime);
      formData.append('status', status);
      formData.append('metaTitle', metaTitle);
      formData.append('metaDescription', metaDescription);
      formData.append('metaKeyword', metaKeyword);
      
      if (image) {
        formData.append('image', image);
      }

      const result = await dispatch(addBlog(formData)).unwrap();

      if (result.statusCode === 200) {
        toast.success(result.message || 'Blog added successfully!');
        router.push('/admin/blog');
      } else {
        toast.error(result.message || 'Failed to add blog');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      toast.error(error?.message || 'Failed to add blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quill toolbar configuration
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          >
            <RiArrowLeftSLine className="text-xl" />
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#2E4A5B] dark:text-white">
              Add New Blog
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Create a new blog post
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Basic Information
              </h2>
              
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      if (errors.title) setErrors(prev => ({ ...prev, title: '' }));
                    }}
                    placeholder="Enter blog title"
                    className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border ${errors.title ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all`}
                  />
                  {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
                </div>

                {/* Created By & Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Created By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Created By <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={createdBy}
                      onChange={(e) => {
                        setCreatedBy(e.target.value);
                        if (errors.createdBy) setErrors(prev => ({ ...prev, createdBy: '' }));
                      }}
                      placeholder="Author name"
                      className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border ${errors.createdBy ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all`}
                    />
                    {errors.createdBy && <p className="text-xs text-red-500 mt-1">{errors.createdBy}</p>}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={categoryId}
                      onChange={(e) => {
                        setCategoryId(e.target.value);
                        if (errors.categoryId) setErrors(prev => ({ ...prev, categoryId: '' }));
                      }}
                      className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border ${errors.categoryId ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-sm text-gray-800 dark:text-white focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all`}
                    >
                      <option value="">Select Category</option>
                      {categoryLoading ? (
                        <option>Loading...</option>
                      ) : (
                        categoryData.map((cat) => (
                          <option key={cat.categoryId} value={cat.categoryId}>
                            {cat.name}
                          </option>
                        ))
                      )}
                    </select>
                    {errors.categoryId && <p className="text-xs text-red-500 mt-1">{errors.categoryId}</p>}
                  </div>
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Read Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => {
                      setReadTime(e.target.value);
                      if (errors.readTime) setErrors(prev => ({ ...prev, readTime: '' }));
                    }}
                    placeholder="e.g., 5 min read"
                    className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border ${errors.readTime ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all`}
                  />
                  {errors.readTime && <p className="text-xs text-red-500 mt-1">{errors.readTime}</p>}
                </div>

                {/* Description - Rich Text Editor */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className={`${errors.description ? 'border border-red-500 rounded-lg' : ''}`}>
                    <ReactQuill
                      theme="snow"
                      value={description}
                      onChange={(value) => {
                        setDescription(value);
                        if (errors.description) setErrors(prev => ({ ...prev, description: '' }));
                      }}
                      modules={quillModules}
                      placeholder="Write your blog description here..."
                      className="h-64 mb-12"
                    />
                  </div>
                  {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
                </div> */}
              </div>
            </div>

            {/* Meta Information Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                SEO Meta Information
              </h2>
              
              <div className="space-y-4">
                {/* Meta Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder="SEO title for search engines"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all"
                  />
                  <p className="text-xs text-gray-400 mt-1">{metaTitle.length}/60 characters</p>
                </div>

                {/* Meta Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Meta Description
                  </label>
                  <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="SEO description for search engines"
                    rows={3}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">{metaDescription.length}/160 characters</p>
                </div>

                {/* Meta Keywords */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Meta Keywords
                  </label>
                  <input
                    type="text"
                    value={metaKeyword}
                    onChange={(e) => setMetaKeyword(e.target.value)}
                    placeholder="keyword1, keyword2, keyword3"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all"
                  />
                  <p className="text-xs text-gray-400 mt-1">Separate keywords with commas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image Upload Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Featured Image <span className="text-red-500">*</span>
              </h2>
              
              {!imagePreview ? (
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-[#D16655] transition-colors">
                  <RiImageLine className="text-4xl text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Click to upload image
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="blog-image-upload"
                  />
                  <label
                    htmlFor="blog-image-upload"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D16655] text-white text-sm font-medium rounded-lg hover:bg-[#c05545] transition-colors cursor-pointer"
                  >
                    <RiAddLine className="text-lg" />
                    Choose Image
                  </label>
                  {errors.image && <p className="text-xs text-red-500 mt-2">{errors.image}</p>}
                </div>
              ) : (
                <div className="relative">
                  <Image
                    src={imagePreview}
                    alt="Blog featured image"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <RiCloseLine className="text-lg" />
                  </button>
                </div>
              )}
            </div>

            {/* Status Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Publish Settings
              </h2>
              
              <div className="space-y-4">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-white focus:outline-none focus:border-[#D16655] focus:ring-2 focus:ring-[#D16655]/20 transition-all"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                {/* Created Date - Auto */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Created Date
                  </label>
                  <input
                    type="text"
                    value={new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    readOnly
                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting || blogLoading}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#D16655] to-[#BD7579] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#D16655]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting || blogLoading ? (
                  <>
                    <Spinner size={4} color="text-white" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <RiAddLine className="text-lg" />
                    <span>Publish Blog</span>
                  </>
                )}
              </button>
              
              <Link
                href="/admin/blog"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPage;

