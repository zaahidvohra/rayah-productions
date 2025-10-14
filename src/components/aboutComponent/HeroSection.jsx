import About from '../../assets/About.jpeg';

const HeroSection = ({ imageSrc, imageAlt = 'Hero image' }) => {
  const fallbackSrc = imageSrc || About;

  return (
    <section className="relative h-[550px] md:h-[550px] bg-secondary overflow-hidden">
      {/* === BLURRED BACKDROP === */}
      <div className="absolute inset-0">
        <img
          src={fallbackSrc}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-2xl scale-110 opacity-50"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-secondary/50" /> {/* subtle overlay */}
      </div>

      {/* === FOREGROUND IMAGE (main clean one) === */}
      <div className="relative z-10 flex items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8">
        <img
          src={fallbackSrc}
          alt={imageAlt}
          className="w-auto h-full max-h-screen object-contain select-none"
          loading="eager"
          decoding="sync"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;
