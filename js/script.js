window.onload=inicio;
window.onresize=actualizar;
let x;
let y=0;
let altoNavegador= window.innerHeight-30;
let anchoNavegador= window.innerWidth;
let altoNave, anchoNave;



function inicio(){
    window.onkeydown=teclado;
    altoNave=document.querySelector("#cajaImg").offsetHeight;
    anchoNave=document.querySelector("#cajaImg").offsetWidth;
    x=Math.floor(Math.random()*anchoNavegador-anchoNave);
    document.querySelector("#cajaImg").style.left=`${x}px`;

}
// function aleatorioInicio(){
//     let restaAncho=anchoNavegador-anchoNave;
//     x=Math.floor(Math.random()*restaAncho);
//     document.querySelector("#cajaImg").style.left=`${x}px`;
// }

function teclado(e){
    let tecla= e.key;
    let restaAlto=altoNavegador-altoNave;
  
    if(tecla=="ArrowUp"){
        
        if(y<restaAlto){
            y+=10;
            if (y>restaAlto){
                y=restaAlto;
            }
            document.querySelector("#cajaImg").style.bottom=`${y}px`;
        }
    }
    if(tecla=="ArrowDown"){
        if(y>0){
        y-=10;
        document.querySelector("#cajaImg").style.bottom=`${y}px`;   
        }
    }
    if(tecla=="ArrowRight" && y>0){
        x+=10;
        if(x>anchoNavegador-15){
            x=(anchoNave/-1)+15;
        }
        document.querySelector("#cajaImg").style.left=`${x}px`;
    }
    if(tecla=="ArrowLeft" && y>0){
        x-=10;
        if(x<(anchoNave/-1)+15){
            x=anchoNavegador-15;
        }
        document.querySelector("#cajaImg").style.left=`${x}px`;
    }
}

function actualizar(){
     altoNavegador= window.innerHeight;
     anchoNavegador= window.innerWidth;
}
