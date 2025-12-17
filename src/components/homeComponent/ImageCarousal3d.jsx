import React from 'react';
import img1 from '../../assets/testImages/img1.jpeg';
import img2 from '../../assets/testImages/img2.jpeg';
import img3 from '../../assets/testImages/img3.jpeg';
import img4 from '../../assets/testImages/img4.jpeg';
import img5 from '../../assets/testImages/img5.jpeg';
import img6 from '../../assets/testImages/img6.jpeg';
import img7 from '../../assets/testImages/img7.jpeg';
import img8 from '../../assets/testImages/img8.jpeg';

export default function ImageCarousal3d() {
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