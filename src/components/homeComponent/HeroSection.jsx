import { Link } from "react-router-dom";

export default function HeroSection() {
  // const clientLogos = ["TechStart", "GrowthCorp", "Creative Solutions", "InnovateCo", "DigitalFirst"];

  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-accent-light py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Turning Clicks into Connections.
              <span className="block text-primary">
                We don’t just market brands. We narrate stories that stick.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-body mb-8 max-w-3xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              At Rayah Productions, we blend strategy with soul to help your
              brand breathe, speak, and shine in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/services"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
              </Link>

              <Link
                to="/portfolio"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-all duration-200"
              >
                View Our Portfolio
              </Link>
            </div>

            {/* <div className="text-sm text-text-body mb-4">Trusted by leading brands:</div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
              {clientLogos.map((logo, index) => (
                <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-md">
                  <span className="font-medium text-text-primary">{logo}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Logo/Brand Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Logo Circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      RAYAH
                    </div>
                    <div className="text-lg text-text-body font-medium">
                      PRODUCTIONS
                    </div>
                    <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary rounded-full opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent opacity-10 rounded-full blur-xl"></div>
    </section>
  );
};