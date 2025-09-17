const HeroSection = () => {
  return (
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
              {/* Hero Image Container - Professional Sizing */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]">
                  <img 
                    src="/images/hero-section.png"
                    alt="Avigate app interface showing route from Victoria Island to Ikeja with fare estimation"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Optional overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 animate-bounce-gentle"></div>
              
              {/* Additional professional touch - floating cards */}
              <div className="absolute top-8 -left-4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Live Updates</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Smart Routes</span>
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