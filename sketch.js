cdflet xBolinha = 10;
let yBolinha = 200; 
let diametro = 22;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
//variáveis da raquete
letxRaquete = 5;
letyRaquete = 150;
let raqueteComprimento = 10;
let raquete Altura = 90;
let colidiu = false;
function setup (){
createCanvas(600,400);
  }
function draw (){
background (0);
mostraBolinha();
movimentaBolinha();
verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
colisaoMinhaRaqueteBiblioteca();
  }
function movimentaBolinha(){
  xBolinha+=velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }
  function verificaColisaoBorda(){
    if (xBolinha + raio >width || xBolinha - raio < 0 {
        velocidade YBolinha *= -1;
        }
    }
function mostraRaquete (){
  rect(xRaquete,yRaquete,raqueteComprimento,
       raqueteAltura);
  }
function movimentoMinhaRaquete(){
  if(keylsDown(UP_ARROW)){
    yRaquete-=10;
    }
  }
function verificaColisaoRaquete(){
  if(xBolinha - raio

  if(keylsDown(DOWN_ARROW)){
    yRaquete +=10;
    
  
  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}