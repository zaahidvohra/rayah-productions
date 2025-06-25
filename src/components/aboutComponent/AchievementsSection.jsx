import React from 'react';

const AchievementsSection = ({ achievements, title = "Awards & Recognition" }) => {
  return (
    <div className="mb-20">
      <h3 className="font-heading text-4xl font-bold text-text-primary text-center mb-12">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gradient-to-r from-accent-light to-white rounded-2xl p-6 border border-accent-light/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-dark rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <div className="font-heading font-bold text-primary text-lg mb-1">{achievement.year}</div>
                <h4 className="font-heading font-semibold text-text-primary mb-2">{achievement.title}</h4>
                <p className="font-body text-sm text-text-body">{achievement.organization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;