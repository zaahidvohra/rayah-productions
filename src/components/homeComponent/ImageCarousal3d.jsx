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
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  return (
    <div className="h-96 w-[100%] ml-4 flex items-center justify-center overflow-show bg-accent-light">
      <div className="relative lg:w-[220px] lg:h-[220px] md:w-[180px] md:h-[180px] sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] [transform-style:preserve-3d] animate-[rotate_30s_linear_infinite]">
        {images.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }} className="span-style">
            <img src={src} alt={`img - ${index + 1}`} className="img-style" />
          </span>
        ))}
      </div>
    </div>
  );
}
