import React from 'react';

export default function ImageCarousal3d() {
  const img1 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767258604/IMG_5248_jfpyfb.jpg';
  const img2 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767281119/e5ca29e9-c5ee-42b8-adee-6a65400b85d6_qjdlfc.jpg';
  const img3 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767258544/img1_ykheju.jpg';
  const img4 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767258543/img4_wbsw9x.jpg';
  const img5 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767258603/AurumFire_bptvtw.jpg';
  const img6 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767258539/img9_mhnr91.jpg';
  const img7 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767258541/img7_hmyhpe.jpg';
  const img8 = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767281414/IMG_4740_mvkvmc.jpg';

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
  ];

  return (
    // REMOVED 'ml-4' to fix centering
    // ADDED 'perspective-[1000px]' for better 3D depth perception
<div className="h-96 md:h-[500px] lg:h-[450px] w-full flex items-center justify-center overflow-hidden bg-secondary perspective-[1000px]">      
      {/* INCREASED SIZES:
          Mobile: w-[140px] h-[140px] (was 80px) -> Much bigger
          Sm: w-[160px] h-[160px]
          Md: w-[200px] h-[200px] 
          Lg: w-[240px] h-[240px]
      */}
      <div className="relative lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] sm:w-[160px] sm:h-[160px] w-[140px] h-[140px] [transform-style:preserve-3d] animate-[rotate_30s_linear_infinite]">
        {images.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }} className="span-style">
            <img src={src} alt={`img - ${index + 1}`} className="img-style shadow-xl border-2 border-white/20" />
          </span>
        ))}
      </div>
    </div>
  );
}