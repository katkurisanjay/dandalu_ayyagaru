const fs = require('fs');

const jsonStr = `{ "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } }`;

const data = JSON.parse(jsonStr);

let css = `@import "tailwindcss";\n\n@theme {\n`;

for (const [key, value] of Object.entries(data.colors)) {
  css += `  --color-${key}: ${value};\n`;
}

for (const [key, value] of Object.entries(data.borderRadius)) {
  let cssKey = key === 'DEFAULT' ? '' : `-${key}`;
  css += `  --radius${cssKey}: ${value};\n`;
}

for (const [key, value] of Object.entries(data.spacing)) {
  css += `  --spacing-${key}: ${value};\n`;
}

for (const [key, value] of Object.entries(data.fontFamily)) {
  const fontVar = value[0] === 'Manrope' ? 'var(--font-manrope)' : 'var(--font-inter)';
  css += `  --font-${key}: ${fontVar};\n`;
}

for (const [key, value] of Object.entries(data.fontSize)) {
  const size = value[0];
  const props = value[1];
  css += `  --text-${key}: ${size};\n`;
  css += `  --text-${key}--line-height: ${props.lineHeight};\n`;
  css += `  --text-${key}--letter-spacing: ${props.letterSpacing};\n`;
  css += `  --text-${key}--font-weight: ${props.fontWeight};\n`;
}

css += `}\n`;
fs.writeFileSync('d:/dandalu_ayyagaru/dandalu-ayyagaru-app/theme.css', css);
