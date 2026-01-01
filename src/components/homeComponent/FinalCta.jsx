import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCta() {
  return (
    <section className="py-16 mt-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
          Why Rayah?
        </h2>
        <p className="text-xl text-text-primary mb-8 opacity-90">
          Because we’ve lived the scroll culture. With 8 years of proven 
          experience in SEO and social media for migration, tourism, and 
          lifestyle brands - we know what clicks, what converts, and what 
          connects. Let’s not just make noise. Let’s make impact
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg">
            Get Your Free Consultation
          </Link>
          <div className="flex items-center text-text-primary">
            <Phone size={20} className="mr-2" />
            <span>or Call us at +91 9316421785</span>
          </div>
        </div>
      </div>
    </section>
  );
}
