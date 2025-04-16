import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		// Add this if you have content files using Tailwind classes
		"./contents/**/*.{md,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1550px",
			},
		},
		extend: {
			colors: {
				// --- Keep existing shadcn/ui HSL-based colors ---
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
         		    orange: "rgb(var(--orange-primary) / <alpha-value>)" ,
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},

				// --- Add Neutral palette from Vite CSS (using RGB variables) ---
				neutral: {
					50: "rgb(var(--neutral-50) / <alpha-value>)",
					100: "rgb(var(--neutral-100) / <alpha-value>)",
					200: "rgb(var(--neutral-200) / <alpha-value>)",
					300: "rgb(var(--neutral-300) / <alpha-value>)",
					400: "rgb(var(--neutral-400) / <alpha-value>)",
					500: "rgb(var(--neutral-500) / <alpha-value>)",
					600: "rgb(var(--neutral-600) / <alpha-value>)",
					700: "rgb(var(--neutral-700) / <alpha-value>)",
					800: "rgb(var(--neutral-800) / <alpha-value>)",
					900: "rgb(var(--neutral-900) / <alpha-value>)",
					950: "rgb(var(--neutral-950) / <alpha-value>)",
				},

				// --- Add Gray palette from Vite CSS (using RGB variables) ---
				gray: {
					50: "rgb(var(--gray-50) / <alpha-value>)",
					100: "rgb(var(--gray-100) / <alpha-value>)",
					200: "rgb(var(--gray-200) / <alpha-value>)",
					300: "rgb(var(--gray-300) / <alpha-value>)",
					400: "rgb(var(--gray-400) / <alpha-value>)",
					500: "rgb(var(--gray-500) / <alpha-value>)",
					600: "rgb(var(--gray-600) / <alpha-value>)",
					700: "rgb(var(--gray-700) / <alpha-value>)",
					800: "rgb(var(--gray-800) / <alpha-value>)",
					900: "rgb(var(--gray-900) / <alpha-value>)",
					950: "rgb(var(--gray-950) / <alpha-value>)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				// Assuming you configure next/font to assign these variables
				// Update variable names if they are different in your RootLayout
        sans: ["var(--font-dm-sans)", "var(--font-jakarta-sans)"],

				// Add a specific key for Jakarta Sans
				jakarta: ["var(--font-jakarta-sans)"], // <--- ADD THIS LINE

				code: ["var(--font-geist-mono)"],
			},
			backgroundImage: {
				"grid-pattern": "var(--gradient)",
                "radial-grid-pattern": "var(--radial-gradient)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [animate, typography],
} satisfies Config;

export default config;