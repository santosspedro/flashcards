"use strict";

const topicNav = document.querySelector("#topics");
const modeNav = document.querySelector("#modes");
const study = document.querySelector("#study");
const status = document.querySelector("#status");
const storageKey = "atlas-morfo-revisao-v1";
const modes = { summary: "Resumos", cards: "Flashcards", quiz: "Quiz", practical: "Prática", review: "Revisar erros" };
const items = [...deck, ...practical, ...quiz];
const validIds = new Set(items.map(item => item.id));

function loadReview() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return new Set(Array.isArray(saved) ? saved.filter(id => validIds.has(id)) : []);
  } catch {
    return new Set();
  }
}

const review = loadReview();
let topic = "all";
let mode = "summary";
let round;

function shuffled(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const matches = item => topic === "all" || item.topic === topic;
const pending = () => items.filter(item => matches(item) && review.has(item.id));

function record(item, needsReview) {
  if (needsReview) review.add(item.id);
  else review.delete(item.id);
  try {
    localStorage.setItem(storageKey, JSON.stringify([...review]));
  } catch {
    status.textContent = "A lista de revisão está disponível nesta sessão.";
  }
  modeNav.querySelector('[data-value="review"]').textContent = `Revisar erros (${pending().length})`;
}

function controls(nav, values, selected, change) {
  nav.replaceChildren(...Object.entries(values).map(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.value = value;
    button.textContent = label;
    button.setAttribute("aria-pressed", String(value === selected));
    button.addEventListener("click", () => {
      change(value);
      renderMenus();
      nav.querySelector(`[data-value="${value}"]`).focus();
      start();
    });
    return button;
  }));
}

function renderMenus() {
  controls(topicNav, { all: "Todos os assuntos", ...Object.fromEntries(Object.entries(topics).map(([id, data]) => [id, data.title])) }, topic, value => { topic = value; });
  controls(modeNav, { ...modes, review: `Revisar erros (${pending().length})` }, mode, value => { mode = value; });
}

function start() {
  if (mode === "summary") {
    renderSummary();
    return;
  }
  const pool = { cards: deck, practical, quiz, review: pending() }[mode].filter(matches);
  round = { queue: shuffled(pool), index: 0, correct: 0, quizzes: 0 };
  renderItem();
}

function renderSummary() {
  study.innerHTML = Object.entries(topics)
    .filter(([id]) => matches({ topic: id }))
    .map(([, data]) => `<article class="panel"><h2>${data.title}</h2>
      ${data.sections.map(([title, facts]) => `<h3>${title}</h3><ul>${facts.map(fact => `<li>${fact}</li>`).join("")}</ul>`).join("")}
      <details><summary>Explique em voz alta</summary><p>${data.recall}</p></details>
      <p class="muted">${data.source}</p></article>`).join("");
}

function sourceLinks() {
  return `<details class="panel"><summary>Fotos dos modelos anatômicos</summary>
    <p>Compare os esquemas com as fotos legendadas dos modelos usados como referência.</p>
    <ul>${photos.map(([name, id]) => `<li><a href="https://chatgpt.com/library?file_id=${id}&amp;account_id=personal" target="_blank" rel="noopener">${name}</a></li>`).join("")}</ul>
  </details>`;
}

function renderItem(moveFocus = false) {
  const item = round.queue[round.index];
  if (!item) {
    const finished = round.queue.length > 0;
    const title = finished ? "Rodada concluída" : mode === "review" ? "Nenhum item para revisar" : "Sem exercícios neste assunto";
    const message = finished
      ? `${round.queue.length} itens estudados.${round.quizzes ? ` ${round.correct} de ${round.quizzes} respostas corretas no quiz.` : ""}`
      : mode === "review" ? "Os erros do quiz e os cartões marcados para rever aparecem aqui." : "Escolha outro assunto para praticar.";
    study.innerHTML = `<article class="panel"><h2 tabindex="-1">${title}</h2><p>${message}</p>
      ${finished && (mode !== "review" || pending().length) ? '<button class="primary" id="restart">Nova rodada</button>' : ""}</article>`;
    study.querySelector("#restart")?.addEventListener("click", () => { start(); study.querySelector("h2")?.focus(); });
  } else {
    study.innerHTML = `<article class="panel">
      <p class="position">${topics[item.topic].title} · ${round.index + 1} de ${round.queue.length}</p>
      <h2 tabindex="-1">${item.prompt}</h2>
      ${item.plate ? plateView(item) : ""}
      <div id="response"></div></article>${item.plate && item.topic === "digestorio" ? sourceLinks() : ""}`;
    if (item.plate) paintPlate(study.querySelector("canvas"), item);
    if (item.options) renderQuiz(item);
    else renderCard(item);
  }
  if (moveFocus) study.querySelector("h2").focus();
}

function plateView(item) {
  const plate = plates[item.plate];
  return `<figure class="practical-figure">
    <canvas width="900" height="720" role="img" aria-label="${plate.description}">${plate.description}</canvas>
    <figcaption>${plate.title}</figcaption>
  </figure>`;
}

function next() {
  round.index++;
  renderItem(true);
}

function renderCard(item) {
  const response = study.querySelector("#response");
  response.innerHTML = `<form class="recall-form">
    ${item.plate ? '<label for="guess-name">Nome da estrutura</label><input id="guess-name" autocomplete="off"><label for="guess-function">Função</label><textarea id="guess-function" rows="2"></textarea>' : '<p class="muted">Tente responder em voz alta antes de revelar.</p>'}
    <button class="primary" id="flip">Revelar resposta</button>
  </form>`;
  response.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    response.querySelectorAll("input, textarea").forEach(field => { field.readOnly = true; });
    response.querySelector("#flip").remove();
    response.insertAdjacentHTML("beforeend", `<div class="feedback"><h3 tabindex="-1">${item.answer}</h3><p>${item.note}</p></div>
      <div class="actions"><button id="again">Preciso rever</button><button class="primary" id="known">${item.plate ? "Acertei nome e função" : "Lembrei"}</button></div>`);
    response.querySelector("h3").focus();
    response.querySelector("#again").addEventListener("click", () => { record(item, true); next(); });
    response.querySelector("#known").addEventListener("click", () => { record(item, false); next(); });
  });
}

function renderQuiz(item) {
  const response = study.querySelector("#response");
  const options = shuffled(item.options);
  response.innerHTML = `<div class="options">${options.map(option => `<button type="button">${option}</button>`).join("")}</div>`;
  const buttons = [...response.querySelectorAll("button")];
  buttons.forEach((button, index) => button.addEventListener("click", () => {
    if (button.disabled) return;
    const correct = options[index] === item.answer;
    round.quizzes++;
    round.correct += Number(correct);
    record(item, !correct);
    buttons.forEach((choice, i) => {
      choice.disabled = true;
      if (options[i] === item.answer) choice.classList.add("correct");
    });
    if (!correct) button.classList.add("wrong");
    response.insertAdjacentHTML("beforeend", `<div class="feedback"><h3 tabindex="-1">${correct ? "Resposta correta" : "Resposta correta: " + item.answer}</h3><p>${item.note}</p></div>
      <button class="primary" id="next">Continuar</button>`);
    response.querySelector("h3").focus();
    response.querySelector("#next").addEventListener("click", next);
  }));
}

renderMenus();
start();
