import { Clock, MapPin, Users, Route } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="card p-8">
    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;