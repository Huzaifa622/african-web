import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		fontFamily: {
  			Nunito: ["Nunito"],
			raleway:["Raleway"]
  		},
		backgroundImage:{
			bg: "url('/images/bg.png')",
			bg2: "url('/images/eee.jpg')",
			banner:"url('/images/bb.jpg')"
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			zoomInOut: {
			  '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
			  '50%': { transform: 'scale(1.2)', opacity: '1' },
			},
		  },
		  animation: {
			zoomLoader: 'zoomInOut 2s infinite',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
