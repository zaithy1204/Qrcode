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
      img: "pickers-pouch.jpg", imgPos: "center 42%",
      desc: "The natural sweetness of honey in every sip. Made with water, calamansi extract, refined sugar, potassium sorbate and honey. Rich in Vitamin C to help boost immunity and keep you energized through the day.",
      tags: ["Halal-certified", "FDA-compliant", "Rich in Vitamin C", "Shake well before drinking"]
    },
    more: [
      { name: "Calamansi Juice (ready to drink)", size: "250 ml and 350 ml pouches" },
      { name: "Calamansi Juice Concentrate", size: "1 litre bottle" },
      { name: "Calamansi Puree", size: "Ask at the booth" }
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
    markets: ["Siay", "Kabasalan", "Imelda", "Zamboanga City", "Zamboanga del Sur", "Basilan", "Cebu City"]
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
      img: "dnf-canton.jpg", imgPos: "center 40%",
      desc: "A Filipino classic, expertly made from premium wheat flour. Perfect for special occasions or simple home-cooked meals. Mas pina-sarap!",
      tags: ["Premium wheat flour", "Made in Zamboanga Sibugay"]
    },
    more: [
      { name: "Dried Pansit Special", size: "Deliciously different", img: "dnf-pansit.jpg" },
      { name: "Misua Special", size: "Fine wheat noodles", img: "dnf-misua.jpg" },
      { name: "Miki and Odong", size: "Dried noodles" },
      { name: "Squash Noodles", size: "Vegetable-enriched, 120 g" }
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
    markets: ["Zamboanga Peninsula (Region IX)", "Northern Mindanao (Region X)", "MIMAROPA (Region IV-B)"]
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

/* ---------- firm page ---------- */
function renderFirm(key) {
  const f = FIRMS[key]; if (!f) return;
  document.title = `${f.name} | NSTW 2026`;
  const p = f.featured;
  const moreHtml = f.more.some(m => m.img)
    ? `<div class="mini">${f.more.filter(m => m.img).map(m => `<div class="m"><img loading="lazy" src="${IMG(m.img)}" alt="${esc(m.name)}"><div>${esc(m.name)}<span>${esc(m.size)}</span></div></div>`).join("")}</div>
       <div class="chips" style="margin-top:10px">${f.more.filter(m => !m.img).map(m => `<span class="chip">${esc(m.name)} · <span style="color:var(--muted)">${esc(m.size)}</span></span>`).join("")}</div>`
    : `<div class="chips">${f.more.map(m => `<span class="chip">${esc(m.name)} · <span style="color:var(--muted)">${esc(m.size)}</span></span>`).join("")}</div>`;

  document.getElementById("app").innerHTML = `
  ${header()}
  <div class="hero">
    <img class="photo" src="${IMG(f.hero)}" alt="${esc(f.name)} products" fetchpriority="high">
    <span class="badge">DOST-SETUP <b>Assisted Firm</b></span>
  </div>
  <div class="titlewrap">
    <div class="title">
      <h1>${esc(f.name)}</h1>
      <p>${esc(f.tagline)}</p>
      <div class="loc"><span style="width:18px;height:18px;color:var(--orange)">${I.pin}</span>${esc(f.location)}</div>
    </div>
    <div class="bar"></div>
  </div>

  <section>
    <h2>Featured product</h2>
    <article class="product featured">
      <img class="pimg" src="${IMG(p.img)}" alt="${esc(p.name)}"${p.imgPos ? ` style="object-position:${p.imgPos}"` : ""}>
      <div class="pbody">
        <h3>${esc(p.name)}</h3>
        <p class="size">${esc(p.size)}</p>
        <p class="desc">${esc(p.desc)}</p>
        <div class="prow">
          <div class="tags">${p.tags.map((t, i) => `<span class="tag${i === 0 ? " gold" : ""}">${esc(t)}</span>`).join("")}</div>
        </div>
      </div>
    </article>
  </section>

  <section>
    <h2>Also available</h2>
    ${moreHtml}
  </section>

  <section>
    <h2>Impact of DOST support</h2>
    <div class="stats">${f.stats.map(s => `<div class="stat"><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join("")}</div>
    <p class="src">${esc(f.statSource)}</p>
  </section>

  <section class="story">
    <h2>Our story</h2>
    ${f.story.map(t => `<p>${esc(t)}</p>`).join("")}
  </section>

  <section>
    <h2>DOST project</h2>
    ${f.projects.map(pr => `<div class="project"><div class="pt">${esc(pr.title)}</div>
      <dl><dt>Program</dt><dd>${esc(pr.program)}</dd><dt>Assistance</dt><dd>${esc(pr.amount)}</dd><dt>Period</dt><dd>${esc(pr.period)}</dd></dl></div>`).join("")}
  </section>

  <section>
    <h2>Technology provided</h2>
    <ul class="equip">${f.equipment.map((e, i) => `<li><i>${i + 1}</i><div><b>${esc(e.n)}</b><span>${esc(e.d)}</span></div></li>`).join("")}</ul>
    ${f.gallery.length ? `<div class="gallery">${f.gallery.map(g => `<img loading="lazy" src="${IMG(g)}" alt="Equipment provided through DOST SETUP">`).join("")}</div>` : ""}
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
  const groups = [".product", ".mini .m", ".chips .chip", ".stat", ".story p", ".project", ".equip li", ".gallery img", ".contact", ".firm"];
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
