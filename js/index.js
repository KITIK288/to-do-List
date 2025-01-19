let counter = 0; // Счетчик задач
let tasks = []; // Массив для хранения задач

// Функция для добавления новой задачи
function add() {
    counter++;
    let newTask = document.getElementById("task").value;

    // Создаем новый элемент div для задачи
    let taskItem = document.createElement("div");

    // Устанавливаем стиль для отступа
    taskItem.style.marginBottom = "10px"; // Отступ между задачами
    taskItem.style.maxWidth = "700px"; // Максимальная ширина
    taskItem.style.textAlign = "center";
    taskItem.style.wordWrap = "break-word"; // Перенос слов

    // Добавляем текст задачи в элемент
    taskItem.innerText = `${counter}. ${newTask}`;

    // Создаем кнопку удаления
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "🗑️";

    // Добавляем обработчик события для кнопки удаления
    deleteButton.onclick = function () {
        // Удаляем задачу при нажатии на кнопку
        taskItem.remove();
        tasks = tasks.filter(task => task !== newTask); // Удаляем задачу из массива
        saveTasks(); // Сохраняем обновленный массив задач
        counter--; // Обновляем счетчик
    };

    // Добавляем кнопку удаления в элемент задачи
    taskItem.appendChild(deleteButton);

    // Добавляем элемент задачи в контейнер задач
    document.getElementById("tasks").appendChild(taskItem);

    // Добавляем задачу в массив и сохраняем
    tasks.push(newTask);
    saveTasks();

    // Очищаем поле ввода после добавления задачи
    document.getElementById("task").value = '';
}

// Функция для сохранения задач в localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция для загрузки задач из localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach((task, index) => {
            counter = index + 1; // Обновляем счетчик
            let taskItem = document.createElement("div");
            taskItem.style.marginBottom = "10px"; // Отступ между задачами
            taskItem.style.maxWidth = "700px"; // Максимальная ширина
            taskItem.style.marginBottom = "100px";
            taskItem.style.wordWrap = "break-word"; // Перенос слов
            taskItem.innerText = `${counter}. ${task}`;

            // Создаем кнопку удаления
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "🗑️";

            // Добавляем обработчик события для кнопки удаления
            deleteButton.onclick = function () {
                taskItem.remove();
                tasks = tasks.filter(t => t !== task); // Удаляем задачу из массива
                saveTasks(); // Сохраняем обновленный массив задач
                counter--; // Обновляем счетчик
            };

            // Добавляем кнопку удаления в элемент задачи
            taskItem.appendChild(deleteButton);

            // Добавляем элемент задачи в контейнер задач
            document.getElementById("tasks").appendChild(taskItem);
        });
    }
}

// Загружаем задачи при загрузке страницы
window.onload = loadTasks;

let check = 0;

function themeChange() {
    const body = document.body;
    const mainContainer = document.getElementById("main-container");
    const tasks = document.getElementById("tasks");
    if (check % 2 !== 0) {
        body.style.backgroundColor = "black";
        mainContainer.style.borderColor = "white";
        tasks.style.color = "white";
        Array.from(mainContainer.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'white';
        });
    } else {
        body.style.backgroundColor = "white";
        mainContainer.style.borderColor = "black";
        tasks.style.color = "black";
        Array.from(mainContainer.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
    }
    check++;

}
