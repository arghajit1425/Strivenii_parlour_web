import { Star, Phone, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNdNIhljoKAUrbuI2eHg2XLriU9yU5hrTl3iXaqV-Me0wWVD8YKxJvGvvzhGPGCgw28EuyeFFlDr5RtbbvFXKvITY4U_GsehmhKLVg8kDXpiqDypcfZ5_xx8Cc3JbR-ZehTC67zdv7TVqM0jNI-7_E2WNDc1kyRN0V2gnseoeutY4aBXcpjSDZqdUSO8D-Jbd3TD6u4gPbaIVd7uWD5Us-GbVD-2xiv5yK0lX_7ht7TAs8rkJYY3a7btZQVzAY93wOxNDz_ArJsA"
          alt="Luxury beauty salon with velvet seating in soft rose gold"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft, professional gradient masking overlay for perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1c1c]/75 via-[#1b1c1c]/50 to-[#1b1c1c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f8]/10 via-transparent to-[#1b1c1c]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Accent Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
            <div className="flex items-center space-x-1 text-amber-400 bg-black/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              <span className="text-white text-xs font-semibold font-sans ml-1.5">
                4.9 (1.4k+ Reviews)
              </span>
            </div>

            <div className="glass-panel-dark px-4 py-1.5 rounded-full flex items-center space-x-2 border border-brand-pink/20">
              <Award className="w-3.5 h-3.5 text-brand-pink" />
              <span className="text-brand-pink text-[10px] font-bold uppercase tracking-widest">
                Women-Owned
              </span>
            </div>
          </div>

          {/* Majestic Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-tight font-bold">
            Strivenii: <span className="italic font-light text-[#fcdbde]">Modern Opulence</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl font-sans font-light mb-10 md:mb-12 max-w-xl leading-relaxed">
            Mumbai's most exclusive sanctuary for personalized hair artistry and holistic beauty. Experience a transformation crafted by master stylists of the craft.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onBookClick}
              className="bg-brand-rose hover:bg-[#9c535f] text-white px-8 md:px-10 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all text-center"
            >
              Book Appointment
            </button>
            <a
              href="tel:+919820012345"
              className="glass-panel hover:bg-white/20 text-white border border-white/40 px-8 md:px-10 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
