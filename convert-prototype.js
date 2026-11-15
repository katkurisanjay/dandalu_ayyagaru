const fs = require('fs');
const path = require('path');

const prototypeDir = 'd:/dandalu_ayyagaru/dandalu_ayyagaru_ui_prototype/stitch_dandalu_ayyagaru_ui_prototype';
const appDir = 'd:/dandalu_ayyagaru/dandalu-ayyagaru-app/app';

function convertHtmlToJsx(html) {
  let jsx = html;

  // Remove script tags entirely
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Instead of removing onclick, we convert it to a dynamic handler that preserves the original 'this' context and executes globally.
  jsx = jsx.replace(/\bonclick="([^"]*)"/gi, 'data-onclick="$1" onClick={(e) => { const code = e.currentTarget.getAttribute(\'data-onclick\'); if(code) { (new Function(\'event\', code)).call(e.currentTarget, e); } }}');

  // Strip other pure HTML event listeners we can't easily map right now if any
  jsx = jsx.replace(/\s+on(?:submit|change|mouseover|mouseout)="[^"]*"/gi, '');

  // Fix HTML attribute names to JSX
  jsx = jsx.replace(/\bclass=/g, 'className=');
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');
  jsx = jsx.replace(/\btabindex=/gi, 'tabIndex=');
  jsx = jsx.replace(/\bautocomplete=/gi, 'autoComplete=');
  jsx = jsx.replace(/\bmaxlength=/gi, 'maxLength=');
  jsx = jsx.replace(/\bminlength=/gi, 'minLength=');
  jsx = jsx.replace(/\breadonly=/gi, 'readOnly=');
  jsx = jsx.replace(/\bcolspan=/gi, 'colSpan=');
  jsx = jsx.replace(/\browspan=/gi, 'rowSpan=');
  jsx = jsx.replace(/\bsrcset=/gi, 'srcSet=');
  jsx = jsx.replace(/\bdatetime=/gi, 'dateTime=');
  jsx = jsx.replace(/\benctype=/gi, 'encType=');
  jsx = jsx.replace(/\bnovalidate=/gi, 'noValidate=');

  // Fix SVG and specific CSS-like attributes
  jsx = jsx.replace(/\bfont-family=/g, 'fontFamily=');
  jsx = jsx.replace(/\bfill-opacity=/g, 'fillOpacity=');
  jsx = jsx.replace(/\bstroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/\bstroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/\bstroke-dasharray=/g, 'strokeDasharray=');

  // Fix value to defaultValue in form fields
  // Negative lookahead so we don't accidentally replace if they already have defaultValue=
  jsx = jsx.replace(/<input([^>]*?)\bvalue=/gi, '<input$1defaultValue=');
  jsx = jsx.replace(/<textarea([^>]*?)\bvalue=/gi, '<textarea$1defaultValue=');
  jsx = jsx.replace(/<select([^>]*?)\bvalue=/gi, '<select$1defaultValue=');
  jsx = jsx.replace(/\bspellcheck=/gi, 'spellCheck=');
  jsx = jsx.replace(/\bcrossorigin=/gi, 'crossOrigin=');
  jsx = jsx.replace(/\bframeborder=/gi, 'frameBorder=');
  jsx = jsx.replace(/\ballowfullscreen=/gi, 'allowFullScreen=');

  // SVG attributes
  jsx = jsx.replace(/\bstroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/\bstroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/\bfill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/\bclip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/\bclip-path=/g, 'clipPath=');
  jsx = jsx.replace(/\bviewbox=/gi, 'viewBox=');
  jsx = jsx.replace(/\bstop-color=/g, 'stopColor=');
  jsx = jsx.replace(/\bstop-opacity=/g, 'stopOpacity=');
  jsx = jsx.replace(/\bfont-size=/g, 'fontSize=');
  jsx = jsx.replace(/\bfont-weight=/g, 'fontWeight=');
  jsx = jsx.replace(/\btext-anchor=/g, 'textAnchor=');
  jsx = jsx.replace(/\bdominant-baseline=/g, 'dominantBaseline=');

  // Remove invalid `placeholder` from img tags
  jsx = jsx.replace(/(<img\s[^>]*?)\s*placeholder="[^"]*"/gi, '$1');

  // Fix boolean attributes with string values
  jsx = jsx.replace(/\bchecked="[^"]*"/g, 'defaultChecked={true}');
  jsx = jsx.replace(/\bdisabled="[^"]*"/g, 'disabled={true}');
  jsx = jsx.replace(/\brequired="[^"]*"/g, 'required={true}');
  jsx = jsx.replace(/\b(readonly|readOnly)="[^"]*"/g, 'readOnly={true}');
  jsx = jsx.replace(/\bautofocus="[^"]*"/g, 'autoFocus={true}');
  jsx = jsx.replace(/\bmultiple="[^"]*"/g, 'multiple={true}');
  // Bare boolean attributes (no value)
  jsx = jsx.replace(/\bchecked(?=\s|\/?>)/g, 'defaultChecked');
  jsx = jsx.replace(/\bdisabled(?=\s|\/?>)/g, 'disabled={true}');
  jsx = jsx.replace(/\brequired(?=\s|\/?>)/g, 'required={true}');
  jsx = jsx.replace(/\breadonly(?=\s|\/?>)/g, 'readOnly={true}');
  jsx = jsx.replace(/\bautofocus(?=\s|\/?>)/g, 'autoFocus={true}');
  jsx = jsx.replace(/\bmultiple(?=\s|\/?>)/g, 'multiple={true}');

  // Fix inline styles (CSS to camelCase JS object)
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    if (!styles.trim()) return 'style={{}}';
    const parts = styles.split(';').filter(s => s.trim());
    const entries = parts.map(part => {
      const colonIdx = part.indexOf(':');
      if (colonIdx === -1) return null;
      const key = part.slice(0, colonIdx).trim();
      const value = part.slice(colonIdx + 1).trim();
      const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${camelKey}: "${value}"`;
    }).filter(Boolean);
    return `style={{${entries.join(', ')}}}`;
  });

  // Self-close void elements that aren't already self-closed
  const voidElements = ['input', 'img', 'br', 'hr', 'source', 'meta', 'link', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'];
  for (const tag of voidElements) {
    // Match <tag ...> that isn't already closed with />
    jsx = jsx.replace(new RegExp(`<(${tag})(\\s[^>]*[^/])>`, 'gi'), '<$1$2 />');
    jsx = jsx.replace(new RegExp(`<(${tag})>`, 'gi'), '<$1 />');
  }

  // Fix HTML comments to JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Fix &amp; in JSX text content (not inside attributes)
  // Actually leave these as-is since JSX handles HTML entities in text fine

  return jsx;
}

// Route mappings: folder name → app route path
const routeMap = {
  'dandalu_ayyagaru_homepage_discovery': '',  // main homepage, don't overwrite
  'dandalu_ayyagaru_choose_pooja_sacred_catalog': 'poojas',
  'dandalu_ayyagaru_gruha_pravesham_pooja_detail': 'poojas/gruha-pravesham',
  'dandalu_ayyagaru_maha_ganapathi_homam_detail': 'poojas/maha-ganapathi-homam',
  'dandalu_ayyagaru_navagraha_homam_shanti_detail': 'poojas/navagraha-homam',
  'dandalu_ayyagaru_sri_satyanarayana_swamy_vratam_detail': 'poojas/satyanarayana-vratam',
  'dandalu_ayyagaru_interactive_booking_flow': 'book',
  'dandalu_ayyagaru_select_vedic_acharya_lineage': 'book/select-priest',
  'dandalu_ayyagaru_kundali_graha_dosha_verification': 'book/kundali-verification',
  'dandalu_ayyagaru_vedic_muhurtham_panchangam_calendar_finder': 'muhurtham',
  'dandalu_ayyagaru_vivaha_wedding_muhurtham_multi_day_matcher': 'muhurtham/vivaha',
  'dandalu_ayyagaru_review_booking_dakshina_breakdown': 'book/review',
  'dandalu_ayyagaru_secure_agamic_payment_milestone_escrow': 'book/payment',
  'dandalu_ayyagaru_booking_confirmation_guide': 'book/confirmation',
  'dandalu_ayyagaru_3_day_vivaha_booking_confirmation_family_guide': 'book/vivaha-confirmation',
  'dandalu_ayyagaru_my_bookings_consecration_dashboard': 'dashboard',
  'dandalu_ayyagaru_nri_family_guest_live_video_stream_bilingual_narration': 'dashboard/live-stream',
  'dandalu_ayyagaru_wedding_concierge_day_of_event_command_center': 'dashboard/concierge',
  'dandalu_ayyagaru_devotee_profile_family_gotra_registry': 'profile',
  'dandalu_ayyagaru_acharya_portal_dakshina_escrow_command': 'acharya-portal',
};

// Process only the mapped routes into proper app routes
console.log('Converting prototype HTML files to Next.js pages...\n');
let created = 0;
let skipped = 0;

for (const [folder, route] of Object.entries(routeMap)) {
  if (!route) {
    console.log(`SKIP: ${folder} (homepage — already exists at app/page.tsx)`);
    skipped++;
    continue;
  }

  const htmlPath = path.join(prototypeDir, folder, 'code.html');
  if (!fs.existsSync(htmlPath)) {
    console.log(`MISSING: ${htmlPath}`);
    skipped++;
    continue;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Extract <main> content
  const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.log(`NO MAIN TAG: ${folder}`);
    skipped++;
    continue;
  }

  const mainContent = mainMatch[1];
  // Also extract header to build a shared header component later if needed
  const jsxContent = convertHtmlToJsx(mainContent);

  let scriptContent = '';
  const scriptMatches = htmlContent.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi);
  for (const match of scriptMatches) {
    scriptContent += match[1] + '\n';
  }

  // Escape backticks and dollars for template literals
  const escapedScriptContent = scriptContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  // Fix hrefs in the JSX based on data-path
  // Prototype uses simpler semantic names for data-path
  const dataPathMap = {
    'devotee-home': '',
    'book-a-pooja': 'book',
    'my-bookings': 'dashboard',
    'family-gotra-registry': 'profile',
    'panchangam-calendar': 'muhurtham',
    'poojas': 'poojas',
    'dandalu-ayyagaru-vivaha-wedding-muhurtham-multi-day-matcher': 'muhurtham/vivaha',
    'vivaha-3-day-acharya-booking-customization-checkout': 'book/vivaha-confirmation',
    'pooja-materials': 'book/review',
    'trust-and-verification': 'profile',
    'how-it-works': '',
    'about-dandalu-ayyagaru': '',
    'privacy-policy': '',
    'terms-of-service': '',
    'concierge-support': 'dashboard/concierge',
  };

  let finalJsx = jsxContent;
  finalJsx = finalJsx.replace(/data-path="([^"]+)"\s+href="[^"]*"/gi, (match, pathValue) => {
    // If we have a map, use it. Otherwise, default to the data-path itself (fallback)
    const route = dataPathMap[pathValue] !== undefined ? dataPathMap[pathValue] : 'book';
    return `href="/${route}"`;
  });
  // Replace remaining href="#" with href="javascript:void(0)"
  finalJsx = finalJsx.replace(/href="#"/g, 'href="javascript:void(0)"');

  const pageCode = [
    "'use client';",
    "",
    "import { useEffect } from 'react';",
    "// Auto-converted from prototype: " + folder,
    "// Route: /" + route,
    "",
    "export default function Page() {",
    "  useEffect(() => {",
    "    const script = document.createElement('script');",
    "    script.innerHTML = `" + escapedScriptContent + "`;",
    "    document.body.appendChild(script);",
    "    return () => { document.body.removeChild(script); };",
    "  }, []);",
    "",
    "  return (",
    "    <main className=\"w-full pt-20 bg-surface min-h-[calc(100vh-80px)]\">",
    finalJsx,
    "    </main>",
    "  );",
    "}",
    "",
  ].join('\n');

  const destDir = path.join(appDir, route);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'page.tsx'), pageCode);
  console.log(`✓ Created: /${route}  (${folder})`);
  created++;
}

console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
