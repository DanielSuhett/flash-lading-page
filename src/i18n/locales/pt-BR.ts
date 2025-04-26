const translation = {
  navigation: {
    home: 'Início',
    features: 'Recursos',
    howItWorks: 'Como Funciona',
    pricing: 'Preços',
    faq: 'FAQ',
    github: 'GitHub',
  },
  hero: {
    title: 'Flash ✨',
    subtitle: 'Revisão de Código com IA para TypeScript',
    description: 'Uma poderosa GitHub Action que realiza revisão de código em Pull Requests TypeScript usando o Gemini AI do Google. Obtenha análise de código inteligente e recursos automatizados de revisão.',
    ctaPrimary: 'Começar Agora',
    ctaSecondary: 'Saiba Mais',
  },
  features: {
    title: 'Recursos Poderosos',
    subtitle: 'O que Torna o Flash Especial',
    intelligentCodeAnalysis: {
      title: 'Análise Inteligente de Código',
      description: 'Compreensão profunda do código com Gemini AI',
    },
    smartIndexing: {
      title: 'Indexação Inteligente',
      description: 'Analisa eficientemente bases de código TypeScript',
    },
    contextAwareReviews: {
      title: 'Revisões Contextuais',
      description: 'Considera o contexto mais amplo da base de código',
    },
    automatedWorkflow: {
      title: 'Fluxo de Trabalho Automatizado',
      description: 'Integração perfeita com GitHub Actions',
    },
    configurableReviewProcess: {
      title: 'Processo de Revisão Configurável',
      description: 'Personalize parâmetros de revisão',
    },
    multiLanguageSupport: {
      title: 'Suporte a Múltiplos Idiomas',
      description: 'Comentários de revisão no seu idioma',
    },
  },
  howItWorks: {
    title: 'Como Funciona',
    subtitle: 'Integração Simples, Resultados Poderosos',
    step1: {
      title: 'Adicione ao Seu Workflow',
      description: 'Inclua o Flash no arquivo de workflow do GitHub Actions',
    },
    step2: {
      title: 'Configure a Chave API',
      description: 'Configure sua chave API do Google Gemini como um segredo',
    },
    step3: {
      title: 'Revisões Automáticas',
      description: 'Flash analisa pull requests e fornece feedback detalhado',
    },
    step4: {
      title: 'Melhore a Qualidade do Código',
      description: 'Use insights baseados em IA para aprimorar sua base de código',
    },
  },
  installation: {
    title: 'Instalação Simples',
    subtitle: 'Comece em Minutos',
    instructions: 'Adicione a action ao workflow do seu repositório:',
  },
  models: {
    title: 'Escolha seu Modelo',
    subtitle: 'Flash funciona com todos os modelos Gemini',
    gemini25Pro: {
      name: 'Gemini 2.5 Pro',
      description: 'Modelo mais poderoso com máxima precisão nas respostas',
      features: [
        'Melhor para análise complexa de código',
        'Capacidades avançadas de raciocínio',
        'Revisões de alta precisão',
        'Compreensão avançada de contexto',
        'Performance premium'
      ],
      note: 'Custo mais alto, ideal para revisões críticas'
    },
    gemini25Flash: {
      name: 'Gemini 2.5 Flash',
      description: 'Equilíbrio ideal entre performance e eficiência',
      features: [
        'Capacidades bem equilibradas',
        'Profundidade de análise configurável',
        'Respostas rápidas',
        'Custo-benefício',
        'Ótimo para a maioria dos projetos'
      ],
      note: 'Recomendado para a maioria dos casos'
    },
    gemini20Flash: {
      name: 'Gemini 2.0 Flash',
      description: 'Modelo multimodal rápido e eficiente',
      features: [
        'Análise rápida de código',
        'Raciocínio básico',
        'Baixa latência',
        'Mais econômico',
        'Perfeito para revisões simples'
      ],
      note: 'Amigável para o tier gratuito'
    }
  },
  pricing: {
    title: 'Gratuito e Open Source',
    subtitle: 'Sem plano premium, sem limitações. Use o quanto quiser.',
    free: {
      name: 'Sempre Gratuito',
      price: 'R$0',
      description: 'Todos os recursos incluídos',
      buttonText: 'Começar',
    },
    features: [
      'Revisões de código ilimitadas',
      'Integração com GitHub Actions',
      'Análise profunda de TypeScript',
      'Insights com IA Gemini',
      'Capacidade de auto-aprovação',
      'Comentários de revisão em múltiplos idiomas',
      'Profundidade de revisão personalizável',
      'Suporte da comunidade'
    ]
  },
  faq: {
    title: 'Perguntas Frequentes',
    subtitle: 'Tem Perguntas? Temos Respostas',
    questions: [
      {
        question: 'Como o Flash se compara a outras ferramentas de revisão de código?',
        answer: 'O Flash utiliza a IA Gemini do Google para uma compreensão profunda do código, oferecendo revisões mais conscientes do contexto do que ferramentas tradicionais de análise estática. Ele se integra perfeitamente com o GitHub e fornece parâmetros de revisão personalizáveis.'
      },
      {
        question: 'Preciso de uma chave de API do Google Gemini?',
        answer: 'Sim, o Flash requer uma chave de API do Google Gemini para funcionar. Você pode obter uma na Plataforma Google AI e adicioná-la como um segredo em seu repositório GitHub.'
      },
      {
        question: 'O Flash pode revisar outras linguagens além do TypeScript?',
        answer: 'Atualmente, o Flash é otimizado para revisões de código TypeScript, mas estamos trabalhando para expandir o suporte a outras linguagens em versões futuras.'
      },
      {
        question: 'Meu código está seguro ao usar o Flash?',
        answer: 'O Flash processa o código localmente dentro do runner do GitHub Actions e envia apenas o contexto necessário para a API Gemini. Sua base de código permanece segura e não armazenamos nenhum código.'
      },
      {
        question: 'Posso personalizar a saída da revisão?',
        answer: 'Sim, o Flash oferece várias opções de configuração, incluindo idioma de saída, profundidade de revisão e configurações de auto-aprovação, permitindo que você adapte o processo de revisão às necessidades da sua equipe.'
      }
    ]
  },
  cta: {
    title: 'Pronto para Melhorar Suas Revisões de Código?',
    description: 'Junte-se à comunidade de desenvolvedores usando Flash para melhorar a qualidade do código.',
    buttonText: 'Começar Agora',
  },
  footer: {
    copyright: '© 2025 Flash. Todos os direitos reservados.',
    links: {
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      contact: 'Contato',
    },
  },
  languageSelector: {
    label: 'Idioma',
  },
  themeToggle: {
    light: 'Claro',
    dark: 'Escuro',
  },
};

export default translation;