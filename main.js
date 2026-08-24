//localiza o campo onde a senha sera exibida

       const camposenha=
         document.querySelector(“#campo-senha”);

//localiza o numero que mostra o tamanho da senha

       const numeroSenha=
         document.querySelector(“#numero-senha”);

//letras que poderão ser utilizadas

        const.letrasMaiusculas=
          “ABCDEFGHIJKLMNOPQRSTUVWXYZ”;

        
        const.numeros=
         “0123456789”
        
        const.simbulos=
         “#+-?!@%*&$” 

//Tamanho inicial da senha
let tamanhoSenha=8;

//Gera a primeira senha quando a pagina abrir 
      geraSenha();

//função responsavel por gerar a senha

function geraSenha() {
//começamos com uma senha vazia
letsenha=””;

//repete o processo conforme o tamanho escolhido
for(let i=0; i<tamanhoSenha;i++) {

  //gera um numero aleatorio
 let numeroAleatorio=
Math.random(numeroAletorio);

//remove a parte decimal

numeroAleatorio=
math.floor(numeroAleatorio)

//escolhe uma letra e adiciona à senha

senha=
      senha+
      letrasMaiusculas[numeroAleatorio];
}
   //exibe a senha no campo
campoSenha.value=senha;
}

//diminui o tamanho da senha
function diminuiTamanho(){

 if(tamanhoSenha >1) {
   tamanhoSenha--;
}
 numeroSenha.textContent=tamanhoSenha;
 geraSenha();
}

//aumenta o tamanho da senha
function aumentaTamanho() {
   if(tamanhoSenha<20) {
tamanhoSenha++
}

numeroSenha.textContent=tamanhoSenha;
geraSenha();

function geraSenha() {
 
      if(checkbox[0].checked) {
        senha+=letrasMaiusculas[
            math.floor(math.random() * letrasMaiusculas.length)
        ];
      }
      if(Checkbox[1].checked) {
        senha+=numeros[
            math.floor(math.random() numeros.length )
        ]
      }  
     
      if(checkbox[2].checked) {
        senha+=simbulos[
            math.floor(math.ramdon() simbulos.length )
        ]
      }
}