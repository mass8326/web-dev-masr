import type { UserConfig } from "@unocss/core";
import fonts from "@unocss/preset-web-fonts";
import wind from "@unocss/preset-wind3";
import directives from "@unocss/transformer-directives";
import group from "@unocss/transformer-variant-group";

const config = {
  transformers: [group(), directives()],
  shortcuts: [
    {
      "flex-center": "flex items-center justify-center",
      "sct-link": "text-sky-5 font-bold hover:underline visited:text-violet-5",
    },
  ],
  presets: [
    wind(),
    fonts({
      fonts: {
        title: ["Raleway"],
        resume: ["Lato"],
        sans: ["Montserrat"],
        mono: ["JetBrains Mono"],
      },
    }),
  ],
} satisfies UserConfig;

export default config;
