import { MapPin, Clock, Mail } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Card Left Details */}
          <div>
            <span className="font-sans text-xs font-bold text-brand-rose uppercase tracking-[0.3em] block mb-4">
              Visit Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal mb-12">
              The Salon in Goregaon
            </h2>

            <div className="space-y-10 font-sans">
              
              {/* Box 1: Address */}
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-brand-pink/40 rounded-2xl text-brand-rose shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-1.5">
                    Address
                  </h4>
                  <p className="text-[#524345] text-sm md:text-base leading-relaxed font-light">
                    Shop 4, Luxury Towers, S.V. Road,<br />
                    Goregaon West, Mumbai, Maharashtra 400104
                  </p>
                </div>
              </div>

              {/* Box 2: Working hours */}
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-brand-pink/40 rounded-2xl text-brand-rose shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-1.5">
                    Business Hours
                  </h4>
                  <p className="text-[#524345] text-sm md:text-base leading-relaxed font-light">
                    Monday – Saturday: 10:00 AM – 9:00 PM<br />
                    Sunday: 11:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Box 3: Touchpoints */}
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-brand-pink/40 rounded-2xl text-brand-rose shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-1.5">
                    Connect
                  </h4>
                  <p className="text-[#524345] text-sm md:text-base leading-relaxed font-light">
                    <a href="mailto:hello@strivenii.com" className="hover:text-brand-rose underline transition-colors">
                      hello@strivenii.com
                    </a>
                    <br />
                    <a href="tel:+919820012345" className="hover:text-brand-rose underline transition-colors">
                      +91 98200 12345
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Card Right Map */}
          <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(138,72,83,0.1)] border border-brand-rose/10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMM99M5EAXA4HTFZVGSSm15BOKoRmKWg_z8gYoWWjbq7FkkNiu1CjppMvMKPSTzza-6_GpvkjciYgAkm3ydmIxSz3A9_2hqQIeGXZu5NG0z0L5hMZ254zo8ARu1l7GpQZ2OnL5F2XQ8qxoJ6Nbu58Yosl3iV1U2Roi5z31k9U1XGtN9kDhqaHnbtduXXne0lPvFWKkkatTtBBTYm6lydzfk5Mc9iU9MaeghRpXkYjPTVuSu4ZE_6pH3SPBmcLfQxzH_WAcm2fuw"
              alt="Sophisticated light map marking Goregaon West location of Strivenii salon"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
