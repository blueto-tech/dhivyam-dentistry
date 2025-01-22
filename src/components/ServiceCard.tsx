import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}

export default function ServiceCard({ id, title, description, icon, image, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
    >
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/60" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <motion.div 
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue-600">
            {icon}
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        {/* ------------link to learn more about the procedures------- */}
        {/* <Link
          to={`/services/${id}`}
          className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-200">Learn more</span>
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link> */}
      </div>
    </motion.div>
  );
}