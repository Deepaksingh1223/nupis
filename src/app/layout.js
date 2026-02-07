"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from 'next/image';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata ko ek object ke roop me define karo
const metadata = {
  title: "nupips | Professional Financial Education",
  description: "Expert-led courses in Forex education, Stock market fundamentals, trading psychology, and risk management.",
  icons: {
    icon: "assets/img/logo.png",
    shortcut: "assets/img/logo.png",
    apple: "assets/img/logo.png",
  },
};

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMounted) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    return () => {
      if (isMounted) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isMobileMenuOpen, isMounted]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Education', href: '/education' },
    { name: 'Community', href: '/community' },
    { name: 'Academy Partnership', href: '/partnership' },
    { name: 'Experts', href: '/experts' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  const educationLinks = [
    { name: 'Forex Education', href: '/education' },
    { name: 'Stock Market', href: '/education' },
    { name: 'Trading Psychology', href: '/education' },
    { name: 'Risk Management', href: '/education' },
    { name: 'Video Library', href: '/videos' }
  ];

  const communityLinks = [
    { name: 'Discussion Groups', href: '/community' },
    { name: 'Live Sessions', href: '/community' },
    { name: 'Expert Faculty', href: '/experts' },
    { name: 'Academy Partnership', href: '/partnership' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Email', href: 'mailto:education@nupips.com', isEmail: true }
  ];

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />

        {/* Add CSS links here */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/new-style.css" />
        <link rel="stylesheet" href="/assets/css/new-style2.css" />
        {/* Remix Icon CDN */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />

        {/* Critical scripts that need to load early */}
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header */}
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <div className="logo">
                <Image
                  src="/assets/img/logo.png"
                  alt="Partnership"
                  width={100}
                  height={100}
                />
              </div>

              {/* Desktop Navigation */}
              <div className="nav-items desktop-nav">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>

              {/* Mobile Menu Overlay */}
              {isMobileMenuOpen && isMounted && (
                <div
                  className="mobile-menu-overlay"
                  onClick={() => setIsMobileMenuOpen(false)}
                ></div>
              )}

              {/* Mobile Navigation Menu */}
              {isMounted && (
                <div className={`mobile-nav-items ${isMobileMenuOpen ? 'active' : ''}`}>
                  <div className="mobile-nav-content">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                 
                  <span className="text-2xl font-bold">
                    <Image
                      src="/assets/img/logo.png"
                      alt="Partnership"
                      width={100}
                      height={100}
                    />
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Professional financial markets education platform focused on Forex, Stock market, and risk management learning.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <i className="ri-linkedin-line text-gray-300"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <i className="ri-twitter-line text-gray-300"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <i className="ri-youtube-line text-gray-300"></i>
                  </a>
                </div>
              </div>

              {/* Education Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Education</h3>
                <ul className="space-y-3">
                  {educationLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Community</h3>
                <ul className="space-y-3">
                  {communityLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                <ul className="space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      {link.isEmail ? (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name === 'Email' ? 'education@nupips.com' : link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-0 md:mb-0">
                  © 2024 NUPIPS. All rights reserved. Educational purposes only.
                </p>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/disclaimer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Important Disclaimer
                  </Link>
                  <a
                    href="https://readdy.ai/?ref=logo"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powered by Readdy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Add CSS for mobile menu */}
        <style jsx global>{`
          /* Mobile Menu Styles */
          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
            display: none;
          }

          .mobile-nav-items {
            position: fixed;
            top: 0;
            right: -300px;
            width: 280px;
            height: 100vh;
            background: white;
            box-shadow: -2px 0 15px rgba(0, 0, 0, 0.1);
            z-index: 999;
            transition: right 0.3s ease-in-out;
            overflow-y: auto;
          }

          .mobile-nav-items.active {
            right: 0;
          }

          .mobile-nav-content { 
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .mobile-nav-link {
            padding: 12px 15px;
            color: #333;
            text-decoration: none;
            font-size: 16px;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.3s;
          }

          .mobile-nav-link:hover {
            background: #f5f5f5;
            color: #000;
          }

          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
            padding: 5px;
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .mobile-menu-btn {
              display: block;
            }

            .desktop-nav {
              display: none;
            }

            .mobile-menu-overlay {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .mobile-nav-items {
              display: none;
            }

            .mobile-menu-overlay {
              display: none !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}