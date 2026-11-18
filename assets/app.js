/* NSTW 2026 product pages - content and rendering.
   Sources: DOST-IX Congressional Report (pp. 83-84, 107), SETUP status reports,
   NSTW 2026 product list, and firm records of PSTO Zamboanga Sibugay. */

const FIRMS = {
  pickers: {
    name: "Picker's Calamansi Food Products",
    tagline: "Calamansi juice made from fruit grown on the family's own farm",
    location: "Salinding, Siay, Zamboanga Sibugay",
    address: "Prk. 4, Brgy. Salinding, Siay, Zamboanga Sibugay",
    owners: "Carlito A. Cariño, Jr. & Cherry Mae C. Cariño",
    phones: ["0906-561-5694", "0917-825-2692"],
    email: "pickers.calamansi@gmail.com",
    hero: "pickers-juice.jpg",
    featured: {
      name: "Calamansi Juice Drink with Honey",
      size: "200 ml pouch · Box of 10 pouches",
      // Optional price: leave "" to hide it, or fill in e.g. price: "₱13.00", priceLabel: "SRP per pouch"
      price: "₱13.00", priceLabel: "SRP per pouch",
      img: "pickers-pouch.jpg", imgPos: "center 42%",
      desc: "The natural sweetness of honey in every sip. Rich in Vitamin C to help boost immunity and keep you energized through the day.",
      // Ingredients as printed on the pouch label.
      ingredients: "Water, calamansi extract, refined sugar, potassium sorbate, honey",
      // storage.cold: true shows a snowflake (keep refrigerated); false shows the shelf icon.
      storage: { cold: false, text: "Store in a cool, dry place away from direct sunlight. Best served chilled. Refrigerate once opened. Shake well before drinking." },
      tags: ["Halal-certified", "FDA-compliant", "Rich in Vitamin C"]
    },
    // Other variations. While ingredients is "" the line stays hidden (fill it in once the firm confirms).
    more: [
      { name: "Calamansi Juice (ready to drink)", size: "250 ml and 350 ml pouches", ingredients: "",
        storage: { cold: false, text: "Cool, dry place. Refrigerate once opened." } },
      { name: "Calamansi Juice Concentrate", size: "1 litre bottle", ingredients: "",
        desc: "Dilute with water to taste.",
        storage: { cold: true, text: "Keep refrigerated after opening." } },
      { name: "Calamansi Puree", size: "Ask at the booth", ingredients: "",
        storage: { cold: true, text: "Keep refrigerated." } }
    ],
    story: [
      "Picker's Calamansi Food Products began in 2020, at the height of the COVID-19 pandemic, when Mr. and Mrs. Cariño saw two things in their community: an abundant local supply of calamansi, and a fruit known as a natural source of Vitamin C.",
      "What started as a household venture in Siay is now an FDA-compliant, Halal-certified enterprise. The family manages its own one-hectare calamansi plantation with about 1,000 fruit-bearing trees, and its juices are sold across the Zamboanga Peninsula, Basilan and Cebu City.",
      "Ms. Cherry Mae Cariño is a former OFW who reintegrated into local entrepreneurship with the support of DOST's iFWD PH program."
    ],
    stats: [
      { v: "148%", l: "increase in quarterly sales (₱1.5M in Q2 2026)" },
      { v: "6.5 hrs", l: "per batch, down from 8.5 hours" },
      { v: "+28.6%", l: "production capacity (3.6 batches a day)" },
      { v: "80°C", l: "precise pasteurization for safe, consistent juice" }
    ],
    statSource: "Source: SETUP status report, January to June 2026.",
    projects: [
      { title: "Upgrading the Production Efficiency for Calamansi Juice Processing", program: "DOST SETUP with iFWD PH", amount: "₱535,360.00", period: "July 2025 to June 2026" }
    ],
    equipment: [
      { n: "Stainless LPG pasteurizing kettle with agitator", d: "200-litre capacity, temperature controller and food-grade 316L stainless steel" },
      { n: "Twin-tub fruit washer", d: "Cleans calamansi fruit faster and more thoroughly before extraction" }
    ],
    gallery: ["pickers-kettle.jpg", "pickers-washer.jpg"],
    markets: ["Siay", "Kabasalan", "Imelda", "Zamboanga City", "Zamboanga del Sur", "Basilan", "Cebu City"],
    // 3D slides. Products are rectangles with the photo on the front face; cut: "name" instead cuts the
    // photo along its outline (img/3d/name-photo.jpg + name-mask.png) and gives it thickness.
    // crop: [x, y, w, h, imageWidth, imageHeight] shows only that part of the photo. Sizes in px: w, h, depth d.
    // Optional: price/priceLabel (price tag), ribbon (gold label), hooks (selling-point chips).
    products3d: [
      { name: "Calamansi Juice Drink with Honey", size: "200 ml stand-up pouch · turn it to see the nutrition facts",
        price: "₱13.00", priceLabel: "per pouch", ribbon: "Featured at NSTW 2026",
        hooks: ["Rich in Vitamin C", "Real calamansi + honey", "Halal-certified"],
        cut: "pickers-pouch2", back: "pickers-pouch-backphoto.jpg", w: 180, h: 298, d: 18, edge: "#1f7f26" },
      { name: "Picker's Calamansi Juice Drink carton", size: "Box of 10 pouches",
        ribbon: "Order by the box", hooks: ["For events and resellers", "FDA-compliant"],
        front: "pickers-box-front.jpg", back: "pickers-box-front.jpg", w: 300, h: 140, d: 180, side: "linear-gradient(90deg,#b98c58,#cfa774,#b98c58)" },
      { name: "Picker's Calamansi Concentrate", size: "1 litre bottle",
        ribbon: "Also in bottles", hooks: ["Dilute with water to taste", "Keep refrigerated after opening"],
        front: "pickers-bottle.webp", w: 290, h: 228, d: 12, color: "#1f7f26",
        side: "linear-gradient(90deg,#e4e9e1,#ffffff,#e4e9e1)" }
    ],
    // First screen: the firm's promotional banner.
    banner: "pickers-banner.webp"
  },

  dnf: {
    name: "Diamond Noodles Factory",
    tagline: "Deliciously different noodles from Ipil, since 2014",
    location: "Tiayon, Ipil, Zamboanga Sibugay",
    address: "Tiayon, Ipil, Zamboanga Sibugay",
    owners: "Lucia B. Coca (Founder) · Christine Jane C. Coca-Roque (General Manager)",
    phones: ["0935-184-4335"],
    email: "",
    hero: "dnf-pansit.jpg",
    featured: {
      name: "Diamond Noodles Pancit Canton",
      size: "200 g pack",
      // Optional price: leave "" to hide it, or fill in e.g. price: "₱45.00", priceLabel: "Per pack"
      price: "₱45.00", priceLabel: "Per pack",
      img: "dnf-canton.jpg", imgPos: "center 40%",
      desc: "A Filipino classic, expertly made from premium wheat flour. Perfect for special occasions or simple home-cooked meals. Mas pina-sarap!",
      // Fill in from the pack label; the line stays hidden while it is "".
      ingredients: "",
      storage: { cold: false, text: "No refrigeration needed. Store in a cool, dry place. Once opened, keep in an airtight container." },
      tags: ["Premium wheat flour", "Contains wheat (gluten)", "Made in Zamboanga Sibugay"]
    },
    more: [
      { name: "Dried Pansit Special", size: "20 g pack", img: "dnf-pansit.jpg", ingredients: "",
        desc: "Deliciously different. Fine yellow noodles for pansit and noodle soups.",
        storage: { cold: false, text: "Cool, dry place. No refrigeration needed." } },
      { name: "Misua Special", size: "20 g pack", img: "dnf-misua.jpg", ingredients: "",
        desc: "Fine wheat noodles that cook in minutes, ideal for misua soup.",
        storage: { cold: false, text: "Cool, dry place. No refrigeration needed." } },
      { name: "Miki and Odong", size: "Dried noodles", ingredients: "",
        storage: { cold: false, text: "Cool, dry place. No refrigeration needed." } },
      { name: "Squash Noodles", size: "Vegetable-enriched, 120 g", ingredients: "",
        storage: { cold: false, text: "Cool, dry place. No refrigeration needed." } }
    ],
    story: [
      "Ms. Lucia B. Coca started Diamond Noodles Factory in 2014 with ₱30,000 in capital, making dried miki and misua for the Ipil market. Within the year, \"Diamond Noodles\" was on its way to becoming a household name.",
      "Now managed by Ms. Christine Jane Coca-Roque, the firm makes dried pancit, pancit canton and vegetable-enriched noodles for markets across Regions IX, X and IV-B.",
      "Through DOST's Knowledge Transfer Program the firm adopted Total Quality Management and earned the Philippine Quality Award (PQA) Regional Recognition for Commitment to Quality Management (Level 1), one of only five firms nationwide to receive it."
    ],
    stats: [
      { v: "13×", l: "daily output: from 12 to 160 boxes a day" },
      { v: "₱18.6M", l: "gross sales in the 2nd semester of 2025" },
      { v: "+41", l: "jobs created in the community" },
      { v: "PQA", l: "Regional Recognition, one of 5 firms nationwide" }
    ],
    statSource: "Source: DOST-IX Congressional Report.",
    projects: [
      { title: "Upgrading the Production Facility of Diamond Noodles Factory", program: "DOST SETUP (Phase I)", amount: "₱2,868,800.00", period: "Started 2019" },
      { title: "Upgrading the Production Facility of Diamond Noodles Factory, Phase II", program: "DOST SETUP (Phase II)", amount: "₱6,454,000.00", period: "Ongoing" }
    ],
    equipment: [
      { n: "Noodle forming machine", d: "100 kg capacity, stainless steel" },
      { n: "Split laminating machine", d: "Even, consistent noodle sheets" },
      { n: "Slitter machine", d: "1 mm, 2 mm and 3 mm noodle strands" },
      { n: "7-roller noodle processing machine", d: "Phase II upgrade for higher quality pansit" }
    ],
    gallery: [],
    markets: ["Zamboanga Peninsula (Region IX)", "Northern Mindanao (Region X)", "MIMAROPA (Region IV-B)"],
    products3d: [
      { name: "Diamond Noodles Pancit Canton", size: "200 g pack",
        price: "₱45.00", priceLabel: "per pack", ribbon: "Featured at NSTW 2026",
        hooks: ["Premium wheat flour", "Mas pina-sarap!", "For special occasions"],
        front: "dnf-canton-photo.jpg", w: 230, h: 248, d: 34, color: "#3a9a26", side: "linear-gradient(90deg,#2f7f1f,#45ad33,#2f7f1f)" },
      { name: "Dried Pansit Special", size: "20 g pack",
        ribbon: "Deliciously different", hooks: ["Fine yellow noodles", "For pansit and noodle soups"],
        front: "dnf-pansit-photo.jpg", w: 290, h: 174, d: 26, color: "#e86a2b", side: "linear-gradient(90deg,#c9561f,#ee7a3d,#c9561f)" },
      { name: "Misua Special", size: "20 g pack",
        ribbon: "Quick to cook", hooks: ["Cooks in minutes", "Ideal for misua soup"],
        front: "dnf-misua-photo.jpg", w: 290, h: 184, d: 26, color: "#d61c7b", side: "linear-gradient(90deg,#b5146a,#e2358b,#b5146a)" }
    ],
    overview: [
      { img: "3d/dnf-canton-photo.jpg", name: "Pancit Canton", price: "₱45.00" },
      { img: "3d/dnf-pansit-photo.jpg", name: "Dried Pansit Special" },
      { img: "3d/dnf-misua-photo.jpg", name: "Misua Special" }
    ]
  }
};

/* ---------- helpers ---------- */
const ROOT = document.body.dataset.root || "";
const IMG = f => ROOT + "img/" + f;
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tel = p => "tel:" + p.replace(/[^0-9+]/g, "");
const maps = a => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(a);
const I = {
  phone: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-3.3 0-8 1.7-8 5v1h11.1a6 6 0 0 1 3.9-5.6A12 12 0 0 0 12 14zm7 1v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 16a3 3 0 0 0-2.4 1.2l-6.7-3.4a3 3 0 0 0 0-1.6l6.7-3.4A3 3 0 1 0 15 7l-6.7 3.4a3 3 0 1 0 0 3.2L15 17a3 3 0 1 0 3-1z"/></svg>',
  circ: (bg, path) => `<svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="18" fill="${bg}"/><g transform="translate(7 7) scale(.92)" fill="#fff">${path}</g></svg>`
};
const P_PHONE = '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/>';
const P_PIN = '<path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>';
const P_MAIL = '<path d="M3 5h18v14H3z" fill="none" stroke="#fff" stroke-width="2"/><path d="M3 6l9 7 9-7" fill="none" stroke="#fff" stroke-width="2"/>';
const P_USER = '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5z"/>';

function header() {
  return `<div class="strip" role="presentation"></div>
  <div class="top"><img src="${IMG("dost-logo.png")}" alt="Department of Science and Technology"><img class="nstw" src="${IMG("nstw-logo.png")}" alt="2026 NSTW"></div>`;
}
function footer() {
  return `<footer>
    <img src="${IMG("dost-logo.png")}" alt="Department of Science and Technology">
    <p class="ev">National Science, Technology and Innovation Week 2026</p>
    <p>November 25-29, 2026 · General Santos City</p>
    <p>Presented by DOST-IX · Provincial Science and Technology Office, Zamboanga Sibugay</p>
  </footer><div class="strip" role="presentation"></div>`;
}

/* Ingredients + storage block shared by the featured card and each variation.
   Project amounts and impact figures are left off the QR page on purpose: they are in the printed
   representative brief (NSTW-2026-Representative-Brief.html), discussed in person at the booth. */
const P_SNOW = '<path d="M11 2h2v4.6l2.6-2.6 1.4 1.4L13 9.4V11h1.6l4-4 1.4 1.4-2.6 2.6H22v2h-4.6l2.6 2.6-1.4 1.4-4-4H13v1.6l4 4-1.4 1.4-2.6-2.6V22h-2v-4.6L8.4 20 7 18.6l4-4V13H9.4l-4 4L4 15.6 6.6 13H2v-2h4.6L4 8.4 5.4 7l4 4H11V9.4l-4-4L8.4 4 11 6.6z"/>';
const P_SHELF = '<path d="M3 4h18v2H3zm2 3h6v6H5zm8 2h6v4h-6zM3 14h18v2H3zm2 3h4v3H5zm6 0h8v3h-8z"/>';
const P_LEAF = '<path d="M20 3c-9 0-15 4-15 11 0 2 .6 3.6 1.5 4.8L4 21.3 5.4 22.7l2.6-2.6c1.2.6 2.6.9 4 .9 7 0 9-7 8-18zM9 17c2-4 5-7 9-9-3 3-6 6-9 9z"/>';
function factsHTML(x) {
  const st = x.storage;
  if (!x.ingredients && !st) return "";
  return `<dl class="facts">
    ${x.ingredients ? `<div class="fi"><span class="fic">${I.circ("#3f8f3a", P_LEAF)}</span><div><dt>Ingredients</dt><dd>${esc(x.ingredients)}</dd></div></div>` : ""}
    ${st ? `<div class="fi ${st.cold ? "cold" : "dry"}"><span class="fic">${I.circ(st.cold ? "#3d8fc6" : "#c9822e", st.cold ? P_SNOW : P_SHELF)}</span><div><dt>${st.cold ? "Keep refrigerated" : "Room temperature"}</dt><dd>${esc(st.text)}</dd></div></div>` : ""}
  </dl>`;
}

/* ---------- firm page ---------- */
function renderFirm(key) {
  const f = FIRMS[key]; if (!f) return;
  document.title = `${f.name} | NSTW 2026`;
  const p = f.featured;
  const moreHtml = `<div class="vars">${f.more.map(m => `<article class="var">
      ${m.img ? `<img loading="lazy" src="${IMG(m.img)}" alt="${esc(m.name)}">` : ""}
      <div class="vb">
        <h3>${esc(m.name)}</h3><p class="size">${esc(m.size)}${m.price ? ` · <b>${esc(m.price)}</b>` : ""}</p>
        ${m.desc ? `<p class="vd">${esc(m.desc)}</p>` : ""}
        ${factsHTML(m)}
      </div></article>`).join("")}</div>`;

  document.getElementById("app").innerHTML = `
  ${header()}
  ${f.overview || f.banner ? overviewHTML(f) : `<div class="hero">
    <img class="photo" src="${IMG(f.hero)}" alt="${esc(f.name)} products" fetchpriority="high">
    <span class="badge">DOST-SETUP <b>Assisted Firm</b></span>
  </div>`}
  <div class="titlewrap">
    <div class="title">
      <h1>${esc(f.name)}</h1>
      <p>${esc(f.tagline)}</p>
      <div class="loc"><span style="width:18px;height:18px;color:var(--orange)">${I.pin}</span>${esc(f.location)}</div>
    </div>
    <div class="bar"></div>
  </div>

  ${f.products3d ? viewer3dHTML(f) : ""}

  <section>
    <h2>Featured product</h2>
    <article class="product featured">
      <img class="pimg" src="${IMG(p.img)}" alt="${esc(p.name)}"${p.imgPos ? ` style="object-position:${p.imgPos}"` : ""}>
      <div class="pbody">
        <h3>${esc(p.name)}</h3>
        <p class="size">${esc(p.size)}</p>
        <p class="desc">${esc(p.desc)}</p>
        ${factsHTML(p)}
        <div class="prow">
          <div class="tags">${p.tags.map((t, i) => `<span class="tag${i === 0 ? " gold" : ""}">${esc(t)}</span>`).join("")}</div>
          ${p.price ? `<div class="price">${p.priceLabel ? `<small>${esc(p.priceLabel)}</small>` : ""}${esc(p.price)}</div>` : ""}
        </div>
      </div>
    </article>
  </section>

  <section>
    <h2>Variations</h2>
    ${moreHtml}
  </section>

  <section class="story">
    <h2>Our story</h2>
    ${f.story.map(t => `<p>${esc(t)}</p>`).join("")}
  </section>

  <section>
    <h2>Where to buy</h2>
    <div class="chips">${f.markets.map(m => `<span class="chip">${esc(m)}</span>`).join("")}</div>
  </section>

  <section>
    <h2>Contact the firm</h2>
    <div class="contact">
      ${f.phones.map((ph, i) => `<a href="${tel(ph)}">${I.circ("#e76332", P_PHONE)}<div>${esc(ph)}<small>${i === 0 ? "Call or text" : "Alternate number"}</small></div></a>`).join("")}
      ${f.email ? `<a href="mailto:${esc(f.email)}">${I.circ("#9b2a1f", P_MAIL)}<div>${esc(f.email)}<small>Email for orders and inquiries</small></div></a>` : ""}
      <a href="${maps(f.address)}" target="_blank" rel="noopener">${I.circ("#1d4e89", P_PIN)}<div>${esc(f.address)}<small>Open in Google Maps</small></div></a>
      <div class="row">${I.circ("#3d8fc6", P_USER)}<div>${esc(f.owners)}<small>Owners / management</small></div></div>
    </div>
  </section>

  ${footer()}`;

  document.getElementById("actions").innerHTML = `<div class="in">
    <a class="btn primary" href="${tel(f.phones[0])}">${I.phone}Call</a>
    <a class="btn sec" href="${maps(f.address)}" target="_blank" rel="noopener">${I.pin}Map</a>
    <button class="btn sec" type="button" id="saveBtn">${I.save}Save</button>
  </div>`;
  document.getElementById("saveBtn").addEventListener("click", () => saveContact(f));
  animate();
  if (f.products3d) init3D(f);
}

/* ---------- 3D product viewer (pure CSS 3D, no library) ----------
   Packs are rectangles with the photo stretched to fill each face; the bottle wraps the photos around
   a round body. Drag to rotate; arrows, dots or swipe on the caption to change product. */

/* First screen: a neat overview of the firm's products. The first photo is the large tile. */
function overviewHTML(f) {
  if (f.banner) return `<div class="hero overview">
    <div class="ov-head"><span class="badge">DOST-SETUP <b>Assisted Firm</b></span><span class="ov-cap">Our products</span></div>
    <img class="ov-banner" src="${IMG(f.banner)}" alt="${esc(f.name)}: ${esc(f.products3d.map(p => p.name).join(", "))}" fetchpriority="high">
  </div>`;
  const tile = (it, i) => `<figure class="ov-t${i ? "" : " big"}"><img src="${IMG(it.img)}" alt="${esc(it.name)}"${i ? '' : ' fetchpriority="high"'}>
      ${it.price ? `<span class="ov-price">${esc(it.price)}</span>` : ""}<figcaption>${esc(it.name)}</figcaption></figure>`;
  return `<div class="hero overview">
    <div class="ov-head"><span class="badge">DOST-SETUP <b>Assisted Firm</b></span><span class="ov-cap">Our products</span></div>
    <div class="ov-grid">${f.overview.map(tile).join("")}</div>
  </div>`;
}

function viewer3dHTML(f) {
  // Round bottle: the body is a ring of narrow strips; each strip shows its own slice of the photo,
  // so the front photo wraps around the front half and the back photo around the back half.
  const bottle = p => {
    const R = 62, N = 32, sw = +(2 * R * Math.tan(Math.PI / N) + 0.6).toFixed(2), half = sw * N / 2;
    const W = p.w, capH = 28, neckH = 20, shH = 40, bodyH = p.h - capH - neckH - shH, bodyTop = capH + neckH + shH;
    const ring = (n, r, w, h, top, styleFn) => Array.from({ length: n }, (_, i) =>
      `<div class="bt" style="left:${((W - w) / 2).toFixed(2)}px;top:${top}px;width:${w}px;height:${h}px;transform:rotateY(${(i * 360 / n).toFixed(2)}deg) translateZ(${r}px);${styleFn(i)}"></div>`).join("");
    const shade = i => (0.82 + 0.18 * Math.cos((i / N) * 2 * Math.PI - 0.6)).toFixed(3);
    const body = ring(N, R, sw, bodyH, bodyTop, i => {
      const k = (i + N / 4) % N, front = k < N / 2;          // strips facing the viewer show the front photo
      const j = k % (N / 2);                               // left-to-right column of that photo
      if (p.wrap) {                                         // one bottle photo: its label area wraps all the way round
        const c = p.wrap, sx = half / c.w, sy = bodyH / c.h;
        return `background:url(${IMG("3d/" + c.img)}) ${(-(c.x * sx) - j * sw).toFixed(2)}px ${(-c.y * sy).toFixed(2)}px/${(c.W * sx).toFixed(1)}px ${(c.H * sy).toFixed(1)}px no-repeat;filter:brightness(${shade(i)})`;
      }
      const img = IMG("3d/" + (front ? p.front : p.back));
      return `background:url(${img}) ${(-j * sw).toFixed(2)}px 0/${half.toFixed(2)}px ${bodyH}px no-repeat;filter:brightness(${shade(i)})`;
    });
    const rS = 22, nS = 24, swS = +(2 * R * Math.tan(Math.PI / nS) + 0.6).toFixed(2);
    const slant = Math.hypot(R - rS, shH), tilt = Math.atan2(R - rS, shH) * 180 / Math.PI, top = (rS / R) * 100;
    const shoulder = Array.from({ length: nS }, (_, i) =>
      `<div class="bt sh" style="left:${((W - swS) / 2).toFixed(2)}px;top:${(capH + neckH + (shH - slant) / 2).toFixed(2)}px;width:${swS}px;height:${slant.toFixed(2)}px;
        clip-path:polygon(0 100%,100% 100%,${(50 + top / 2).toFixed(1)}% 0,${(50 - top / 2).toFixed(1)}% 0);
        transform:rotateY(${(i * 360 / nS).toFixed(2)}deg) translateZ(${((R + rS) / 2).toFixed(2)}px) rotateX(${tilt.toFixed(2)}deg);${p.liquid ? `background:linear-gradient(180deg,${p.liquid[0]},${p.liquid[1]});` : ""}filter:brightness(${(0.8 + 0.2 * Math.cos(i / nS * 2 * Math.PI - 0.6)).toFixed(3)})"></div>`).join("");
    const nN = 16, swN = +(2 * rS * Math.tan(Math.PI / nN) + 0.6).toFixed(2), rC = 25, swC = +(2 * rC * Math.tan(Math.PI / nN) + 0.6).toFixed(2);
    const neck = ring(nN, rS, swN, neckH + 2, capH - 1, () => p.liquid ? `background:linear-gradient(90deg,${p.liquid[1]},${p.liquid[0]},${p.liquid[1]})` : "background:linear-gradient(90deg,#cfe7a0,#e9f5c9,#cfe7a0)");
    const cap = ring(nN, rC, swC, capH, 0, i => `background:repeating-linear-gradient(90deg,${p.cap} 0 3px,#14561a 3px 4px);filter:brightness(${(0.8 + 0.2 * Math.cos(i / nN * 2 * Math.PI - 0.6)).toFixed(3)})`);
    const disc = (r, y, bg, rot) => `<div class="bt disc" style="left:${W / 2 - r}px;top:${y - r}px;width:${2 * r}px;height:${2 * r}px;background:${bg};transform:rotateX(${rot}deg)"></div>`;
    return cap + disc(rC, 0, p.cap, 90) + neck + shoulder + body + disc(R, p.h, p.liquid ? p.liquid[1] : "#14561a", -90);
  };
  // Solid cut-out: the outline is stacked in thin slices so the edge follows the pack's real shape;
  // the photo sits on the front slice and the back photo on the rear one.
  const cutout = p => {
    const mask = `url(${IMG("3d/" + p.cut + "-mask.png")})`, n = Math.max(12, Math.round(p.d / 1.2)), out = [];
    const m = `-webkit-mask-image:${mask};mask-image:${mask}`;
    for (let i = 1; i < n; i++) {
      const z = (i / n - 0.5) * p.d, shade = 0.55 + 0.25 * Math.abs(i / n - 0.5) * 2;
      out.push(`<div class="sl" style="${m};background:${p.edge};filter:brightness(${shade.toFixed(2)});transform:translateZ(${z.toFixed(1)}px)"></div>`);
    }
    const front = `<div class="sl face" style="${m};transform:translateZ(${p.d / 2}px)"><img src="${IMG("3d/" + p.cut + "-photo.jpg")}" alt="${esc(p.name)}" draggable="false" loading="lazy" decoding="async"></div>`;
    const back = p.back
      ? `<div class="sl face bk" style="${m};transform:translateZ(${-p.d / 2}px)"><img src="${IMG("3d/" + p.back)}" alt="${esc(p.name)} (back)" draggable="false" loading="lazy" decoding="async"></div>`
      : `<div class="sl face bk" style="${m};transform:translateZ(${-p.d / 2}px)">${genBack(p)}</div>`;
    return out.join("") + front + back;
  };
  const faces = p => {
    if (p.bottle) return bottle(p);
    if (p.cut) return cutout(p);
    const img = (file, alt) => `<img src="${IMG("3d/" + file)}" alt="${esc(alt)}" draggable="false" loading="lazy" decoding="async">`;
    const back = p.back ? img(p.back, p.name + " (back)") : genBack(p);
    const side = `style="background:${p.side}"`;
    const front = p.crop
      ? `<div class="crop" role="img" aria-label="${esc(p.name)}" style="background:url(${IMG("3d/" + p.front)}) ${(-p.crop[0] * p.w / p.crop[2]).toFixed(1)}px ${(-p.crop[1] * p.h / p.crop[3]).toFixed(1)}px/${(p.crop[4] * p.w / p.crop[2]).toFixed(1)}px ${(p.crop[5] * p.h / p.crop[3]).toFixed(1)}px no-repeat"></div>`
      : img(p.front, p.name);
    return `<div class="fc front">${front}</div><div class="fc back">${back}</div>
      <div class="fc right" ${side}></div><div class="fc left" ${side}></div><div class="fc top" ${side}></div><div class="fc bottom" ${side}></div>`;
  };
  // Back of a pack we have no photo of: a clean label in the pack's own colour.
  function genBack(p) {
    return `<div class="gen" style="--c:${p.color}"><div class="gl"><small>${esc(f.name)}</small><b>${esc(p.name)}</b><span>${esc(p.size)}</span><i></i><em>Made in ${esc(f.location.split(", ").slice(-1)[0])}</em></div><p>DOST-SETUP assisted · NSTW 2026</p></div>`;
  }
  const items = f.products3d;
  const tags = p => `${p.ribbon ? `<span class="v3d-rib">${esc(p.ribbon)}</span>` : ""}${p.price ? `<span class="v3d-price"><small>${esc(p.priceLabel || "")}</small>${esc(p.price)}</span>` : ""}`;
  return `<section class="v3d" aria-label="Products in 3D">
    <h2>Products in 3D</h2>
    <div class="v3d-stage" id="v3dStage" tabindex="0" aria-label="3D product viewer. Drag to rotate, use the arrow keys to change product.">
      <div class="v3d-pedestal"></div>
      ${items.map((p, i) => `<div class="v3d-slide${i ? " right" : " on"}" data-i="${i}">${tags(p)}<div class="v3d-obj${p.bottle ? " bottle" : p.cut ? " cut" : " box"}" style="--w:${p.w}px;--h:${p.h}px;--d:${p.d}px">${faces(p)}</div></div>`).join("")}
      ${items.length > 1 ? `<button class="v3d-nav prev" type="button" aria-label="Previous product">&#8249;</button><button class="v3d-nav next" type="button" aria-label="Next product">&#8250;</button>` : ""}
      <div class="v3d-hint">&#8634; Drag to rotate</div>
    </div>
    <div class="v3d-cap" id="v3dCap"><b id="v3dName"></b><span id="v3dSize"></span><div class="v3d-hooks" id="v3dHooks"></div></div>
    ${items.length > 1 ? `<div class="v3d-dots">${items.map((p, i) => `<button type="button" aria-label="Show ${esc(p.name)}" data-i="${i}"></button>`).join("")}</div>` : ""}
  </section>`;
}

function init3D(f) {
  const stage = document.getElementById("v3dStage"); if (!stage) return;
  const slides = [...stage.querySelectorAll(".v3d-slide")], dots = [...document.querySelectorAll(".v3d-dots button")];
  const items = f.products3d, auto = MOTION_OK;
  let idx = 0, rx = -10, ry = -28, vx = 0, vy = 0, drag = null, last = 0, visible = true, raf = 0, target = null, swaying = false;

  const fit = () => slides.forEach((s, i) => {          // shrink large packs to fit small phone screens
    const p = items[i], k = Math.min(1, stage.clientWidth * 0.64 / p.w, stage.clientHeight * 0.58 / p.h);
    s.querySelector(".v3d-obj").style.setProperty("--s", k.toFixed(3));
  });
  const apply = () => { const o = slides[idx].querySelector(".v3d-obj"); o.style.setProperty("--rx", rx.toFixed(1) + "deg"); o.style.setProperty("--ry", ry.toFixed(1) + "deg"); };
  const go = n => {
    const prev = idx; idx = (n + items.length) % items.length;
    slides.forEach((s, i) => { s.classList.toggle("on", i === idx); s.classList.toggle("left", i !== idx && (i < idx)); s.classList.toggle("right", i !== idx && i > idx); });
    dots.forEach((d, i) => d.setAttribute("aria-current", i === idx ? "true" : "false"));
    document.getElementById("v3dName").textContent = items[idx].name;
    document.getElementById("v3dSize").textContent = items[idx].size;
    document.getElementById("v3dHooks").innerHTML = (items[idx].hooks || []).map(h => `<span>${esc(h)}</span>`).join("");
    // welcome spin: one full turn that settles with the front facing the viewer
    vx = vy = 0; swaying = false; rx = -10; ry = (auto && prev !== idx) ? -28 - 360 : -28; target = (auto && prev !== idx) ? -28 : null;
    last = performance.now(); apply();
  };

  stage.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;
    drag = { x: e.clientX, y: e.clientY }; vx = vy = 0; target = null; swaying = false; stage.setPointerCapture(e.pointerId); stage.classList.add("grab");
  });
  stage.addEventListener("pointermove", e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag = { x: e.clientX, y: e.clientY };
    vx = dx * 0.5; vy = -dy * 0.35; ry += vx; rx = Math.max(-45, Math.min(45, rx + vy)); last = performance.now(); apply();
  });
  const end = () => { drag = null; stage.classList.remove("grab"); last = performance.now(); };
  stage.addEventListener("pointerup", end); stage.addEventListener("pointercancel", end);
  stage.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { go(idx + 1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { go(idx - 1); e.preventDefault(); }
  });
  stage.querySelector(".prev")?.addEventListener("click", () => go(idx - 1));
  stage.querySelector(".next")?.addEventListener("click", () => go(idx + 1));
  dots.forEach(d => d.addEventListener("click", () => go(+d.dataset.i)));

  // swipe on the caption / dots row to change product (dragging the stage itself rotates)
  let sx = null; const cap = document.getElementById("v3dCap");
  cap.addEventListener("pointerdown", e => { sx = e.clientX; });
  cap.addEventListener("pointerup", e => { if (sx !== null && Math.abs(e.clientX - sx) > 40) go(idx + (e.clientX < sx ? 1 : -1)); sx = null; });

  const tick = now => {
    if (!drag && target !== null) {
      ry += (target - ry) * 0.07; if (Math.abs(target - ry) < 0.4) { ry = target; target = null; last = now; } apply();
    } else if (!drag) {
      if (Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05) { ry += vx; rx = Math.max(-45, Math.min(45, rx + vy)); vx *= 0.93; vy *= 0.9; apply(); }
      // at rest: a slow, gentle sway around the front view (formal turntable) instead of a full spin
      else if (auto && now - last > 2500) {
        if (!swaying) { ry = ((ry + 180) % 360 + 360) % 360 - 180; swaying = true; }
        ry += ((-20 + 24 * Math.sin(now / 1700)) - ry) * 0.035; rx += (-8 - rx) * 0.03; apply();
      }
    }
    raf = visible ? requestAnimationFrame(tick) : 0;
  };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => { visible = e.isIntersecting; if (visible && !raf) raf = requestAnimationFrame(tick); })).observe(stage);
  }
  addEventListener("resize", fit);
  fit(); go(0); raf = requestAnimationFrame(tick);
}

/* ---------- motion: scroll reveals and counting numbers ---------- */
const MOTION_OK = !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

function countUp(el) {
  const m = el.textContent.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!m) return;                                   // e.g. "PQA" stays as text
  const [, pre, num, post] = m, end = parseFloat(num), dec = (num.split(".")[1] || "").length;
  const t0 = performance.now(), dur = 1400;
  const step = now => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = pre + (end * e).toFixed(dec) + post;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function animate() {
  if (!MOTION_OK) return;
  const groups = [".product", ".var", ".mini .m", ".chips .chip", ".stat", ".story p", ".project", ".equip li", ".gallery img", ".contact", ".firm"];
  // Only content below the first screen fades in; what is visible on arrival shows immediately.
  const fold = innerHeight * 0.9;
  groups.forEach(sel => document.querySelectorAll(sel).forEach((el, i) => {
    if (el.getBoundingClientRect().top < fold) return;
    el.classList.add("reveal"); el.style.setProperty("--d", Math.min(i, 6) * 0.08 + "s");
  }));
  const show = el => {
    el.classList.add("in");
    if (el.classList.contains("stat")) { const b = el.querySelector("b"); if (b && !b.dataset.done) { b.dataset.done = 1; countUp(b); } }
  };
  if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(show); return; }
  const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Safety net: anything that is on screen (or already scrolled past) is shown,
  // even if the observer is slow, so no content can stay invisible.
  const sweep = () => {
    const pending = document.querySelectorAll(".reveal:not(.in)");
    pending.forEach(el => { if (el.getBoundingClientRect().top < innerHeight * 0.95) { show(el); io.unobserve(el); } });
    if (!pending.length) { clearInterval(timer); removeEventListener("scroll", onScroll); }
  };
  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; setTimeout(() => { ticking = false; sweep(); }, 120); } };
  addEventListener("scroll", onScroll, { passive: true });
  const timer = setInterval(sweep, 700);
}

/* Downloads a vCard so visitors can add the firm to their phone contacts. */
function saveContact(f) {
  const v = ["BEGIN:VCARD", "VERSION:3.0", `FN:${f.name}`, `ORG:${f.name}`,
    ...f.phones.map(p => `TEL;TYPE=CELL:${p.replace(/[^0-9+]/g, "")}`),
    f.email ? `EMAIL:${f.email}` : "", `ADR;TYPE=WORK:;;${f.address};;;;Philippines`,
    `NOTE:${f.featured.name} - DOST-SETUP assisted firm (NSTW 2026)`, `URL:${location.href}`, "END:VCARD"].filter(Boolean).join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard" }));
  a.download = f.name.replace(/[^A-Za-z0-9]+/g, "-") + ".vcf";
  document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- index page ---------- */
function renderIndex() {
  const cards = Object.entries(FIRMS).map(([k, f]) => `<a class="firm" href="${k}/">
    <img src="${IMG(f.hero)}" alt="${esc(f.name)}"><div><b>${esc(f.name)}</b><span>${esc(f.featured.name)} · ${esc(f.location)}</span><em>View products &rarr;</em></div></a>`).join("");
  document.getElementById("app").innerHTML = `${header()}
    <div class="intro"><h1>SETUP-assisted products</h1><p>Local enterprises from Zamboanga Sibugay supported by DOST's Small Enterprise Technology Upgrading Program.</p></div>
    <div class="bar" style="margin-bottom:6px"></div>
    <section>${cards}</section>${footer()}`;
  animate();
}
