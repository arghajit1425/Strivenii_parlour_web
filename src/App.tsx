import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Distinction from './components/Distinction';
import GalleryView from './components/GalleryView';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import MobileQuickNav from './components/MobileQuickNav';
import AppointmentsModal from './components/AppointmentsModal';
import { Appointment } from './types';

export default function App() {
  const [preselectedServiceId, setPreselectedServiceId] = useState('');
  const [bookings, setBookings] = useState<Appointment[]>([]);
  const [isAppointmentsListOpen, setIsAppointmentsListOpen] = useState(false);

  // Sync client bookings initially and on changes
  const fetchBookingsList = () => {
    try {
      const stored = localStorage.getItem('strivenii_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      } else {
        setBookings([]);
      }
    } catch (err) {
      console.error('Failed to parse persistent bookings local storage registry', err);
    }
  };

  useEffect(() => {
    fetchBookingsList();
  }, []);

  const handleInstantBookService = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    // Smooth scroll down to form
    const bookingSection = document.getElementById('book');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBookingAction = () => {
    const bookingSection = document.getElementById('book');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCancelBookingAtID = (id: string) => {
    try {
      const updated = bookings.filter((b) => b.id !== id);
      localStorage.setItem('strivenii_bookings', JSON.stringify(updated));
      setBookings(updated);
    } catch (err) {
      console.error('failed deleting appointment booking registry info', err);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden pt-20">
      
      {/* 1. Header component */}
      <Header
        onBookClick={handleScrollToBookingAction}
        onViewAppointmentsClick={() => setIsAppointmentsListOpen(true)}
        appointmentCount={bookings.length}
      />

      {/* Main components */}
      <main className="flex-1">
        
        {/* 2. Banner view */}
        <Hero onBookClick={handleScrollToBookingAction} />

        {/* 3. Legacy details */}
        <About />

        {/* 4. Service modules */}
        <Services onServiceSelect={handleInstantBookService} />

        {/* 5. Highlight characteristics */}
        <Distinction />

        {/* 6. Transformations gallery */}
        <GalleryView />

        {/* 7. Client recommendation slide blocks */}
        <Testimonials />

        {/* 8. Fully reactive calendar registrar */}
        <BookingForm
          preselectedServiceId={preselectedServiceId}
          clearPreselectedService={() => setPreselectedServiceId('')}
          onBookingChange={fetchBookingsList}
        />

        {/* 9. Map guidelines and details card */}
        <VisitUs />

      </main>

      {/* 10. Footer layout info and subscriptions lock */}
      <Footer />

      {/* Mobile-only Sticky Floating Footer quick bar */}
      <MobileQuickNav
        onBookClick={handleScrollToBookingAction}
        onViewAppointmentsClick={() => setIsAppointmentsListOpen(true)}
      />

      {/* Active user appointments registry modal */}
      <AppointmentsModal
        isOpen={isAppointmentsListOpen}
        onClose={() => setIsAppointmentsListOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBookingAtID}
      />

    </div>
  );
}
