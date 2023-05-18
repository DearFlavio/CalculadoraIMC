document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems ="center";
document.body.style.flexDirection = "column";
document.body.style.padding ="0.3%";
document.body.style.backgroundColor ="#f5f5dc";

const header = document.createElement("div");
document.body.appendChild(header);

header.style.background ="#FF0000"
header.style.height ="75%";
header.style.width ="50%";
header.style.padding ="20% 3%";
header.style. border = "3px solid #000";
header.style.display ="flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection ="column";
header.style.borderRadius = "10%"; 

const h1 = document.createElement("h1");
h1.textContent ="Calculadora De IMC";
header.appendChild(h1)
h1.style.fontFamily = "'Chakra Petch', sans-serif";
h1.style.fontSize = "200%";
h1.style.color = "#fff";

const iconReset = document.createElement("img");
header.appendChild(iconReset);
iconReset.src = "reset-icon-.png";
iconReset.style.width = "50px";
iconReset.style.height = "30px";
iconReset.style.position = "absolute";
iconReset.style.right = "34%";
iconReset.style.top = "46%";
iconReset.style.transition = "0.8s";
iconReset.addEventListener("click", function (){
    iconReset.style.transform = "scale(1.2) rotate(180deg)";
    setTimeout(() =>{
        window.location.reload(true);
    },500);
});

 const inputName = document.createElement("input");
inputName.placeholder = "Digite seu Nome";
inputName.setAttribute = ("type","text");
inputName.id ="nome";
header.appendChild(inputName);
inputName.style.width = "40%";
inputName.style.margin =".5% 1%";
inputName.style.padding = "1%  1%";
inputName.styleborder = "2px solid #000";
inputName.style.borderRadius ="5px"
inputName.style.outline ="none"
inputName.style.transition= "0s"
inputName.style.backgroundColor = "#FFA500"
inputName.style.fontFamily="'Chakra Petch', sans-serif"



const inputIdade = document.createElement("input");
inputIdade.placeholder = "Digite sua Idade";
inputIdade.setAttribute = ("type","text");
inputIdade.id ="idade";
header.appendChild(inputIdade);
inputIdade.style.width = "13%";
inputIdade.style.margin =".5% 1%";
inputIdade.style.padding = "1%  1%";
inputIdade.styleborder = "2px solid #000";
inputIdade.style.borderRadius ="5px"
inputIdade.style.outline ="none"
inputIdade.style.transition= "0s"
inputIdade.style.backgroundColor = "#FFFF00"
inputIdade.style.fontFamily="'Chakra Petch', sans-serif"


const inputPeso = document.createElement("input");
inputPeso.placeholder = "Digite seu Peso";
inputPeso.setAttribute = ("type","text");
inputPeso.id ="peso";
header.appendChild(inputPeso);
inputPeso.style.width = "13%";
inputPeso.style.margin =".5% 1%";
inputPeso.style.padding = "1%  1%";
inputPeso.styleborder = "2px solid #000";
inputPeso.style.borderRadius ="5px"
inputPeso.style.outline ="none"
inputPeso.style.transition= "0s"
inputPeso.style.backgroundColor = "#008000"
inputPeso.style.fontFamily="'Chakra Petch', sans-serif"



const inputAltura = document.createElement("input");
inputAltura.placeholder = "Digite sua Altura";
inputAltura.setAttribute = ("type","text");
inputAltura.id ="altura";
header.appendChild(inputAltura);
inputAltura.style.width = "13%";
inputAltura.style.margin =".5% 1%";
inputAltura.style.padding = "1%  1%";
inputAltura.styleborder = "2px solid #000";
inputAltura.style.borderRadius ="5px"
inputAltura.style.outline ="none"
inputAltura.style.transition= "0s"
inputAltura.style.backgroundColor = "#0000FF"
inputAltura.style.fontFamily="'Chakra Petch', sans-serif"


const inputCal = document.createElement("button");
inputCal.textContent="Ok"
inputCal.style.backgroundColor ="#A020F0";
header.appendChild(inputCal)


inputCal.addEventListener("mouseenter", function (){
    inputCal.style.transform = "scale(1.05)"
});



const ul = document.createElement("ul");
ul.style.width = "80%";
ul.style.borderRadius = "5%";
document.body.appendChild(ul);

inputCal.addEventListener("click", function() {
    const no = document.getElementById("nome").value;
    const p = document.getElementById("peso").value;
    const al = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const imc = (p/(al*al)).toFixed(1);


    if (!no && !p && !al && !idade) {
        return
    }
    let corDeFundo = '';


    if (imc < 18.5) {
        corDeFundo = '#00FFFF';
    } else if (imc <= 25) {
        corDeFundo = '#7CFC00';
    } else if (imc <= 30) {
        corDeFundo = '#7CFC00';
    } else if (imc <= 35) {
        corDeFundo = '#DAA520';
    } else if (imc <= 40) {
        corDeFundo = '#D8BFD8';
    } else {
        corDeFundo = '#B22222';
    }


    const div = document.createElement("div");
    div.style.backgroundColor = corDeFundo;
    const pNnome = document.createElement("p");
    pNnome.textContent = no;
    const pIdade = document.createElement("p");
    pIdade.textContent = idade;
    const pImc = document.createElement("p");
    pImc.textContent = imc;
    div.appendChild(pNnome);
    div.appendChild(pIdade);
    div.appendChild(pImc);
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
   
    const li = document.createElement("li");
    li.style.marginTop = "10px";
    li.appendChild(div);
    ul.appendChild(li);
})

const legenda = document.createElement("footer");
header.appendChild(legenda);
legenda.style.width = "100%";
legenda.style.display = "flex";
legenda.style.justifyContent = "space-around";
legenda.style.alignItems = "center";
legenda.style.fontFamily = "'Chakra Petch', sans-serif";
legenda.style.flexDirection = "row";

const pesobaixo = document.createElement("div");
legenda.appendChild(pesobaixo);
pesobaixo.textContent = "Abaixo do peso";
pesobaixo.style.backgroundColor = "#00FFFF";
pesobaixo.style.width = "10%";
pesobaixo.style.margin = "1% .5%";
pesobaixo.style.padding = ".5% .2%";
pesobaixo.style.border = "2px solid #141301";
pesobaixo.style.borderRadius = "5px";
pesobaixo.style.textAlign = "center";

const pesoNormal = document.createElement("div");
legenda.appendChild(pesoNormal);
pesoNormal.textContent = "Peso Normal";
pesoNormal.style.backgroundColor = "#7CFC00";
pesoNormal.style.width = "10%";
pesoNormal.style.margin = ".5% .5%";
pesoNormal.style.padding = ".5% .2%";
pesoNormal.style.border = "2px solid #141301";
pesoNormal.style.borderRadius = "5px";
pesoNormal.style.textAlign = "center";

const sobrePeso = document.createElement("div");
legenda.appendChild(sobrePeso);
sobrePeso.textContent = "Obesidade leve";
sobrePeso.style.backgroundColor = "#DAA520";
sobrePeso.style.width = "12%";
sobrePeso.style.margin = ".5% .5%";
sobrePeso.style.padding = ".5% .2%";
sobrePeso.style.border = "2px solid #141301";
sobrePeso.style.borderRadius = "5px";
sobrePeso.style.textAlign = "center";

const modErada = document.createElement("div");
legenda.appendChild(modErada);
modErada.textContent = "obesidade moderada";
modErada.style.backgroundColor = "#D8BFD8";
modErada.style.width = "13%";
modErada.style.margin = ".5% .5%";
modErada.style.border = "2px solid #141301";
modErada.style.padding = ".5% .2%";
modErada.style.borderRadius = "5px";
modErada.style.textAlign = "center";

const morbida = document.createElement("div");
legenda.appendChild(morbida);
morbida.textContent = "obesidade morbida"
morbida.style.backgroundColor = "#B22222";
morbida.style.width = "13%";
morbida.style.margin = ".5% .5%";
morbida.style.border = "2px solid #141301";
morbida.style.padding = ".5% .2%";
morbida.style.borderRadius = "5px";
morbida.style.textAlign = "center";