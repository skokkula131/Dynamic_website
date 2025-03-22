const works = {
  "task1": { "title": "Task 1", "url": "Task/Task1/index.html" },
  "task2": { "title": "Task 2", "url": "Task/Task2/index.html" },
  "task3": { "title": "Task 3", "url": "Task/Task3/hover_assign.html" },
  "task4": { "title": "Task 4", "url": "Task/task4/js_1.html" },
  "task5": { "title": "Task 5", "url": "Task/task5/calc_js.html" },
  "task6": { "title": "Task 6", "url": "Task/task6/index.html" },
  "task7": { "title": "Task 7", "url": "Task/task7/index.html" },
  "task8": { "title": "Task 8", "url": "Task/task8/oprational.html" },
  "task9": { "title": "Task 9", "url": "Task/task9/cal.html" },
  "task10": { "title": "Task 10", "url": "Task/task10/call_stack.html" },
  "task11": { "title": "Task 11", "url": "Task/task11/star-1.html" },
  "task12": { "title": "Task 12", "url": "Task/task12/task12.html" },
  "task13": { "title": "Task 13", "url": "Task/task13/task13_obj.html" },
  "task14": { "title": "Task 14", "url": "Task/task14/task14.html" },
  "task14b": { "title": "Task 14b", "url": "Task/task14b/random.html" },
  "task15": { "title": "Task 15", "url": "Task/task15/home_page.html" },
  "task16": { "title": "Task 16", "url": "Task/task16/index.html" }

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
