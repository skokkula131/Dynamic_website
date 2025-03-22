const works = {
  "task1": { "title": "Project 1", "url": "works/task1/index.html" },
  "task2": { "title": "Project 2", "url": "works/task2/index.html" },
  "task3": { "title": "Project 3", "url": "works/task3/index.html" },
  "task4": { "title": "Project 4", "url": "works/task2/index.html" },
  "task5": { "title": "Project 5", "url": "works/task1/index.html" }
};


function createButtons() {
const container = document.getElementById("button-container");

Object.values(works).forEach((work) => {
  const button = document.createElement("button");
  button.innerText = work.title;
  button.addEventListener("click", () => {
    loadwork(work.url);
  });
  container.appendChild(button);
});
}

function loadwork(url) {
const iframe = document.getElementById("iframe");
iframe.src = url;
}


createButtons();
