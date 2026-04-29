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

const menu = document.getElementById("menu");
const viewer = document.getElementById("viewer");
const frame = document.getElementById("frame");
const backBtn = document.getElementById("backBtn");
const subtitle = document.getElementById("subtitle");

items.forEach(item => {
  const el = document.createElement("div");
  el.className = "pill";

  el.innerHTML = `
    <div class="left">
      <div class="icon">${item.icon}</div>
      <div class="title">${item.title}</div>
    </div>
    <div class="arrow">›</div>
  `;

  el.onclick = () => abrirRelatorio(item.url);

  menu.appendChild(el);
});

function abrirRelatorio(url) {
  menu.style.display = "none";
  subtitle.style.display = "none";
  viewer.classList.remove("hidden");
  frame.src = url;
}

function voltarInicio() {
  viewer.classList.add("hidden");
  menu.style.display = "block";
  subtitle.style.display = "block";
  frame.src = "";
}

backBtn.onclick = voltarInicio;

// gesto de arrastar para voltar
let startX = 0;
let startY = 0;

viewer.addEventListener("touchstart", function(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

viewer.addEventListener("touchend", function(event) {
  const endX = event.changedTouches[0].clientX;
  const endY = event.changedTouches[0].clientY;

  const diffX = endX - startX;
  const diffY = Math.abs(endY - startY);

  if (diffX > 100 && diffY < 80) {
    voltarInicio();
  }
});