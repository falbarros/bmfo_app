const items = [
  {
    title: "Resumo",
    icon: "📊",
    url: "https://datastudio.google.com/embed/reporting/5dc61052-2259-4063-9ce5-66ed6e2f9aa7/page/SUpuF"
  },
  {
    title: "Detalhe Contas",
    icon: "🕒",
    url: "https://datastudio.google.com/embed/reporting/5dc61052-2259-4063-9ce5-66ed6e2f9aa7/page/p_yl7gc1242d"
  },
  {
    title: "Detalhe Grupos",
    icon: "📄",
    url: "https://datastudio.google.com/embed/reporting/5dc61052-2259-4063-9ce5-66ed6e2f9aa7/page/p_7qpsonb62d"
  },
  {
    title: "Fatura Azul",
    icon: "📈",
    url: "https://datastudio.google.com/embed/reporting/5dc61052-2259-4063-9ce5-66ed6e2f9aa7/page/p_c09fsy2c3d"
  },
  {
    title: "Fatura Black",
    icon: "📉",
    url: "https://datastudio.google.com/embed/reporting/5dc61052-2259-4063-9ce5-66ed6e2f9aa7/page/p_b14ijpxd3d"
  },
    {
    title: "Peso por grupo",
    icon: "📉",
    url: "https://datastudio.google.com/embed/reporting/5dc61052-2259-4063-9ce5-66ed6e2f9aa7/page/p_oud3ve4d3d"
  }
];

const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const frame = document.getElementById("frame");
const viewer = document.getElementById("viewer");
const pageTitle = document.getElementById("pageTitle");

let activeElement = null;

items.forEach(item => {
  const el = document.createElement("div");
  el.className = "menu-item";

  el.innerHTML = `
    <div class="menu-left">
      <div class="icon">${item.icon}</div>
      <div class="title">${item.title}</div>
    </div>
    <div class="arrow">›</div>
  `;

  el.onclick = () => {
    abrirRelatorio(item, el);
  };

  dropdownMenu.appendChild(el);
});

menuBtn.onclick = () => {
  dropdownMenu.classList.toggle("hidden");
};

function abrirRelatorio(item, el) {
  frame.src = item.url;
  viewer.classList.remove("hidden");

  dropdownMenu.classList.add("hidden");

  pageTitle.textContent = `BMFO_v1 / ${item.title}`;

  if (activeElement) {
    activeElement.classList.remove("active");
  }

  if (el) {
    el.classList.add("active");
    activeElement = el;
  }
}

window.onload = () => {
  const firstItem = dropdownMenu.children[0];
  abrirRelatorio(items[0], firstItem);
};