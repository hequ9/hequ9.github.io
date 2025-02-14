import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  jsonc: true,
  yaml: true,
  vue: true,
  typescript: true,
  javascript: true,
  test: true,
  formatters: {
    html: true,
    css: true,
    json: true,
    yaml: true,
  },
  rules: {
    'ts/no-unused-expressions': 'off',
    'vue/valid-v-slot': ['error', {
      allowModifiers: true,
    }],
    'eslint-comments/no-unlimited-disable': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'prefer-const': 'off',
    'no-debugger': 'off',
    'one-var': 'off',
    'no-useless-return': 'off',
    'no-alert': 'off',
    'no-new': 'off',
    'ts/no-invalid-this': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
})
