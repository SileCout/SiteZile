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

const tarotCards=[
{n:'O Louco',f:'00-louco.png',e:'novos começos, liberdade e coragem para experimentar',a:'agir por impulso sem observar riscos',c:'acolha o novo, mantendo os pés conscientes no caminho'},
{n:'O Mago',f:'01-mago.png',e:'iniciativa, habilidade e poder de realização',a:'dispersar talentos ou tentar controlar tudo',c:'use com intenção os recursos que já estão em suas mãos'},
{n:'A Sacerdotisa',f:'02-sacerdotisa.png',e:'intuição, silêncio e conhecimento interior',a:'guardar demais ou ignorar sinais sutis',c:'escute sua percepção antes de buscar respostas externas'},
{n:'A Imperatriz',f:'03-imperatriz.png',e:'criatividade, cuidado, abundância e crescimento',a:'excesso de proteção ou dependência de aprovação',c:'nutra aquilo que deseja ver florescer'},
{n:'O Imperador',f:'04-imperador.png',e:'estrutura, segurança, autoridade e direção',a:'rigidez, controle ou dificuldade de ceder',c:'organize seus passos sem sufocar a espontaneidade'},
{n:'O Papa',f:'05-papa.png',e:'valores, aprendizado, tradição e orientação',a:'seguir regras sem questionar o que ainda faz sentido',c:'honre seus princípios e escolha ensinamentos coerentes com você'},
{n:'Os Enamorados',f:'06-enamorados.png',e:'escolhas, vínculos, afinidade e alinhamento de valores',a:'indecisão ou escolha baseada apenas no desejo imediato',c:'decida de acordo com aquilo que une coração e consciência'},
{n:'O Carro',f:'07-carro.png',e:'movimento, conquista, foco e determinação',a:'pressa ou tentativa de avançar em direções opostas',c:'defina seu rumo e conduza sua energia com firmeza'},
{n:'A Justiça',f:'08-justica.png',e:'equilíbrio, verdade, responsabilidade e consequências',a:'julgamentos rígidos ou recusa em assumir uma escolha',c:'observe os fatos e aja com honestidade e medida'},
{n:'O Eremita',f:'09-eremita.png',e:'recolhimento, sabedoria, prudência e busca interior',a:'isolamento prolongado ou medo de compartilhar',c:'diminua o ruído para reconhecer sua própria luz'},
{n:'A Roda da Fortuna',f:'10-roda-da-fortuna.png',e:'mudança de ciclo, movimento e novas circunstâncias',a:'resistir ao que muda ou deixar tudo nas mãos do acaso',c:'adapte-se ao ciclo e escolha como responder a ele'},
{n:'A Força',f:'11-forca.png',e:'coragem serena, domínio interior e perseverança',a:'reprimir emoções ou tentar vencer pela imposição',c:'conduza a situação com firmeza gentil'},
{n:'O Enforcado',f:'12-enforcado.png',e:'pausa, entrega e mudança de perspectiva',a:'estagnação, sacrifício excessivo ou adiamento',c:'pare o suficiente para enxergar uma saída diferente'},
{n:'A Morte',f:'13-morte.png',e:'encerramento, desapego e transformação profunda',a:'apego ao que terminou ou medo da renovação',c:'libere espaço para que uma nova fase possa nascer'},
{n:'A Temperança',f:'14-temperanca.png',e:'harmonia, cura gradual, conciliação e paciência',a:'acomodação ou tentativa de apressar processos delicados',c:'combine razão e sentimento no ritmo possível'},
{n:'O Diabo',f:'15-diabo.png',e:'desejo, intensidade, matéria e padrões de apego',a:'dependência, excesso ou sensação de aprisionamento',c:'reconheça o vínculo que pode ser transformado por uma escolha consciente'},
{n:'A Torre',f:'16-torre.png',e:'ruptura, revelação e queda de estruturas frágeis',a:'resistência à verdade ou medo de reconstruir',c:'use o que foi revelado como base para algo mais autêntico'},
{n:'A Estrela',f:'17-estrela.png',e:'esperança, inspiração, renovação e confiança',a:'idealização sem ação ou vulnerabilidade excessiva',c:'alimente a esperança com pequenos gestos concretos'},
{n:'A Lua',f:'18-lua.png',e:'sensibilidade, imaginação, mistério e inconsciente',a:'confusão, medo ou interpretação distorcida dos sinais',c:'não force certezas enquanto as emoções estiverem nebulosas'},
{n:'O Sol',f:'19-sol.png',e:'clareza, vitalidade, alegria e reconhecimento',a:'excesso de confiança ou necessidade constante de destaque',c:'permita-se ver e compartilhar o que está claro'},
{n:'O Julgamento',f:'20-julgamento.png',e:'despertar, chamado, avaliação e renascimento',a:'culpa, autocobrança ou resistência a responder ao chamado',c:'acolha o aprendizado e escolha uma nova postura'},
{n:'O Mundo',f:'21-mundo.png',e:'conclusão, integração, realização e expansão',a:'dificuldade de encerrar um ciclo ou reconhecer conquistas',c:'celebre o caminho concluído e prepare-se para o próximo'}].map(card=>({...card,f:card.f.replace('.png','.webp')}));
const tarotPositions=['Passado','Presente','Futuro'];let selectedTarotCards=[];
function renderDeck(){const deck=document.getElementById('tarot-deck');if(!deck)return;deck.innerHTML='';selectedTarotCards=[];tarotCards.map((card,index)=>({index,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).forEach(({index},i)=>{const b=document.createElement('button');b.type='button';b.className='deck-card';b.setAttribute('aria-label',`Escolher a carta ${i+1}`);b.innerHTML='<img src="cartas/verso-zile-oraculos.webp" alt="Carta virada para baixo">';b.addEventListener('click',()=>chooseCard(b,index));deck.appendChild(b)});updateTarotProgress()}
function chooseCard(button,index){const question=document.getElementById('tarot-question');if(!question.value.trim()){question.focus();question.setCustomValidity('Escreva sua pergunta antes de escolher as cartas.');question.reportValidity();question.addEventListener('input',()=>question.setCustomValidity(''),{once:true});return}if(selectedTarotCards.length>=3)return;selectedTarotCards.push(tarotCards[index]);button.classList.add('chosen','reveal');updateTarotProgress();if(selectedTarotCards.length===3)showSelectedCards()}
function updateTarotProgress(){const n=selectedTarotCards.length;document.getElementById('selection-count').textContent=['Nenhuma carta escolhida','Primeira carta escolhida','Duas cartas escolhidas','Três cartas escolhidas'][n];document.querySelectorAll('.progress-dots i').forEach((d,i)=>d.classList.toggle('active',i<n))}
function showSelectedCards(){document.getElementById('selected-cards').innerHTML=selectedTarotCards.map((c,i)=>`<figure class="selected-card"><img src="cartas/${c.f}" alt="${c.n}"><figcaption><span class="selected-position">${tarotPositions[i]}</span><span class="selected-name">${c.n}</span></figcaption></figure>`).join('');const p=document.getElementById('reading-panel');p.hidden=false;setTimeout(()=>p.scrollIntoView({behavior:'smooth',block:'start'}),150)}
function detectTheme(q){const s=q.toLowerCase();const themes=[['amor e relacionamentos',['amor','relacion','namor','casamento','parceir','ex','afetiv']],['trabalho e propósito',['trabalho','emprego','carreira','profiss','negócio','projeto','estudo']],['vida material',['dinheiro','finance','dívida','pagar','prosper','material']],['família e vínculos',['família','familia','filho','mãe','mae','pai','irmã','irmao']],['caminho interior',['espiritual','energia','propósito','proposito','interior','emocional']]];return (themes.find(t=>t[1].some(k=>s.includes(k)))||['seu momento atual'])[0]}
function positionText(c,i){if(i===0)return `Em suas raízes recentes, ${c.n} aponta para ${c.e}. Essa energia ajuda a compreender como a situação se formou. O cuidado é não permanecer presa(o) a ${c.a}.`;if(i===1)return `No presente, ${c.n} coloca em evidência ${c.e}. É a força que atua agora e pede uma resposta consciente: ${c.c}.`;return `Como tendência, ${c.n} sugere um caminho marcado por ${c.e}. Não é uma previsão fixa, mas uma possibilidade que se fortalece quando você escolhe: ${c.c}.`}
document.getElementById('tarot-question')?.addEventListener('input',e=>document.getElementById('question-count').textContent=`${e.target.value.length} / 300`);
document.getElementById('tarot-form')?.addEventListener('submit',e=>{e.preventDefault();const q=document.getElementById('tarot-question').value.trim();if(!q){document.getElementById('tarot-question').focus();return}const theme=detectTheme(q),r=document.getElementById('tarot-result');r.innerHTML=`<h3>Sua leitura</h3><p class="reading-theme">Uma reflexão sobre ${theme}</p><p><strong>Sua pergunta:</strong> ${escapeHtml(q)}</p>${selectedTarotCards.map((c,i)=>`<div class="reading-block"><h4>${tarotPositions[i]} — ${c.n}</h4><p>${positionText(c,i)}</p></div>`).join('')}<div class="reading-synthesis"><h4>Síntese da tiragem</h4><p>A leitura parte de <strong>${selectedTarotCards[0].e}</strong>, atravessa um presente de <strong>${selectedTarotCards[1].e}</strong> e aponta para <strong>${selectedTarotCards[2].e}</strong>. O fio que une as cartas convida você a reconhecer o que trouxe até aqui, agir no presente com consciência e permitir que o futuro seja construído pelas suas escolhas.</p><p><strong>Conselho:</strong> ${selectedTarotCards[1].c}; ao mesmo tempo, ${selectedTarotCards[2].c}.</p></div><p class="result-note">Esta é uma leitura simbólica para reflexão e autoconhecimento. Não determina o futuro nem substitui orientação médica, psicológica, jurídica ou financeira.</p><button type="button" class="new-reading">Fazer nova tiragem</button>`;r.hidden=false;r.querySelector('.new-reading').addEventListener('click',resetReading);r.scrollIntoView({behavior:'smooth',block:'start'})});
function escapeHtml(t){const e=document.createElement('div');e.textContent=t;return e.innerHTML}function resetReading(){document.getElementById('reading-panel').hidden=true;document.getElementById('tarot-result').hidden=true;document.getElementById('tarot-question').value='';document.getElementById('question-count').textContent='0 / 300';renderDeck();document.getElementById('tiragem').scrollIntoView({behavior:'smooth'})}renderDeck();


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
