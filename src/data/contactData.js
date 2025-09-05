// src/data/contactData.js
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Youtube } from 'lucide-react';
export const contactData = {
    hero: {
        title: "Let's Create Visual",
        subtitle: "Magic Together",
        description: "Every frame tells a story. Every moment deserves to be captured with artistry and passion."
    },

    about: {
        title: "Why Choose Me?",
        content: "With over 8 years of experience in visual storytelling, I specialize in capturing the authentic emotions and genuine moments that make your story unique. My approach combines technical expertise with artistic vision to deliver images and videos that not only document your moments but elevate them into timeless art.",
        highlights: [
            "Whether you're planning an intimate wedding, launching a new brand, or celebrating a milestone, I'm here to ensure every detail is captured with the attention and creativity it deserves."
        ]
    },

    services: [
        {
            icon : '',
            title: 'Portrait Photography',
            desc: 'Capturing the essence of personality through professional portrait sessions',
            color: 'from-primary to-amber-600'
        },
        {
            icon: '',
            title: 'Cinematic Videography',
            desc: 'Creating film-quality narratives that tell your story with artistic vision',
            color: 'from-accent-dark to-primary'
        },
        {
            icon: '',
            title: 'Event Coverage',
            desc: 'Documenting your special moments with discretion and creative flair',
            color: 'from-primary to-rose-600'
        },
        {
            icon: '',
            title: 'Commercial Production',
            desc: 'Elevating brands through compelling visual content and marketing materials',
            color: 'from-accent-dark to-orange-600'
        }
    ],

    stats: [
        { number: '500+', label: 'Projects Completed', icon: '👁️' },
        { number: '50+', label: 'Happy Clients', icon: '❤️' },
        { number: '8+', label: 'Years Experience', icon: '📸' }
    ],

    contactInfo: {
        email: 'amit@gmail.com',
        phone: '+1 (555) 123-4567',
        location: 'Vadodara, Gujarat',
        socialLinks: [
            {
                url: 'https://www.instagram.com/moin_2896/',
                icon: Instagram,
                color: 'bg-gradient-to-r from-pink-500 to-purple-500'
            },
            {
                url: 'https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA',
                icon: Youtube,
                color: 'bg-gradient-to-r from-red-500 to-red-600'
            },
            {
                url: 'https://www.linkedin.com/in/your-linkedin-profile',
                icon: Linkedin,
                color: 'bg-gradient-to-r from-blue-500 to-blue-600'
            }
        ]
    },

    form: {
        title: "Start Your Project",
        subtitle: "Let's discuss your vision",
        services: [
            'Portrait Photography',
            'Cinematic Videography',
            'Event Coverage',
            'Commercial Production'
        ],
        emailConfig: {
            serviceId: '1andonlyamit',
            templateId: 'template_d028eih',
            userId: 'iQ5YaXcmSbLQeghWZ'
        }
    }
};