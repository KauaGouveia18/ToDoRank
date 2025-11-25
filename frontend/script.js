const API = "https://todorank.onrender.com";

// Adicionar tarefa
document.getElementById("addBtn").addEventListener("click", async () => {
  const name = document.getElementById("taskName").value.trim();
  const priority = Number(document.getElementById("taskPriority").value);

  if (!name || !priority) {
    alert("Preencha todos os campos!");
    return;
  }

  await fetch(`${API}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, priority })
  });

  document.getElementById("taskName").value = "";
  document.getElementById("taskPriority").value = "";

  loadTasks();
});

// Carregar lista de tarefas
async function loadTasks() {
  const res = await fetch(`${API}/tasks`);
  const data = await res.json();

  document.getElementById("taskList").innerHTML =
    data.map(t => `
      <li>
        ${t.completed ? `<s>${t.name}</s>` : t.name} - prioridade ${t.priority}
        <button onclick="completeTask(${t.id})" style="margin-left:10px;">Concluir</button>
        <button onclick="deleteTask(${t.id})" style="margin-left:5px; color:red;">Excluir</button>
      </li>
    `).join("");
}

// Carregar ranking
async function loadRank() {
  const res = await fetch(`${API}/rank`);
  const data = await res.json();

  document.getElementById("rankList").innerHTML =
    data.map(t => `<li>${t.name} - prioridade ${t.priority}</li>`).join("");
}

// Botão para gerar ranking
document.getElementById("rankBtn").addEventListener("click", loadRank);

// Deletar tarefa
async function deleteTask(id) {
  await fetch(`${API}/tasks/${id}`, {
    method: "DELETE"
  });
  loadTasks();
}

// Concluir tarefa
async function completeTask(id) {
  await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true })
  });
  loadTasks();
}

// Iniciar carregamento da lista
loadTasks();

