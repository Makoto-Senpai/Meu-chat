// Função para criar as bolinhas animadas
function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  
  const size = Math.random() * 30 + 10; // Tamanhos variados
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;
  ball.style.left = `${Math.random() * window.innerWidth}px`;
  ball.style.top = `${window.innerHeight + size}px`; // Bolinhas começam fora da tela
  
  document.getElementById('ball-container').appendChild(ball);

  // Animação para subir
  let posY = parseFloat(ball.style.top);
  const animation = setInterval(() => {
    posY -= 2; // Velocidade reduzida
    ball.style.top = `${posY}px`;
    
    if (posY < -size) { // Remove as bolinhas quando saírem da tela
      clearInterval(animation);
      ball.remove();
    }
  }, 20);
}

// Intervalo ajustado para evitar bolinhas acumuladas
setInterval(createBall, 800); // Criar a cada 0,8 segundos