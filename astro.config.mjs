// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://mizunomu1v1.github.io/dicey-dungeons-fun/',
    base: '/dicey-dungeons-fun/',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '台詞収集',
					items: [
						{ label: 'ストーリー', autogenerate: { directory: 'guides/story' } },
					], 
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
