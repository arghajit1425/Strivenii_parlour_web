import { SERVICES } from '../data';
import { Service } from '../types';
import { Scissors, Flower2, Palette, Sparkles, Smile, Droplets, Clock, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

// Icon mapper to prevent dynamic string load crashes
const iconMap: Record<string, any> = {
  Scissors: Scissors,
  Spa: Flower2, // use Flower2 for Luxury Spa
  Palette: Palette,
  Sparkles: Sparkles,
  Smile: Smile,
  HeartPulse: Droplets, // use Droplets for Body Glow / Hydration
};

export default function Services({ onServiceSelect }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#f6f3f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs font-bold text-brand-rose uppercase tracking-[0.3em] block mb-4">
            Exquisite Care
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal">
            Curated Services
          </h2>
          <div className="rose-gold-divider mt-6 w-24 mx-auto" />
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Scissors;
            
            // Bridal card must hold ID "bridal" for the layout links
            const cardId = service.id === 'bridal-makeup' ? 'bridal' : undefined;

            return (
              <div
                key={service.id}
                id={cardId}
                className="glass-panel p-8 md:p-10 rounded-3xl group hover:shadow-[0_15px_40px_rgba(138,72,83,0.1)] hover:-translate-y-1 transition-all duration-500 border border-white/60 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Backdrop Circle */}
                  <div className="w-16 h-16 bg-brand-rose/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-rose/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-brand-rose" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:text-brand-rose transition-colors">
                    {service.name}
                  </h3>

                  {/* Specs Indicator */}
                  <div className="flex items-center space-x-4 mb-4 text-xs font-mono text-[#524345]/70">
                    <span>{service.price}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#524345] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Subtag and CTA line */}
                <div className="pt-4 border-t border-brand-rose/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-rose tracking-widest uppercase">
                    {service.tag}
                  </span>
                  
                  <button
                    onClick={() => onServiceSelect(service.id)}
                    className="text-xs font-bold text-brand-rose group-hover:translate-x-1 transition-transform flex items-center space-x-1 hover:opacity-80"
                  >
                    <span>Instant Book</span>
                    <ArrowRight className="w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
