import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	site: 'https://example.com',
	integrations: [sitemap(), compress()],
	output: 'server',
	adapter: vercel(),
})
