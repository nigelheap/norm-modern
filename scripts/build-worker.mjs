import { mkdir, writeFile } from 'node:fs/promises'

const worker = `const INDEX_PATH = '/index.html'

export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response('Static asset binding is unavailable.', { status: 500 })
    }

    const response = await env.ASSETS.fetch(request)

    if (response.status !== 404 || request.method !== 'GET') {
      return response
    }

    const accept = request.headers.get('accept') || ''
    if (!accept.includes('text/html')) {
      return response
    }

    const indexUrl = new URL(INDEX_PATH, request.url)
    return env.ASSETS.fetch(new Request(indexUrl, request))
  },
}
`

await mkdir(new URL('../dist/server/', import.meta.url), { recursive: true })
await writeFile(new URL('../dist/server/index.js', import.meta.url), worker)
