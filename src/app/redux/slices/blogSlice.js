import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Mock data for blog posts
const MOCK_BLOGS = [
  {
    id: 1,
    title: "US Dollar Strengthens Ahead of Fed Decision",
    description: "Analysis of how the upcoming Federal Reserve interest rate decision could impact major currency pairs.",
    category: "Market Analysis",
    categoryId: 1,
    createdBy: "Rajesh Kumar",
    createdDate: "2026-02-12",
    readTime: "8 min read",
    views: 1245,
    likes: 89,
    comments: 34,
    image: "/assets/img/blog/blog-d-1.jpg",
    categoryColor: "primary",
    slug: "us-dollar-strengthens",
    status: "published",
    metaTitle: "US Dollar Analysis | Nupis",
    metaDescription: "Analysis of how the upcoming Federal Reserve interest rate decision could impact major currency pairs.",
    metaKeyword: "forex, dollar, fed, trading"
  },
  {
    id: 2,
    title: "EUR/USD Technical Outlook: Key Levels to Watch",
    description: "Detailed technical analysis of EUR/USD with support and resistance levels for this week.",
    category: "Technical Analysis",
    categoryId: 2,
    createdBy: "Priya Sharma",
    createdDate: "2026-02-11",
    readTime: "6 min read",
    views: 987,
    likes: 67,
    comments: 23,
    image: "/assets/img/blog/blog-d-2.jpg",
    categoryColor: "success",
    slug: "eur-usd-technical-outlook",
    status: "published",
    metaTitle: "EUR/USD Technical Analysis | Nupis",
    metaDescription: "Detailed technical analysis of EUR/USD with support and resistance levels for this week.",
    metaKeyword: "EUR/USD, forex, technical analysis"
  },
  {
    id: 3,
    title: "Fed Signals Potential Rate Cuts in Q2 2026",
    description: "Following news on Federal Reserve's latest statements about possible rate cuts and market impact.",
    category: "Forex News",
    categoryId: 3,
    createdBy: "Amit Patel",
    createdDate: "2026-02-10",
    readTime: "4 min read",
    views: 2341,
    likes: 156,
    comments: 67,
    image: "/assets/img/blog/blog-d-3.jpg",
    categoryColor: "info",
    slug: "fed-rate-cuts-q2-2026",
    status: "published",
    metaTitle: "Fed Rate Cuts Q2 2026 | Nupis",
    metaDescription: "Following news on Federal Reserve's latest statements about possible rate cuts and market impact.",
    metaKeyword: "fed, rate cuts, forex news"
  },
  {
    id: 4,
    title: "Gold Prices: Can XAU/USD Break Above $2,000?",
    description: "Technical and fundamental analysis of gold prices with key levels to watch for breakout.",
    category: "Commodities",
    categoryId: 4,
    createdBy: "Anita Desai",
    createdDate: "2026-02-09",
    readTime: "7 min read",
    views: 1123,
    likes: 78,
    comments: 29,
    image: "/assets/img/blog/blog-d-4.jpg",
    categoryColor: "warning",
    slug: "gold-prices-break-2000",
    status: "published",
    metaTitle: "Gold Prices XAU/USD Analysis | Nupis",
    metaDescription: "Technical and fundamental analysis of gold prices with key levels to watch for breakout.",
    metaKeyword: "gold, XAU/USD, commodities"
  },
  {
    id: 5,
    title: "BOJ Maintains Ultra-Loose Policy: Yen Weakens",
    description: "Bank of Japan keeps negative interest rates, leading to continued Yen weakness.",
    category: "Forex News",
    categoryId: 3,
    createdBy: "Takeshi Tanaka",
    createdDate: "2026-02-08",
    readTime: "4 min read",
    views: 1876,
    likes: 112,
    comments: 53,
    image: "/assets/img/blog/blog-img-1-1.jpg",
    categoryColor: "danger",
    slug: "boj-ultra-loose-policy",
    status: "draft",
    metaTitle: "BOJ Policy Yen Analysis | Nupis",
    metaDescription: "Bank of Japan keeps negative interest rates, leading to continued Yen weakness.",
    metaKeyword: "BOJ, yen, forex"
  },
  {
    id: 6,
    title: "UK Economy Shows Resilience: GBP Strengthens",
    description: "Better-than-expected UK GDP data leads to broad-based Sterling strength.",
    category: "Market Analysis",
    categoryId: 1,
    createdBy: "Sarah Williams",
    createdDate: "2026-02-07",
    readTime: "3 min read",
    views: 1432,
    likes: 87,
    comments: 36,
    image: "/assets/img/blog/blog-img-1-1.jpg",
    categoryColor: "purple",
    slug: "uk-economy-resilience",
    status: "published",
    metaTitle: "UK Economy GBP Analysis | Nupis",
    metaDescription: "Better-than-expected UK GDP data leads to broad-based Sterling strength.",
    metaKeyword: "UK, GBP, forex"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all blogs
export const getBlogs = createAsyncThunk(
  'blog/getBlogs',
  async (_, { rejectWithValue }) => {
    try {
      await delay(500);
      return { 
        statusCode: 200, 
        data: MOCK_BLOGS,
        message: "Blogs fetched successfully"
      };
    } catch (error) {
      return rejectWithValue({ 
        statusCode: 500, 
        message: error.message || "Failed to fetch blogs" 
      });
    }
  }
);

// Add new blog
export const addBlog = createAsyncThunk(
  'blog/addBlog',
  async (formData, { rejectWithValue }) => {
    try {
      await delay(500);
      
      const title = formData.get('title');
      const description = formData.get('description');
      const category = formData.get('category');
      const categoryId = parseInt(formData.get('categoryId'));
      const createdBy = formData.get('createdBy');
      const readTime = formData.get('readTime');
      const image = formData.get('image');
      const metaTitle = formData.get('metaTitle');
      const metaDescription = formData.get('metaDescription');
      const metaKeyword = formData.get('metaKeyword');
      const status = formData.get('status') || 'draft';
      
      const newBlog = {
        id: MOCK_BLOGS.length + 1,
        title,
        description,
        category,
        categoryId,
        createdBy,
        createdDate: new Date().toISOString().split('T')[0],
        readTime,
        views: 0,
        likes: 0,
        comments: 0,
        image: image ? URL.createObjectURL(image) : "/assets/img/blog/blog-d-1.jpg",
        categoryColor: "primary",
        slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        status,
        metaTitle,
        metaDescription,
        metaKeyword
      };
      
      MOCK_BLOGS.unshift(newBlog);
      
      return { 
        statusCode: 200, 
        message: "Blog added successfully",
        data: newBlog
      };
    } catch (error) {
      return rejectWithValue({ 
        statusCode: 500, 
        message: error.message || "Failed to add blog" 
      });
    }
  }
);

// Update blog
export const updateBlog = createAsyncThunk(
  'blog/updateBlog',
  async (formData, { rejectWithValue }) => {
    try {
      await delay(500);
      
      const id = parseInt(formData.get('id'));
      const title = formData.get('title');
      const description = formData.get('description');
      const category = formData.get('category');
      const categoryId = parseInt(formData.get('categoryId'));
      const createdBy = formData.get('createdBy');
      const readTime = formData.get('readTime');
      const image = formData.get('image');
      const metaTitle = formData.get('metaTitle');
      const metaDescription = formData.get('metaDescription');
      const metaKeyword = formData.get('metaKeyword');
      const status = formData.get('status') || 'draft';
      
      const blogIndex = MOCK_BLOGS.findIndex(blog => blog.id === id);
      
      if (blogIndex === -1) {
        return rejectWithValue({ 
          statusCode: 404, 
          message: "Blog not found" 
        });
      }
      
      const updatedBlog = {
        ...MOCK_BLOGS[blogIndex],
        title: title || MOCK_BLOGS[blogIndex].title,
        description: description || MOCK_BLOGS[blogIndex].description,
        category: category || MOCK_BLOGS[blogIndex].category,
        categoryId: categoryId || MOCK_BLOGS[blogIndex].categoryId,
        createdBy: createdBy || MOCK_BLOGS[blogIndex].createdBy,
        readTime: readTime || MOCK_BLOGS[blogIndex].readTime,
        image: image && typeof image !== 'string' ? URL.createObjectURL(image) : MOCK_BLOGS[blogIndex].image,
        metaTitle: metaTitle || MOCK_BLOGS[blogIndex].metaTitle,
        metaDescription: metaDescription || MOCK_BLOGS[blogIndex].metaDescription,
        metaKeyword: metaKeyword || MOCK_BLOGS[blogIndex].metaKeyword,
        status
      };
      
      MOCK_BLOGS[blogIndex] = updatedBlog;
      
      return { 
        statusCode: 200, 
        message: "Blog updated successfully",
        data: updatedBlog
      };
    } catch (error) {
      return rejectWithValue({ 
        statusCode: 500, 
        message: error.message || "Failed to update blog" 
      });
    }
  }
);

// Delete blog
export const deleteBlog = createAsyncThunk(
  'blog/deleteBlog',
  async (id, { rejectWithValue }) => {
    try {
      await delay(500);
      const blogIndex = MOCK_BLOGS.findIndex(blog => blog.id === parseInt(id));
      
      if (blogIndex === -1) {
        return rejectWithValue({ 
          statusCode: 404, 
          message: "Blog not found" 
        });
      }
      
      MOCK_BLOGS.splice(blogIndex, 1);
      
      return { 
        statusCode: 200, 
        message: "Blog deleted successfully",
        id
      };
    } catch (error) {
      return rejectWithValue({ 
        statusCode: 500, 
        message: error.message || "Failed to delete blog" 
      });
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    clearBlogError: (state) => {
      state.error = null;
    },
    clearBlogSuccess: (state) => {
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get Blogs
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch blogs';
      })
      // Add Blog
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data.unshift(action.payload.data);
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to add blog';
      })
      // Update Blog
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const index = state.data.findIndex(blog => blog.id === action.payload.data.id);
        if (index !== -1) {
          state.data[index] = action.payload.data;
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to update blog';
      })
      // Delete Blog
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(blog => blog.id !== parseInt(action.payload.id));
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to delete blog';
      });
  }
});

export const { clearBlogError, clearBlogSuccess } = blogSlice.actions;
export default blogSlice.reducer;

