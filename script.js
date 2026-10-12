// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeLabel();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

// ── Config Population ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
});

function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (key === 'role_university') el.textContent = roleLine(cfg.role, cfg.university);
    else if (key === 'bio') el.innerHTML = bioToHtml(cfg.bio);
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.image-placeholder, .hero-photo');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }
}

// "Role at University" — drops the "at ..." half when university is blank.
function roleLine(role, university) {
  const r = (role || '').trim();
  const u = (university || '').trim();
  if (!r) return u;
  if (!u) return r;
  return `${r} at ${u}`;
}

// Accepts an array of paragraphs, or a plain string (blank line = paragraph break).
function bioToHtml(bio) {
  if (!bio) return '';
  const paragraphs = Array.isArray(bio) ? bio : String(bio).split(/\n\s*\n/);
  return paragraphs
    .map(p => String(p).trim())
    .filter(Boolean)
    .map(p => `<p class="bio-paragraph">${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

const LINK_META = {
  linkedin: { label: 'LinkedIn', icon: 'linkedin' },
  scholar:  { label: 'Scholar',  icon: 'scholar' },
  github:   { label: 'GitHub',   icon: 'github' },
  cv:       { label: 'CV',       icon: 'cv' },
  email:    { label: 'Email',    icon: 'email' },
};

const LINK_ICONS = {
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  scholar:  '<path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3z"/><path d="M5 13v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4l-7 3.8L5 13z"/>',
  github:   '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>',
  cv:       '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  email:    '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
};

function linkItem(key, href, text) {
  const meta = LINK_META[key] || { label: key.charAt(0).toUpperCase() + key.slice(1), icon: 'email' };
  const icon = LINK_ICONS[meta.icon] || LINK_ICONS.email;
  // Open in a new tab for anything that leaves the page: absolute URLs and
  // relative files (e.g. assets/cv.pdf). Stay put for in-page anchors and
  // mailto:/tel:, which should not spawn a tab.
  const inPage = /^#/i.test(href) || /^(mailto|tel):/i.test(href);
  const attrs = inPage ? '' : ' target="_blank" rel="noopener noreferrer"';
  return `<a class="contact-item" href="${href}"${attrs}>` +
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>` +
    `<span>${text ? escapeHtml(text) : escapeHtml(meta.label)}</span></a>`;
}

// Hide a section (and its nav link) when it has no config content,
// so an empty list doesn't leave a stray heading behind.
function hideIfEmpty(sectionId, items) {
  if (items?.length) return false;
  const section = document.getElementById(sectionId);
  if (section) section.remove();
  document.querySelectorAll(`.nav-links a[href="#${sectionId}"]`).forEach(a => a.remove());
  return true;
}

function populateLists(cfg) {
  const linkRow = document.getElementById('cfg-links');
  if (linkRow) {
    const items = Object.entries(cfg.links || {})
      .filter(([, v]) => v)
      .map(([k, v]) => linkItem(k, v));
    linkRow.innerHTML = items.join('');
  }
  const contactRow = document.getElementById('cfg-contact');
  if (contactRow) {
    contactRow.innerHTML = cfg.email ? linkItem('email', `mailto:${cfg.email}`, cfg.email) : '';
  }
  const statRow = document.getElementById('cfg-stats');
  if (statRow && cfg.stats?.length) {
    statRow.innerHTML = cfg.stats.map(s => `
      <div class="stat">
        <span class="stat-number">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join('');
  }
  const pubList = document.getElementById('cfg-publications');
  hideIfEmpty('publications', cfg.publications);
  if (pubList && cfg.publications?.length) {
    pubList.innerHTML = cfg.publications.map(p => `
      <article class="pub-card" data-year="${p.year}">
        <div class="pub-year">${p.year}</div>
        <div class="pub-content">
          <div class="pub-header">
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k.toUpperCase()}</a>`).join('')}</div>
          </div>
          <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
          <p class="pub-venue">${p.venue}</p>
        </div>
      </article>`).join('');
  }
  const projGrid = document.getElementById('cfg-projects');
  if (projGrid && cfg.projects?.length) {
    projGrid.innerHTML = cfg.projects.map(p => `
      <article class="project-card">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </article>`).join('');
  }
  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <div class="news-content">
          <span class="news-badge">${n.badge}</span>
          <span class="news-text">${n.text}</span>
        </div>
      </div>`).join('');
  }
  const expGrid = document.getElementById('cfg-experience');
  if (expGrid) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="exp-category"><h3>Education</h3>${edu.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.degree}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="exp-category"><h3>Experience</h3>${exp.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.role}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (html) expGrid.innerHTML = html;
  }
}
