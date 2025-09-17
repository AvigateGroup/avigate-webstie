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
      if (isMenuOpen && !event.target.closest('nav')) {
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
      className={`text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 cursor-pointer ${className}`}
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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
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
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true"></div>
          
          {/* Mobile Menu */}
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 sm:px-6 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <NavLink 
                href="#home" 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-3 text-base rounded-lg hover:bg-gray-50 active:bg-gray-100"
              >
                Home
              </NavLink>
              <NavLink 
                href="#features" 
                onClick={() => scrollToSection('features')}
                className="block px-3 py-3 text-base rounded-lg hover:bg-gray-50 active:bg-gray-100"
              >
                Features
              </NavLink>
              <NavLink 
                href="#how-it-works" 
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-3 text-base rounded-lg hover:bg-gray-50 active:bg-gray-100"
              >
                How It Works
              </NavLink>
              <NavLink 
                href="#about" 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-3 text-base rounded-lg hover:bg-gray-50 active:bg-gray-100"
              >
                About
              </NavLink>
              <NavLink 
                href="#contact" 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-3 text-base rounded-lg hover:bg-gray-50 active:bg-gray-100"
              >
                Contact
              </NavLink>
              <div className="pt-4 border-t border-gray-100">
                <button 
                  className="w-full btn-primary text-base py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download App
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;