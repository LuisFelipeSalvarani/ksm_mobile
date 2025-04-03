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
      },
      mode: 'tags-split',
      target: './src/http/endpoints',
      schemas: './src/http/models',
      indexFiles: true,
      client: 'react-query',
      httpClient: 'fetch',
      headers: true,
      clean: true,
      biome: true,
      baseUrl: 'http://192.168.1.167:3333',
    },
  },
  // apiZod: {
  //   input: './openapi.json',
  //   output: {
  //     mode: 'tags-split',
  //     client: 'zod',
  //     target: './src/http/endpoints',
  //     fileExtension: '.zod.ts',
  //   },
  // },
})
