import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToHome = () => {
    navigate('/');
    // Force scroll to top after navigation with a small delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Always opaque for privacy policy page */}
      <nav className="fixed w-full z-[9999] bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container-width max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/public/images/logo/logo-black.svg" 
                alt="Avigate Logo" 
                className="w-20 h-8 sm:w-24 sm:h-10 lg:w-28 lg:h-12 object-contain"
                loading="eager"
              />
            </div>

            {/* Back to Home Button */}
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#86B300] font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy & Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read this document carefully before using the Avigate mobile application.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: September 18, 2025
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#privacy-policy" className="hover:text-[#86B300] underline">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-[#86B300] underline">Terms of Service</a></li>
              <li><a href="#data-collection" className="hover:text-[#86B300] underline">Data Collection Details</a></li>
              <li><a href="#contact-us" className="hover:text-[#86B300] underline">Contact Information</a></li>
            </ul>
          </div>

          {/* Privacy Policy Section */}
          <section id="privacy-policy" className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h2>
              
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Avigate collects information to provide you with the best navigation experience. We collect location data to provide real-time route information, device information to optimize app performance, usage patterns to improve our services, and community contributions including route updates and fare information.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your information helps us provide accurate route planning and navigation, deliver real-time transport updates, estimate fares for your journeys, improve app functionality and user experience, and send important service notifications when necessary.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We do not sell your personal information to third parties. We may share anonymized, aggregated data to improve transport services in Nigeria. Location data is processed locally on your device when possible, and we only share information when required by law or to protect our users' safety.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We implement industry-standard security measures including encrypted data transmission, secure server infrastructure, regular security audits and updates, and limited access to personal information by our team members.
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section id="terms-of-service" className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h2>
              
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  By downloading, accessing, or using the Avigate application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Service Description</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Avigate provides navigation and route planning services for local transportation in Nigeria. We offer real-time information about buses, taxis, tricycles, and other transport options, along with fare estimates and community-driven updates.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Users must provide accurate information when contributing to the community, use the service responsibly and in compliance with local laws, respect other users and transport operators, and not attempt to hack, disrupt, or misuse the application.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Avigate provides information services only. We are not responsible for transport delays, fare changes, or safety issues during your journey. Users travel at their own risk and should exercise normal safety precautions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Service Availability</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We strive to maintain high service availability but cannot guarantee uninterrupted service. The app may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection Details */}
          <section id="data-collection" className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Collection Details
              </h2>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Location Data</h3>
                  <p className="text-gray-600 text-sm">
                    Used for route planning, real-time navigation, and providing location-based transport information. Data is processed securely and not stored longer than necessary.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Usage Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Anonymous data about app usage patterns helps us improve features and fix bugs. No personal identification is included in analytics.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Community Contributions</h3>
                  <p className="text-gray-600 text-sm">
                    Route updates, fare information, and transport conditions shared by users to help the community. Contributions are voluntary and anonymous.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Device Information</h3>
                  <p className="text-gray-600 text-sm">
                    Basic device details to optimize app performance and provide technical support. No sensitive device information is collected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact-us" className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or Terms of Service, please contact us:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                  <a href="mailto:hello@avigate.co" className="text-[#86B300] hover:underline">
                    hello@avigate.co
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We typically respond within 24 hours</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Data Protection Officer</h3>
                  <p className="text-gray-600 text-sm">
                    For privacy-specific inquiries, available Monday - Friday, 9 AM - 5 PM WAT
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home CTA */}
          <div className="text-center">
            <button
              onClick={handleBackToHome}
              className="btn-primary text-lg px-8 py-4"
            >
              Back to Avigate Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;