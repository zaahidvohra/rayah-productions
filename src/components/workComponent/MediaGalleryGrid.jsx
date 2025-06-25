import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { motion } from 'framer-motion';

export default function MediaGalleryGrid({ mediaItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = mediaItems.filter(item => item.type === 'image').map(item => item.src);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mediaItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative group cursor-pointer overflow-hidden rounded-lg ${
            index % 7 === 0 ? 'col-span-2 row-span-2' : ''
          }`}
          onClick={() => {
            if (item.type === 'image') {
              const imageIndex = images.indexOf(item.src);
              setPhotoIndex(imageIndex);
              setIsOpen(true);
            }
          }}
        >
          <img
            src={item.src}
            alt={item.caption}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <div className="text-2xl mb-2">
                {item.type === 'video' ? '▶️' : '🔍'}
              </div>
              <p className="text-sm">{item.caption}</p>
            </div>
          </div>

          {/* Type indicator */}
          {item.type === 'carousel' && (
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
              📷 Carousel
            </div>
          )}
          {item.type === 'reel' && (
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
              🎥 Reel
            </div>
          )}
        </motion.div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}