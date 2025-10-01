import React from 'react';

const TimelineStep = ({ number, title, description, isLast }) => (
  <div className="relative">
    <div className="flex items-start space-x-6">
      {/* Step Number Circle */}
      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#86B300] to-[#6B8F00] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10">
        {number}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
    
    {/* Connecting Line */}
    {!isLast && (
      <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-[#86B300] via-[#86B300]/50 to-gray-200"></div>
    )}
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Enter Destination",
      description: "Type where you want to go or select from popular locations"
    },
    {
      number: "2", 
      title: "Choose Your Route",
      description: "Compare options by time, cost, and comfort level"
    },
    {
      number: "3",
      title: "Navigate with Ease", 
      description: "Follow voice guidance and get notified when to stop"
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting around is as easy as 1-2-3
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;