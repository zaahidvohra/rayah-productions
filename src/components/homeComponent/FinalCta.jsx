import { Phone } from "lucide-react";

export default function FinalCta(){
  return (
    <section className="py-20 mt-14 bg-gradient-to-r from-primary to-accent-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Ready to Transform Your Online Presence?
        </h2>
        <p className="text-xl text-white mb-8 opacity-90">
          Let's connect and discuss how we can help your business thrive in the digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg">
            Get Your Free Consultation
          </button>
          <div className="flex items-center text-white">
            <Phone size={20} className="mr-2" />
            <span>or Call us at (555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
};
