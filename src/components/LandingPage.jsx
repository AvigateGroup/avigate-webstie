import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Users, Route,  Star, Smartphone, Play } from 'lucide-react';

const LandingPage = () => {
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

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card p-8">
      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const StepCard = ({ number, title, description }) => (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16">
        <div className="container-width">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in">
                Navigate Your City
                <span className="text-green-600 block">Smarter with Avigate</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl animate-slide-up">
                Simplify your public transport journey with real-time updates, fare estimation, and community-driven insights for buses, taxis, tricycles, and more.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up">
                <button className="btn-primary text-lg px-8 py-4">
                  Download App
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300 animate-bounce-gentle">
                  <div className="bg-gray-800 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg">Your Route</h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                        <span>Victoria Island</span>
                      </div>
                      <div className="border-l-2 border-gray-600 ml-1.5 h-8"></div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span>Ikeja</span>
                      </div>
                    </div>
                    <div className="mt-6 bg-green-600 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm opacity-80">Estimated Fare</p>
                          <p className="text-2xl font-bold">₦450</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm opacity-80">Duration</p>
                          <p className="text-xl font-semibold">25 min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Avigate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of urban mobility with features designed to make your commute smarter, cheaper, and more reliable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Clock}
              title="Real-time Routes"
              description="Get live updates on buses, taxis, tricycles, and other transport options with accurate arrival times."
            />
            <FeatureCard 
              icon={MapPin}
              title="Fare Estimation"
              description="Know your transportation cost upfront with accurate fare estimates for all vehicle types."
            />
            <FeatureCard 
              icon={Users}
              title="Community Updates"
              description="Stay informed with real-time updates from fellow commuters about traffic, delays, and route changes."
            />
            <FeatureCard 
              icon={Route}
              title="Multi-modal Planning"
              description="Plan journeys using buses, minibuses, taxis, motorcycles, and tricycles all in one comprehensive app."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How Avigate Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with smarter commuting is simple and straightforward
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Open Avigate"
              description="Launch the app and enter your current location"
            />
            <StepCard 
              number="2"
              title="Plan Route"
              description="Input your destination and select your preferred transport options"
            />
            <StepCard 
              number="3"
              title="Get Real-time Info"
              description="View live fare estimates, routes, and arrival times"
            />
            <StepCard 
              number="4"
              title="Commute Smarter"
              description="Follow your optimized route and enjoy a stress-free journey"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-width">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                More Than Just Another Transport App
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                While e-hailing apps focus on premium rides, Avigate champions affordability and accessibility for everyone. We believe smart navigation shouldn't be a luxury.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Affordable Options</h3>
                    <p className="text-gray-600">Find the most cost-effective routes using public transport</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Inclusive Access</h3>
                    <p className="text-gray-600">Works for all income levels and transportation preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Local Knowledge</h3>
                    <p className="text-gray-600">Built by locals who understand Nigerian transport systems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Real-time Updates</h3>
                    <p className="text-gray-600">Always current information from community contributions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Thousands of Smart Commuters</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/20 rounded-2xl p-4">
                    <span>Daily Active Users</span>
                    <span className="font-bold text-2xl">15,000+</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/20 rounded-2xl p-4">
                    <span>Routes Optimized</span>
                    <span className="font-bold text-2xl">50,000+</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/20 rounded-2xl p-4">
                    <span>Money Saved</span>
                    <span className="font-bold text-2xl">₦2M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Commute?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Download Avigate today and join thousands of Nigerians who are already commuting smarter, cheaper, and stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Coming to iOS
            </button>
          </div>
          
          <p className="text-green-200 text-sm">
            Free to download • No subscription required • Works offline
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container-width">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold">Avigate</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Making urban transportation accessible, affordable, and efficient for everyone in Nigeria.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-green-400 transition-colors cursor-pointer">Home</a></li>
                <li><a href="#features" className="hover:text-green-400 transition-colors cursor-pointer">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-green-400 transition-colors cursor-pointer">How It Works</a></li>
                <li><a href="#about" className="hover:text-green-400 transition-colors cursor-pointer">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors cursor-pointer">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Avigate Group. All rights reserved. Made with ❤️ in Nigeria.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;