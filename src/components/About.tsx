import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function About() {
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image Column */}
          <div className="relative group justify-self-center lg:justify-self-start">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl max-w-md w-full relative shadow-[0_12px_40px_rgba(138,72,83,0.12)] border border-brand-rose/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCojbvWYrF9fssWrfNmDhaiBkDtnSGAN2iKfua01iHBkM3i7q7OGk-LF6-6_DGOPhhEBsBydoIy0pQQUwRDaD4YNXMXM43_OTvwb9mS1Q2XBIopLg7eseFyD_3I9RpJFbUAfWk3wL8FZM1xkia81_DBjwGkEWPi64j5Y-wUJzBAigKXTcvkW60aF-9LtEH_FNgENyfRYPdI8qlTRvvD87QS93guuXV-qiUkx2wmgXdQ3G_jpQkGzVFvzf-Rc1zwkpSw6EkMG47GHw"
                alt="Representative beauty expert of women-owned luxury Strivenii"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Absolute Hover Card */}
            <div className="absolute -bottom-6 -right-4 md:right-4 glass-panel p-6 rounded-2xl max-w-xs shadow-xl border border-white/50 hidden sm:block">
              <p className="font-serif text-2xl text-brand-rose italic mb-2">Bespoke</p>
              <p className="font-sans text-sm text-[#524345] leading-relaxed">
                Every service is a unique dialogue between our expertise and your personal vision.
              </p>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs font-bold text-brand-rose uppercase tracking-[0.3em] block mb-4">
              Our Legacy
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal mb-6 leading-tight">
              The Strivenii Story
            </h2>
            
            <div className="rose-gold-divider mb-8 w-24" />

            <p className="font-sans text-base md:text-lg text-[#524345] mb-6 leading-relaxed font-light">
              Founded on the principle of "Modern Opulence," Strivenii is a women-owned sanctuary born in the heart of Mumbai. We believe that beauty is not just an outcome, but a curated experience of conscious self-care.
            </p>
            
            <p className="font-sans text-base md:text-lg text-[#524345] mb-8 leading-relaxed font-light">
              Our team of master stylists and therapists are dedicated to providing bespoke solutions, using only the world's most prestigious products to ensure your hair and skin reflect your inner radiance.
            </p>

            <button
              onClick={() => setShowPhilosophy(true)}
              className="border-b-2 border-brand-rose text-brand-rose font-sans text-xs font-bold uppercase tracking-widest pb-1 hover:opacity-75 transition-opacity duration-300"
            >
              Read Our Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* Philosophy Modal Interaction */}
      <AnimatePresence>
        {showPhilosophy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPhilosophy(false)}
              className="absolute inset-0 bg-[#1b1c1c]/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative bg-brand-ivory rounded-3xl p-8 md:p-10 max-w-2xl w-full shadow-2xl border border-brand-rose/20 z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowPhilosophy(false)}
                className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-brand-rose/10 text-brand-rose transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-sans text-xs font-bold text-brand-rose uppercase tracking-[0.2em] block mb-2">
                Deep Dive
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-4">
                Our Foundational Philosophy
              </h3>
              <div className="rose-gold-divider mb-6 w-16" />

              <div className="space-y-6 text-[#524345] font-light leading-relaxed text-sm md:text-base">
                <p>
                  At Strivenii, we believe true beauty is an inside-out resonance. We do not impose standard looks or quick cosmetics. Instead, our method is founded on the trinity of **Health**, **Symmetry**, and **Soulfulness**.
                </p>
                <p>
                  Every consultation begins with a deep tactile investigation—understanding your lifestyle, natural hair movement, and skin biology before we introduce a single clipper or serum.
                </p>

                <div className="bg-brand-pink/20 p-5 rounded-2xl border border-brand-rose/10 space-y-3">
                  <h4 className="font-serif font-bold text-brand-rose text-base">The Strivenii Pledges</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-rose mt-1 flex-shrink-0" />
                      <span>**Aesthetic Respect**: Harmonizing each highlight with your natural skin warmth.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-rose mt-1 flex-shrink-0" />
                      <span>**Eco-Certified Ingredients**: Organic colouring agents and sustainable hair oils only.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-rose mt-1 flex-shrink-0" />
                      <span>**Uncompromised Sanitization**: Clinically sterilized utensils for flawless hygiene safety.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs italic text-brand-rose font-medium">
                  “Opulence isn't about noise—it is the whisper of absolute attention.” – Strivenii Founders
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowPhilosophy(false)}
                  className="bg-brand-rose text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-rose/90 transition-all"
                >
                  Understand &amp; Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
