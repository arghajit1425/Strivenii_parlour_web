import { Home, Flower2, Sparkles, Scissors, UserCheck } from 'lucide-react';

interface MobileQuickNavProps {
  onBookClick: () => void;
  onViewAppointmentsClick: () => void;
}

export default function MobileQuickNav({
  onBookClick,
  onViewAppointmentsClick
}: MobileQuickNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-brand-ivory/95 backdrop-blur-md border-t border-brand-rose/15 px-5 py-3 flex justify-between items-center z-40 shadow-[0_-4px_24px_rgba(138,72,83,0.06)]">
      
      {/* Home link */}
      <a href="#home" className="flex flex-col items-center text-brand-rose transition-colors hover:opacity-90">
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-[#524345]">
          Home
        </span>
      </a>

      {/* Menu / Services Link */}
      <a href="#services" className="flex flex-col items-center text-[#524345] hover:text-brand-rose transition-colors">
        <Flower2 className="w-5 h-5 text-brand-rose" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
          Menu
        </span>
      </a>

      {/* Bridal Link */}
      <a href="#bridal" className="flex flex-col items-center text-[#524345] hover:text-brand-rose transition-colors">
        <Sparkles className="w-5 h-5 text-brand-rose" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
          Bridal
        </span>
      </a>

      {/* Styling / Gallery Link */}
      <a href="#gallery" className="flex flex-col items-center text-[#524345] hover:text-brand-rose transition-colors">
        <Scissors className="w-5 h-5 text-brand-rose" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
          Styling
        </span>
      </a>

      {/* Account / Track Appointments Link */}
      <button
        onClick={onViewAppointmentsClick}
        className="flex flex-col items-center text-[#524345] hover:text-brand-rose transition-colors"
      >
        <UserCheck className="w-5 h-5 text-brand-rose" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
          Account
        </span>
      </button>

    </nav>
  );
}
