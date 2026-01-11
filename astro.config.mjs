// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://mizunomu1v1.github.io/dicey-dungeons-fun/',
    base: '/dicey-dungeons-fun/',
	integrations: [
		starlight({
			title: '🎲Dicey Dungeons データベース',
			lastUpdated: true, 
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '台詞収集',
					items: [
						{ label: 'エピソード', autogenerate: { directory: '1_line/episode' } },
						{ label: 'キャラクター', autogenerate: { directory: '1_line/character' } },
					], 
				},	
				{
					label: 'スキル図鑑', autogenerate: { directory: '2_skill' } 
				},	
				{
					label: '攻略情報', autogenerate: { directory: '3_howto' } 
				},	
			],
		}),
	],
});
