import { X, Calendar, User, Trash2, Scissors, Info } from 'lucide-react';
import { Appointment } from '../types';
import { motion } from 'motion/react';

interface AppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Appointment[];
  onCancelBooking: (id: string) => void;
}

export default function AppointmentsModal({
  isOpen,
  onClose,
  bookings,
  onCancelBooking
}: AppointmentsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/50 backdrop-blur-md">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Dialog box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-brand-rose/20 z-10 max-h-[80vh] flex flex-col font-sans"
      >
        {/* Header slot */}
        <div className="flex justify-between items-center pb-4 border-b border-brand-rose/10 mb-6">
          <div>
            <h3 className="font-serif text-2xl text-brand-charcoal font-bold">
              My Reserved Sessions
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Active consultations and wellness checkouts
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-brand-rose/15 text-brand-rose transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list content */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 min-h-[30vh]">
          {bookings.length === 0 ? (
            <div className="text-center py-12 text-gray-400 space-y-3 font-sans">
              <Calendar className="w-12 h-12 text-brand-rose/25 mx-auto" />
              <p className="text-sm font-medium">No appointments scheduled active</p>
              <p className="text-[11px] leading-relaxed max-w-xs mx-auto">
                Fill the 'Secure Your Experience' booking form to schedule your premium beauty transformation!
              </p>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-brand-ivory p-5 rounded-2xl border border-brand-rose/10 hover:border-brand-rose/20 transition-all flex justify-between items-start"
              >
                <div className="space-y-2 text-sm">
                  {/* Voucher ID and status badge */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold bg-brand-rose/10 text-brand-rose px-2 py-0.5 rounded">
                      {booking.id}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider">
                      {booking.status}
                    </span>
                  </div>

                  {/* Treatment service name */}
                  <h4 className="font-serif font-bold text-brand-charcoal text-base">
                    {booking.serviceName}
                  </h4>

                  {/* Client details context */}
                  <div className="space-y-1 text-xs text-[#524345]">
                    <div className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-brand-rose" />
                      <span>{booking.name} ({booking.phone})</span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-rose" />
                      <span className="font-mono">
                        {new Date(booking.date).toLocaleDateString(undefined, {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cancel trigger button */}
                <button
                  onClick={() => onCancelBooking(booking.id)}
                  className="p-2 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all"
                  title="Cancel Session"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Informational footer advisory notes */}
        <div className="mt-6 pt-4 border-t border-brand-rose/10 bg-brand-pink/10 p-3 rounded-2xl flex items-start space-x-2.5 text-[11px] text-[#524345] leading-relaxed">
          <Info className="w-4 h-4 text-brand-rose grow-0 shrink-0 mt-0.5" />
          <span>
            For fast timing reschedules, please dial our concierge team directly at **+91 98200 12345** at least 4 hours before your slot.
          </span>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-brand-rose text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#9c535f] transition-all text-center"
          >
            Close Viewer
          </button>
        </div>

      </motion.div>
    </div>
  );
}
