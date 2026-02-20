import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Mock data for categories
const MOCK_CATEGORIES = [
    {
        categoryId: 1,
        name: "Cardiology",
        image: "/assets/img/categoris/catigori-1-1.png",
        active: true,
        createdAt: "2024-01-15T10:30:00Z"
    },
    {
        categoryId: 2,
        name: "Neurology",
        image: "/assets/img/categoris/catigori-1-2.png",
        active: true,
        createdAt: "2024-01-16T11:00:00Z"
    },
    {
        categoryId: 3,
        name: "Orthopedics",
        image: "/assets/img/categoris/catigori-1-3.png",
        active: true,
        createdAt: "2024-01-17T09:15:00Z"
    },
    {
        categoryId: 4,
        name: "Pediatrics",
        image: "/assets/img/categoris/catigori-1-4.png",
        active: false,
        createdAt: "2024-01-18T14:20:00Z"
    },
    {
        categoryId: 5,
        name: "Dermatology",
        image: "/assets/img/categoris/catigori-1-5.png",
        active: true,
        createdAt: "2024-01-19T16:45:00Z"
    },
    {
        categoryId: 6,
        name: "Oncology",
        image: "/assets/img/categoris/catigori-1-6.png",
        active: true,
        createdAt: "2024-01-20T08:30:00Z"
    }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all categories
export const getCategory = createAsyncThunk(
    'category/getCategory',
    async (_, { rejectWithValue }) => {
        try {
            await delay(500); // Simulate API delay
            // In real app: const response = await axios.get(`${API_URL}/categories`);
            return { 
                statusCode: 200, 
                data: MOCK_CATEGORIES,
                message: "Categories fetched successfully"
            };
        } catch (error) {
            return rejectWithValue({ 
                statusCode: 500, 
                message: error.message || "Failed to fetch categories" 
            });
        }
    }
);

// Add new category
export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (formData, { rejectWithValue }) => {
        try {
            await delay(500); // Simulate API delay
            const name = formData.get('name');
            const image = formData.get('image');
            const active = formData.get('active') === 'true' || formData.get('active') === true;
            
            const newCategory = {
                categoryId: MOCK_CATEGORIES.length + 1,
                name,
                image: image ? URL.createObjectURL(image) : "/assets/img/categoris/catigori-1-1.png",
                active,
                createdAt: new Date().toISOString()
            };
            
            MOCK_CATEGORIES.push(newCategory);
            
            return { 
                statusCode: 200, 
                message: "Category added successfully",
                data: newCategory
            };
        } catch (error) {
            return rejectWithValue({ 
                statusCode: 500, 
                message: error.message || "Failed to add category" 
            });
        }
    }
);

// Update category
export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async (formData, { rejectWithValue }) => {
        try {
            await delay(500); // Simulate API delay
            const categoryId = formData.get('categoryId');
            const name = formData.get('name');
            const image = formData.get('image');
            const active = formData.get('active') === 'true' || formData.get('active') === true;
            
            const categoryIndex = MOCK_CATEGORIES.findIndex(cat => cat.categoryId === parseInt(categoryId));
            
            if (categoryIndex === -1) {
                return rejectWithValue({ 
                    statusCode: 404, 
                    message: "Category not found" 
                });
            }
            
            const updatedCategory = {
                ...MOCK_CATEGORIES[categoryIndex],
                name: name || MOCK_CATEGORIES[categoryIndex].name,
                active,
                image: image && typeof image !== 'string' ? URL.createObjectURL(image) : MOCK_CATEGORIES[categoryIndex].image
            };
            
            MOCK_CATEGORIES[categoryIndex] = updatedCategory;
            
            return { 
                statusCode: 200, 
                message: "Category updated successfully",
                data: updatedCategory
            };
        } catch (error) {
            return rejectWithValue({ 
                statusCode: 500, 
                message: error.message || "Failed to update category" 
            });
        }
    }
);

// Delete category
export const deleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async (categoryId, { rejectWithValue }) => {
        try {
            await delay(500); // Simulate API delay
            const categoryIndex = MOCK_CATEGORIES.findIndex(cat => cat.categoryId === parseInt(categoryId));
            
            if (categoryIndex === -1) {
                return rejectWithValue({ 
                    statusCode: 404, 
                    message: "Category not found" 
                });
            }
            
            MOCK_CATEGORIES.splice(categoryIndex, 1);
            
            return { 
                statusCode: 200, 
                message: "Category deleted successfully",
                categoryId
            };
        } catch (error) {
            return rejectWithValue({ 
                statusCode: 500, 
                message: error.message || "Failed to delete category" 
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

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        clearCategoryError: (state) => {
            state.error = null;
        },
        clearCategorySuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // Get Category
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Failed to fetch categories';
            })
            // Add Category
            .addCase(addCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Failed to add category';
            })
            // Update Category
            .addCase(updateCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Failed to update category';
            })
            // Delete Category
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.filter(cat => cat.categoryId !== parseInt(action.payload.categoryId));
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Failed to delete category';
            });
    }
});

export const { clearCategoryError, clearCategorySuccess } = categorySlice.actions;
export default categorySlice.reducer;

