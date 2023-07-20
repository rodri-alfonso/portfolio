import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import deno from '@astrojs/deno'
import compress from 'astro-compress'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [tailwind(), sitemap(), compress(), preact()],
	output: 'static',
	adapter: vercel(),
})
