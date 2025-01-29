import { motion } from 'framer-motion';
import { GraduationCap, Award, Star } from 'lucide-react';
import StarSparkle from './StarSparkle';

export default function DoctorProfile() {
  const qualifications = [
    {
      year: "",
      degree: "Bachelor of Dental Surgery",
      institution: "SRM Dental College, Ramapuram",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: "",
      degree: "Endodontic Fellowship",
      institution: "",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "",
      degree: "MDS - Oral and Maxillofacial Pathology",
      institution: "Meenakshi Ammal Dental College and Hospital",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert</h2>
          <p className="text-xl text-gray-600">Dedicated to providing the best dental care</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/images/doctor-image.jpg"
                alt="Doctor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-xl"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-3xl font-bold">4+</p>
                <p className="text-sm">Years of Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <StarSparkle density={15} scale={1.5} />
              <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Dr.Boobalan</h3>
              <div className="relative">
                <StarSparkle density={10} scale={1.2} />
                <p className="text-lg text-gray-600 mb-6 relative z-10">
                  Specialized in advanced dental procedures with a focus on patient comfort and modern techniques.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <StarSparkle density={8} scale={1} />
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-600">
                      {qual.icon}
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-semibold">{qual.year}</p>
                      <h4 className="text-lg font-semibold text-gray-900">{qual.degree}</h4>
                      <p className="text-gray-600">{qual.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                <span>Book Consultation</span>
              </motion.a>
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-blue-50 transition-colors"
              >
                <span>View Credentials</span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}