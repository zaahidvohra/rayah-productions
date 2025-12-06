// src/data/contactData.js
import { Camera, Video, Calendar, Trophy, Eye, Heart, CameraIcon, Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

export const contactData = {
    hero: {
        title: "Let's Create Visual",
        subtitle: "Magic Together",
        description: "Every frame tells a story. Every moment deserves to be captured with artistry and passion."
    },

    about: {
        title: "Why Choose Us?",
        content: "With over 8 years of experience in visual storytelling, I specialize in capturing the authentic emotions and genuine moments that make your story unique. My approach combines technical expertise with artistic vision to deliver images and videos that not only document your moments but elevate them into timeless art.",
        highlights: [
            "Whether you're planning an intimate wedding, launching a new brand, or celebrating a milestone, I'm here to ensure every detail is captured with the attention and creativity it deserves."
        ]
    },

    services: [
        {
            icon: Camera,
            title: 'Portrait Photography',
            desc: 'Capturing the essence of personality through professional portrait sessions'
        },
        {
            icon: Video,
            title: 'Cinematic Videography',
            desc: 'Creating film-quality narratives that tell your story with artistic vision'
        },
        {
            icon: Calendar,
            title: 'Event Coverage',
            desc: 'Documenting your special moments with discretion and creative flair'
        },
        {
            icon: Trophy,
            title: 'Commercial Production',
            desc: 'Elevating brands through compelling visual content and marketing materials'
        }
    ],

    stats: [
        { number: '500+', label: 'Projects Completed', icon: Eye },
        { number: '50+', label: 'Happy Clients', icon: Heart },
        { number: '8+', label: 'Years Experience', icon: CameraIcon }
    ],

    contactInfo: {
        email: 'amit@gmail.com',
        phone: '+1 (555) 123-4567',
        location: 'Vadodara, Gujarat',
        contactMethods: [
            {
                icon: Mail,
                label: 'Email',
                value: 'amit@gmail.com'
            },
            {
                icon: Phone,
                label: 'Phone',
                value: '+1 (555) 123-4567'
            },
            {
                icon: MapPin,
                label: 'Location',
                value: 'Vadodara, Gujarat'
            }
        ],
        socialLinks: [
            {
                url: 'https://www.instagram.com/moin_2896/',
                icon: Instagram
            },
            {
                url: 'https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA',
                icon: Youtube
            },
            {
                url: 'https://www.linkedin.com/in/moin-vahora-2ba727120',
                icon: Linkedin
            }
        ]
    },

    form: {
        title: "Start Your Project",
        subtitle: "Let's discuss your vision",
        icon: Send,
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