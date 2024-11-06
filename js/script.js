let ypos=80;
let mov=20;
let xpos=200;
let agua = 0;
let iniciotiempo;
var coloragua;

 
function setup() {
createCanvas(windowWidth, windowHeight);
iniciotiempo=millis(); 
coloragua=color('blue')
}


function draw() {
background(135, 206, 235);
//Dibujamos los cuadros donde va el texto
fill(190);
 rect(4,15,170,80,0,10,10,0);
fill(255);
 rect(0,10,170,80,0,10,10,0);
//Escribimos los textos con las propiedades que queremos
fill(0)
 textSize(15);
 stroke(0);
strokeWeight(1); 
text("AHORRA ",20,30)
fill(coloragua)
textSize(50);
stroke(coloragua);
strokeWeight(2);
text("AGUA ",10,72)

 //Dibujamos el grifo y el fregadero(la parte que va por detras de la gota)
noStroke();
fill(100);
arc(325, 100, 100, 100,PI+QUARTER_PI,TWO_PI);

rect(220,50,110,50);
rect(325,100,50,height/1.7);
rect(0,height/1.7,width,height); 
fill(180);
rect(0,height/1.7,width,height/15); 
//Definimos donde se va a aplicar el movimiento en este caso en la ypos
ypos= ypos + mov; 
//
estelaagua();
//Dibujo de la gota
noStroke();
fill(coloragua);
circle(xpos,ypos,30);
triangle(xpos-15,ypos,xpos+15,ypos,xpos,ypos-30)
//Dibujamos la parte del grifo que va por delante de la gota para que de //el efecto de que sale del grifo
fill(100);
arc(225, 100, 100, 100, PI , TWO_PI);
rect(175,100,50,10);
//Usamos el if para que en nuestro caso las cuando las milesimas son mas //grandes que 1000 lo que significa que ha pasado un segundo entonces vuelve //a la posicion inicial la gota a la vez tambien hacemos que cada segundo el //agua suba el nivel

if (millis() - iniciotiempo >= 1000 ) {  
   ypos=100
   agua += 2;
   iniciotiempo = millis();
  //Hacemos que cuando el agua haya subido de nivel 60 veces baje a 0
  //esto nos indica que ha pasado un minuto
 if(agua>=120){
   agua=0;
 }
   
}
//Dibujamos el agua
fill(coloragua);
rect(0, height - agua, width, agua);
//Usamos el translate para definir la nueva posicion del grifo y que vamos   //a usar para rotar
translate(350,height/2);
scale(0.8);
cuadrado();
rotate(HALF_PI)
cuadrado();
rotate(PI);
cuadrado();
rotate(PI+HALF_PI);
cuadrado();
fill(0,100,255);
circle(0,0,30);

}
//Creamos la funcion del cuadrado que es como una parte de la maneta del //grifo para despues poder rotarla y hacer la maneta mas facil
function cuadrado(){
fill(150)
noStroke();
rect(-15,0,30,60,0,0,30,30);
}
//Creamos la funcion estelaagua para que parezca que hay un chorro constante //saliendo del grifo, para ello utilizamos la estructura de for y dibujamos //circulos muy seguidos para conseguir esa sensacion
function estelaagua(){

 for (let i = 100; i < height; i=i+height/130) {
 fill(coloragua);
  let x = 200; 
 ellipse(x, i, 5, 5); // Dibuja una estrella en la posición (x, y)
  
}
}