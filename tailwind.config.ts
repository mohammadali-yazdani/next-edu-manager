import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // CUSTOM COLORS
        eduSky: "#C3EBFA",
        eduSkyLight: "#EDF9FD",
        eduPurple: "#CFCEFF",
        eduPurpleLight: "#F1F0FF",
        eduYellow: "#FAE27C",
        eduYellowLight: "#FEFCEB",
      },
    },
  },
  plugins: [],
} satisfies Config;
