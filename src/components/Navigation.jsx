import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 cursor-pointer"
    >
      {children}
    </a>
  );

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-width">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-800">Avigate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#home" onClick={() => scrollToSection('home')}>Home</NavLink>
              <NavLink href="#features" onClick={() => scrollToSection('features')}>Features</NavLink>
              <NavLink href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
              <NavLink href="#about" onClick={() => scrollToSection('about')}>About</NavLink>
              <NavLink href="#contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
              <button className="btn-primary">
                Download App
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="#home" onClick={() => scrollToSection('home')}>
              <div className="block px-3 py-2">Home</div>
            </NavLink>
            <NavLink href="#features" onClick={() => scrollToSection('features')}>
              <div className="block px-3 py-2">Features</div>
            </NavLink>
            <NavLink href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>
              <div className="block px-3 py-2">How It Works</div>
            </NavLink>
            <NavLink href="#about" onClick={() => scrollToSection('about')}>
              <div className="block px-3 py-2">About</div>
            </NavLink>
            <NavLink href="#contact" onClick={() => scrollToSection('contact')}>
              <div className="block px-3 py-2">Contact</div>
            </NavLink>
            <div className="px-3 py-2">
              <button className="w-full btn-primary">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;