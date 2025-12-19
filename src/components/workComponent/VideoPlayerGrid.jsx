import React from 'react';
import YouTubeVideoGrid from './YouTubeVideoGrid';
import ReelVideoGrid from './ReelVideoGrid';

export default function VideoPlayerGrid({ videos = [] }) {
  const reelVideos = videos.filter(v => v.type === 'reel');
  const youtubeVideos = videos.filter(v => v.type === 'youtube');

  return (
    <div className="space-y-12">
      {youtubeVideos.length > 0 && <YouTubeVideoGrid videos={youtubeVideos} />}
      {reelVideos.length > 0 && <ReelVideoGrid videos={reelVideos} />}
    </div>
  );
}