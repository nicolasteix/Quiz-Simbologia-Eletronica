const flashcards = [
  {
    question: "<img src='imagens/Abaixar lança.png' alt='Abaixar Lança'>",
    answer: "Abaixar Lança",
  },
  {
    question:
      "<img src='imagens/Acelerar ou aumentar a velocidade.png' alt='Acelerar ou aumentar a velocidade'>",
    answer: "Acelerar ou aumentar a velocidade",
  },
  {
    question:
      "<img src='imagens/Alarme de deslocamento.png' alt='Alarme de deslocamento'>",
    answer: "Alarme de deslocamento",
  },
  {
    question:
      "<img src='imagens/Aquecedor de ar do motor.png' alt='Aquecedor de ar do motor'>",
    answer: "Aquecedor de ar do motor",
  },
  {
    question: "<img src='imagens/Aquecimento.png' alt='Aquecimento'>",
    answer: "Aquecimento",
  },
  {
    question: "<img src='imagens/Ar.png' alt='Ar'>",
    answer: "Ar",
  },
  {
    question:
      "<img src='imagens/Automatico da Transmissao.png' alt='Automatico da Transmissao'>",
    answer: "Automatico da Transmissao",
  },
  {
    question: "<img src='imagens/Automatico.png' alt='Automatico'>",
    answer: "Automatico",
  },
  {
    question:
      "<img src='imagens/Condicionador de ar.png' alt='Condicionador de ar'>",
    answer: "Condicionador de ar",
  },
  {
    question:
      "<img src='imagens/Controlador eletronico.png' alt='Controlador eletronico'>",
    answer: "Controlador eletronico",
  },
  {
    question:
      "<img src='imagens/Controle automatico da rpm do motor.png' alt='Controle automatico da rpm do motor'>",
    answer: "Controle automatico da rpm do motor",
  },
  {
    question:
      "<img src='imagens/Controle de deslocamento.png' alt='Controle de deslocamento'>",
    answer: "Controle de deslocamento",
  },
  {
    question:
      "<img src='imagens/Desacelerar ou reduzir velocidade.png' alt='Desacelerar ou reduzir velocidade'>",
    answer: "Desacelerar ou reduzir velocidade",
  },
  {
    question: "<img src='imagens/Desligado.png' alt='Desligado'>",
    answer: "Desligado",
  },
  {
    question: "<img src='imagens/Despejar caçamba.png' alt='Despejar caçamba'>",
    answer: "Despejar caçamba",
  },
  {
    question: "<img src='imagens/Direção primaria.png' alt='Direção primaria'>",
    answer: "Direção primaria",
  },
  {
    question:
      "<img src='imagens/Direçao secundaria.png' alt='Direçao secundaria'>",
    answer: "Direçao secundaria",
  },
  {
    question: "<img src='imagens/Esticar Braço.png' alt='Esticar Braço'>",
    answer: "Esticar Braço",
  },
  {
    question: "<img src='imagens/Fechar braço.png' alt='Fechar braço'>",
    answer: "Fechar braço",
  },
  {
    question: "<img src='imagens/Fechar caçamba.png' alt='Fechar caçamba'>",
    answer: "Fechar caçamba",
  },
  {
    question:
      "<img src='imagens/Filtro de ar da transmissao obstruido.png' alt='Filtro de ar da transmissao obstruido'>",
    answer: "Filtro de ar da transmissao obstruido",
  },
  {
    question:
      "<img src='imagens/Filtro de ar do motor obstruido.png' alt='Filtro de ar do motor obstruido'>",
    answer: "Filtro de ar do motor obstruido",
  },
  {
    question:
      "<img src='imagens/Filtro de Ar do Motor.png' alt='Filtro de Ar do Motor'>",
    answer: "Filtro de Ar do Motor",
  },
  {
    question:
      "<img src='imagens/Filtro de oleo da transmissao.png' alt='Filtro de oleo da transmissao'>",
    answer: "Filtro de oleo da transmissao",
  },
  {
    question:
      "<img src='imagens/Filtro de Oleo do Motor.png' alt='Filtro de Oleo do Motor'>",
    answer: "Filtro de Oleo do Motor",
  },
  {
    question:
      "<img src='imagens/Filtro de oleo hidraulico obstruido.png' alt='Filtro de oleo hidraulico obstruido'>",
    answer: "Filtro de oleo hidraulico obstruido",
  },
  {
    question: "<img src='imagens/Filtro.png' alt='Filtro'>",
    answer: "Filtro",
  },
  {
    question:
      "<img src='imagens/Freio de estacionamento (2).png' alt='Freio de estacionamento'>",
    answer: "Freio de estacionamento",
  },
  {
    question:
      "<img src='imagens/Freio de Estacionamento.png' alt='Freio de Estacionamento'>",
    answer: "Freio de Estacionamento",
  },
  {
    question: "<img src='imagens/Giro a direita.png' alt='Giro a direita'>",
    answer: "Giro a direita",
  },
  {
    question: "<img src='imagens/Giro a esquerda.png' alt='Fechar caçamba'>",
    answer: "Fechar caçamba",
  },
  {
    question: "<img src='imagens/Hidráulico.png' alt='Hidráulico'>",
    answer: "Hidráulico",
  },
  {
    question: "<img src='imagens/Horimetro.png' alt='Horimetro'>",
    answer: "Horimetro",
  },
  {
    question: "<img src='imagens/Indicadores.png' alt='Indicadores'>",
    answer: "Indicadores",
  },
  {
    question:
      "<img src='imagens/Lavador do para-brisa.png' alt='Lavador do para-brisa'>",
    answer: "Lavador do para-brisa",
  },
  {
    question: "<img src='imagens/Ligado.png' alt='Ligado'>",
    answer: "Ligado",
  },
  {
    question:
      "<img src='imagens/Limpador de Para-brisa.png' alt='Limpador de Para-brisa'>",
    answer: "Limpador de Para-brisa",
  },
  {
    question:
      "<img src='imagens/Liquido Arrefecedor.png' alt='Liquido Arrefecedor'>",
    answer: "Liquido Arrefecedor",
  },
  {
    question:
      "<img src='imagens/Luminosidade do painel.png' alt='Luminosidade do painel'>",
    answer: "Luminosidade do painel",
  },
  {
    question: "<img src='imagens/Luz de Ação (2).png' alt='Luz de Ação'>",
    answer: "Luz de Ação",
  },
  {
    question: "<img src='imagens/Luz de Ação.png' alt='Luz de Ação'>",
    answer: "Luz de Ação",
  },
  {
    question:
      "<img src='imagens/Manutenção Requerida.png' alt='Manutenção Requerida'>",
    answer: "Manutenção Requerida",
  },
  {
    question: "<img src='imagens/Marcha a frente.png' alt='Marcha a frente'>",
    answer: "Marcha a frente",
  },
  {
    question: "<img src='imagens/Marcha a ré.png' alt='Marcha a ré'>",
    answer: "Marcha a ré",
  },
  {
    question: "<img src='imagens/Motor.png' alt='Motor'>",
    answer: "Motor",
  },
  {
    question:
      "<img src='imagens/Mudança automatica da transmissao.png' alt='Mudança automatica da transmissao'>",
    answer: "Mudança automatica da transmissao",
  },
  {
    question:
      "<img src='imagens/Neutralizador da transmissao.png' alt='Neutralizador da transmissao'>",
    answer: "Neutralizador da transmissao",
  },
  {
    question: "<img src='imagens/Neutro.png' alt='Neutro'>",
    answer: "Neutro",
  },
  {
    question:
      "<img src='imagens/Nivel de agua no filtro de combustivel.png' alt='Nivel de agua no filtro de combustivel'>",
    answer: "Nivel de agua no filtro de combustivel",
  },
  {
    question: "<img src='imagens/Fechar caçamba.png' alt='Fechar caçamba'>",
    answer: "Fechar caçamba",
  },
  {
    question:
      "<img src='imagens/Nivel de Combustivel (2).png' alt='Nivel de Combustivel'>",
    answer: "Nivel de Combustivel",
  },
  {
    question:
      "<img src='imagens/Nivel de combustivel.png' alt='Nivel de combustivel'>",
    answer: "Nivel de combustivel",
  },
  {
    question:
      "<img src='imagens/Nivel de oleo hidraulico.png' alt='Nivel de oleo hidraulico'>",
    answer: "Nivel de oleo hidraulico",
  },
  {
    question:
      "<img src='imagens/Nivel do liquido arrefecedor do motor.png' alt='Nivel do liquido arrefecedor do motor'>",
    answer: "Nivel do liquido arrefecedor do motor",
  },
  {
    question:
      "<img src='imagens/Nivel do oleo hidraulico.png' alt='Nivel do oleo hidraulico'>",
    answer: "Nivel do oleo hidraulico",
  },
  {
    question: "<img src='imagens/Nível.png' alt='Nível'>",
    answer: "Nível",
  },
  {
    question:
      "<img src='imagens/Oleo do Freio De Serviço.png' alt='Oleo do Freio De Serviço'>",
    answer: "Oleo do Freio De Serviço",
  },
  {
    question: "<img src='imagens/Oleo.png' alt='Oleo'>",
    answer: "Oleo",
  },
  {
    question: "<img src='imagens/Painel Monitor.png' alt='Painel Monitor'>",
    answer: "Painel Monitor",
  },
  {
    question: "<img src='imagens/Partida do Motor.png' alt='Partida do Motor'>",
    answer: "Partida do Motor",
  },
  {
    question:
      "<img src='imagens/Pressao de combustivel.png' alt='Pressao de combustivel'>",
    answer: "Pressao de combustivel",
  },
  {
    question:
      "<img src='imagens/Pressão do Oleo da Transmissão.png' alt='Pressão do Oleo da Transmissão'>",
    answer: "Pressao do oleo da transmissao",
  },
  {
    question:
      "<img src='imagens/Pressao do oleo do freio de serviço.png' alt='Pressao do oleo do freio de serviço'>",
    answer: "Pressao do oleo do freio de serviço",
  },
  {
    question:
      "<img src='imagens/Pressão do oleo do freio de serviço.png' alt='Pressão do oleo do freio de serviço'>",
    answer: "Pressão do oleo do freio de serviço",
  },
  {
    question:
      "<img src='imagens/Pressao do oleo do motor.png' alt='Pressao do oleo do motor'>",
    answer: "Pressao do oleo do motor",
  },
  {
    question:
      "<img src='imagens/Pressao do oleo do motor1.png' alt='Pressao do oleo do motor'>",
    answer: "Pressao do oleo do motor",
  },
  {
    question: "<img src='imagens/Pressão.png' alt='Pressão'>",
    answer: "Pressão",
  },
  {
    question: "<img src='imagens/sistema eletrico.png' alt='sistema eletrico'>",
    answer: "sistema eletrico",
  },
  {
    question:
      "<img src='imagens/Temperatura do liquido arrefecedor do motor (2).png' alt='Temperatura do liquido arrefecedor do motor'>",
    answer: "Temperatura do liquido arrefecedor do motor",
  },
  {
    question:
      "<img src='imagens/Temperatura do Liquido Arrefecedor do Motor.png' alt='Temperatura do Liquido Arrefecedor do Motor'>",
    answer: "Temperatura do Liquido Arrefecedor do Motor",
  },
  {
    question:
      "<img src='imagens/Temperatura do Oleo da Transmissao.png' alt='Temperatura do Oleo da Transmissao'>",
    answer: "Temperatura do Oleo da Transmissao",
  },
  {
    question:
      "<img src='imagens/Temperatura do oleo hidraulico (2).png' alt='Temperatura do oleo hidraulico'>",
    answer: "Temperatura do oleo hidraulico",
  },
  {
    question:
      "<img src='imagens/Temperatura do Oleo Hidraulico.png' alt='Temperatura do Oleo Hidraulico'>",
    answer: "Temperatura do Oleo Hidraulico",
  },
  {
    question: "<img src='imagens/temperatura.png' alt='temperatura'>",
    answer: "temperatura",
  },
  {
    question: "<img src='imagens/Transmissão.png' alt='Transmissão'>",
    answer: "Transmissão",
  },
];
// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
}

// Embaralha o array de flashcards
shuffleArray(flashcards);

const flashcardsContainer = document.getElementById("flashcards");
const questionElement = document.getElementById("question-text");
const answerElement = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");
const previousButton = document.getElementById("previous");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;

const loadQuestion = () => {
  questionElement.innerHTML = flashcards[currentQuestionIndex].question;
  answerElement.value = "";
  feedbackElement.innerHTML = "";
  updateButtons();
};

const updateButtons = () => {
  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = true;
};

const checkAnswer = () => {
  const userAnswer = answerElement.value.trim().toLowerCase();
  const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
  const normalizedUserAnswer = removeAccents(userAnswer);
  const normalizedCorrectAnswer = removeAccents(correctAnswer);

  // Comparação aproximada das strings usando o algoritmo de Levenshtein
  const similarityThreshold = 0.8; // Limiar de similaridade (ajuste conforme necessário)
  const similarity = calculateSimilarity(
    normalizedUserAnswer,
    normalizedCorrectAnswer
  );

  if (similarity >= similarityThreshold) {
    feedbackElement.textContent = "Excelente! Você Acertou! Clique em Próxima";
    nextButton.disabled = false;
  } else {
    feedbackElement.textContent = "Tente novamente.";
  }
};

// Função para remover acentos
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Função para calcular a similaridade entre duas strings usando o algoritmo de Levenshtein
const calculateSimilarity = (str1, str2) => {
  const maxLength = Math.max(str1.length, str2.length);
  const distance = levenshteinDistance(str1, str2);
  return 1 - distance / maxLength;
};

// Função para calcular a distância de Levenshtein entre duas strings
const levenshteinDistance = (str1, str2) => {
  const matrix = [];

  // Inicialização da matriz
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[0][j] = j;
  }

  // Preenchimento da matriz
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // Deleção
        matrix[i][j - 1] + 1, // Inserção
        matrix[i - 1][j - 1] + cost // Substituição
      );
    }
  }

  return matrix[str1.length][str2.length];
};

submitButton.addEventListener("click", checkAnswer);

previousButton.addEventListener("click", () => {
  currentQuestionIndex--;
  loadQuestion();
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  loadQuestion();
});

loadQuestion();
