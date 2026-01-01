import { Link } from "react-router-dom";

export default function HeroSection() {
  // Cloudinary Logo URL
  const logoUrl = "https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259340/rayahLogo_oj1fvi.png";

  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-accent-light py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Turning Clicks into Connections.
              <span className="block text-primary">
                We don’t just market brands. We narrate stories that stick.
              </span>
            </h1>

            <p className="text-base md:text-lg text-text-body mb-8 max-w-3xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              At Rayah Media, we blend strategy with soul to help your
              brand breathe, speak, and shine in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/services"
                className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
              </Link>

              <Link
                to="/portfolio"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-all duration-200"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>

          {/* Logo/Brand Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Logo Circle */}
              {/* FIX 1: Changed gradient to solid 'bg-primary' */}
              <div className="w-80 h-80 bg-primary rounded-full flex items-center justify-center shadow-2xl p-1">
                {/* FIX 2: Removed 'p-8' padding and 'bg-white' so the image background fits perfectly */}
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={logoUrl} 
                    alt="Rayah Productions Logo" 
                    // Used object-cover to ensure the photo background fills the circle without gaps
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-light rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary rounded-full opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-light opacity-10 rounded-full blur-xl"></div>
    </section>
  );
};