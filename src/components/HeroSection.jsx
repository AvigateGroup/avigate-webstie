const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#86B300]/10 via-white to-blue-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container-width max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight animate-fade-in">
              Move around Nigerian Cities
              <span className="text-[#86B300] block mt-2">Like a Local</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up">
              Discover the easiest way to move around Lagos, Abuja, Port Harcourt and more using buses, keke, okada, and local transport. Save money, travel smart, explore fearlessly.
            </p>
            
            {/* Coming Soon Badge */}
            <div className="mt-4 sm:mt-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center bg-gradient-to-r from-[#86B300] to-[#9ac72f] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Coming Soon
              </div>
            </div>
            
            {/* App Store Badges */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up">
              {/* App Store Badge */}
              <div className="relative group cursor-pointer">
                <img
                  src="/images/badges/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-12 w-36 sm:h-14 sm:w-40 lg:h-16 lg:w-44 object-contain transition-transform duration-200 group-hover:scale-105"
                />
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white text-xs font-semibold">Coming Soon</span>
                </div>
              </div>
              
              {/* Google Play Badge */}
              <div className="relative group cursor-pointer">
                <img
                  src="/images/badges/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-12 w-36 sm:h-14 sm:w-40 lg:h-16 lg:w-44 object-contain transition-transform duration-200 group-hover:scale-105"
                />
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white text-xs font-semibold">Coming Soon</span>
                </div>
              </div>
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