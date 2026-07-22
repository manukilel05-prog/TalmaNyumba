/* ==========================================================================
   TALMA HOMES — Shared site behaviour
   Handles: mobile nav, WhatsApp links, property card rendering,
   listings filters, property detail page, contact form -> WhatsApp.
   ========================================================================== */

const WA_ICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.34.66 4.53 1.8 6.4L4 29l7.76-1.76a11.9 11.9 0 0 0 4.26.78h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.86c-1.5 0-2.96-.4-4.24-1.15l-.3-.18-4.6 1.04 1.06-4.48-.2-.31a9.83 9.83 0 0 1-1.53-5.26c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.9a9.85 9.85 0 0 1 2.9 6.99c0 5.47-4.45 9.9-9.92 9.9zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>`;

/* ---------- WhatsApp helpers ---------- */
function waLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function propertyWaMessage(p) {
  return `Hi ${SITE.businessName}, I'm interested in ${p.title} (Ref: ${p.ref}) in ${p.area}, listed at ${p.priceLabel}. Is it still available?`;
}
function specLine(p) {
  if (p.type === 'Land') return `${p.lot.toUpperCase()} PLOT`;
  const parts = [];
  if (p.beds) parts.push(`${p.beds} BD`);
  if (p.baths) parts.push(`${p.baths} BA`);
  if (p.sqft) parts.push(`${p.sqft.toLocaleString()} SQFT`);
  return parts.join(' · ');
}

/* ---------- Property card ---------- */
function propertyCardHTML(p) {
  return `
  <article class="property-card">
    <div class="property-card__image frame frame--always">
      <span class="corner corner--tl"></span><span class="corner corner--tr"></span><span class="corner corner--bl"></span><span class="corner corner--br"></span>
      <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
      <span class="badge">${p.status}</span>
      <a class="wa-quick" href="${waLink(SITE.whatsappNumber, propertyWaMessage(p))}" target="_blank" rel="noopener" aria-label="Ask about ${p.title} on WhatsApp">${WA_ICON}</a>
    </div>
    <div class="property-card__body">
      <span class="property-card__location">${p.area} · ${p.type}</span>
      <h3 class="property-card__title">${p.title}</h3>
      <p class="property-card__specs">${specLine(p)}</p>
    </div>
    <div class="property-card__footer">
      <span class="property-card__price">${p.priceLabel}</span>
      <span class="property-card__cta">View details →</span>
    </div>
    <a class="property-card__link" href="property.html?id=${p.id}" aria-label="View ${p.title}"></a>
  </article>`;
}

function renderGrid(el, list) {
  if (!el) return;
  el.innerHTML = list.length
    ? list.map(propertyCardHTML).join('')
    : `<p class="empty-state">No properties match yet — message us on WhatsApp and we'll help you find one.</p>`;
}

/* ---------- Nav (mobile menu) ---------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');
  if (!toggle || !menu) return;
  const open = () => { menu.classList.add('is-open'); document.body.classList.add('menu-open'); };
  const shut = () => { menu.classList.remove('is-open'); document.body.classList.remove('menu-open'); };
  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', shut);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
}

/* ---------- Floating WhatsApp button (all pages) ---------- */
function injectWaFloat() {
  const a = document.createElement('a');
  a.className = 'wa-float';
  a.href = waLink(SITE.whatsappNumber, SITE.defaultWhatsappMessage);
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Chat with us on WhatsApp');
  a.innerHTML = WA_ICON;
  document.body.appendChild(a);
}

/* ---------- Footer year ---------- */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- About page: team ---------- */
function teamCardHTML(m) {
  return `
  <div class="team-card">
    <div class="team-card__photo"><img src="${m.photo}" alt="${m.name}, ${m.role}" loading="lazy"></div>
    <h3 class="team-card__name">${m.name}</h3>
    <span class="team-card__role">${m.role}</span>
    <div class="team-card__contact">
      <a href="${waLink(m.phone, `Hi ${m.name}, I got your contact from the Talma Homes website.`)}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </div>`;
}
function initTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = TEAM.map(teamCardHTML).join('');
}

/* ---------- Home page: featured listings ---------- */
function initFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  renderGrid(grid, PROPERTIES.slice(0, 3));
}

/* ---------- Listings page: filters ---------- */
function initListings() {
  const grid = document.getElementById('listings-grid');
  if (!grid) return;

  const typeSel = document.getElementById('filter-type');
  const areaSel = document.getElementById('filter-area');
  const priceSel = document.getElementById('filter-price');
  const countEl = document.getElementById('listings-count');

  const areas = [...new Set(PROPERTIES.map(p => p.area))].sort();
  areas.forEach(a => {
    const opt = document.createElement('option');
    opt.value = a;
    opt.textContent = a;
    areaSel.appendChild(opt);
  });

  function apply() {
    let list = PROPERTIES.slice();
    if (typeSel.value !== 'all') list = list.filter(p => p.type === typeSel.value);
    if (areaSel.value !== 'all') list = list.filter(p => p.area === areaSel.value);
    if (priceSel.value !== 'all') {
      const [minStr, maxStr] = priceSel.value.split('-');
      const min = Number(minStr);
      const max = maxStr === 'plus' ? Infinity : Number(maxStr);
      list = list.filter(p => p.price == null || (p.price >= min && p.price <= max));
    }
    renderGrid(grid, list);
    countEl.textContent = `${list.length} ${list.length === 1 ? 'property' : 'properties'}`;
  }

  [typeSel, areaSel, priceSel].forEach(s => s.addEventListener('change', apply));
  apply();
}

/* ---------- Property detail page ---------- */
function initPropertyDetail() {
  const root = document.getElementById('property-detail');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  document.title = `${property.title} — ${SITE.businessName}`;
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setText('breadcrumb-title', property.title);
  setText('detail-location', `${property.area} · ${property.type}`);
  setText('detail-title', property.title);
  setText('detail-price', property.priceLabel);
  setText('detail-description', property.description);

  const specs = [{ label: 'Price', value: property.priceLabel }];
  if (property.beds) specs.push({ label: 'Bedrooms', value: property.beds });
  if (property.baths) specs.push({ label: 'Bathrooms', value: property.baths });
  if (property.sqft) specs.push({ label: 'Floor Area', value: `${property.sqft.toLocaleString()} sqft` });
  specs.push({ label: 'Lot', value: property.lot });
  if (property.yearBuilt) specs.push({ label: 'Year Built', value: property.yearBuilt });
  specs.push({ label: 'Reference', value: property.ref });

  const specsEl = document.getElementById('detail-specs');
  if (specsEl) {
    specsEl.innerHTML = specs.map(s => `
      <div class="title-block__item">
        <span class="title-block__label">${s.label}</span>
        <span class="title-block__value">${s.value}</span>
      </div>`).join('');
  }

  const featuresEl = document.getElementById('detail-features');
  if (featuresEl) featuresEl.innerHTML = property.features.map(f => `<li>${f}</li>`).join('');

  const mainImg = document.getElementById('gallery-main-img');
  const thumbsEl = document.getElementById('gallery-thumbs');
  if (mainImg && thumbsEl) {
    mainImg.src = property.images[0];
    mainImg.alt = property.title;
    thumbsEl.innerHTML = property.images.map((img, i) => `
      <button type="button" class="gallery__thumb ${i === 0 ? 'is-active' : ''}" data-src="${img}" aria-label="Show photo ${i + 1}">
        <img src="${img}" alt="${property.title} photo ${i + 1}">
      </button>`).join('');
    thumbsEl.querySelectorAll('.gallery__thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        mainImg.src = btn.dataset.src;
        thumbsEl.querySelectorAll('.gallery__thumb').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });
  }

  const msg = propertyWaMessage(property);
  document.querySelectorAll('.js-wa-property').forEach(a => { a.href = waLink(SITE.whatsappNumber, msg); });

  const similarEl = document.getElementById('similar-grid');
  if (similarEl) {
    let similar = PROPERTIES.filter(p => p.id !== property.id && (p.area === property.area || p.type === property.type)).slice(0, 3);
    if (!similar.length) similar = PROPERTIES.filter(p => p.id !== property.id).slice(0, 3);
    renderGrid(similarEl, similar);
  }
}

/* ---------- Generic WhatsApp links (nav, hero, CTA bands, footer) ---------- */
function initGenericWaLinks() {
  const link = waLink(SITE.whatsappNumber, SITE.defaultWhatsappMessage);
  document.querySelectorAll('.js-wa-generic').forEach(a => { a.href = link; });
  document.querySelectorAll('.js-phone-display').forEach(el => { el.textContent = SITE.phoneDisplay; });
  document.querySelectorAll('.js-email-display').forEach(el => { el.textContent = SITE.email; });
}

/* ---------- Contact form -> WhatsApp ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const phone = document.getElementById('cf-phone').value.trim();
    const interest = document.getElementById('cf-interest').value;
    const message = document.getElementById('cf-message').value.trim();
    const status = document.getElementById('cf-status');

    if (!name || !message) {
      if (status) status.textContent = 'Please add your name and a short message before sending.';
      return;
    }
    const text = `Hi ${SITE.businessName}, my name is ${name}.\n\nEnquiry type: ${interest}\n${message}\n\n(Phone: ${phone || 'not provided'})`;
    window.open(waLink(SITE.whatsappNumber, text), '_blank');
    if (status) status.textContent = "Opening WhatsApp in a new tab — just hit send there to reach us.";
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  injectWaFloat();
  initGenericWaLinks();
  setYear();
  initFeatured();
  initTeam();
  initListings();
  initPropertyDetail();
  initContactForm();
});
