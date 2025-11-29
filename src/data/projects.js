export const projects = [
  {
    id: 'gateway-dev',
    title: 'Gateway Development',
    tagline: 'Secured platform gateway with authentication, plugins & observability',
    tech: ['Golang', 'Python', 'Node.js', 'Prometheus', 'Loki', 'Kubernetes'],
    bullets: [
      'Built IP-based access control, JWT, and OAuth2 authentication for API gateways.',
      'Integrated Prometheus metrics and custom health checks for observability.',
      'Implemented load balancing strategies for high availability and performance.',
      'Developed reusable mock API infrastructure for internal development workflows.',
      'Integrated Loki for centralized logging and operational debugging.'
    ]
  },
  {
    id: 'gateway-plugins',
    title: 'Gateway Plugin Suite',
    tagline: 'Plugin-first approach to secure & flexible request handling',
    tech: ['Golang', 'Redis', 'JWT', 'AES', 'RSA', 'HMAC'],
    bullets: [
      'Developed plugins including mTLS, MessageSignature, JWT, VerifyHeaders, and IP-based access control.',
      'mTLS plugin: certificate parsing, SAN validation, fingerprint verification, and Redis-based certificate sync.',
      'MessageSignaturePlugin: HMAC-based request signing for tamper-proof client-server communication.',
      'Encryption/Decryption plugin: AES/RSA payload security with real-time decrypt-and-forward logic.'
    ]
  },
  {
    id: 'transformations',
    title: 'Live Payload Transformations',
    tagline: 'JSON ⇄ XML conversion at gateway level',
    tech: ['Golang', 'Node.js', 'XML', 'JSON'],
    bullets: [
      'Implemented JSON→XML and XML→JSON bidirectional transformation plugin.',
      'Designed to work inline without adding noticeable latency.',
      'Supports schema-aware transformations for downstream compatibility.'
    ]
  },
  {
    id: 'loadbalancer-routing',
    title: 'LoadBalancer & Advanced Routing Plugins',
    tagline: 'Traffic distribution & dynamic routing',
    tech: ['Golang', 'Load Balancing', 'LRU', 'RoundRobin'],
    bullets: [
      'LoadBalancer Plugin: implemented Round Robin and LRU algorithms for traffic distribution.',
      'Advanced Routing Plugin: dynamic route redirection to alternate paths based on policy rules.'
    ]
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
    ]
  },
  {
    id: 'loan-management',
    title: 'Loan Origination & Management System',
    tagline: 'Microservices fintech platform for major banks',
    tech: ['Golang', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'Redis'],
    bullets: [
      'Developed loan management system for Federal, Dhanalakshmi, and KVB banks.',
      'Reduced loan processing time by 40%.',
      'Enhanced RabbitMQ throughput (10,000+ msgs/sec).',
      'Improved DB performance by 30% via query tuning.'
    ]
  },
  {
    id: 'hyperledger-wand',
    title: 'Hyperledger Fabric “WAND”',
    tagline: 'Blockchain-as-a-Service with Golang',
    tech: ['Golang', 'Hyperledger Fabric', 'Cobra CLI'],
    bullets: [
      'Developed BAAS platform improving setup efficiency by 40%.',
      'Automated Fabric network setup with Cobra CLI.',
      'Improved modular orchestration efficiency by 30%.'
    ]
  },
  {
    id: 'bot-migration',
    title: 'Bot Migration (AA v11 → AA360)',
    tagline: 'Automation Anywhere RPA project for OTIS',
    tech: ['Automation Anywhere', 'RPA'],
    bullets: [
      'Worked on bot migration and recaptured objects for production bots.'
    ]
  }
];
