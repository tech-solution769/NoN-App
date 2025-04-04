document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  // Função para carregar as tarefas do localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
      createTaskElement(task.text, task.completed);
    });
  }

  // Função para salvar tarefas no localStorage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('li').forEach(taskElement => {
      tasks.push({
        text: taskElement.textContent.replace('✔️', '').trim(),
        completed: taskElement.classList.contains('completed'),
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Função para criar o elemento de tarefa
  function createTaskElement(taskText, completed = false) {
    const li = document.createElement('li');
    li.textContent = taskText;

    if (completed) {
      li.classList.add('completed');
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.classList.add('complete');
    completeButton.onclick = () => {
      li.classList.toggle('completed');
      saveTasks();
    };

    li.appendChild(completeButton);
    taskList.appendChild(li);
    saveTasks();
  }

  // Função para adicionar nova tarefa
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      createTaskElement(taskText);
      taskInput.value = ''; // Limpar campo de entrada
    }
  });

  // Carregar tarefas armazenadas ao iniciar
  loadTasks();
});