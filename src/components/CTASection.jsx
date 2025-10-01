const CTASection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Ready to Transform Your Commute?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
          Join thousands of Nigerians navigating smarter every day
        </p>
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center bg-[#86B300]/10 text-[#86B300] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold mb-8 sm:mb-10 border border-[#86B300]/20 shadow-sm">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#86B300] rounded-full mr-2 sm:mr-3 animate-pulse"></div>
          Coming Soon
        </div>
        
        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
          {/* Google Play Badge */}
          <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
            <img 
              src="/images/badges/google-play-badge.png" 
              alt="Get it on Google Play" 
              className="h-12 w-36 sm:h-14 sm:w-40 lg:h-16 lg:w-44 object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 shadow-lg group-hover:shadow-xl rounded-lg"
            />
            <div className="absolute inset-0 bg-[#86B300]/10 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#86B300]/20">
              <div className="bg-white px-3 py-1.5 rounded-full shadow-md">
                <span className="text-xs sm:text-sm font-medium text-[#86B300]">Coming Soon</span>
              </div>
            </div>
          </div>
          
          {/* App Store Badge */}
          <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
            <img 
              src="/images/badges/app-store-badge.png" 
              alt="Download on the App Store" 
              className="h-12 w-36 sm:h-14 sm:w-40 lg:h-16 lg:w-44 object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 shadow-lg group-hover:shadow-xl rounded-lg"
            />
            <div className="absolute inset-0 bg-[#86B300]/10 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#86B300]/20">
              <div className="bg-white px-3 py-1.5 rounded-full shadow-md">
                <span className="text-xs sm:text-sm font-medium text-[#86B300]">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;