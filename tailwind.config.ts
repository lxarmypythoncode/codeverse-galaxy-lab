
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk + Universe theme colors
				galactic: {
					DEFAULT: '#0f172a',  // Galactic Dark
					light: '#1e293b',
					dark: '#020617'
				},
				neon: {
					blue: '#38bdf8',     // Neon Blue
					yellow: '#facc15',   // Cyber Yellow
					purple: '#a855f7',
					green: '#4ade80'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				jetbrains: ['"JetBrains Mono"', 'monospace']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 20px 5px rgba(56, 189, 248, 0.7)'
					},
					'50%': { 
						opacity: '0.7',
						boxShadow: '0 0 10px 2px rgba(56, 189, 248, 0.4)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'star-twinkle': {
					'0%, 100%': { opacity: '0.8', scale: '1' },
					'50%': { opacity: '0.3', scale: '0.8' }
				},
				'meteor': {
					'0%': { transform: 'translateX(0) translateY(0) rotate(0deg)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': { transform: 'translateX(-500px) translateY(500px) rotate(45deg)', opacity: '0' }
				},
				'terminal-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'star-twinkle': 'star-twinkle 4s ease-in-out infinite',
				'meteor': 'meteor 10s linear forwards',
				'terminal-blink': 'terminal-blink 1.2s step-end infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
