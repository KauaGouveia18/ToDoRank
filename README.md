💜 README.md — COMPLETO E PRONTO PARA USO
# 📌 ToDoRank – Aplicação Web de Lista de Tarefas com Ranking por Prioridade

Este projeto foi desenvolvido para a disciplina **Algoritmos e Complexidade em Aplicações Web/Mobile**, seguindo o roteiro fornecido pelo professor.  
A aplicação permite cadastrar tarefas, concluí-las, excluí-las e visualizar um **ranking ordenado** pela prioridade.

---

# 📂 1. Tecnologias Utilizadas

### **Frontend**
- HTML5  
- CSS3 (tema violeta, estilo limpo e feminino)  
- JavaScript (DOM, eventos e Fetch API)

### **Backend**
- Node.js  
- Express.js  
- CORS

### **Banco de Dados**
- Estrutura **em memória** (array de objetos)

---

# 🧠 2. Estruturas de Dados Utilizadas

O projeto utiliza principalmente:

### ✔ **Array (lista linear)**
Todas as tarefas são armazenadas em um array JavaScript:

```js
let tasks = [];


Cada tarefa possui o formato:

{
  id: Number,
  name: String,
  priority: Number,
  completed: Boolean
}

✔ Justificativa

Arrays permitem:

Inserção simples (O(1))

Filtragem eficiente

Ordenação com algoritmos clássicos

Manipulação com métodos nativos modernos

🧮 3. Análise de Algoritmos e Complexidade

Aqui está a análise exigida no roteiro do professor:

3.1 Inserção de tarefas

Operação: adicionar objeto ao array

tasks.push(task);


Melhor caso: O(1)

Caso médio: O(1)

Pior caso: O(1)

Motivo: push insere no final da lista.

3.2 Exclusão de tarefas
tasks = tasks.filter(t => t.id !== id);


Melhor caso: O(n)

Médio: O(n)

Pior: O(n)

Filtragem exige percorrer toda a lista.

3.3 Marcar tarefa como concluída
tasks.map(...)


Melhor: O(n)

Médio: O(n)

Pior: O(n)

3.4 Geração do Ranking
unique.sort((a, b) => b.priority - a.priority);

Algoritmo de ordenação usado: MergeSort/TimSort (nativo do JS)

Pior caso: O(n log n)

Médio: O(n log n)

Melhor: O(n) quando parcialmente ordenado

O JavaScript usa TimSort, combinação de MergeSort + InsertionSort.

3.5 Remoção de duplicatas no ranking
unique.some(...)


Complexidade total: O(n²) no pior caso
Mas como n é pequeno (tarefas), não afeta o desempenho.

📊 4. Endpoints da API
POST /tasks

Adiciona tarefa.

GET /tasks

Lista todas as tarefas.

PUT /tasks/:id

Concluir tarefa.

DELETE /tasks/:id

Excluir tarefa.

GET /rank

Retorna ranking por prioridade.

🛠 5. Como Rodar o Projeto
✔ Passo 1 — Baixar o projeto no computador

Coloque as pastas:

/backend
/frontend

✔ Passo 2 — Instalar dependências (dentro da pasta backend)

No terminal:

cd backend
npm install express cors

✔ Passo 3 — Rodar o backend
node server.js


O servidor abrirá em:

http://localhost:3000

✔ Passo 4 — Rodar o frontend

Basta abrir o arquivo:

frontend/index.html


no navegador.

🟣 6. Funcionalidades da Aplicação

✔ Adicionar tarefas
✔ Listar tarefas
✔ Concluir tarefa (fica riscada)
✔ Excluir tarefa
✔ Ranking ordenado (maior prioridade primeiro)
✔ Remoção de duplicatas
✔ Interface feminina, visual violeta
✔ Frase motivacional
