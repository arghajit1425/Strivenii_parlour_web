import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[#f0eded] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs font-bold text-brand-rose uppercase tracking-[0.3em] block mb-4">
            Kind Words
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal">
            Client Experiences
          </h2>
          <div className="rose-gold-divider mt-6 w-24 mx-auto" />
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-8">
          {TESTIMONIALS.map((review, index) => {
            // Asymmetrical visual layout. Middle card "Bride" is shifted up slightly on md screens
            const offsetStyle = index === 1 ? 'md:-translate-y-6 md:shadow-[0_15px_45px_rgba(138,72,83,0.12)] border border-brand-rose/25 bg-white' : 'bg-white/70 border border-white/50';

            return (
              <div
                key={review.id}
                className={`p-8 md:p-10 rounded-3xl shadow-sm relative transition-all duration-300 hover:shadow-[0_12px_30px_rgba(138,72,83,0.08)] ${offsetStyle}`}
              >
                {/* Decorative quote icon */}
                <Quote className="w-10 h-10 text-brand-rose/10 absolute top-6 right-6" />

                {/* Star rating row */}
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 fill-amber-400 stroke-none"
                    />
                  ))}
                </div>

                {/* Message body */}
                <p className="font-sans text-sm md:text-base text-[#524345] italic leading-relaxed mb-8">
                  "{review.quote}"
                </p>

                {/* Reviewer Meta info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-brand-pink/40 flex items-center justify-center font-bold font-serif text-brand-rose text-sm">
                    {review.author.charAt(0)}{review.author.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-brand-charcoal">
                      {review.author}
                    </h4>
                    <span className="text-[10px] font-sans font-bold text-brand-rose tracking-wider uppercase">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
