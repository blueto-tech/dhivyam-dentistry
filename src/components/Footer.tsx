import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const phoneNumber = '+919876543210'; // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hi, I would like to schedule an appointment.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com" },
    { icon: Twitter, url: "https://www.twitter.com" },
    { icon: Instagram, url: "https://www.instagram.com" },
    { icon: Linkedin, url: "https://www.linkedin.com" },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Dhivyam Dentistry</h3>
            <p className="text-gray-400 mb-6">
              Providing exceptional dental care with advanced technology and a gentle touch.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  
                  <social.icon className="w-5 h-5" />
                  
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <p className="text-gray-400">86/142, Thuraiyur road, Near manoharan hospital, Namakkal-637001</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">+91 90474 70177</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">dhivyamdentistry@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-400">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              {/* <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </motion.a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Book Appointment'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 3 }}>
                  
                  <a href={link === "Book Appointment" ? "#appointment" : `#${link.toLowerCase().replace(' ', '-')}`}  className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Find Us</h3>
            <div className="rounded-lg overflow-hidden h-48">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.5889742960603!2d78.16905497481167!3d11.218016388958892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce9316f77cfb%3A0xeb53940958dfcb1e!2sSri%20Ram%20Nursing%20Home%20-%20Manoharan%20Hospital!5e0!3m2!1sen!2sin!4v1737538735114!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dhivyam Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}