const ASSETS = {
  skeleton: "assets/skeleton.png",
  muscles: "assets/muscles.png",
  skin: "assets/skin.png",
  joint: "assets/joint-openstax.jpg"
};

const cards = [
  { id:"o1", system:"osseo", answer:"Crânio", aliases:["cranio"], note:"Conjunto de ossos que protege o encéfalo.", image:"skeleton", x:47, y:8, view:"Vista anterior" },
  { id:"o2", system:"osseo", answer:"Clavícula", aliases:["clavicula"], note:"Osso alongado que liga o esterno à escápula.", image:"skeleton", x:56, y:18, view:"Vista anterior" },
  { id:"o3", system:"osseo", answer:"Esterno", note:"Osso plano na linha mediana anterior do tórax.", image:"skeleton", x:47, y:21.5, view:"Vista anterior" },
  { id:"o4", system:"osseo", answer:"Úmero", aliases:["umero"], note:"Osso longo do braço, entre ombro e cotovelo.", image:"skeleton", x:68, y:28, view:"Vista anterior" },
  { id:"o5", system:"osseo", answer:"Rádio", aliases:["radio"], note:"Osso lateral do antebraço, no lado do polegar.", image:"skeleton", x:76, y:43, view:"Vista anterior" },
  { id:"o6", system:"osseo", answer:"Fêmur", aliases:["femur"], note:"Maior osso do corpo; forma o esqueleto da coxa.", image:"skeleton", x:56, y:57, view:"Vista anterior" },
  { id:"o7", system:"osseo", answer:"Patela", aliases:["rotula","rótula"], note:"Osso sesamoide localizado anteriormente ao joelho.", image:"skeleton", x:53.5, y:69, view:"Vista anterior" },
  { id:"o8", system:"osseo", answer:"Tíbia", aliases:["tibia"], note:"Osso medial e mais robusto da perna.", image:"skeleton", x:51, y:79, view:"Vista anterior" },

  { id:"m1", system:"muscular", answer:"Deltoide", aliases:["deltóide"], note:"Músculo que recobre o ombro e participa da abdução do braço.", image:"muscles", x:15.5, y:26, view:"Vista anterior · figura esquerda" },
  { id:"m2", system:"muscular", answer:"Peitoral maior", note:"Músculo superficial amplo da parede anterior do tórax.", image:"muscles", x:25, y:27, view:"Vista anterior · figura esquerda" },
  { id:"m3", system:"muscular", answer:"Bíceps braquial", aliases:["biceps","biceps braquial","bíceps"], note:"Músculo anterior do braço, importante na flexão do cotovelo.", image:"muscles", x:35, y:32, view:"Vista anterior · figura esquerda" },
  { id:"m4", system:"muscular", answer:"Reto abdominal", aliases:["reto do abdomen","reto do abdômen"], note:"Músculo vertical da parede anterior do abdome.", image:"muscles", x:25.5, y:40, view:"Vista anterior · figura esquerda" },
  { id:"m5", system:"muscular", answer:"Sartório", aliases:["sartorio"], note:"Músculo longo e oblíquo que cruza a face anterior da coxa.", image:"muscles", x:30.5, y:57, view:"Vista anterior · figura esquerda" },
  { id:"m6", system:"muscular", answer:"Trapézio", aliases:["trapezio"], note:"Músculo superficial triangular da região posterior do pescoço e dorso.", image:"muscles", x:78, y:22, view:"Vista posterior · figura direita" },
  { id:"m7", system:"muscular", answer:"Tríceps braquial", aliases:["triceps","triceps braquial","tríceps"], note:"Principal extensor do cotovelo, localizado posteriormente no braço.", image:"muscles", x:88, y:31, view:"Vista posterior · figura direita" },
  { id:"m8", system:"muscular", answer:"Glúteo máximo", aliases:["gluteo maximo","glúteo maior","gluteo maior"], note:"Grande músculo superficial da região glútea.", image:"muscles", x:76, y:50, view:"Vista posterior · figura direita" },

  { id:"t1", system:"tegumentar", answer:"Epiderme", note:"Camada mais superficial da pele, formada por epitélio estratificado.", image:"skin", x:14, y:18, view:"Corte da pele" },
  { id:"t2", system:"tegumentar", answer:"Derme", note:"Camada conjuntiva sob a epiderme; contém vasos, nervos e anexos.", image:"skin", x:17, y:46, view:"Corte da pele" },
  { id:"t3", system:"tegumentar", answer:"Hipoderme", aliases:["tecido subcutaneo","tecido subcutâneo"], note:"Camada subcutânea rica em tecido adiposo.", image:"skin", x:18, y:80, view:"Corte da pele" },
  { id:"t4", system:"tegumentar", answer:"Glândula sebácea", aliases:["glandula sebacea","sebacea","sebácea"], note:"Glândula associada ao folículo piloso que secreta sebo.", image:"skin", x:63, y:38, view:"Corte da pele" },
  { id:"t5", system:"tegumentar", answer:"Glândula sudorípara", aliases:["glandula sudoripara","sudoripara","sudorípara"], note:"Glândula tubular enovelada responsável pela produção de suor.", image:"skin", x:80, y:64, view:"Corte da pele" },

  { id:"a1", system:"articular", answer:"Cartilagem articular", aliases:["cartilagem hialina"], note:"Revestimento azul-claro das extremidades ósseas; reduz o atrito e absorve impactos.", image:"joint", crop:"joint-detail", x:44, y:49, view:"Articulação sinovial · corte" },
  { id:"a2", system:"articular", answer:"Cápsula articular", aliases:["capsula articular","capsula fibrosa","cápsula fibrosa"], note:"Camada fibrosa externa azul-acinzentada que envolve e estabiliza toda a articulação.", image:"joint", crop:"joint-detail", x:91, y:55, view:"Articulação sinovial · corte" },
  { id:"a3", system:"articular", answer:"Cavidade articular", aliases:["cavidade sinovial","cavidade articular com liquido sinovial","cavidade articular com líquido sinovial"], note:"Espaço amarelado entre as cartilagens, preenchido por líquido sinovial.", image:"joint", crop:"joint-detail", x:61, y:55, view:"Articulação sinovial · corte" }
];

const labels = { osseo:"Sistema ósseo", muscular:"Sistema muscular", tegumentar:"Sistema tegumentar", articular:"Sistema articular" };
const state = { system:"todos", queue:[], index:0, seen:0, right:0, streak:0, revealed:false, review:new Set(JSON.parse(localStorage.getItem("atlas-review") || "[]")) };

const $ = id => document.getElementById(id);
const els = {
  image: $("anatomyImage"), loader: $("imageLoader"), target: $("target"), system: $("systemLabel"),
  position: $("cardPosition"), view: $("viewLabel"), prompt: $("promptText"), input: $("answerInput"),
  feedback: $("feedback"), kicker: $("feedbackKicker"), title: $("answerTitle"), note: $("answerNote"),
  check: $("checkButton"), reveal: $("revealButton"), next: $("nextButton"), score: $("scoreValue"),
  seen: $("seenStat"), right: $("rightStat"), review: $("reviewStat"), reviewBadge: $("reviewBadge"),
  streak: $("streakLabel"), toast: $("toast")
};

function normalize(value) {
  return value.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ");
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}

function rebuildQueue(source) {
  const pool = source || (state.system === "todos" ? cards : cards.filter(c => c.system === state.system));
  state.queue = shuffle(pool);
  state.index = 0;
  renderCard();
}

function current() { return state.queue[state.index]; }

function renderCard() {
  const card = current();
  if (!card) return;
  state.revealed = false;
  els.feedback.classList.add("hidden");
  els.feedback.classList.remove("incorrect");
  els.input.value = "";
  els.input.disabled = false;
  els.check.disabled = false;
  els.reveal.disabled = false;
  els.loader.style.display = "block";
  els.image.style.opacity = ".15";
  els.image.src = ASSETS[card.image];
  els.image.closest(".media-frame").className = `media-frame ${card.crop || ""}`.trim();
  els.image.alt = `Ilustração do ${labels[card.system].toLowerCase()} com um ponto para identificar`;
  els.target.style.left = `${card.x}%`;
  els.target.style.top = `${card.y}%`;
  els.system.textContent = labels[card.system].toUpperCase();
  els.position.textContent = `${state.index + 1} / ${state.queue.length}`;
  els.view.textContent = card.view;
  els.prompt.textContent = "Qual é a estrutura indicada?";
  setTimeout(() => els.input.focus(), 80);
}

els.image.addEventListener("load", () => { els.loader.style.display = "none"; els.image.style.opacity = "1"; });
els.image.addEventListener("error", () => { els.loader.textContent = "Não foi possível carregar a ilustração. Verifique sua conexão."; els.image.style.opacity = "0"; });

function reveal(correctGuess = null) {
  if (state.revealed) return;
  const card = current();
  state.revealed = true;
  state.seen += 1;
  const accepted = [card.answer, ...(card.aliases || [])].map(normalize);
  const typed = normalize(els.input.value);
  const isCorrect = correctGuess ?? (typed && accepted.includes(typed));
  if (isCorrect) { state.right += 1; state.streak += 1; state.review.delete(card.id); }
  else { state.streak = 0; state.review.add(card.id); }
  localStorage.setItem("atlas-review", JSON.stringify([...state.review]));
  els.feedback.classList.remove("hidden");
  els.feedback.classList.toggle("incorrect", !isCorrect);
  els.kicker.textContent = isCorrect ? "✓ RESPOSTA CORRETA" : (typed ? "RESPOSTA ESPERADA" : "RESPOSTA REVELADA");
  els.title.textContent = card.answer;
  els.note.textContent = card.note;
  els.input.disabled = true;
  els.check.disabled = true;
  els.reveal.disabled = true;
  updateStats();
}

function updateStats() {
  const pct = state.seen ? Math.round((state.right / state.seen) * 100) : 0;
  els.score.textContent = `${pct}%`;
  els.seen.textContent = state.seen;
  els.right.textContent = state.right;
  els.review.textContent = state.review.size;
  els.reviewBadge.textContent = state.review.size;
  els.streak.textContent = `${state.streak} ${state.streak === 1 ? "sequência" : "sequência"}`;
}

function goNext() {
  if (!state.revealed) reveal(null);
  state.index += 1;
  if (state.index >= state.queue.length) { state.queue = shuffle(state.queue); state.index = 0; showToast("Baralho embaralhado para uma nova rodada."); }
  renderCard();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}

els.check.addEventListener("click", () => { if (!els.input.value.trim()) { showToast("Digite uma resposta antes de conferir."); els.input.focus(); return; } reveal(); });
els.reveal.addEventListener("click", () => reveal(false));
els.next.addEventListener("click", goNext);
els.input.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); state.revealed ? goNext() : els.check.click(); } });
document.addEventListener("keydown", e => { if (e.code === "Space" && document.activeElement !== els.input && !state.revealed) { e.preventDefault(); reveal(false); } });

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
  state.system = button.dataset.system;
  rebuildQueue();
}));

$("ratingButtons").addEventListener("click", e => {
  const button = e.target.closest("button[data-rating]");
  if (!button) return;
  if (button.dataset.rating === "acertei") state.review.delete(current().id); else state.review.add(current().id);
  localStorage.setItem("atlas-review", JSON.stringify([...state.review]));
  updateStats();
  goNext();
});

$("reviewButton").addEventListener("click", () => {
  const reviewCards = cards.filter(c => state.review.has(c.id));
  if (!reviewCards.length) { showToast("Nenhum cartão marcado para revisão."); return; }
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  state.system = "revisao";
  rebuildQueue(reviewCards);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$("resetButton").addEventListener("click", () => {
  if (!confirm("Zerar o progresso e a lista de revisão?")) return;
  state.seen = 0; state.right = 0; state.streak = 0; state.review.clear();
  localStorage.removeItem("atlas-review");
  updateStats(); rebuildQueue(); showToast("Progresso zerado.");
});

Object.entries({todos:cards.length, tegumentar:5, articular:3, osseo:8, muscular:8}).forEach(([key,value]) => { const el = $(`count-${key}`); if (el) el.textContent = value; });
updateStats();
rebuildQueue();
