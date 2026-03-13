import React, { useState, useEffect } from 'react';
import { 
  Phone, ShieldCheck, Clock, CheckCircle2, MapPin, Mail, Star, 
  ArrowRight, Menu, X, ChevronDown, AlertTriangle, Home, Building2, 
  Search, Zap, Trash2, Lock, MessageSquare, Award, ThumbsUp, 
  MousePointer2, Hammer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---
const SERVICES = [
  { title: "Raccoon Removal", desc: "Safe extraction from attics and chimneys with full exclusion.", icon: <Search /> },
  { title: "Squirrel Removal", desc: "Fast removal from roofs and walls with entry point sealing.", icon: <Zap /> },
  { title: "Skunk Removal", desc: "Professional trapping without the odor risk to your property.", icon: <AlertTriangle /> },
  { title: "Bat Removal", desc: "Specialized exclusion services to safely remove colonies.", icon: <Home /> },
  { title: "Rodent Control", desc: "Comprehensive mice and rat control including structural proofing.", icon: <Lock /> },
  { title: "Bird Nest Removal", desc: "Safe removal from vents, eaves, and commercial signage.", icon: <Building2 /> },
  { title: "Attic Animal Removal", desc: "Complete restoration, decontamination, and insulation repair.", icon: <Trash2 /> },
  { title: "Wildlife Proofing", desc: "Long-term prevention using heavy-duty sealing materials.", icon: <ShieldCheck /> },
  { title: "24/7 Emergency Service", desc: "Immediate response for dangerous or urgent situations.", icon: <Clock /> }
];

const REVIEWS = [
  { name: "Sarah M.", text: "They came within hours when we had raccoons in our attic. Professional and fast. Highly recommend.", rating: 5 },
  { name: "David R.", text: "No more scratching sounds at night. They sealed everything perfectly.", rating: 5 },
  { name: "Melissa T.", text: "Honest pricing and very knowledgeable team.", rating: 5 }
];

const FAQS = [
  { q: "How quickly can you arrive?", a: "We offer same-day service and 24/7 emergency response for urgent situations." },
  { q: "Are your methods humane?", a: "Yes, we prioritize live-trapping and exclusion methods to handle animals safely." },
  { q: "Do you repair damage?", a: "Yes, we provide full attic restoration and structural repairs to seal entry points." },
  { q: "Do you offer warranties?", a: "We stand by our work with warranties on our animal-proofing and repairs." },
  { q: "Is your team licensed?", a: "Yes, we are fully licensed and insured wildlife control professionals." }
];

const CITIES = ["Springfield", "Riverside", "Oakwood", "Maplewood", "Pine Valley", "Cedar Creek", "Brookside", "Westfield", "Easton", "Northwood"];

// --- Components ---

const EmergencyBar = () => (
  <div className="bg-brand-red text-white py-2 px-4 text-center text-sm font-bold sticky top-0 z-[60] shadow-md">
    <a href="tel:5551234567" className="flex items-center justify-center gap-2 hover:underline">
      <Clock className="w-4 h-4" /> 24/7 Emergency Animal Removal – Call Now: (555) 123-4567
    </a>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-9 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-brand-orange w-8 h-8" />
          <span className="font-black text-xl tracking-tighter text-brand-navy">
            ANIMAL PEST CONTROL <span className="text-brand-orange">REMOVAL</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Reviews', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors">{item}</a>
          ))}
          <a href="tel:5551234567" className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <Phone className="w-4 h-4" /> CALL NOW
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 md:hidden shadow-xl">
            {['Services', 'About', 'Reviews', 'FAQ'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-bold">{item}</a>
            ))}
            <a href="tel:5551234567" className="btn-primary w-full">CALL NOW</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="section-spacing grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-tight mb-6">
          Fast, Safe & <br />
          <span className="text-brand-orange">Humane</span> Animal <br />
          Pest Control
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-lg">
          We Remove Raccoons, Squirrels, Skunks, Bats & More — Guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="tel:5551234567" className="btn-primary">CALL NOW</a>
          <button className="btn-secondary">BOOK FREE INSPECTION</button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-slate-700">Rated 5.0 Stars by Local Homeowners</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Licensed" },
              { icon: <Lock className="w-4 h-4" />, text: "Insured" },
              { icon: <ThumbsUp className="w-4 h-4" />, text: "Humane Certified" },
              { icon: <Award className="w-4 h-4" />, text: "Satisfaction Guarantee" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="text-brand-orange">{item.icon}</span> {item.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
          <img src="https://picsum.photos/seed/pest/800/1000" alt="Technician" className="w-full h-auto" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden xl:block">
          <p className="text-4xl font-black text-brand-orange">24/7</p>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Emergency Response</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="bg-brand-navy text-white py-24">
    <div className="section-spacing text-center">
      <h2 className="text-4xl md:text-5xl mb-12">Hearing Noises in Your Attic?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        {[
          { icon: <Zap />, text: "Scratching in walls" },
          { icon: <AlertTriangle />, text: "Bad smells" },
          { icon: <Hammer />, text: "Property damage" },
          { icon: <Search />, text: "Roof entry holes" },
          { icon: <Trash2 />, text: "Droppings" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-brand-orange">{item.icon}</div>
            <span className="font-bold">{item.text}</span>
          </div>
        ))}
      </div>
      <p className="text-xl opacity-80 mb-10">We respond fast and solve the problem permanently.</p>
      <button className="btn-primary mx-auto">GET HELP NOW</button>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-white py-24">
    <div className="section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-brand-navy mb-4">Professional Services</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Humane removal and long-term prevention for all common nuisance wildlife.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s, i) => (
          <div key={i} className="p-8 rounded-3xl bg-brand-earth border border-slate-100 card-hover group">
            <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
              {s.icon}
            </div>
            <h3 className="text-xl mb-3">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
            <a href="#contact" className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
              LEARN MORE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="bg-brand-earth py-24">
    <div className="section-spacing">
      <h2 className="text-4xl text-center mb-20">How It Works</h2>
      <div className="grid md:grid-cols-5 gap-8">
        {[
          { t: "Free Inspection", d: "We identify entry points and species." },
          { t: "Humane Removal", d: "Safe trapping or exclusion methods." },
          { t: "Seal Entry Points", d: "Permanent repairs with steel mesh." },
          { t: "Sanitize & Repair", d: "Clean-up and damage restoration." },
          { t: "Follow-Up", d: "Guaranteed results and support." }
        ].map((step, i) => (
          <div key={i} className="relative text-center group">
            <div className="w-16 h-16 bg-white border-2 border-brand-orange text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 font-black text-xl shadow-lg relative z-10">
              {i + 1}
            </div>
            <h4 className="font-bold mb-2">{step.t}</h4>
            <p className="text-xs text-slate-500">{step.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section id="about" className="bg-white py-24">
    <div className="section-spacing grid lg:grid-cols-2 gap-16 items-center">
      <div className="rounded-[2rem] overflow-hidden shadow-2xl">
        <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="w-full h-auto" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h2 className="text-4xl mb-8">Why Choose Us?</h2>
        <div className="space-y-6">
          {[
            "Licensed & Fully Insured", "Same-Day Service Available", "Humane & Safe Methods", 
            "Upfront Transparent Pricing", "Warranty on Repairs", "24/7 Emergency Availability"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle2 className="text-brand-orange w-6 h-6 flex-shrink-0" />
              <span className="font-bold text-lg text-slate-700">{item}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary mt-12">GET A FREE QUOTE</button>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="bg-brand-navy text-white py-24">
    <div className="section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4">What Our Customers Are Saying</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="font-bold">5.0 / 5 based on 150+ Google Reviews</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map((r, i) => (
          <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
            <div className="flex text-yellow-500 mb-4">
              {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="italic mb-6 opacity-80 leading-relaxed">"{r.text}"</p>
            <p className="font-bold">— {r.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="bg-white p-4 rounded-xl">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
        </div>
        <button className="btn-secondary !text-white !border-white hover:!bg-white/10">LEAVE US A REVIEW</button>
      </div>
    </div>
  </section>
);

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  return (
    <section className="bg-white py-24">
      <div className="section-spacing">
        <h2 className="text-4xl text-center mb-16">Proven Results</h2>
        <div className="max-w-4xl mx-auto relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
          <img src="https://picsum.photos/seed/after/1200/800" alt="After" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src="https://picsum.photos/seed/before/1200/800?blur=4" alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100vw' }} referrerPolicy="no-referrer" />
          </div>
          <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" />
          <div className="absolute top-0 bottom-0 w-1 bg-white z-10 shadow-xl" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <MousePointer2 className="w-5 h-5 text-brand-orange" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-brand-red text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10">Before</div>
          <div className="absolute bottom-6 right-6 bg-brand-orange text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10">After</div>
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => (
  <section className="bg-brand-earth py-24">
    <div className="section-spacing text-center">
      <h2 className="text-4xl mb-12">Proudly Serving Springfield & Surrounding Areas</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {CITIES.map((city, i) => (
          <a key={i} href="#contact" className="p-4 bg-white rounded-xl font-bold text-sm hover:text-brand-orange hover:shadow-md transition-all">
            {city} Wildlife Removal
          </a>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-24">
      <div className="section-spacing max-w-3xl mx-auto">
        <h2 className="text-4xl text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors">
                <span className="font-bold text-lg">{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="bg-brand-navy text-white py-24">
    <div className="section-spacing text-center">
      <h2 className="text-4xl md:text-6xl mb-6">Don’t Let Wildlife Damage Your Home.</h2>
      <p className="text-xl opacity-90 mb-12">Call Now for Fast & Humane Animal Removal.</p>
      <a href="tel:5551234567" className="inline-flex items-center gap-4 bg-white text-brand-orange px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl">
        <Phone className="w-8 h-8" /> (555) 123-4567
      </a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-white py-24">
    <div className="section-spacing grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl mb-8">Get In Touch</h2>
        <div className="space-y-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Call 24/7</p>
              <p className="text-3xl font-black text-brand-navy">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Us</p>
              <p className="text-xl font-bold text-brand-navy">help@animalpestremoval.com</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-brand-earth rounded-3xl">
          <h4 className="font-bold mb-4">Service Hours</h4>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between"><span>Mon - Fri:</span> <span>7:00 AM - 9:00 PM</span></div>
            <div className="flex justify-between"><span>Sat - Sun:</span> <span>8:00 AM - 6:00 PM</span></div>
            <div className="flex justify-between font-bold text-brand-red"><span>Emergency:</span> <span>24/7 Available</span></div>
          </div>
        </div>
      </div>
      <div className="bg-brand-earth p-10 rounded-3xl">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-brand-orange transition-all" />
            <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-brand-orange transition-all" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-brand-orange transition-all" />
          <textarea rows={4} placeholder="How can we help?" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-brand-orange transition-all"></textarea>
          <button className="btn-primary w-full py-5">SEND REQUEST</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-navy text-white pt-24 pb-12">
    <div className="section-spacing grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="text-brand-orange w-8 h-8" />
          <span className="font-black text-xl tracking-tighter">ANIMAL PEST CONTROL <span className="text-brand-orange">REMOVAL</span></span>
        </div>
        <p className="text-slate-400 max-w-sm mb-8">Professional and humane wildlife removal services. We solve your animal problems permanently.</p>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer"><MessageSquare className="w-5 h-5" /></div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6">Services</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>Raccoon Removal</li>
          <li>Squirrel Removal</li>
          <li>Bat Removal</li>
          <li>Attic Restoration</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">Legal</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>License #: APC-123456</li>
        </ul>
      </div>
    </div>
    <div className="section-spacing py-0 mt-12 pt-12 border-t border-white/5 text-center text-slate-500 text-xs">
      <p>&copy; {new Date().getFullYear()} Animal Pest Control Removal. All Rights Reserved.</p>
    </div>
  </footer>
);

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => { if (e.clientY <= 0) setShow(true); };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-navy/80 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-10 rounded-[2rem] max-w-lg w-full relative shadow-2xl text-center">
        <button onClick={() => setShow(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"><X /></button>
        <div className="w-20 h-20 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6"><AlertTriangle className="w-10 h-10" /></div>
        <h3 className="text-3xl font-black text-brand-navy mb-4">Need Emergency Help?</h3>
        <p className="text-slate-600 mb-8">Our technicians are on standby 24/7. Don't wait for the damage to get worse.</p>
        <a href="tel:5551234567" className="btn-primary w-full py-5 text-xl"><Phone /> CALL NOW: (555) 123-4567</a>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-brand-orange/20 scroll-smooth">
      <EmergencyBar />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Reviews />
        <BeforeAfter />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
