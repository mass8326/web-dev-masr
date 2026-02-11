import { defineConfig } from "astro/config";
import uno from "unocss/astro";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  trailingSlash: "never",
  integrations: [uno({ injectReset: true }), icon()],
});
