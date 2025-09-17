import { Star, Users, MapPin, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;