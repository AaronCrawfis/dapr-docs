module.exports = {
  docs: {
    'Overview': [
      'overview/dapr-overview',
      {'Contributing': ['overview/contributing/contributing', 'overview/contributing/howto-template']}
    ],
    'Getting Started': ['getting-started/install-dapr', 'getting-started/quickstart'],
    'Concepts': [
      'overview/building-blocks',
      'concepts/middleware/middleware',
      'concepts/security/security-overview',
      'concepts/configuration/configuration'
    ],
    'Dapr Building Blocks': [
      'concepts/service-invocation/service-invocation',
      'concepts/state-management/state',
      'concepts/pubsub/pubsub',
      'concepts/bindings/bindings',
      {'Actors': ['concepts/actors/actors', 'concepts/actors/actors_features']},
      {'Observability': [
        'concepts/observability/observability',
        'concepts/observability/logs',
        'concepts/observability/traces',
        'concepts/observability/W3C-traces',
        'concepts/observability/metrics',
        'concepts/observability/health',
      ]},
      {'Secrets': ['concepts/secrets/secrets','concepts/secrets/component-secrets']},
    ],
    'Hosting Dapr': ['concepts/hosting/hosting'],
    'How To Guides': [],
    'Best Practices': [],
    'Reference': [],
    'FAQ': [],
  },
};
