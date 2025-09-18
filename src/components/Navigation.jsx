import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('[data-mobile-menu]')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const NavLink = ({ href, children, onClick, className = "" }) => (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-[#86B300] font-medium transition-colors duration-200 cursor-pointer ${className}`}
      aria-label={`Navigate to ${children}`}
    >
      {children}
    </a>
  );

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-[9999] transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-width max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/public/images/logo/logo-black.svg" 
                alt="Avigate Logo" 
                className="w-20 h-8 sm:w-24 sm:h-10 lg:w-28 lg:h-12 object-contain"
                loading="eager"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <NavLink href="#home" onClick={() => scrollToSection('home')}>
                  Home
                </NavLink>
                <NavLink href="#features" onClick={() => scrollToSection('features')}>
                  Features
                </NavLink>
                <NavLink href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>
                  How It Works
                </NavLink>
                <NavLink href="#about" onClick={() => scrollToSection('about')}>
                  About
                </NavLink>
                <NavLink href="#contact" onClick={() => scrollToSection('contact')}>
                  Contact
                </NavLink>
                <button className="btn-primary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 ml-4">
                  Download App
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#86B300] transition-colors duration-200 p-2 relative z-[10001]"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Slide-out Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-[10000] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        data-mobile-menu
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Slide-out Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header with Close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img 
                src="/public/images/logo/logo-black.svg" 
                alt="Avigate Logo" 
                className="w-20 h-8 object-contain"
                loading="eager"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-[#86B300] transition-colors duration-200 px-3 py-2 text-sm font-medium"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-6 overflow-y-auto">
              <div className="space-y-1">
                <NavLink 
                  href="#home" 
                  onClick={() => scrollToSection('home')}
                  className="block px-4 py-4 text-lg rounded-lg hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50"
                >
                  Home
                </NavLink>
                <NavLink 
                  href="#features" 
                  onClick={() => scrollToSection('features')}
                  className="block px-4 py-4 text-lg rounded-lg hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50"
                >
                  Features
                </NavLink>
                <NavLink 
                  href="#how-it-works" 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block px-4 py-4 text-lg rounded-lg hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50"
                >
                  How It Works
                </NavLink>
                <NavLink 
                  href="#about" 
                  onClick={() => scrollToSection('about')}
                  className="block px-4 py-4 text-lg rounded-lg hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50"
                >
                  About
                </NavLink>
                <NavLink 
                  href="#contact" 
                  onClick={() => scrollToSection('contact')}
                  className="block px-4 py-4 text-lg rounded-lg hover:bg-gray-50 active:bg-gray-100 border-b border-gray-50"
                >
                  Contact
                </NavLink>
                
                {/* Download App button moved here - immediately after Contact */}
                <div className="pt-4">
                  <button 
                    className="w-full btn-primary text-base py-3 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;