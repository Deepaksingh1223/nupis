"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RiEyeLine, RiEyeOffLine, RiAdminLine, RiLockLine, RiUserLine } from "react-icons/ri";
import { useEffect } from 'react';
import toast from 'react-hot-toast';

// Static credentials for demo login
const STATIC_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

const adminLoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
});

export default function AdminLogin() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    // Helper function to get token from localStorage
    const getToken = () => {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('token');
    };

    // Helper function to get user data from localStorage
    const getUserData = () => {
        if (typeof window === 'undefined') return null;
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            try {
                return JSON.parse(userData);
            } catch {
                return null;
            }
        }
        return null;
    };

    useEffect(() => {
        // Check if already authenticated, redirect to dashboard
        const checkAuth = () => {
            const token = getToken();
            const userData = getUserData();
            if (token && userData) {
                router.push('/admin');
            }
        };
        checkAuth();
    }, [router]);

    const initialValues = {
        username: '',
        password: ''
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            // Validate against static credentials
            if (values.username === STATIC_CREDENTIALS.username && values.password === STATIC_CREDENTIALS.password) {
                // Create mock user data and token for static login
                const mockUserData = {
                    id: 1,
                    name: 'Admin User',
                    email: 'admin@nupis.com',
                    role: 'Super Admin',
                    username: STATIC_CREDENTIALS.username
                };
                
                const mockToken = 'static-demo-token-' + Date.now();

                // Store auth data in localStorage
                localStorage.setItem('token', mockToken);
                localStorage.setItem('currentUser', JSON.stringify(mockUserData));

                toast.success('Login successful!');
                resetForm();
                
                // Dispatch custom event for auth change
                window.dispatchEvent(new Event('auth-change'));
                router.push('/admin');
            } else {
                // Invalid credentials
                toast.error('Invalid username or password');
            }
        } catch (err) {
            console.error('Login failed:', err);
            toast.error('Login failed. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div id="root">
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex-1"></div>
                    </div>

                    {/* Logo and Title */}
                    <div className="text-center -mt-4 mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                            <RiAdminLine className="text-3xl text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Admin Portal
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Sign in to access the admin dashboard
                        </p>
                    </div>

                    {/* Card */}
                    <div className='flex justify-center items-center'>
                    <div className="bg-white dark:bg-gray-800 w-[500px] rounded-2xl shadow-xl p-8">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={adminLoginSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, errors, touched }) => (
                                <Form className="space-y-6" noValidate>
                                    {/* Username Field */}
                                    <div>
                                        <label
                                            htmlFor="username"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        >
                                            Username
                                        </label>
                                        <div className="relative flex justify-center gap-1 items-center ">
                                            <div className="absolute inset-y-0 left-[6px] pl-3 flex items-center pointer-events-none">
                                                <RiUserLine className="h-5 w-5 pl-2 text-gray-400" />
                                            </div>
                                            <Field
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="Enter Username"
                                                className={`w-full pl-10 pl-8 py-3 rounded-lg border bg-white dark:bg-gray-700
                                                    ${errors.username && touched.username
                                                        ? 'border-red-500 dark:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                    } text-gray-900 dark:text-white focus:ring-2 focus:ring-[#29d2cc] focus:border-transparent outline-none transition-all`}
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Password Field */}
                                    <div className="relative ">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        >
                                            Password
                                        </label>
                                        <div className="relative flex justify-center items-center">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <RiLockLine className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <Field
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter Password"
                                                className={`w-full pl-10 pl-8 py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#29d2cc] focus:border-transparent outline-none transition-all
                                                    ${errors.password && touched.password
                                                        ? 'border-red-500 dark:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                    }`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-[10px]"
                                            >
                                                {showPassword ? <RiEyeOffLine className="text-lg" /> : <RiEyeLine className="text-lg" />}
                                            </button>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0d9488] py-2.5 bg-[#29d2cc]  disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Signing in...
                                            </>
                                        ) : (
                                            'Sign In to Admin Panel'
                                        )}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    </div>

                
                </div>
            </div>
        </div>
    );
}
