const StepCard = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorksSection = () => {
  return (
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
            description="Input your destination and let us create a route plans for you"
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
  );
};

export default HowItWorksSection;