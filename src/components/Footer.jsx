const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/public/images/logo/logo-white.svg" 
                alt="Avigate Logo" 
                className="w-24 h-36 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Making Local transportation accessible for everyone in Nigeria.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
                   
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-green-400 transition-colors cursor-pointer">Home</a></li>
              <li><a href="#features" className="hover:text-green-400 transition-colors cursor-pointer">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-green-400 transition-colors cursor-pointer">How It Works</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors cursor-pointer">About</a></li>
            </ul>
          </div>
                   
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors cursor-pointer">Terms of Service</a></li>
              <li className="pt-2">
                <p className="text-sm text-gray-500 mb-1">Contact Support:</p>
                <a href="mailto:hello@avigate.co" className="text-green-400 hover:text-green-300 transition-colors cursor-pointer font-medium">
                  hello@avigate.co
                </a>
              </li>
            </ul>
          </div>
        </div>
                 
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Avigate Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;