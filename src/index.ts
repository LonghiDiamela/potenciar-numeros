import "./styles.css";

let rotulo1=document.getElementById("rotulo1");
let rotulo2=document.getElementById("rotulo2");
let rotulo3=document.getElementById("rotulo3");
let resultado:number=document.getElementById("resultado");

rotulo1.innerHTML="potenciar numeros";
rotulo2.innerHTML="ingrese base";
rotulo3.innerHTML="ingrese exponente";

let btnEnv=document.getElementById("btnEnv");

btnEnv.addEventListener("click",()=>{
  let base:number=Number(document.getElementById("dato1").value);
  let exponente:number=Number(document.getElementById("dato2").value);

  let numero:number=1;
  if(exponente===0){
    resultado.innerHTML="el resultado es :" + numero;
    return (numero=1);
  } else {
    for (let i=1; i<=exponente; i++){
      numero=numero*base;
    }
    resultado.innerHTML="el resultado es: " + numero;
    return numero;
  }
});
