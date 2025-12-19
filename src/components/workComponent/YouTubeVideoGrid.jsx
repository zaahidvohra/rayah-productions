import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function YouTubeVideoGrid({ videos = [] }) {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [page, setPage] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const perPage = 2;
    const pageCount = Math.ceil(videos.length / perPage);
    const currentVideos = videos.slice(page * perPage, (page + 1) * perPage);

    if (videos.length === 0) return null;

    return (
        <>
            <div className="relative rounded-3xl border border-gray-100 bg-gradient-to-r from-white via-secondary/40 to-white p-6">
                {/* Navigation */}
                {pageCount > 1 && (
                    <div className="mb-6 flex items-center justify-end gap-3">
                        <button
                            onClick={() => setPage(p => Math.max(0, p - 1))}
                            disabled={page === 0}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="text-sm text-gray-600 font-medium">
                            {page + 1} / {pageCount}
                        </span>
                        <button
                            onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
                            disabled={page === pageCount - 1}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {currentVideos.map((video, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all"
                            onClick={() => setSelectedVideo(video)}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Video */}
                            <div className="relative aspect-video bg-black">
                                <ReactPlayer
                                    url={video.url}
                                    width="100%"
                                    height="100%"
                                    muted
                                    playing={hoveredIndex === idx}
                                    controls={false}
                                    light={hoveredIndex !== idx ? video.thumbnail : false}
                                />
                                {hoveredIndex !== idx && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <span className="text-white text-2xl">▶</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Details */}
                            <div className="p-4 space-y-2">
                                <p className="text-xs uppercase tracking-wide text-primary font-bold">
                                    {video.category}
                                </p>
                                <h3 className="font-bold text-gray-900 text-base line-clamp-2">
                                    {video.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {video.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
                    <div className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">{selectedVideo.title}</h3>
                            <button onClick={() => setSelectedVideo(null)} className="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                        </div>
                        <div className="aspect-video">
                            <ReactPlayer url={selectedVideo.url} width="100%" height="100%" controls playing />
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