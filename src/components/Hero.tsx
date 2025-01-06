import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import StarSparkle from './StarSparkle';
import dd from '../../src/assets/dd3.png';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export default function Hero() {
  const welcomeText = "Welcome to".split("");
  const clinicName = "Dhivyam Dentistry".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&q=80"
          alt="Modern Dental Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70" />
      </div>

      <StarSparkle density={15} scale={1.5} color="from-blue-200 to-white" />

      {/* Content */}
      <div className="relative z-10 w-full py-32 flex-parallel">
        <div className="max-w-7xl  px-4 sm:px-6 mx-auto lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-4xl"
          >
            <motion.div 
              className="inline-block relative mb-12"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-violet-500/50 blur-lg"></div>
              <div className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-violet-600/20 backdrop-blur-sm border border-white/30">

                <div className="flex justify-center mb-1">
                  {welcomeText.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-sm uppercase tracking-wider text-blue-200 font-medium"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-center">
                  {clinicName.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i + welcomeText.length}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-2xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            
            <motion.div className="relative mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                Your Smile, <br />Our Passion
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl text-blue-100 leading-relaxed"
              >
                Experience world-class dental care with our expert team
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-6 py-3 rounded-full text-sm font-medium shadow-lg bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 rounded-full text-sm font-medium bg-white/10 backdrop-blur-lg text-white border border-white/30 hover:bg-white/20 transition-colors"
              >
                <span className="flex items-center gap-2">
                  Explore Services
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* <img src={dd} className='logo-home '/> */}
      </div>
    </section>
  );
}