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
      title: 'INVISALIGN',
      description: 'Clear aligners for a perfect smile',
      image: '/images/clear-aligners.jpg',
      icon: <Smile className="w-8 h-8" />
    },
    { 
      id: 'dental-braces',
      title: 'DENTAL BRACES',
      description: 'Traditional and modern orthodontic solutions',
      image: '/images/dental-braces.jpg',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'veneers',
      title: 'VEENERS',
      description: 'Transform your smile with porcelain veneers',
      image: '/images/smile-designing.jpg',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'dental-implants',
      title: 'DENTAL IMPLANTS',
      description: 'Permanent solution for missing teeth',
      image: '/images/dental-implants.jpg',
      icon: <Syringe className="w-8 h-8" />
    },
    { 
      id: 'wisdom-tooth-extraction',
      title: 'WISDOM TOOTH EXTRACTION',
      description: 'Wisdom tooth extraction',
      image: '/images/wisdom-tooth-extraction.jpg',
      icon: <Syringe className="w-8 h-8" />
    },
    
    
    { 
      id: 'crowns-and-bridges',
      title: 'CROWN AND BRIDGES',
      description: 'Permanent solution for missing teeth',
      image: '/images/crowns-and-bridges.jpg',
      icon: <Syringe className="w-8 h-8" />
    },
    
    
    { 
      id: 'root-canal',
      title: 'ROOT CANAL',
      description: 'Advanced endodontic treatment',
      image: '/images/root-canal-treatment.jpg',
      icon: <Stethoscope className="w-8 h-8" />
    },
    { 
      id: 'paediatric-dentistry',
      title: 'PAEDIATRIC DENTISTRY',
      description: 'Pedodontists, specialize in diagnosing and treating dental problems in infants, children, and teenagers',
      image: '/images/paediatric-dentistry.jpg',
      icon: <Stethoscope className="w-8 h-8" />
    },
    // { 
    //   id: 'teeth-whitening',
    //   title: 'Teeth Whitening',
    //   description: 'Professional whitening for a brighter smile',
    //   image: 'images/teeth-whitening.jpg',
    //   icon: <Smile className="w-8 h-8" />
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
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
      {/* <CounterSection /> */}
      {/* <Testimonials /> */}
      <TeethAnimation />
      
      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 "
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