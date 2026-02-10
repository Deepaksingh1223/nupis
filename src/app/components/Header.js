// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
//   }, [isMobileMenuOpen]);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Education", href: "/education" },
//     { name: "Community", href: "/community" },
//     { name: "Academy Partnership", href: "/partnership" },
//     { name: "Experts", href: "/experts" },
//     { name: "Videos", href: "/videos" },
//     { name: "Contact", href: "/contact" },
//     { name: "Disclaimer", href: "/disclaimer" },
//   ];

//   return (
//     <header className="header">
//       <div className="container">
//         <nav className="navbar">
//           <div className="logo">
//             <Image src="/assets/img/logo.png" alt="Logo" width={100} height={100} />
//           </div>

//           {/* Desktop Menu */}
//           <div className="nav-items desktop-nav">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`nav-link ${
//                   pathname === item.href
//                     ? "text-orange-500 font-semibold"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="mobile-menu-btn"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
//           </button>

//           {/* Overlay */}
//           {isMobileMenuOpen && isMounted && (
//             <div
//               className="mobile-menu-overlay"
//               onClick={() => setIsMobileMenuOpen(false)}
//             />
//           )}

//           {/* Mobile Menu */}
//           {isMounted && (
//             <div className={`mobile-nav-items ${isMobileMenuOpen ? "active" : ""}`}>
//               <div className="mobile-nav-content">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`nav-link ${
//                       pathname === item.href
//                         ? "text-orange-500 font-semibold"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/pages/education" },
    { name: "Community", href: "/pages/community" },
    { name: "Academy Partnership", href: "/pages/partnership" },
    { name: "Experts", href: "/pages/experts" },
    { name: "Videos", href: "/pages/videos" },
    { name: "Contact", href: "/pages/contact" },
    { name: "Disclaimer", href: "/pages/disclaimer" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src="/assets/img/logo.png" alt="Logo" width={110} height={60} />
          </Link>

          {/* Desktop Menu */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button className="menu-btn" onClick={() => setOpen(true)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div className={`menu-overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <i className="fas fa-times"></i>
        </button>

        <nav className="nav-mobile">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`nav-link ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
