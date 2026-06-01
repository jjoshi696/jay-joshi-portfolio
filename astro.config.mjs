import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// NOTE: If deploying to a GitHub Pages project site (e.g. https://<user>.github.io/<repo>),
// set `site` to your full URL and `base` to "/<repo>" below.
// For custom domains, Netlify, or Vercel, leave `base` as "/".
export default defineConfig({
  site: "https://jay-joshi.example.com",
  base: "/",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    inlineStylesheets: "auto",
  },
});
