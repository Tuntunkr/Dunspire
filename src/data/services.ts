import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'website-development',
    name: 'Website Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
    icon: '🌐',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'Mobile First',
      'Custom CMS',
      'Security Features'
    ],
    plans: [
      {
        id: 'web-starter',
        name: 'Starter',
        price: 15000,
        duration: 'one-time',
        features: [
          '5 Pages Website',
          'Responsive Design',
          'Basic SEO Setup',
          '30 Days Support',
          'Contact Form',
          'Social Media Integration'
        ]
      },
      {
        id: 'web-growth',
        name: 'Growth',
        price: 35000,
        duration: 'one-time',
        popular: true,
        features: [
          '10 Pages Website',
          'Advanced SEO',
          'Blog Integration',
          '90 Days Support',
          'Payment Gateway',
          'Analytics Setup',
          'Live Chat Integration'
        ]
      },
      {
        id: 'web-scale',
        name: 'Scale',
        price: 75000,
        duration: 'one-time',
        features: [
          'Unlimited Pages',
          'E-commerce Ready',
          'Advanced Features',
          '1 Year Support',
          'Custom Development',
          'Performance Optimization',
          'Multi-language Support'
        ]
      }
    ]
  },
  {
    id: 'app-development',
    name: 'App Development',
    description: 'Native and cross-platform mobile applications designed to engage users and drive business growth.',
    icon: '📱',
    features: [
      'iOS & Android',
      'Cross-Platform',
      'Native Performance',
      'Push Notifications',
      'Offline Support',
      'App Store Optimization'
    ],
    plans: [
      {
        id: 'app-starter',
        name: 'Starter',
        price: 50000,
        duration: 'one-time',
        features: [
          'Single Platform App',
          'Basic Features',
          'UI/UX Design',
          '60 Days Support',
          'App Store Submission',
          'Basic Analytics'
        ]
      },
      {
        id: 'app-growth',
        name: 'Growth',
        price: 125000,
        duration: 'one-time',
        popular: true,
        features: [
          'Cross-Platform App',
          'Advanced Features',
          'Push Notifications',
          '6 Months Support',
          'Backend Integration',
          'Advanced Analytics',
          'In-App Purchases'
        ]
      },
      {
        id: 'app-scale',
        name: 'Scale',
        price: 250000,
        duration: 'one-time',
        features: [
          'Enterprise App Solution',
          'Custom Features',
          'Real-time Sync',
          '1 Year Support',
          'Advanced Security',
          'Multi-tenant Architecture',
          'Custom Integrations'
        ]
      }
    ]
  },
  {
    id: 'seo-digital-marketing',
    name: 'SEO & Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic.',
    icon: '📈',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Content Marketing',
      'Social Media Marketing',
      'PPC Campaigns',
      'Performance Tracking'
    ],
    plans: [
      {
        id: 'seo-starter',
        name: 'Starter',
        price: 8000,
        duration: 'monthly',
        features: [
          'Basic SEO Audit',
          'Keyword Research',
          'On-Page Optimization',
          'Monthly Reports',
          'Google My Business',
          'Social Media Setup'
        ]
      },
      {
        id: 'seo-growth',
        name: 'Growth',
        price: 18000,
        duration: 'monthly',
        popular: true,
        features: [
          'Advanced SEO Strategy',
          'Content Marketing',
          'Link Building',
          'Social Media Management',
          'PPC Campaign Setup',
          'Bi-weekly Reports',
          'Competitor Analysis'
        ]
      },
      {
        id: 'seo-scale',
        name: 'Scale',
        price: 35000,
        duration: 'monthly',
        features: [
          'Enterprise SEO',
          'Multi-channel Marketing',
          'Advanced Analytics',
          'Custom Campaigns',
          'Dedicated Manager',
          'Weekly Reports',
          'ROI Optimization'
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX & Creative Design',
    description: 'Stunning user interfaces and seamless user experiences that convert visitors into loyal customers.',
    icon: '🎨',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Brand Identity',
      'Usability Testing'
    ],
    plans: [
      {
        id: 'design-starter',
        name: 'Starter',
        price: 12000,
        duration: 'one-time',
        features: [
          '5 Screen Designs',
          'Basic Wireframes',
          'Style Guide',
          '2 Revisions',
          'Mobile Design',
          'Logo Design'
        ]
      },
      {
        id: 'design-growth',
        name: 'Growth',
        price: 28000,
        duration: 'one-time',
        popular: true,
        features: [
          '15 Screen Designs',
          'Interactive Prototype',
          'Brand Guidelines',
          '5 Revisions',
          'User Testing',
          'Animation Designs',
          'Marketing Materials'
        ]
      },
      {
        id: 'design-scale',
        name: 'Scale',
        price: 55000,
        duration: 'one-time',
        features: [
          'Unlimited Screens',
          'Advanced Prototyping',
          'Complete Brand Identity',
          'Unlimited Revisions',
          'User Research',
          'Design System',
          'Print & Digital Assets'
        ]
      }
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation Projects',
    description: 'Intelligent automation solutions and AI-powered tools to streamline your business processes.',
    icon: '🤖',
    features: [
      'Custom AI Solutions',
      'Process Automation',
      'Chatbot Development',
      'Data Analysis',
      'Machine Learning',
      'Workflow Optimization'
    ],
    plans: [
      {
        id: 'ai-starter',
        name: 'Starter',
        price: 25000,
        duration: 'one-time',
        features: [
          'Simple Chatbot',
          'Basic Automation',
          'Email Integration',
          '60 Days Support',
          'Documentation',
          'Training Session'
        ]
      },
      {
        id: 'ai-growth',
        name: 'Growth',
        price: 65000,
        duration: 'one-time',
        popular: true,
        features: [
          'Advanced AI Features',
          'Custom Workflows',
          'API Integrations',
          '6 Months Support',
          'Training & Setup',
          'Analytics Dashboard',
          'Multi-platform Support'
        ]
      },
      {
        id: 'ai-scale',
        name: 'Scale',
        price: 150000,
        duration: 'one-time',
        features: [
          'Enterprise AI Solutions',
          'Machine Learning Models',
          'Custom Development',
          '1 Year Support',
          'Ongoing Optimization',
          'Dedicated Support',
          'Advanced Integrations'
        ]
      }
    ]
  },
  {
    id: 'cloud-tech-solutions',
    name: 'Cloud & Tech Solutions',
    description: 'Scalable cloud infrastructure and technology solutions to power your digital transformation.',
    icon: '☁️',
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'DevOps Solutions',
      'Security Implementation',
      'Monitoring & Analytics',
      '24/7 Support'
    ],
    plans: [
      {
        id: 'cloud-starter',
        name: 'Starter',
        price: 20000,
        duration: 'one-time',
        features: [
          'Basic Cloud Setup',
          'Domain & Hosting',
          'SSL Certificate',
          '3 Months Support',
          'Basic Monitoring',
          'Email Setup'
        ]
      },
      {
        id: 'cloud-growth',
        name: 'Growth',
        price: 45000,
        duration: 'one-time',
        popular: true,
        features: [
          'Advanced Cloud Architecture',
          'Auto-scaling Setup',
          'Database Management',
          '6 Months Support',
          'Performance Optimization',
          'Backup Solutions',
          'Security Hardening'
        ]
      },
      {
        id: 'cloud-scale',
        name: 'Scale',
        price: 100000,
        duration: 'one-time',
        features: [
          'Enterprise Cloud Solutions',
          'Multi-region Deployment',
          'Advanced Security',
          '1 Year Support',
          'Custom Integrations',
          'Disaster Recovery',
          'Dedicated Support Team'
        ]
      }
    ]
  }
];