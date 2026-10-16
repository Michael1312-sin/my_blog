const app = document.getElementById("app");
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("brand").textContent = SITE.name;

const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = d => new Date(d + "T00:00").toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

function render(text) {
  return text.trim().split(/\n\s*\n/).map(block => {
    block = block.trim();
    if (block.startsWith("## ")) return `<h2>${esc(block.slice(3))}</h2>`;
    if (block.startsWith("> ")) return `<blockquote>${esc(block.slice(2))}</blockquote>`;
    return `<p>${esc(block).replace(/\n/g, "<br>")}</p>`;
  }).join("");
}

const stageTag = s => `<span class="stage" title="${STAGES[s].label}">${STAGES[s].icon} ${STAGES[s].label}</span>`;

function postList(posts) {
  return posts.map(p => `
    <a class="note" href="#/post/${p.slug}">
      <span class="note-title">${esc(p.title)}</span>
      <span class="note-sum">${esc(p.summary || "")}</span>
      <span class="meta">${SECTIONS[p.section].label} · ${stageTag(p.stage)} · ${fmt(p.date)}</span>
    </a>`).join("");
}

function home() {
  document.title = SITE.name;
  const sections = Object.entries(SECTIONS).map(([k, s]) => `
    <a class="plot plot-${k}" href="#/s/${k}">
      <strong>${s.label}</strong><span>${s.blurb}</span>
    </a>`).join("");
  app.innerHTML = `
    <section class="hero">
      <h1>${esc(SITE.tagline)}</h1>
      <p>${esc(SITE.intro)}</p>
    </section>
    <h3 class="label">Wander</h3>
    <div class="plots">${sections}</div>
    <h3 class="label">Recently tended</h3>
    <div class="notes">${postList(POSTS.slice(0, 5))}</div>
    <p class="more"><a href="#/all">All notes →</a> · <a href="#/now">What I'm up to now →</a></p>`;
}

function section(key) {
  const s = SECTIONS[key];
  if (!s) return notFound();
  document.title = `${s.label} · ${SITE.name}`;
  const list = POSTS.filter(p => p.section === key);
  app.innerHTML = `<h1>${s.label}</h1><p class="lede">${s.blurb}</p>
    <div class="notes">${list.length ? postList(list) : "<p>Nothing planted here yet.</p>"}</div>
    <a class="back" href="#/">← Back</a>`;
}

function all() {
  document.title = `All notes · ${SITE.name}`;
  app.innerHTML = `<h1>All notes</h1><div class="notes">${postList(POSTS)}</div><a class="back" href="#/">← Back</a>`;
}

function post(slug) {
  const p = POSTS.find(x => x.slug === slug);
  if (!p) return notFound();
  document.title = `${p.title} · ${SITE.name}`;
  app.innerHTML = `<article>
    <div class="meta"><a href="#/s/${p.section}">${SECTIONS[p.section].label}</a> · ${stageTag(p.stage)} · ${fmt(p.date)}</div>
    <h1>${esc(p.title)}</h1>
    ${render(p.body)}
  </article><a class="back" href="#/">← Back</a>`;
}

function now() {
  document.title = `Now · ${SITE.name}`;
  app.innerHTML = `<h1>Now</h1><p class="lede">What I'm focused on lately. Updated ${fmt(NOW.updated)}.</p>
    <ul class="now">${NOW.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul><a class="back" href="#/">← Back</a>`;
}

function about() {
  document.title = `About · ${SITE.name}`;
  app.innerHTML = `<article><h1>About</h1>${render(ABOUT)}
    <p><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p></article><a class="back" href="#/">← Back</a>`;
}

function notFound() {
  app.innerHTML = `<p>Nothing grows here. <a href="#/">Back home</a></p>`;
}

function route() {
  const [, page, arg] = location.hash.split("/");
  if (page === "post") post(arg);
  else if (page === "s") section(arg);
  else if (page === "all") all();
  else if (page === "now") now();
  else if (page === "about") about();
  else home();
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
route();
