import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


// Add this function
const handleLinkClick = () => {
  setIsMobileMenuOpen(false);
  setIsSearchOpen(false);
};

  // Sticky navbar effect

  useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMobileMenuOpen]);

  const menuItems = [
    {
      title: "About Us",
      
    },
    {
      title: "Our Work",
     
    },
    {
      title: "Get Involved",
    
    },
    {
      title: "Give",
   
    },
    {
      href: "/contact", 
      target: "_blank" ,
      title: "Contact Us",
      
    }
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <header className={`w-full bg-white transition-all py-5 duration-300 ${isSticky ? 'fixed top-0 shadow-lg z-50' : 'relative'}`}>
        <div className=" mx-auto px-4 sm:px-6 lg:px-28">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img className='w-[120px]' src={logo} alt="logo" />
              </a>
            </div>
<div className='flex gap-x-5'>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems?.map((item, index) => (
                <div key={index} className="relative group">
                   <Link 
                                to={item.href}
                             
                                className="block text-primery hover:text-primery font-medium mb-2 transition-colors duration-200"
                              >
                  <button className="text-primery md:text-xl cursor-pointer  hover:text-primery font-medium py-2 transition-colors duration-200">
                    {item.title}
                  </button>
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {/* <div className="absolute left-0 mt-2 w-96 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6 grid grid-cols-2 gap-6">
                      {item?.items?.map((column, colIndex) => (
                        <div key={colIndex}>
                          {column.map((subItem, subIndex) => (
                            <div key={subIndex} className="mb-4 last:mb-0">
                              <a 
                                href={subItem.href}
                                target={subItem.target || "_self"}
                                className="block text-primery hover:text-primery font-medium mb-2 transition-colors duration-200"
                              >
                                {subItem.title}
                              </a>
                              {subItem.subItems && (
                                <div className="mt-2 space-y-1">
                                  {subItem.subItems.map((nestedItem, nestedIndex) => (
                                    <a 
                                      key={nestedIndex}
                                      href={nestedItem.href}
                                      className="block text-primery hover:text-primery text-sm transition-colors duration-200"
                                    >
                                      {nestedItem.title}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-primery hover:text-primery transition-colors duration-200"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* <a 
                 target="_blank"
            href="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform"
                className="px-6 text-lg py-2 border border-primery text-primery rounded-full hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                Volunteer
              </a> */}
              
              <a 
               target="_blank"
            href="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform"
                className="px-6 py-2 text-lg bg-primery text-white rounded-full hover:bg-primery transition-colors duration-200 font-medium"
              >
                Donate Now
              </a>
            </div>
    
</div>
            {/* Mobile Menu Button */}
          <button 
  className="lg:hidden relative z-60 flex flex-col items-center justify-center w-10 h-10"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
>
  <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
  <span className={`w-6 h-0.5 bg-gray-700 my-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
  <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
</button>
          </div>
        </div>

        {/* Mobile Menu */}
     {/* Mobile Menu Overlay */}
<div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
  {/* Backdrop */}
  <div 
    className="absolute inset-0 bg-[rgba(63,63,63,0.15)] bg-opacity-50"
    onClick={() => setIsMobileMenuOpen(false)}
  ></div>
  
  {/* Slide-in Menu */}
  <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    
    {/* Header with Close Button */}
    {/* <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
      <button 
        onClick={() => setIsMobileMenuOpen(false)}
        className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div> */}

    {/* Menu Content */}
    <div className="h-full overflow-y-auto pb-20">
      <div className="px-4 py-6 space-y-6">
        {menuItems?.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
            <button className="w-full text-left text-gray-800 font-medium text-lg mb-3">
              {item.title}
            </button>
            <div className="space-y-2">
              {item?.items?.flat()?.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <a 
                    href={subItem.href}
                    target={subItem.target || "_self"}
                    className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    {subItem.title}
                  </a>
                  {subItem.subItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {subItem.subItems.map((nestedItem, nestedIndex) => (
                        <a 
                          key={nestedIndex}
                          href={nestedItem.href}
                          className="block text-gray-500 hover:text-blue-600 text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                          onClick={handleLinkClick}
                        >
                          {nestedItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Buttons at Bottom */}
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="flex flex-col space-y-3">
        {/* <a 
        target="_blank"
            href="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform"
          className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 font-medium text-center"
          onClick={handleLinkClick}
        >
          Volunteer
        </a> */}
        <a 
          target="_blank"
            href="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
          onClick={handleLinkClick}
        >
          Donate Now
        </a>
      </div>
    </div>
  </div>
</div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[rgba(63,63,63,0.43)] bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-primery"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <input 
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      {isSticky && <div className="h-20"></div>}
    </>
  );
};

export default Navbar;