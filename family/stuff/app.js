// Stuff We Like — simple static app: list of lists -> list of things -> vote / deselect / random pick.
// Data comes from window.STUFF_WE_LIKE_DATA, defined in data.js (loaded before this file).
// Votes persist in localStorage (shared across reloads on this device/browser).
// Deselections and expanded descriptions are session-only (kept in memory, lost on reload).

(function () {
  "use strict";

  const VOTES_KEY = "stuffWeLike.votes";

  let data = null;                 // { lists: [...] }
  const deselected = new Set();    // thing ids temporarily out of consideration (session only)
  const expanded = new Set();      // thing ids with description shown (session only)
  let lastPicked = null;           // { listId, thingId } from the most recent random pick

  const app = document.getElementById("app");

  function loadVotes() {
    try {
      return JSON.parse(localStorage.getItem(VOTES_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveVotes(votes) {
    localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
  }

  function getVoteCount(thingId) {
    const votes = loadVotes();
    return votes[thingId] || 0;
  }

  function castVote(thingId) {
    const votes = loadVotes();
    votes[thingId] = (votes[thingId] || 0) + 1;
    saveVotes(votes);
    render();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function findList(listId) {
    return data.lists.find((l) => l.id === listId);
  }

  function currentRoute() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (hash.startsWith("list/")) {
      return { view: "list", listId: hash.slice("list/".length) };
    }
    return { view: "home" };
  }

  function renderHome() {
    const cards = data.lists
      .map(
        (list) => `
        <a class="list-card" href="#list/${encodeURIComponent(list.id)}">
          <h2>${escapeHtml(list.title)}</h2>
          <p>${escapeHtml(list.description || "")}</p>
        </a>`
      )
      .join("");

    app.innerHTML = `
      <p>Pick a list to see the things on it, vote for your favorites, or let us pick one for you.</p>
      ${cards}
    `;
  }

  function renderList(listId) {
    const list = findList(listId);

    if (!list) {
      app.innerHTML = `
        <a class="back-link" href="#home">&larr; Back to all lists</a>
        <p>We couldn't find that list.</p>
      `;
      return;
    }

    const items = list.things
      .map((thing) => {
        const isDeselected = deselected.has(thing.id);
        const isExpanded = expanded.has(thing.id);
        const isPicked = lastPicked && lastPicked.listId === list.id && lastPicked.thingId === thing.id;
        const hasDescription = !!(thing.description && thing.description.trim());
        const count = getVoteCount(thing.id);

        const descriptionHtml =
          isExpanded && hasDescription
            ? `<p class="thing-description">${escapeHtml(thing.description)}</p>`
            : "";

        return `
          <li class="thing${isDeselected ? " deselected" : ""}${isPicked ? " picked" : ""}" data-thing-id="${escapeHtml(thing.id)}">
            <div class="thing-main">
              <button type="button" class="thing-name-btn" data-action="toggle-description" ${hasDescription ? "" : "disabled"}>
                ${escapeHtml(thing.name)}
              </button>
              ${descriptionHtml}
            </div>
            <div class="thing-actions">
              <button type="button" class="btn-deselect${isDeselected ? " is-deselected" : ""}" data-action="toggle-deselect" title="${isDeselected ? "Bring back into consideration" : "Take out of consideration for now"}">
                ${isDeselected ? "Reselect" : "Deselect"}
              </button>
              <button type="button" class="btn-vote" data-action="vote" ${isDeselected ? "disabled" : ""} title="Vote for this">
                +1 Vote
              </button>
              <span class="vote-count">${count}</span>
            </div>
          </li>
        `;
      })
      .join("");

    app.innerHTML = `
      <a class="back-link" href="#home">&larr; Back to all lists</a>
      <div class="list-heading">
        <h2>${escapeHtml(list.title)}</h2>
        <p>${escapeHtml(list.description || "")}</p>
      </div>
      <div class="toolbar">
        <button type="button" class="btn-random" data-action="random-pick">🎲 Pick one for us</button>
      </div>
      <ul class="thing-list">${items}</ul>
    `;
  }

  function render() {
    if (!data) return;
    const route = currentRoute();
    if (route.view === "list") {
      renderList(route.listId);
    } else {
      renderHome();
    }
  }

  function toggleDeselect(thingId) {
    if (deselected.has(thingId)) {
      deselected.delete(thingId);
    } else {
      deselected.add(thingId);
      // A deselected thing can no longer be "the" random pick.
      if (lastPicked && lastPicked.thingId === thingId) {
        lastPicked = null;
      }
    }
    render();
  }

  function toggleDescription(thingId) {
    if (expanded.has(thingId)) {
      expanded.delete(thingId);
    } else {
      expanded.add(thingId);
    }
    render();
  }

  function randomPick(listId) {
    const list = findList(listId);
    if (!list) return;
    const candidates = list.things.filter((t) => !deselected.has(t.id));
    if (candidates.length === 0) {
      lastPicked = null;
      render();
      return;
    }
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    lastPicked = { listId: list.id, thingId: choice.id };
    render();

    // Scroll the pick into view.
    requestAnimationFrame(() => {
      const el = app.querySelector(`.thing[data-thing-id="${CSS.escape(choice.id)}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  app.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const thingEl = button.closest(".thing");
    const thingId = thingEl ? thingEl.getAttribute("data-thing-id") : null;

    switch (button.dataset.action) {
      case "vote":
        if (thingId) castVote(thingId);
        break;
      case "toggle-deselect":
        if (thingId) toggleDeselect(thingId);
        break;
      case "toggle-description":
        if (thingId) toggleDescription(thingId);
        break;
      case "random-pick": {
        const route = currentRoute();
        if (route.view === "list") randomPick(route.listId);
        break;
      }
    }
  });

  window.addEventListener("hashchange", render);

  if (window.STUFF_WE_LIKE_DATA) {
    data = window.STUFF_WE_LIKE_DATA;
    render();
  } else {
    app.innerHTML = `<p>Couldn't find the list data. Make sure data.js is included before app.js.</p>`;
  }
})();
