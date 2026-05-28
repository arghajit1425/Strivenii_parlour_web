import React, { useState } from 'react';
import { Share2, Camera, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000); // clear subscription success info
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: 'Strivenii | Modern Opulence',
        text: "Experience Mumbai's premier luxury beauty, hair and spa sanctuary.",
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Strivenii luxury portal link copied to clipboard!');
    }
  };

  return (
    <footer className="bg-[#f0eded] border-t border-brand-rose/10 transition-colors font-sans relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
        
        {/* Core Brand Description */}
        <div className="md:col-span-1">
          <span className="font-serif text-3xl text-brand-rose italic tracking-tighter mb-4 block font-bold">
            Strivenii
          </span>
          <p className="text-[#524345]/80 text-sm leading-relaxed mb-6 font-light">
            Redefining hair artistry and cosmetics through the lens of modern luxury and absolute personalized devotion.
          </p>
          
          <div className="flex space-x-3">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full border border-brand-rose/20 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-white transition-all active:scale-95"
              title="Share Salon Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <a
              href="https://instagram.com/strivenii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-brand-rose/20 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-white transition-all active:scale-95"
              title="Instagram Profile"
            >
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-serif font-bold text-brand-charcoal mb-6 text-lg">
            Quick Links
          </h4>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-wider">
            <li>
              <a href="#services" className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200">
                Services Menu
              </a>
            </li>
            <li>
              <a href="#bridal" className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200">
                Bridal Packages
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200">
                Transformation Gallery
              </a>
            </li>
            <li>
              <button
                onClick={() => alert("Gift Cards are available at our Goregaon boutique counter in denominations of ₹5,000, ₹10,000, and ₹25,000.")}
                className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200 text-left"
              >
                Gift Cards
              </button>
            </li>
          </ul>
        </div>

        {/* Information Registry Column */}
        <div>
          <h4 className="font-serif font-bold text-brand-charcoal mb-6 text-lg">
            Information
          </h4>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-wider">
            <li>
              <button
                onClick={() => alert("Privacy Assurance: We never lease or sell client registers to third parties. All personal consultation parameters remain fully confidential.")}
                className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200 text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => alert("Term Scope: Booking cancellations must happen at least 4 hours before the reserved time slot to facilitate empty slot re-allocations.")}
                className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200 text-left"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={() => alert("Sustainability: 100% of discarded hair gets safely recycled down to agricultural composters, and we completely limit persistent micro-plastics in all shower steps.")}
                className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200 text-left"
              >
                Sustainability
              </button>
            </li>
            <li>
              <button
                onClick={() => alert("Work With Us: We are seeking senior hair colouring artisans with minimum 5 years experience. Drop your details to career@strivenii.com.")}
                className="text-[#524345]/85 hover:text-brand-rose transition-colors duration-200 text-left"
              >
                Careers
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-serif font-bold text-brand-charcoal mb-6 text-lg">
            Newsletter
          </h4>
          <p className="text-sm text-[#524345]/80 mb-6 font-light leading-relaxed">
            Join our elite circle for exclusive organic beauty tips and early access to promotions.
          </p>

          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-[#fbf9f8] border border-brand-rose/20 rounded-full py-3 px-5 pr-12 text-sm text-brand-charcoal focus:ring-1 focus:ring-brand-rose focus:border-brand-rose transition-all outline-none shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1.5 w-9.5 h-9.5 rounded-full bg-brand-rose text-white flex items-center justify-center hover:bg-[#9c535f] transition-colors active:scale-95"
              title="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Subscribe alert info toast inline */}
          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-center space-x-2 text-xs text-emerald-700 bg-emerald-50 py-2 px-3.5 rounded-lg border border-emerald-200 font-medium"
              >
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Subscription recorded! Welcome.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Copyright footer panel */}
      <div className="border-t border-brand-rose/10 py-8 px-6 md:px-8 max-w-7xl mx-auto text-center select-none">
        <p className="text-xs text-[#524345]/60 font-medium uppercase tracking-[0.1em]">
          &copy; {new Date().getFullYear()} Strivenii Hair and Beauty, Mumbai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
