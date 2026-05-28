import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
  onViewAppointmentsClick: () => void;
  appointmentCount: number;
}

export default function Header({ onBookClick, onViewAppointmentsClick, appointmentCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Bridal', href: '#bridal' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-ivory/95 backdrop-blur-md shadow-[0_4px_30px_rgba(138,72,83,0.08)] border-b border-brand-rose/10'
          : 'bg-brand-ivory/30 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-8 max-w-7xl mx-auto h-full">
        {/* Brand Logo */}
        <a href="#home" className="font-serif text-3xl font-bold italic tracking-tight text-brand-rose hover:opacity-90 transition-opacity">
          Strivenii
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-[#524345] hover:text-brand-rose transition-all duration-300 relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-rose transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Items */}
        <div className="hidden md:flex items-center space-x-4">
          {appointmentCount > 0 && (
            <button
              onClick={onViewAppointmentsClick}
              className="relative p-2 text-brand-rose hover:bg-brand-pink/20 rounded-full transition-colors flex items-center"
              title="View my bookings"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {appointmentCount}
              </span>
            </button>
          )}
          <button
            onClick={onBookClick}
            className="bg-brand-rose text-white px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-brand-rose/90 active:scale-95 transition-all shadow-md flex items-center space-x-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Actions and Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          {appointmentCount > 0 && (
            <button
              onClick={onViewAppointmentsClick}
              className="relative p-1.5 text-brand-rose rounded-full bg-brand-pink/30 flex items-center"
            >
              <Sparkles className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {appointmentCount}
              </span>
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#524345] hover:text-brand-rose transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-out Nav */}
      <div
        className={`fixed top-20 left-0 w-full bg-brand-ivory/95 backdrop-blur-lg border-b border-brand-rose/10 transition-all duration-300 md:hidden z-40 shadow-inner overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-[#524345] hover:text-brand-rose transition-colors py-1 border-b border-brand-charcoal/5 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full bg-brand-rose text-white py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-brand-rose/95 transition-all text-center flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </header>
  );
}
