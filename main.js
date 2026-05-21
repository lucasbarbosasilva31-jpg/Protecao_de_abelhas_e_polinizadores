## HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Guardiões dos Polinizadores</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <img class="bee" src="https://cdn-icons-png.flaticon.com/512/616/616494.png" alt="Abelha">

  <header>
    <div class="hero">
      <h1>Proteja as Abelhas 🐝</h1>
      <p>
        As abelhas e outros polinizadores são essenciais para a vida no planeta.
        Sem eles, grande parte dos alimentos e das plantas desapareceriam.
        Junte-se ao movimento pela preservação da biodiversidade.
      </p>
      <a href="#acoes" class="btn">Saiba Como Ajudar</a>
    </div>
  </header>

  <section>
    <div class="section-title">
      <h2>Por Que os Polinizadores Importam?</h2>
      <p>Eles garantem o equilíbrio dos ecossistemas e a produção de alimentos.</p>
    </div>

    <div class="cards">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop" alt="">
        <div class="card-content">
          <h3>Produção de Alimentos</h3>
          <p>
            Cerca de 75% das culturas agrícolas dependem da polinização feita por insetos.
          </p>
        </div>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop" alt="">
        <div class="card-content">
          <h3>Biodiversidade</h3>
          <p>
            Abelhas ajudam na reprodução das plantas e mantêm os ecossistemas saudáveis.
          </p>
        </div>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop" alt="">
        <div class="card-content">
          <h3>Equilíbrio Ambiental</h3>
          <p>
            A preservação dos polinizadores fortalece o clima e protege a natureza.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="section-title">
      <h2>Impacto Global</h2>
      <p>Os números mostram a importância dos polinizadores.</p>
    </div>

    <div class="counter-container">
      <div class="counter-box">
        <h3 class="counter" data-target="75">0</h3>
        <p>% das plantações dependem de polinização</p>
      </div>

      <div class="counter-box">
        <h3 class="counter" data-target="20000">0</h3>
        <p>Espécies de abelhas no mundo</p>
      </div>

      <div class="counter-box">
        <h3 class="counter" data-target="35">0</h3>
        <p>% da produção global de alimentos</p>
      </div>
    </div>
  </section>

  <section id="acoes">
    <div class="section-title">
      <h2>Como Você Pode Ajudar</h2>
      <p>Pequenas ações fazem uma grande diferença.</p>
    </div>

    <div class="cards">
      <div class="card">
        <div class="card-content">
          <h3>🌻 Plante Flores</h3>
          <p>
            Cultive flores nativas e plantas que forneçam néctar para os polinizadores.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h3>🚫 Evite Agrotóxicos</h3>
          <p>
            Produtos químicos prejudicam as abelhas e contaminam o ambiente.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h3>🏡 Crie Abrigos</h3>
          <p>
            Pequenos jardins e hotéis para insetos ajudam na sobrevivência das espécies.
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="cta">
    <h2>Juntos Pela Natureza</h2>
    <p>
      Cada abelha salva representa mais vida, mais flores e mais alimento para o planeta.
      Compartilhe essa causa e incentive a preservação dos polinizadores.
    </p>

    <button class="btn" onclick="mostrarMensagem()">
      Apoiar a Campanha
    </button>
  </div>

  <footer>
    <p>🐝 Guardiões dos Polinizadores © 2026</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## CSS (`style.css`)

```css
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body{
  background:#fffdf5;
  color:#333;
  overflow-x:hidden;
}

header{
  height:100vh;
  background:
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url('https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1400&auto=format&fit=crop');
  background-size:cover;
  background-position:center;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  color:white;
  padding:20px;
}

.hero{
  max-width:800px;
  animation: fadeIn 2s ease;
}

.hero h1{
  font-size:4rem;
  margin-bottom:20px;
  color:#ffd54f;
}

.hero p{
  font-size:1.3rem;
  line-height:1.7;
  margin-bottom:30px;
}

.btn{
  display:inline-block;
  padding:15px 35px;
  background:#ffb300;
  color:white;
  text-decoration:none;
  border-radius:50px;
  font-weight:bold;
  transition:0.3s;
  border:none;
  cursor:pointer;
}

.btn:hover{
  background:#ff8f00;
  transform:scale(1.05);
}

section{
  padding:80px 10%;
}

.section-title{
  text-align:center;
  margin-bottom:50px;
}

.section-title h2{
  font-size:2.8rem;
  color:#f9a825;
  margin-bottom:10px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
  gap:30px;
}

.card{
  background:white;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 10px 25px rgba(0,0,0,0.1);
  transition:0.4s;
}

.card:hover{
  transform:translateY(-10px);
}

.card img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.card-content{
  padding:25px;
}

.card-content h3{
  margin-bottom:15px;
  color:#ef6c00;
}

.stats{
  background:linear-gradient(135deg,#ffca28,#f57f17);
  color:white;
  text-align:center;
}

.counter-container{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:40px;
  margin-top:50px;
}

.counter-box h3{
  font-size:3rem;
}

.counter-box p{
  margin-top:10px;
  font-size:1.1rem;
}

.cta{
  background:#2e7d32;
  color:white;
  text-align:center;
  border-radius:30px;
  margin:80px 10%;
  padding:60px 30px;
}

.cta h2{
  font-size:3rem;
  margin-bottom:20px;
}

.cta p{
  max-width:700px;
  margin:auto;
  line-height:1.8;
  margin-bottom:30px;
}

footer{
  background:#222;
  color:#bbb;
  text-align:center;
  padding:30px;
}

.bee{
  position:fixed;
  width:60px;
  z-index:999;
  pointer-events:none;
}

@keyframes fadeIn{
  from{
    opacity:0;
    transform:translateY(30px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

@media(max-width:768px){
  .hero h1{
    font-size:2.8rem;
  }

  .hero p{
    font-size:1rem;
  }

  .cta h2{
    font-size:2rem;
  }
}
```

---

## JavaScript (`script.js`)

```javascript
// Contadores animados
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Botão CTA
function mostrarMensagem(){
  alert("Obrigado por apoiar a proteção das abelhas e dos polinizadores! 🌻🐝");
}

// Movimento da abelha conforme mouse
document.addEventListener('mousemove', (e) => {
  const bee = document.querySelector('.bee');

  bee.style.left = e.pageX + 20 + 'px';
  bee.style.top = e.pageY + 20 + 'px';
});
```
