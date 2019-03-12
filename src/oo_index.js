
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
});


const ulTag = document.getElementById('tasks');
const formTag = document.querySelector('form');
const descriptionTag = document.getElementById('new-task-description');
//const buttonTag = document.querySelector(descriptionTag.value);
const divTag = document.getElementById('list');

let buttonTag = "";


formTag.name = "description";

formTag.addEventListener('submit', function(event) {
  event.preventDefault();
  ulTag.innerHTML += `
    <li>${descriptionTag.value}
      <button data-description="${descriptionTag.value}">X</button>
    </li>
  `;
  // let buttonTag = document.querySelector(`[data-description = "${descriptionTag.value}"]`);
});

// if (buttonTag !== "") {
//   buttonTag.addEventListener("click", function(event) {
//     console.log('hii');
//     debugger
//   });
// }

divTag.addEventListener('click', function(event) {
  if (event.target.innerHTML == "X") {
    event.target.parentElement.remove();
  }
});
