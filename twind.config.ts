// This file is only meant to enable completions for
// Twind VS Code extension.

// Imports
import { apply } from "./deps/twind.ts";

// Import Presets
import { presetAutoprefix } from "./deps/twind.ts";
import { presetTailwind } from "./deps/twind.ts";
import { presetTypography } from "./deps/twind.ts";

// Configuration
export default {
  presets: [presetAutoprefix(), presetTailwind(), presetTypography()],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans:
          '"Inter var", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        mcten: "MinecraftTen",
      },
    },
  },
  preflight: {
    body: apply`font-sans`,
    "@font-face": [
      {
        fontFamily: "MinecraftTen",
        src: [
          "url(/fonts/mcten.eot)",
          ` url(/fonts/mcten.eot?#iefix) format('embedded-opentype'),
            url(/fonts/mcten.woff) format('woff'),
            url(/fonts/mcten.ttf) format('truetype'),
            url(/fonts/mcten.svg#MinecraftTen) format('svg')
          `,
        ],
        "font-style": "normal",
      },
    ],
  },
};
