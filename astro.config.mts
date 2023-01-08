import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import deno from '@astrojs/deno'
import compress from 'astro-compress'

export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), compress()],
	output: 'server',
	adapter: deno(),
})
