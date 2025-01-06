import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  index: number;
}

function Counter({ end, label, icon, index }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <motion.div
        animate={inView ? {
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-blue-600 mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full"
      >
        {icon}
      </motion.div>
      <motion.div
        animate={inView ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-4xl font-bold text-blue-600"
      >
        {count}+
      </motion.div>
      <div className="text-gray-600 mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

export default function CounterSection() {
  const counters = [
    { end: 1000, label: "Happy Patients", icon: "😊" },
    { end: 15, label: "Years Experience", icon: "🏆" },
    { end: 50, label: "Dental Awards", icon: "🌟" },
    { end: 25, label: "Expert Dentists", icon: "👨‍⚕️" },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievement Numbers</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of happy patients</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              end={counter.end}
              label={counter.label}
              icon={counter.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}