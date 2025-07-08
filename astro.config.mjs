// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
		},
		/*rehypePlugins: [
			[
				rehypeKatex,
				{
					// Katex plugin options
					// output: html
					throwOnError: false
				}
			]
		]
	},*/
    /*devToolbar: {
       enabled: false
  	},*/
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'System Design School',
			customCss: [
			        // Relative path to your custom CSS file
			        './src/styles/custom.css',
			      ],
			social: {
				github: 'https://github.com/chiradip',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate : {directory: 'intro'}
				},
				{
					label: 'books',
					autogenerate : {directory: 'pages'}
				},
				{
					label: 'Algorithm - Extensive Analysis',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'tutorial/algorithm/algorithm' },
						//{ label: 'Do not write code', slug: 'tutorial/algorithm/do-not-code' },
						{ label: 'Do not write code V2', slug: 'tutorial/algorithm/do-not-code-v2' },
						{ label: 'Shortest Bridge - Analysis', slug: 'tutorial/algorithm/advanced/shortest-bridge-v2' },
						{ label: 'Letter Combination - Analysis', slug: 'tutorial/algorithm/advanced/letter-combination' },
						/*{ label: 'Advanced Concepts', 
                            items: [
							    { label: 'Shortest Bridge', slug: 'tutorial/algorithm/advanced/shortest-bridge' },
                            ],
						},*/
					],
					//autogenerate: { directory: 'tutorial' },
				},
				{
					label: 'System Design - Research',
					autogenerate: { directory: 'tutorial/sysdesign' },
				},
				/*{
					label: 'Data Structure - Reference',
					autogenerate: { directory: 'reference' },
				},*/
			],
		}),
	],
});
