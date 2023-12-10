import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	applyBaseStyles: true, // https://github.com/withastro/astro/issues/3844
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Great Vibes", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
