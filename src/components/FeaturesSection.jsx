const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Avigate?
          </h2>
          <p className="text-xl text-gray-600">
            Save money, travel smart, explore fearlessly
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Save 60-80%</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Pay fair local transport fares instead of expensive e-hailing services
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">🗺️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Real-Time Navigation</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Step-by-step guidance with local landmarks and cultural awareness
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Travel Safely</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Share live location, get safe route recommendations, and emergency support
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">🚕</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">All Local Transport Modes</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              One app for every journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;