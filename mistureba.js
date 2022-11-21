const WORDS = [{
  palavra:"CASA",
  dica:"Lugar se mora onde se vivi",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra casa"
},
{
  palavra:"TOMATE",
  dica:"Fruta vermelha usada para fazer saladas",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra tomate"
},{
  palavra:"PEDRA",
  dica:"Mineral rochoso",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra pedra"
},{
  palavra:"CELULAR",
  dica:"Objeto de tecnologia que cabe na palma das maos",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra celular"
},{
  palavra:"CARRO",
  dica:"Meio de locomoção de 4 rodas",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra carro"
},{
  palavra:"ESCOLA",
  dica:"Lugar de ensino",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra escola"
},{
  palavra:"COPO",
  dica:"Usado para se beber algo",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra copo"
},{
  palavra:"ANTENA",
  dica:"Aparelho receptior de sinal",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra antena"
},{
  palavra:"MOCHILA",
  dica:"Guarda objetos normalmnente usado nas costas",
  valor:5,
  descricao:"qualquer texto explicativo sobre a palavra mochila"
},{
  palavra: "PÃO",
  dica: "Um bom café da manhã",
  valor:5,
  descricao: "É francês",
},{
  palavra: "CADEIRA",
  dica: "Usado para se sentar",
  valor:5,
  descricao: "É mineiro",
},{
  palavra: "GIRAFA",
  dica: "Um grande pescoço",
  valor:5,
  descricao:"É usado nos computadores",
},{
  palavra: "BICICLETA",
  dica: "Pedala, pedala...",
  valor:5,
  descricao: "É usado para andar",
}
]

let RANDOMNUMBER = Math.floor(Math.random() * WORDS.length )

function jogo(){
    startGame()
}
document.getElementById("verificar").addEventListener("click", jogoInicio)





var ob
function startGame(){
  let ran =  Math.floor(Math.random() * WORDS.length )
   ob = WORDS[ran]
  random = WORDS[ran].palavra
  let testee = random.split([[ ]]);
  testee.sort((a,b) => Math.random() -0.5)
  var wordsH = testee.map(item => `<label for="">${item}</label>`)
  var Build = document.querySelector('#table')
  Build.innerHTML = wordsH
  
   let btn = document.querySelector('#verificar')
   btn.style.display = "inline-block"
   let tip = document.getElementById('dica')
   tip.style.display='inline-block'
   
   let tEnd = document.querySelector('#gameOver')
    tEnd.style.display= 'none'
  return ob
}




 function jogoInicio(){
  let result = document.getElementById('pp').value 
  let tela = document.querySelector('#table')
  let tF = document.getElementById('pp')
  if(ob.palavra == result){
      //alert("palavra correta")
      console.log("palavra correta")
      startGame()
      //ele chama mais uma vez o inicio do jogo()
    }else if(ob.palavra == ''){
      alert("O CAMPO ABAIXO DEVE SER PREENCHIDO")
      tela.style.display = "none"
      console.log("preencha o terminal")
    }else{
      tela.style.display = "none"
      gamsOver()
    }
    

    let tShow = document.querySelector('#showTip')
    tShow.style.display = "none"
    tF.value= "";
    
  }


 
  function score(){
    //calculates the player´s score
      c =+ ob.valor
      return c
    }
 

    let onOff = true
function howToPlay(){
  let show = document.querySelector('#howToPlay')
  if(onOff == false){
    show.style.display= 'none'
  }else{
    show.style.display= ''
  }
  onOff = ! onOff 
  console.log(onOff)
  return onOff
}


let ts = true 

function tip(){
  console.log(ts)
  let tShow = document.querySelector('#showTip')
  let txt = document.querySelector("#tipText");

  if(ts == true ){
    tShow.style.display = "inline-block"
    txt.textContent = ob.dica;
  }else{
     tShow.style.display ="none"
    } 
    ts = !ts

  return ts
  }

  function gamsOver(){
    //Pop up the score retry and close..
    let tEnd = document.querySelector('#gameOver')
    tEnd.style.display= 'inline-block'
    console.log("palavra errada")

    let scr = document.querySelector("#score");
    scr.textContent = score()
    }


    function Speak(){
      const utterence = new SpeechSynthesisUtterance(ob.dica)
      speechSynthesis.speak(utterence)
    }
    function Speak2(){
      let txt = 'Mistureba é um jogo onde você precisa acertar a palavra que está embaralhada. Você pode pedir ajuda clicando no botão da lâmpada. Boa Sorte!'
      const utterence = new SpeechSynthesisUtterance(txt)
      speechSynthesis.speak(utterence)
    
    }
   

 
