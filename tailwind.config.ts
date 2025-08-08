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
			fontFamily: {
				'sora': ['Sora', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				neural: 'hsl(var(--neural))',
				pulse: 'hsl(var(--pulse))',
				wave: 'hsl(var(--wave))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
			},
			backdropBlur: {
				'glass': 'var(--backdrop-blur)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)'
					}
				},
				'subtle-glow': {
					'0%, 100%': {
						filter: 'brightness(1)'
					},
					'50%': {
						filter: 'brightness(1.1)'
					}
				},
				'text-glow': {
					'0%, 100%': {
						textShadow: '0 0 5px hsl(var(--primary) / 0.7), 0 0 10px hsl(var(--primary) / 0.5), 0 0 15px hsl(var(--primary) / 0.3)',
						filter: 'drop-shadow(0 0 5px hsl(var(--primary) / 0.7)) drop-shadow(0 0 10px hsl(var(--primary) / 0.5))'
					},
					'50%': {
						textShadow: '0 0 10px hsl(var(--primary) / 0.9), 0 0 20px hsl(var(--primary) / 0.7), 0 0 30px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)',
						filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.9)) drop-shadow(0 0 20px hsl(var(--primary) / 0.7)) drop-shadow(0 0 30px hsl(var(--primary) / 0.5))'
					}
				},
				'icon-glow': {
					'0%, 100%': {
						filter: 'brightness(1) drop-shadow(0 0 10px hsl(var(--primary) / 0.8)) drop-shadow(0 0 20px hsl(var(--primary) / 0.6))'
					},
					'50%': {
						filter: 'brightness(1.3) drop-shadow(0 0 20px hsl(var(--primary) / 1)) drop-shadow(0 0 30px hsl(var(--primary) / 0.8)) drop-shadow(0 0 40px hsl(var(--primary) / 0.6))'
					}
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
				'icon-glow': 'icon-glow 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
