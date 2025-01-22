import {useState} from 'react'
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

export default function AppointmentForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber:'',
    email: '',
    preferredDate: '',
    preferredTime: '',
    treatmentType:'',
    additionalNotes:''
  });
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // EmailJS service details (replace with your credentials from EmailJS)
  const serviceID = 'service_x7r2n2m'; 
  const templateID = 'template_1plo6kk'; 
  const publicKey = 'MLRl7ruCqmoo8wkpn';

  const handleSubmit = (e: React.FormEvent) => {
    console.log(e.target)
    e.preventDefault();
// Collect form data
const { fullName, phoneNumber, email, preferredDate, preferredTime, treatmentType, additionalNotes } = formData;

    const emailData = {
      patient_name: fullName,
      patient_phoneNumber:phoneNumber,
      patient_email: email,
      date: preferredDate,
      time: preferredTime,
      treatment_type:treatmentType,
      additional_notes:additionalNotes,
      to_name:'Dhivyam Dentistry'
    };
    
     // ---------Send the form data using EmailJS------------
     emailjs.send(serviceID, templateID, emailData, publicKey)
     .then((response) => {
       console.log('Success:', response);
       toast.success('Appointment scheduled successfully! We will contact you shortly.', {
         duration: 5000,
         position: 'top-center',
         icon: '👋',
         style: {
           background: '#4F46E5',
           color: '#fff',
           borderRadius: '10px',
         },
       });
     })
     .catch((error) => {
       console.error('Error:', error);
       toast.error('Failed to send appointment details. Please try again.', {
         duration: 5000,
         position: 'top-center',
         icon: '⚠️',
         style: {
           background: '#DC2626',
           color: '#fff',
           borderRadius: '10px',
         },
       });
     });
    (e.target as HTMLFormElement).reset();
     // -----Reset form after submission--------
     setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      treatmentType: '',
      additionalNotes: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              name='preferredDate'
              value={formData.preferredDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Preferred Time
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              name='preferredTime'
              value={formData.preferredTime}
              onChange={handleInputChange}
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 7 PM)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Treatment Type
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              name='treatmentType'
              value={formData.treatmentType}
              onChange={handleInputChange}
            >
              <option value="">Select treatment</option>
              <option value="general">General Checkup</option>
              <option value="cleaning">Teeth Cleaning</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="implants">Dental Implants</option>
              <option value="braces">Dental Braces</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Additional Notes
          </label>
          <textarea
              
              name="additionalNotes"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            value={formData.additionalNotes}
              onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Schedule Appointment
          </button>
        </div>
      </form>
    </motion.div>
  );
}