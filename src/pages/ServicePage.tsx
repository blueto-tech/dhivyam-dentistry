import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Check, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ServiceData {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  process: string[];
  duration: string;
}

interface ServicesData {
  [key: string]: ServiceData;
}

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const services: ServicesData = {
    'invisalign': {
      title: 'Invisalign',
      description: 'Transform your smile discreetly with custom clear aligners.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
      benefits: [
        'Nearly invisible appearance',
        'Removable for eating and cleaning',
        'Comfortable fit',
        'Fewer office visits needed'
      ],
      process: [
        'Initial consultation and 3D scanning',
        'Custom treatment plan creation',
        'Regular aligner changes',
        'Progress monitoring'
      ],
      duration: '12-18 months'
    },
    'dental-braces': {
      title: 'Dental Braces',
      description: 'Traditional and modern orthodontic solutions for perfect alignment.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
      benefits: [
        'Effective for complex cases',
        'Suitable for all ages',
        'Permanent results',
        'Various options available'
      ],
      process: [
        'Initial consultation',
        'Braces placement',
        'Regular adjustments',
        'Retention phase'
      ],
      duration: '18-24 months'
    },
    'veneers': {
      title: 'Veneers',
      description: 'Get a perfect smile with custom-made porcelain veneers.',
      image: 'https://images.unsplash.com/photo-1541604193435-22287d32c2c2?w=800&q=80',
      benefits: [
        'Natural appearance',
        'Stain resistant',
        'Long-lasting results',
        'Minimal tooth reduction'
      ],
      process: [
        'Consultation and planning',
        'Tooth preparation',
        'Temporary veneers',
        'Final placement'
      ],
      duration: '2-3 weeks'
    },
    'teeth-whitening': {
      title: 'Teeth Whitening',
      description: 'Professional whitening for a brighter, more confident smile.',
      image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=800&q=80',
      benefits: [
        'Immediate results',
        'Professional-grade treatment',
        'Long-lasting effects',
        'Safe and comfortable'
      ],
      process: [
        'Initial consultation',
        'Teeth cleaning',
        'Whitening procedure',
        'Aftercare instructions'
      ],
      duration: '1-2 hours'
    },
    'dental-implants': {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural-looking results.',
      image: 'https://images.unsplash.com/photo-1579083390476-919693a2222f?w=800&q=80',
      benefits: [
        'Natural appearance',
        'Permanent solution',
        'Preserves bone structure',
        'Improved functionality'
      ],
      process: [
        'Consultation and planning',
        'Implant placement',
        'Healing period',
        'Crown placement'
      ],
      duration: '3-6 months'
    },
    'root-canal': {
      title: 'Root Canal',
      description: 'Advanced endodontic treatment to save damaged teeth.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
      benefits: [
        'Saves natural tooth',
        'Eliminates pain',
        'Prevents infection spread',
        'Long-term solution'
      ],
      process: [
        'X-ray examination',
        'Local anesthesia',
        'Canal cleaning',
        'Permanent filling'
      ],
      duration: '1-2 sessions'
    }
  };

  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  const handleAppointment = () => {
    navigate('/#appointment');
    setTimeout(() => {
      document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <Link
                  to="/"
                  className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
                <p className="text-xl text-blue-100">{service.description}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Treatment Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Duration and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Average Treatment Duration</p>
                  <p className="text-xl font-semibold text-gray-900">{service.duration}</p>
                </div>
              </div>
              <button
                onClick={handleAppointment}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}