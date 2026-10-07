const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'dist');
const IMG = 'https://www.ilwadcleaning.com/uploads/1/0/1/9/10194241/';

const PAGES = [
  ['index', 'Home', 'Ilwad Cleaning: family-owned home, commercial and carpet cleaning, snow removal and handyman services in Toronto and the GTA.', 'home'],
  ['about', 'About', 'Meet Ilwad Cleaning, a family-owned cleaning company in Toronto.', 'about'],
  ['home-cleaning', 'Home Cleaning', 'Weekly, biweekly and monthly home cleaning in Toronto and the GTA.', ''],
  ['commercial-cleaning', 'Commercial Cleaning', 'Office and janitorial cleaning for Toronto businesses.', ''],
  ['carpet-cleaning', 'Carpet & Rug Cleaning', 'In-home carpet and area rug cleaning in Toronto and the GTA.', ''],
  ['snow-removal', 'Snow Removal', 'Commercial snow removal and ice control in Toronto.', ''],
  ['painting-handyman', 'Painting & Handyman', 'Painting and handyman services in Toronto.', ''],
  ['gift-cards', 'Gift Cards', 'Ilwad Cleaning gift cards: give someone a clean home.', ''],
  ['apply', 'Apply for a job', 'Apply to work with Ilwad Cleaning, a family-owned cleaning company in Toronto.', '']
];

const esc = s => s.replace(/&/g, '&amp;');
const NAV = 'text-decoration: none; color: #1C1E26; padding: 10px 0';
const NAV_ON = 'text-decoration: none; color: #C2560F; font-weight: 700; padding: 10px 0';
const SVC = [['home-cleaning', 'Home Cleaning'], ['commercial-cleaning', 'Commercial Cleaning'], ['carpet-cleaning', 'Carpet &amp; Rug Cleaning'], ['snow-removal', 'Snow Removal'], ['painting-handyman', 'Painting &amp; Handyman'], ['gift-cards', 'Gift Cards']];

const head = (title, desc) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ilwad Cleaning — ${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
<style>
body{margin:0;background:#FFFFFF}
section{box-sizing:border-box;scroll-margin-top:110px}
.dd-menu{display:none}.dd.open .dd-menu{display:flex}@media (hover:hover){.dd:hover .dd-menu{display:flex}}.dd-btn{-webkit-tap-highlight-color:transparent;cursor:pointer}.dd-btn svg{transition:transform .15s}.dd.open .dd-btn svg{transform:rotate(180deg)}
.dd-menu a{background:#F7924A;color:#1C1E26;font-weight:600}.dd-menu a:hover{background:#E57A2E;color:#1C1E26}
.svc-card{transition:border-color .15s,box-shadow .15s,transform .15s}.svc-card:hover{border-color:#F7924A !important;box-shadow:0 12px 28px rgba(28,30,38,.10);transform:translateY(-2px)}
.hdr{display:grid;grid-template-columns:auto 1fr auto;grid-template-areas:"logo nav cta";align-items:center;gap:8px 32px}
.hdr-logo{grid-area:logo}.hdr-nav{grid-area:nav;justify-self:center}.hdr-cta{grid-area:cta;white-space:nowrap}
@media (max-width:820px){.hdr{grid-template-columns:1fr auto;grid-template-areas:"logo cta" "nav nav"}.hdr-nav{justify-self:start}}
a{color:#C2560F}a:hover{color:#9A430B}
</style>
</head>
<body>
<div style="font-family: Figtree, system-ui, sans-serif; color: #1C1E26; background: #FFFFFF; font-size: 17px; line-height: 1.6">
`;

const header = active => `<header style="position: sticky; top: 0; z-index: 50; background: rgba(255, 255, 255, 0.96); border-bottom: 1px solid #EEEEF2">
<div class="hdr" style="max-width: 1160px; margin: 0 auto; padding: 8px 24px">
<a href="index.html" class="hdr-logo" style="display: flex; align-items: center"><img src="logo-white.png" id="site-logo" alt="Ilwad Cleaning" width="140" height="68" style="width: 140px; height: 68px; object-fit: cover; display: block; filter: brightness(0)"></a>
<nav aria-label="Main" class="hdr-nav" style="display: flex; flex-wrap: wrap; gap: 4px 28px; font-weight: 500; font-size: 16px">
<a href="index.html" style="${active === 'home' ? NAV_ON : NAV}">Home</a>
<div class="dd" style="position: relative">
<a href="index.html#services" class="dd-btn" role="button" aria-haspopup="true" aria-expanded="false" style="display: flex; align-items: center; gap: 4px; ${NAV}">Services <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg></a>
<div class="dd-menu" style="position: absolute; top: 100%; left: -12px; z-index: 60; min-width: 240px; flex-direction: column; gap: 6px; padding: 8px; background: #FFFFFF; border: 1px solid #E6E7EE; border-radius: 12px; box-shadow: 0 12px 32px rgba(28, 30, 38, 0.12)">
${SVC.map(([f, n]) => `<a href="${f}.html" style="text-decoration: none; padding: 10px 12px; border-radius: 8px">${n}</a>`).join('\n')}
</div>
</div>
<a href="about.html" style="${active === 'about' ? NAV_ON : NAV}">About</a>
<a href="index.html#contact" style="${NAV}">Contact</a>
</nav>
<a href="index.html#contact" class="hdr-cta" style="background: #F7924A; color: #1C1E26; font-weight: 600; text-decoration: none; padding: 12px 22px; border-radius: 10px; font-size: 15px">Get a quote</a>
</div>
</header>
`;

const footer = `<footer style="padding: 32px 24px; font-size: 14px; color: #5A5F73; border-top: 1px solid #EEEEF2">
<div style="max-width: 1160px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 12px 32px; justify-content: space-between; align-items: center">
<span>© 2026 Ilwad Cleaning · Toronto, ON</span>
<div style="display: flex; flex-wrap: wrap; gap: 8px 24px">
<a href="index.html" style="color: #5A5F73">Home</a>
<a href="about.html" style="color: #5A5F73">About</a>
<a href="apply.html" style="color: #5A5F73">Careers</a>
<a href="https://www.facebook.com/profile.php?id=61552727297852" style="color: #5A5F73">Facebook</a>
<a href="https://www.instagram.com/ilwadcleaning/" style="color: #5A5F73">Instagram</a>
</div>
</div>
</footer>
</div>
<script>(function(){var d=document.querySelector(".dd"),b=d&&d.querySelector(".dd-btn");if(!b)return;function set(o){d.classList.toggle("open",o);b.setAttribute("aria-expanded",o?"true":"false");}b.addEventListener("click",function(e){e.preventDefault();set(!d.classList.contains("open"));});document.addEventListener("click",function(e){if(!d.contains(e.target))set(false);});document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false);});})();</script>
<script>(function(){var i=document.getElementById("site-logo");if(!i)return;function go(){try{var c=document.createElement("canvas");c.width=i.naturalWidth;c.height=i.naturalHeight;var x=c.getContext("2d");x.drawImage(i,0,0);var d=x.getImageData(0,0,c.width,c.height),p=d.data;for(var k=0;k<p.length;k+=4){if(p[k+1]>180&&p[k+2]>180){p[k]=28;p[k+1]=30;p[k+2]=38;}}x.putImageData(d,0,0);i.onload=null;i.src=c.toDataURL();i.style.filter="none";}catch(e){}}if(i.complete&&i.naturalWidth)go();else i.onload=go;})();</script>
</body>
</html>
`;

// Images are copied from the live Vercel site first, so the old site is not needed.
const SOURCES = ['https://ilwad-cleaning.vercel.app/', 'https://ilwadcleaning.com/'];
async function download(name, file) {
  if (process.env.SKIP_DOWNLOAD) return;
  const tries = [SOURCES[0] + name, SOURCES[1] + name, IMG + file];
  for (const url of tries) {
    try {
      const res = await fetch(url);
      const type = res.headers.get('content-type') || '';
      if (res.ok && type.startsWith('image/')) {
        fs.writeFileSync(path.join(OUT, name), Buffer.from(await res.arrayBuffer()));
        console.log('Copied', name, 'from', url);
        return;
      }
    } catch (e) {}
  }
  throw new Error('Could not copy ' + name);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [file, title, desc, active] of PAGES) {
    let body = fs.readFileSync(path.join(__dirname, 'pages', file + '.html'), 'utf8');
    if (file === 'about') body = body.replace('<!-- CTA -->', fs.readFileSync(path.join(__dirname, 'pages', 'about-hiring.html'), 'utf8') + '<!-- CTA -->');
    fs.writeFileSync(path.join(OUT, file + '.html'), head(title, desc) + header(active) + body + footer);
  }
  await download('logo-white.png', 'ilwad-white-logo_orig.png');
  await download('ibrahim.jpg', 'ibrahim-pic_orig.jpg');
  console.log('Built', PAGES.length, 'pages');
})().catch(e => { console.error(e); process.exit(1); });
