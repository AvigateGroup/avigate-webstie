import { Smartphone, Play } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-[#86B300] to-[#739900]">
      <div className="container-width text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Commute?
        </h2>
        <p className="text-xl text-[#86B300]/20 mb-8 max-w-2xl mx-auto">
          Download Avigate today and join thousands of Nigerians who are already commuting smarter, cheaper, and stress-free.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-[#86B300] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center">
            <Smartphone className="w-5 h-5 mr-2" />
            Download for Android
          </button>
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center">
            <Play className="w-5 h-5 mr-2" />
            Coming to iOS
          </button>
        </div>
        
        <p className="text-white/80 text-sm">
          Free to download • No subscription required • Works offline
        </p>
      </div>
    </section>
  );
};

export default CTASection;