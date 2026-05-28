import { ShieldCheck, Snowflake } from 'lucide-react';
import { motion } from 'motion/react';

export default function Distinction() {
  return (
    <section className="py-20 md:py-32 bg-[#1b1c1c] text-white overflow-hidden relative">
      {/* Soft blurred glowing spot representing luxurious rose gold lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-rose/15 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left copy column */}
          <div>
            <span className="font-sans text-xs font-bold text-brand-pink uppercase tracking-[0.3em] block mb-4">
              The Distinction
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              Unparalleled Standards of Excellence
            </h2>
            <p className="font-sans text-white/70 text-base md:text-lg mb-12 font-light leading-relaxed">
              We combine global beauty standards with intimate, personalized care to create a sanctuary of luxury in Mumbai.
            </p>

            <div className="space-y-10">
              {/* Feature 1 */}
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 flex-shrink-0 border border-brand-pink/30 rounded-full flex items-center justify-center bg-white/5">
                  <ShieldCheck className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl mb-1 text-white font-medium">
                    Hygienic Environment
                  </h4>
                  <p className="text-white/60 font-sans text-sm leading-relaxed font-light">
                    Medical-grade sterilization and single-use hygiene kits for every client interaction.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 flex-shrink-0 border border-brand-pink/30 rounded-full flex items-center justify-center bg-white/5">
                  <Snowflake className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl mb-1 text-white font-medium">
                    Premium Products
                  </h4>
                  <p className="text-white/60 font-sans text-sm leading-relaxed font-light">
                    Exclusive partnerships with global brands like L'Oréal Professionnel and Kérastase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right metrics grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="glass-panel-dark p-8 rounded-3xl text-center border border-white/10 hover:border-brand-pink/30 transition-colors">
              <span className="block text-3xl md:text-5xl font-serif text-brand-pink mb-2 font-bold tracking-tight">
                1429+
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-white/50 block font-semibold">
                Happy Clients
              </span>
            </div>

            <div className="glass-panel-dark p-8 rounded-3xl text-center border border-white/10 hover:border-brand-pink/30 transition-colors lg:translate-y-8">
              <span className="block text-3xl md:text-5xl font-serif text-brand-pink mb-2 font-bold tracking-tight">
                15+
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-white/50 block font-semibold">
                Expert Stylists
              </span>
            </div>

            <div className="glass-panel-dark p-8 rounded-3xl text-center border border-white/10 hover:border-brand-pink/30 transition-colors">
              <span className="block text-3xl md:text-5xl font-serif text-brand-pink mb-2 font-bold tracking-tight">
                4.9
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-white/50 block font-semibold">
                Avg. Rating
              </span>
            </div>

            <div className="glass-panel-dark p-8 rounded-3xl text-center border border-white/10 hover:border-brand-pink/30 transition-colors lg:translate-y-8">
              <span className="block text-3xl md:text-5xl font-serif text-brand-pink mb-2 font-bold tracking-tight">
                12k+
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-white/50 block font-semibold">
                Services Done
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
