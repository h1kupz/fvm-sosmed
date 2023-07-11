/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	important: true,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			vgreen: "#02e8ca",
			vwhite: "#d3e7e4",
			background: "#161616",
			lbackground: "#26393a",
			hover: "#FBA04B",
		},
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				roboto: ["Roboto Mono", "mono", "serif"],
				monument: ["monument", "sans-serif"],
			},
			backdropBlur: {
				v: "3px",
			},
			dropShadow: {
				v: "6px 6px 6px rgba(0, 0, 0, 0.75)",
				fvm: "1px 1px 3px rgba(0, 232, 202, 0.35)",
			},
		},
	},
	plugins: [],
}
