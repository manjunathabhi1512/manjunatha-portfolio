export const projects = [
  {
    id: 'gateway-dev',
    title: 'Gateway Development',
    tagline: 'Secured platform gateway with authentication & observability',
    tech: ['Golang', 'Python', 'Node.js', 'Prometheus', 'Loki', 'Kubernetes'],
    bullets: [
      'Built IP-based access control, JWT, and OAuth2 authentication for API gateways.',
      'Integrated Prometheus metrics and custom health checks for observability.',
      'Implemented load balancing strategies for high availability and performance.',
      'Developed reusable mock API infrastructure for internal development workflows.',
      'Integrated Loki for centralized logging and operational debugging.'
    ],
  },
  {
    id: 'workflow-orchestration',
    title: 'Workflow Orchestration Service',
    tagline: 'Temporal-based orchestration replacing legacy lifecycle service',
    tech: ['Java', 'Golang', 'Node.js', 'Temporal'],
    bullets: [
      'Replaced API and queue-based workflows with Temporal signals.',
      'Enhanced inter-service communication speed and reliability.',
      'Reduced latency and improved system throughput by 25%.'
    ],
  },
  {
    id: 'loan-management',
    title: 'Loan Origination & Management System',
    tagline: 'Microservices fintech platform for major banks',
    tech: ['Golang', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'Redis'],
    bullets: [
      'Developed scalable loan management system used by Federal, Dhanalakshmi, and KVB banks.',
      'Reduced loan processing time by 40%.',
      'Enhanced message brokering with RabbitMQ (10,000+ msg/sec).',
      'Optimized DB performance by 30% via query tuning and indexing.'
    ],
  },
  {
    id: 'hyperledger-wand',
    title: 'Hyperledger Fabric “WAND”',
    tagline: 'Blockchain-as-a-Service with Golang automation',
    tech: ['Golang', 'Hyperledger Fabric', 'Cobra CLI'],
    bullets: [
      'Developed BAAS application improving setup efficiency by 40%.',
      'Automated Fabric network setup and scripting with Cobra.',
      'Enhanced app efficiency by 30% using modular orchestration.'
    ],
  },
  {
    id: 'bot-migration',
    title: 'Bot Migration (AA v11 → AA360)',
    tagline: 'Automation Anywhere RPA project for OTIS client',
    tech: ['Automation Anywhere', 'RPA'],
    bullets: [
      'Collaborated on bot migration and recaptured workflow objects for production bots.'
    ],
  }
];
