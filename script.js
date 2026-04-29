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
  }
];

const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const frame = document.getElementById("frame");
const viewer = document.getElementById("viewer");
const subtitle = document.getElementById("subtitle");

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
    frame.src = item.url;
    viewer.classList.remove("hidden");
    subtitle.classList.add("hidden");
    dropdownMenu.classList.add("hidden");
  };

  dropdownMenu.appendChild(el);
});

menuBtn.onclick = () => {
  dropdownMenu.classList.toggle("hidden");
};