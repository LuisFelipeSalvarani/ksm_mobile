import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json',
    output: {
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
        header: () => `// biome-ignore-all lint:
        `,
        mutator: {
          path: './src/http/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      },
      mode: 'tags-split',
      target: './src/http/endpoints',
      schemas: './src/http/models',
      indexFiles: true,
      client: 'react-query',
      httpClient: 'axios',
      headers: true,
      clean: true,
      biome: true,
    },
  },
})
