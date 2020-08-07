module.exports = {
  docs: {
    'Overview': [
      'overview/dapr-home',
      'overview/community',
      {'Contributing': [
        'overview/contributing/contributing',
        'overview/contributing/howto-template']
      },
      'overview/faq',
    ],
    'Getting Started': [
      'getting-started/install-dapr',
      'getting-started/quickstart'
    ],
    'Concepts': [
      'concepts/building-blocks/building-blocks',
      'concepts/middleware/middleware',
      'concepts/configuration/configuration',
      'concepts/security/security-overview',
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
    'Platforms': [
      'concepts/hosting/self-hosted',
      'concepts/hosting/kubernetes',
      'concepts/hosting/iot',
    ],
    'How To Guides': [],
    'Best Practices': [],
    'Reference': [
      {'Dapr API': [
        'reference/api/state_api',
        'reference/api/service_invocation_api',
        'reference/api/bindings_api',
        'reference/api/pubsub_api',
        'reference/api/actors_api',
        'reference/api/health_api',
        'reference/api/secrets_api',
        'reference/api/error_codes'
      ]},
      'reference/specs/bindings/bindings'
    ],
    'FAQ': [],
  },
};
