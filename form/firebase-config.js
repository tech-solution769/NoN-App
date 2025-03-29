// Importa as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAQFjNjEGQ1o_iOk9wBUxOgzuq2dWIzOU",
  authDomain: "mensagens-976cf.firebaseapp.com",
  databaseURL: "https://mensagens-976cf-default-rtdb.firebaseio.com", // Certifique-se de adicionar o URL do seu Realtime Database
  projectId: "mensagens-976cf",
  storageBucket: "mensagens-976cf.firebasestorage.app",
  messagingSenderId: "326776973544",
  appId: "1:326776973544:web:4a70c3739d9455336f415d"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Função para enviar dados do formulário ao Firebase Realtime Database
document.getElementById("contatoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  try {
    // Envia os dados para o Firebase Realtime Database
    const newMessageRef = ref(db, 'mensagens/' + Date.now()); // Cria uma referência única para cada mensagem
    await set(newMessageRef, {
      nome,
      email,
      telefone,
      mensagem,
      timestamp: new Date().toISOString() // Salva a data em formato ISO
    });

    alert("Mensagem enviada com sucesso!");
    document.getElementById("contatoForm").reset(); // Limpa o formulário
  } catch (error) {
    console.error("Erro ao enviar mensagem: ", error);
    alert("Erro ao enviar mensagem.");
  }
});