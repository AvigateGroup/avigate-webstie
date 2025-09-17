const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#86B300]/10 via-white to-blue-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container-width max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight animate-fade-in">
              Navigate Your City
              <span className="text-[#86B300] block mt-2">Smarter with Avigate</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up">
              Simplify your public transport journey with real-time updates, fare estimation, and community-driven insights for buses, taxis, tricycles, and more.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up">
              <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Download App
              </button>
              <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/3]">
                  <img
                    src="/images/hero-section.png"
                    alt="Avigate app interface showing route from Victoria Island to Ikeja with fare estimation"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Decorative Elements - Hidden on small screens */}
              <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#86B300]/20 rounded-full opacity-60 animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-200 rounded-full opacity-40 animate-bounce-gentle"></div>
              
              {/* Floating Feature Cards - Responsive positioning */}
              <div className="absolute top-4 sm:top-6 lg:top-8 -left-2 sm:-left-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 animate-float">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#86B300] rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Live Updates</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 -right-2 sm:-right-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 animate-float-delayed">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Smart Routes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;