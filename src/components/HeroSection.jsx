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
  );
};

export default HeroSection;