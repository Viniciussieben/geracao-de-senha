//INTEGRANTES:
//Vinícius Sieben Dominoni Gomes
//Gabriel Langue Da Rocha
//TURMA: 3ª Série J


const campoSenha =
document.querySelector("#campo-senha");
const numeroSenha =
document.querySelector("#numero-senha");
const letrasMaiusculas =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";


let tamanhoSenha = 8;
    geraSenha();

function geraSenha() {
   let senha = "";

for (let i = 0; i < tamanhoSenha; i++) {

let numeroAleatorio =
   Math.random() * letrasMaiusculas.length;
     numeroAleatorio =
     Math.floor(numeroAleatorio);
       
       senha =
      senha +
   letrasMaiusculas[numeroAleatorio];
}

campoSenha.value = senha;
}

function diminuiTamanho() {
  if (tamanhoSenha > 1) {
     tamanhoSenha--;
}
  numeroSenha.textContent = tamanhoSenha;
geraSenha();
}

function aumentaTamanho() {
   if (tamanhoSenha < 20) {
     tamanhoSenha++;
}
  numeroSenha.textContent = tamanhoSenha;
geraSenha();
}