import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
}

const serviceDetails: { [key: string]: any } = {
  'Invisalign': {
    benefits: [
      'Nearly invisible aligners',
      'Removable for eating and cleaning',
      'Comfortable fit',
      'Fewer office visits needed'
    ],
    process: [
      'Initial consultation and 3D scanning',
      'Custom treatment plan creation',
      'Regular aligner changes every 1-2 weeks',
      'Progress monitoring'
    ],
    duration: '12-18 months average',
    additionalImages: [
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
      'https://images.unsplash.com/photo-1606811971789-7b4040b7c5a3?w=800&q=80'
    ]
  },
  'Dental Braces': {
    benefits: [
      'Effective for complex cases',
      'Suitable for all age groups',
      'Permanent results',
      'Various options available'
    ],
    process: [
      'Initial consultation',
      'Braces placement',
      'Regular adjustments',
      'Retention phase'
    ],
    duration: '18-24 months average',
    additionalImages: [
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
      'https://images.unsplash.com/photo-1598256989810-361c71d6f180?w=800&q=80'
    ]
  },
  // Add details for other services...
};

export default function ServiceModal({ isOpen, onClose, title, description, image }: ServiceModalProps) {
  const details = serviceDetails[title] || {
    benefits: [],
    process: [],
    duration: 'Varies by case',
    additionalImages: []
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-600 mb-8">{description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {details.benefits.map((benefit: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-gray-600">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Process</h3>
                  <ul className="space-y-4">
                    {details.process.map((step: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-600">{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {details.additionalImages.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {details.additionalImages.map((img: string, index: number) => (
                      <motion.img
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        src={img}
                        alt={`${title} ${index + 1}`}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between items-center border-t pt-6">
                <div>
                  <p className="text-sm text-gray-500">Average Treatment Duration</p>
                  <p className="text-lg font-semibold text-gray-900">{details.duration}</p>
                </div>
                <motion.a
                  href="#appointment"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Consultation
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}