import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BitxMap: "var(--font-bitxmap)",
        Coolvetica: "var(--font-coolvetica)",
        MonumentExtended: "var(--font-monument-extended)",
        ppneuemonteral: "var(--font-ppneuemonteral)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
