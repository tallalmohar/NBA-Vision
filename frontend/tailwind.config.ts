import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['var(--font-oswald)', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
export default config
