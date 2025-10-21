export const projects = [
  {
    id: 'loan-orig',
    title: 'Loan Origination & Management System',
    tagline: 'Microservices fintech platform for loan processing',
    tech: ['Golang', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'Redis'],
    bullets: [
      'Reduced loan processing time by 40%',
      'Scalable microservices architecture with gRPC',
      'Integrated with multiple banks for secure onboarding',
    ],
    github: 'https://github.com/manjunathabhi/loan-orig',
    demo: '#'
  },
  {
    id: 'notification-service',
    title: 'Distributed Notification Delivery Service',
    tagline: 'Reliable fan-out notifications using gRPC & Redis',
    tech: ['Go', 'gRPC', 'Redis', 'GraphQL'],
    bullets: [
      'Guaranteed delivery and retry semantics',
      'Saved 30% infra cost through batching and caching',
    ],
    github: 'https://github.com/manjunathabhi/notification-service',
    demo: '#'
  }
]