const form = document.querySelector(".form");
const conatiner = document.querySelectorAll(".task-container");

let draggingElement = null;

function dragEnter() {
    console.log("somthing enterd")
}
function dragLeave() {
    console.log("something leaved")
}
function dragOver(event) {
    event.preventDefault()
}
function drop(event) {
    console.log("somthing dropeed")
    event.currentTarget.appendChild(draggingElement);
}
for (let i = 0; i < conatiner.length; i++) {
    conatiner[i].addEventListener("dragover", dragOver);
    conatiner[i].addEventListener("drop", drop);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
        taskName: form.title.value,
        date: form.date.value,
    }

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.innerHTML = `
    <input type="checkbox" class="checkbox">
    <p>${formData.taskName}</p>
    <span>${formData.date}</span>
    <i class="fa-solid fa-trash delete"></i>
    `;

    TODO.appendChild(taskCard);

    const deleteBtn = taskCard.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskCard.remove();
    });

    const checkbox = taskCard.querySelector(".checkbox");
    checkbox.addEventListener("input", () => {
        const spanElement = taskCard.querySelector("span");
        if (checkbox.checked) {
            spanElement.style.textDecoration = "line-through";
            spanElement.style.color = "#808080";
            checkbox.nextElementSibling.style.textDecoration = "line-through";
            checkbox.nextElementSibling.style.color = "#808080";
            taskCard.style.background = "#262626";
        } else {
            checkbox.nextElementSibling.style.textDecoration = "none";
            checkbox.nextElementSibling.style.color = "#f2f2f2";
            spanElement.style.color = "#f2f2f2";
        }
    });

    const taskCards = document.querySelectorAll('.task-card');

    taskCards.forEach((taskCards) => {
        taskCards.draggable = true;
        taskCards.addEventListener("dragstart", (event) => {
            draggingElement = event.currentTarget
            console.log(event.currentTarget)
        })
        taskCards.addEventListener("dragend", () => {
            console.log("drag sened")
        })
    })

});
