// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

let counter = 0;

// REMOVE ME: SAMPLE FILLING
//tasks = [
//  { id: 0, title: "Game of thrones", category: "Movies", done: false },
//  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
//];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  return tasks.find((element) => element.id === checked);

  renderTasks(tasks, "tasks-list");

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  const taskadd = {
    id: counter + 1,
    title: "Game of thrones",
    category: "Movies",
    done: false,
  };
  tasks.push(taskadd);
  counter++;
  renderTasks(tasks, "tasks-list");
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();

  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  alert(`New category was added: ${newCategory}`);
  document.getElementById("demo").innerHTML = `${newCategory}`;
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  //return category.filter((element) =>
  //element.
  renderCategories(categories, CATEGORY_FILTER);
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
