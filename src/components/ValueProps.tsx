import { motion } from 'framer-motion';
import { Heart, Users, Clock, Shield } from 'lucide-react';

function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function ValueCard({ icon: Icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 md:min-h-[400px] flex flex-col justify-between">
        <div className="relative">
          <Sparkles />
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-500"
          >
            <Icon className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ValueProps() {
  const valueProps = [
    {
      icon: Heart,
      title: "Excellence in Service",
      description: "Committed to providing exceptional dental care with precision and expertise.",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      description: "Your comfort and satisfaction are our top priorities in every treatment.",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "Continuous Care",
      description: "Supporting your dental health journey with dedicated follow-up care.",
      delay: 0.5
    },
    {
      icon: Shield,
      title: "Modern Technology",
      description: "Advanced solutions and equipment for the best possible treatment outcomes.",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <ValueCard key={index} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
}