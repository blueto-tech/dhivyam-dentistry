import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

export default function TeethAnimation() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Smile className="w-12 h-12 text-blue-600" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Ready to Transform Your Smile?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Join thousands of happy patients who have discovered their perfect smile with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
            >
              Start Your Journey Today
            </motion.a>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {[
              { label: "Friendly Consultation", delay: 0 },
              { label: "Latest Technology", delay: 0.1 },
              { label: "Flexible Schedule", delay: 0.2 },
              { label: "Affordable Plans", delay: 0.3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                className="text-center "
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white min-h-[100px]   p-6 rounded-xl shadow-md"
                >
                  <p className="text-gray-800 font-medium  ">{item.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}