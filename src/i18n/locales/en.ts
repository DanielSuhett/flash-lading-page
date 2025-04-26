const translation = {
  navigation: {
    home: 'Home',
    features: 'Features',
    howItWorks: 'How It Works',
    pricing: 'Pricing',
    faq: 'FAQ',
    github: 'GitHub',
  },
  hero: {
    title: 'Flash ✨',
    subtitle: 'AI-Powered Code Review for TypeScript',
    description: 'A powerful GitHub Action that performs flash code review on TypeScript Pull Requests using Google\'s Gemini AI. Get intelligent, context-aware code analysis and automated review capabilities.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    ctaTertiary: 'Example',
  },
  features: {
    title: 'Powerful Features',
    subtitle: 'What Makes Flash Special',
    intelligentCodeAnalysis: {
      title: 'Intelligent Code Analysis',
      description: 'Deep code understanding with Gemini AI',
    },
    smartIndexing: {
      title: 'Smart Indexing',
      description: 'Efficiently analyzes TypeScript codebases',
    },
    contextAwareReviews: {
      title: 'Context-Aware Reviews',
      description: 'Considers broader codebase context',
    },
    automatedWorkflow: {
      title: 'Automated Workflow',
      description: 'Seamless GitHub Actions integration',
    },
    configurableReviewProcess: {
      title: 'Configurable Review Process',
      description: 'Customize review parameters',
    },
    multiLanguageSupport: {
      title: 'Multi-language Support',
      description: 'Review comments in your language',
    },
  },
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Simple Integration, Powerful Results',
    step1: {
      title: 'Add to Your Workflow',
      description: 'Include Flash in your GitHub Actions workflow file',
    },
    step2: {
      title: 'Set Up API Key',
      description: 'Configure your Google Gemini API key as a secret',
    },
    step3: {
      title: 'Automatic Reviews',
      description: 'Flash analyzes pull requests and provides detailed feedback',
    },
    step4: {
      title: 'Improve Code Quality',
      description: 'Use AI-powered insights to enhance your codebase',
    },
  },
  installation: {
    title: 'Simple Installation',
    subtitle: 'Get Started in Minutes',
    instructions: 'Add the action to your repository\'s workflow:',
  },
  models: {
    title: 'Choose Your Model',
    subtitle: 'Flash works with all Gemini models',
    gemini25Pro: {
      name: 'Gemini 2.5 Pro',
      description: 'Most powerful thinking model with maximum response accuracy',
      features: [
        'Best for complex code analysis',
        'Deep reasoning capabilities',
        'Highest accuracy reviews',
        'Advanced context understanding',
        'Premium performance'
      ],
      note: 'Higher cost, best for critical reviews'
    },
    gemini25Flash: {
      name: 'Gemini 2.5 Flash',
      description: 'Optimal balance of performance and efficiency',
      features: [
        'Well-rounded capabilities',
        'Configurable thinking depth',
        'Fast response times',
        'Cost-effective',
        'Great for most projects'
      ],
      note: 'Recommended for most use cases'
    },
    gemini20Flash: {
      name: 'Gemini 2.0 Flash',
      description: 'Fast and efficient multimodal model',
      features: [
        'Quick code analysis',
        'Basic reasoning',
        'Low latency',
        'Most affordable',
        'Perfect for simple reviews'
      ],
      note: 'Free tier friendly'
    }
  },
  pricing: {
    title: 'Free & Open Source',
    subtitle: 'No premium tier, no limitations. Use it as much as you want.',
    free: {
      name: 'Free Forever',
      price: '$0',
      description: 'All features included',
      buttonText: 'Get Started',
    },
    features: [
      'Unlimited code reviews',
      'GitHub Actions integration',
      'TypeScript deep analysis',
      'Gemini AI-powered insights',
      'Auto-approve capability',
      'Multi-language review comments',
      'Customizable review depth',
      'Community support'
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Have Questions? We Have Answers',
    questions: [
      {
        question: 'How does Flash compare to other code review tools?',
        answer: 'Flash leverages Google\'s Gemini AI for deep code understanding, offering more context-aware reviews than traditional static analysis tools. It integrates seamlessly with GitHub and provides customizable review parameters.'
      },
      {
        question: 'Do I need a Google Gemini API key?',
        answer: 'Yes, Flash requires a Google Gemini API key to function. You can obtain one from the Google AI Platform and add it as a secret in your GitHub repository.'
      },
      {
        question: 'Can Flash review languages other than TypeScript?',
        answer: 'Currently, Flash is optimized for TypeScript code reviews, but we\'re working on expanding language support in future releases.'
      },
      {
        question: 'Is my code secure when using Flash?',
        answer: 'Flash processes code locally within the GitHub Actions runner and only sends necessary context to the Gemini API. Your codebase remains secure and we don\'t store any of your code.'
      },
      {
        question: 'Can I customize the review output?',
        answer: 'Yes, Flash offers various configuration options including output language, review depth, and auto-approval settings, allowing you to tailor the review process to your team\'s needs.'
      }
    ]
  },
  cta: {
    title: 'Ready to Enhance Your Code Reviews?',
    description: 'Join the community of developers using Flash to improve code quality.',
    buttonText: 'Get Started Now',
  },
  footer: {
    copyright: '© 2025 Flash. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
    },
  },
  languageSelector: {
    label: 'Language',
  },
  themeToggle: {
    light: 'Light',
    dark: 'Dark',
  },
};

export default translation;