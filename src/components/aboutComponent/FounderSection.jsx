import { Users, Linkedin } from 'lucide-react';
// Founder Section Component
const FounderSection = () => {
    return (
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
              Meet Our Visionary: Moin Vohra
            </h2>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent-dark rounded-full flex items-center justify-center">
                    <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                        <Users size={48} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                      Moin Vohra, Founder & CEO
                    </h3>
                  </div>
  
                  <div className="space-y-4">
                    <p className="text-text-body leading-relaxed">
                      Rayah Media was founded by Moin Vohra, a seasoned digital strategist 
                      with a passion for helping businesses unlock their online potential. With 
                      years of experience in the digital realm, Moin envisioned a company that 
                      cuts through the noise, delivering clear, effective, and results-oriented 
                      marketing solutions.
                    </p>
                    <p className="text-text-body leading-relaxed">
                      Moin's leadership is anchored in a philosophy of continuous learning and 
                      adapting to the dynamic digital landscape. He believes in fostering strong 
                      client relationships built on trust, transparency, and a shared commitment 
                      to success.
                    </p>
                  </div>
  
                  <div className="bg-accent-light rounded-lg p-6 border-l-4 border-accent-dark">
                    <p className="text-text-primary italic text-lg font-medium">
                      "Our success is directly tied to yours. We don't just build campaigns; we build futures."
                    </p>
                    <p className="text-text-body mt-2 font-semibold">- Moin Vohra</p>
                  </div>
  
                  <div className="flex items-center space-x-2">
                    <Linkedin size={20} className="text-primary" />
                    <a href="/" className="text-primary hover:text-opacity-80 transition-colors font-medium">
                      Connect with Moin on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default FounderSection;