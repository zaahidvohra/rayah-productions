import React, { useState, useEffect } from 'react';

const SkillsSection = ({ skills, title = "Skills & Expertise" }) => {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const skillTimer = setInterval(() => {
            setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }, 2000);

        return () => clearInterval(skillTimer);
    }, [skills.length]);

    return (
        <div className="mb-20">
            <h3 className="font-heading text-4xl font-bold text-text-primary text-center mb-12">
                {title}
            </h3>
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="font-heading font-semibold text-text-primary">{skill.name}</span>
                                <span className="font-body text-sm text-text-body">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-accent-light/50 rounded-full h-3 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-primary to-accent-dark rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${currentSkillIndex >= index ? skill.level : 0}%`,
                                        transitionDelay: `${index * 200}ms`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;