const works = {
  "task1": { "title": "Task 1", "url": "Task/Task1/index.html" },
  "task2": { "title": "Task 2", "url": "Task/Task2/index.html" },
  "task3": { "title": "Task 3", "url": "Task/Task3/hover_assign.html" },
  "task4": { "title": "Task 4", "url": "Task/Task4/js_1.html" },
  "task5": { "title": "Task 5", "url": "Task/Task5/calc_js.html" },
  "task6": { "title": "Task 6", "url": "Task/Task6/index.html" },
  "task7": { "title": "Task 7", "url": "Task/Task7/index.html" },
  "task8": { "title": "Task 8", "url": "Task/Task8/oprational.html" },
  "task9": { "title": "Task 9", "url": "Task/Task9/cal.html" },
  "task10": { "title": "Task 10", "url": "Task/Task10/call_stack.html" },
  "task11": { "title": "Task 11", "url": "Task/Task11/star-1.html" },
  "task12": { "title": "Task 12", "url": "Task/Task12/task12.html" },
  "task13": { "title": "Task 13", "url": "Task/Task13/task13_obj.html" },
  "task14": { "title": "Task 14", "url": "Task/Task14/task14.html" },
  "task14b": { "title": "Task 14b", "url": "Task/Task14b/random.html" },
  "task15": { "title": "Task 15", "url": "Task/Task15/home_page.html" },
  "task16": { "title": "Task 16", "url": "Task/Task16/index.html" }

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
