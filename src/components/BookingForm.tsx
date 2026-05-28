import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { Appointment } from '../types';
import { Calendar, Phone, CheckCircle2, MessageSquare, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingFormProps {
  preselectedServiceId: string;
  clearPreselectedService: () => void;
  onBookingChange: () => void;
}

export default function BookingForm({
  preselectedServiceId,
  clearPreselectedService,
  onBookingChange
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: '',
    date: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successBooking, setSuccessBooking] = useState<Appointment | null>(null);

  // Auto pre-select service if passed from details layout
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedServiceId
      }));
    }
  }, [preselectedServiceId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const { name, phone, serviceId, date } = formData;

    if (!name.trim()) {
      setErrorMsg('Kindly supply your full name for the booking listing.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorMsg('Kindly input a valid direct phone context contact number.');
      return;
    }
    if (!serviceId || serviceId === 'Select Service') {
      setErrorMsg('Kindly select a luxury service from our portfolio.');
      return;
    }
    if (!date) {
      setErrorMsg('Kindly pick a suitable date for your session.');
      return;
    }

    const selectedService = SERVICES.find((s) => s.id === serviceId);
    const serviceName = selectedService ? selectedService.name : 'Custom Sanctuary Consultation';

    // Generate appointment object
    const newAppointment: Appointment = {
      id: `ST-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      phone,
      serviceId,
      serviceName,
      date,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    // Store in LocalStorage registry securely
    try {
      const stored = localStorage.getItem('strivenii_bookings');
      const currentList: Appointment[] = stored ? JSON.parse(stored) : [];
      localStorage.setItem(
        'strivenii_bookings',
        JSON.stringify([newAppointment, ...currentList])
      );
    } catch (err) {
      console.error('Local Storage persistence error', err);
    }

    // Set success modal & reset form
    setSuccessBooking(newAppointment);
    setFormData({
      name: '',
      phone: '',
      serviceId: '',
      date: '',
    });

    // Notify state updates upstream
    clearPreselectedService();
    onBookingChange();
  };

  return (
    <section id="book" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main curved layout card container */}
        <div className="bg-brand-pink/15 rounded-[32px] p-8 md:p-16 lg:p-20 overflow-hidden relative border border-brand-rose/10 shadow-sm">
          
          {/* Aesthetic background items */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_1uttKXJ0-FqWCatOoogRTTq3UHiZh8Xj0lqrcbMxlfQlSXpbSCx7DDuR7bKComm5iozk6-yXuZIi-OWlQ0Q201suyTmM5fTsrD6EIdG3inKi0AqtW_7obWUWmrCt_XwnO2oWjfyXf5U8yLg_0S9OfZ38whY9MQPSVIZVSyq0GJrUoT5Rp60X4hLIBSA2TYRwAkoLhdmxy8eXWVhsrVBGMZsEGZCZArJ6lwL84rR8Oxpz0nxtgj_BB1THkrSgYct6w3XoUbaAA"
              alt="Golden salon equipment layout against premium ivory marble background"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Form container left-scaled */}
          <div className="max-w-xl relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-rose mb-6 leading-tight">
              Secure Your Experience
            </h2>
            <p className="font-sans text-[#524345] mb-10 text-sm md:text-base leading-relaxed">
              Our calendar fills up quickly. Secure your bespoke beauty session today, or reach out for a luxury consultation via WhatsApp.
            </p>

            {/* In-form Alert banner */}
            {errorMsg && (
              <div className="mb-6 px-4 py-2 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-sans rounded-r-md">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleBookNow} className="space-y-6">
              
              {/* Row 1 - Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#524345] mb-2 font-sans">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g., Priya Sharma"
                    className="w-full bg-white border-0 border-b border-brand-rose/20 p-3.5 focus:ring-0 focus:border-brand-rose transition-colors text-brand-charcoal rounded-md text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#524345] mb-2 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="E.g., +91 98200 12345"
                    className="w-full bg-white border-0 border-b border-brand-rose/20 p-3.5 focus:ring-0 focus:border-brand-rose transition-colors text-brand-charcoal rounded-md text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2 - Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#524345] mb-2 font-sans">
                    Select Service
                  </label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full bg-white border-0 border-b border-brand-rose/20 p-3.5 focus:ring-0 focus:border-brand-rose transition-colors text-brand-charcoal rounded-md text-sm shadow-sm"
                  >
                    <option value="">Select Service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#524345] mb-2 font-sans">
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white border-0 border-b border-brand-rose/20 p-3.5 focus:ring-0 focus:border-brand-rose transition-colors text-brand-charcoal rounded-md text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Submission Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-brand-rose text-white px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#9c535f] transition-all flex-1 shadow-md hover:shadow-lg active:scale-95 text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>

                <a
                  href="https://wa.me/919820012345?text=Hello%20Strivenii!%20I%20would%20like%20to%20reserve%20a%20bespoke%20beauty%20appointment%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2.5 active:scale-95 transition-all shadow-sm hover:opacity-90"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp Link</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL DIALOG OVERLAY */}
      <AnimatePresence>
        {successBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessBooking(null)}
              className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-brand-rose/20 text-center z-10"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-2xl text-brand-charcoal mb-2 font-bold">
                Experience Secured!
              </h3>
              <p className="text-sm font-sans text-[#524345] mb-6">
                Your luxury treatment session reservation has been safely recorded in our local registry system.
              </p>

              {/* Booking Voucher Recap */}
              <div className="bg-brand-ivory p-5 rounded-2xl border border-brand-rose/10 text-left mb-6 font-sans space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-brand-rose/15">
                  <span className="text-xs font-bold text-brand-rose">BOOKING ID</span>
                  <span className="text-xs font-mono font-bold bg-brand-pink/50 text-brand-rose px-2 py-0.5 rounded">
                    {successBooking.id}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">CLIENT</span>
                  <span className="font-semibold text-brand-charcoal">{successBooking.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">TREATMENT</span>
                  <span className="font-semibold text-brand-charcoal">{successBooking.serviceName}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">DATE</span>
                  <span className="font-semibold text-brand-charcoal font-mono">
                    {new Date(successBooking.date).toLocaleDateString(undefined, {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">STATUS</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px] uppercase">
                    {successBooking.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => setSuccessBooking(null)}
                  className="bg-brand-rose text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#9c535f] transition-colors"
                >
                  Done
                </button>
                <span className="text-[10px] text-gray-400 font-sans">
                  We look forward to welcoming you to Goregaon West, Mumbai.
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
