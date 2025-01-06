import { motion } from 'framer-motion';
import { Phone, Clock } from 'lucide-react';

export default function Banner() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-blue-600 text-white py-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="hidden md:flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#appointment" className="hover:text-blue-100">Book Appointment</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}