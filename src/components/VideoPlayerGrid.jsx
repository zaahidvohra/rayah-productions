import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

export default function VideoPlayerGrid({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video">
              <ReactPlayer
                url={video.url}
                width="100%"
                height="100%"
                muted
                playing={false}
                light={video.thumbnail}
                playIcon={
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                }
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {video.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <ReactPlayer
                url={selectedVideo.url}
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
            <div className="p-4">
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}