import React from "react";
import { TrendingUp, Users, Eye, MousePointerClick, PlayCircle } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Proven Results
          </h2>
          <p className="text-lg text-text-body max-w-3xl mx-auto">
            Real numbers, real growth. See how we transformed Aussizz Group's social presence with data-driven content strategies.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="md:flex">
            
            {/* LEFT SIDE: The Narrative & Key Stats */}
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-bold mb-6 w-fit">
                <TrendingUp size={16} />
                CASE STUDY: AUSSIZZ GROUP
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-6">
                Exploding Brand Visibility with <span className="text-primary">Viral Reels</span>
              </h3>
              
              <p className="text-text-body text-lg mb-8 leading-relaxed">
                We shifted Aussizz Group's strategy from static posts to high-engagement Reels. By optimizing for non-followers and trending audio, we achieved a massive surge in organic visibility, reaching over 66k unique accounts in just 90 days.
              </p>
              
              {/* The 3 Big Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">865K+</div>
                  <div className="text-sm text-text-body font-medium flex items-center gap-1">
                    <Eye size={14} /> Total Views
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">66.2K+</div>
                  <div className="text-sm text-text-body font-medium flex items-center gap-1">
                    <Users size={14} /> Accounts Reached
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">6K+</div>
                  <div className="text-sm text-text-body font-medium flex items-center gap-1">
                    <MousePointerClick size={14} /> Profile Visits
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: The Visual "Analytics Dashboard" */}
            <div className="md:w-1/2 bg-secondary p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
              
              {/* Background Decorative Blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>

              {/* Main Analytics Card (Mocking Instagram Insights) */}
              {/* NOTE: This has z-10 */}
              <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm relative z-10 p-6">
                
                {/* Card Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Performance</h4>
                    <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">
                      Last 90 Days ▲
                    </span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-full">
                    <TrendingUp className="text-primary w-5 h-5" />
                  </div>
                </div>

                {/* Big Metric Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-40">
                    {/* CSS Donut Chart Effect */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="#f3f4f6" strokeWidth="12" fill="none" />
                      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="none" strokeDasharray="440" strokeDashoffset="100" className="text-primary" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">865K</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Views</span>
                    </div>
                  </div>
                </div>

                {/* Top Content Row */}
                <div className="space-y-4">
                  <h5 className="text-sm font-bold text-gray-700">Top Performing Content</h5>
                  
                  {/* Content Item 1 (The 61K Video) */}
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-default">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                      <PlayCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">Visa Strategy Reel</div>
                      <div className="text-xs text-gray-500">25 Jun • Reels</div>
                    </div>
                    <div className="text-sm font-bold text-primary">264K</div>
                  </div>

                   {/* Content Item 2 */}
                   <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-default">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 shrink-0">
                      <PlayCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">Partner Visa Tips</div>
                      <div className="text-xs text-gray-500">18 Apr • Reels</div>
                    </div>
                    <div className="text-sm font-bold text-primary">83K</div>
                  </div>

                </div>
              </div>

              {/* FIX: Added 'z-20' to make sure it sits on top of the main card (which is z-10) */}
              <div className="absolute top-1/2 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-float hidden lg:block z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Accounts Reached</div>
                    <div className="text-lg font-bold text-gray-900">66,214</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); } /* Only moves up 10px (Low Intensity) */
        }
        .animate-float {
          animation: float 2s ease-in-out infinite; /* 3s duration (Slow Speed) */
        }
      `}</style>
    </section>
  );
};