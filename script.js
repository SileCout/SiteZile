// ── ANIMAÇÃO DE ESTRELAS ──

const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

let stars = [];

// Ajusta o tamanho do canvas à janela
function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Cria as estrelas com propriedades aleatórias
function initStars() {
  stars = [];
  const quantidade = Math.floor((canvas.width * canvas.height) / 4000);

  for (let i = 0; i < quantidade; i++) {
    stars.push({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.2 + 0.2,   // raio entre 0.2 e 1.4
      speed: Math.random() * 0.004 + 0.001, // velocidade de piscar
      phase: Math.random() * Math.PI * 2,   // fase inicial aleatória
      drift: (Math.random() - 0.5) * 0.08  // movimento horizontal lento
    });
  }
}

// Desenha as estrelas a cada frame
function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const s of stars) {
    // Calcula a opacidade com base no tempo (efeito de piscar)
    const alpha = 0.4 + 0.6 * Math.abs(Math.sin(s.phase + t * s.speed));

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(201, 168, 76, ${alpha * 0.7})`;
    ctx.fill();

    // Move a estrela levemente para os lados
    s.x += s.drift;

    // Se sair da tela, volta pelo outro lado
    if (s.x < 0) s.x = canvas.width;
    if (s.x > canvas.width) s.x = 0;
  }
}

// Loop de animação
let t = 0;

function loop() {
  t++;
  drawStars(t);
  requestAnimationFrame(loop);
}

// Reinicia as estrelas ao redimensionar a janela
window.addEventListener('resize', () => {
  resize();
  initStars();
});

// Inicializa tudo
resize();
initStars();
loop();


// ── SCROLL SUAVE AO CLICAR NO MENU ──

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});