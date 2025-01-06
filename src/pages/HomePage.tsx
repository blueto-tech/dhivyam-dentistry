import { motion } from 'framer-motion';
import { Stethoscope, Star, Phone, Mail, MapPin, Calendar, Clock, User, Smile, Syringe } from 'lucide-react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import CounterSection from '../components/CounterSection';
import AppointmentForm from '../components/AppointmentForm';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import DoctorProfile from '../components/DoctorProfile';
import TeethAnimation from '../components/TeethAnimation';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  const services = [
    { 
      id: 'invisalign',
      title: 'Invisalign',
      description: 'Clear aligners for a perfect smile',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
      icon: <Smile className="w-8 h-8" />
    },
    { 
      id: 'dental-braces',
      title: 'Dental Braces',
      description: 'Traditional and modern orthodontic solutions',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'veneers',
      title: 'Veneers',
      description: 'Transform your smile with porcelain veneers',
      image: 'https://images.unsplash.com/photo-1541604193435-22287d32c2c2?w=800&q=80',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=800&q=80',
      icon: <Syringe className="w-8 h-8" />
    },
    { 
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=800&q=80',
      icon: <Syringe className="w-8 h-8" />
    },
    { 
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=800&q=80',
      icon: <Syringe className="w-8 h-8" />
    },
    { 
      id: 'teeth-whitening',
      title: 'Teeth Whitening',
      description: 'Professional whitening for a brighter smile',
      image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=800&q=80',
      icon: <Smile className="w-8 h-8" />
    },
    { 
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      image: 'https://images.unsplash.com/photo-1579083390476-919693a2222f?w=800&q=80',
      icon: <Syringe className="w-8 h-8" />
    },
    { 
      id: 'root-canal',
      title: 'Root Canal',
      description: 'Advanced endodontic treatment',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'root-canal',
      title: 'Root Canal',
      description: 'Advanced endodontic treatment',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'root-canal',
      title: 'Root Canal',
      description: 'Advanced endodontic treatment',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'root-canal',
      title: 'Root Canal',
      description: 'Advanced endodontic treatment',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
      icon: <Stethoscope className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ValueProps />
      
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive dental care for your entire family</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <DoctorProfile />
      <CounterSection />
      <Testimonials />
      <TeethAnimation />
      
      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
            <p className="text-xl text-gray-600">Schedule your visit with our expert dental team</p>
          </motion.div>
          <AppointmentForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}