let programa = 0
let pergunta = 1
let tentativa = 1
let pontuacao = 0

let gabarito = new Array()

let gabarito021 = new Array('B', 'A', 'A', 'D', 'C')
let gabarito022 = new Array('B', 'D', 'A', 'B', 'A')
let gabarito023 = new Array('B', 'A', 'D', 'B', 'B')
let gabarito024 = new Array('B', 'A', 'D', 'B', 'D')
let gabarito025 = new Array('C', 'C', 'D', 'D', 'A')

iniciar = function() {
  programa = prompt('Digite o código do programa(021 a 025):', '')

  if(programa == '021')
    gabarito = gabarito021
  else if(programa == '022')
    gabarito = gabarito022
  else if(programa == '023')
    gabarito = gabarito023
  else if(programa == '024')
    gabarito = gabarito024
  else if(programa == '025')
    gabarito = gabarito025
  else {
    alert('Código de programa inválido!\nDigite um código entre 021 e 025!')
    iniciar()
  }

  pergunta = 1
  tentativa = 1
  pontuacao = 0

  document.getElementById('tela1').value = `${programa}->${pergunta}:`
  document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`
}

jogar = function(resposta) {
  document.getElementById('tela1').value = `${programa}->${pergunta}:${resposta}`

  if(resposta == gabarito[pergunta-1]) {
    document.getElementById('tela2').style.border = 'green 3px solid'

    if(tentativa == 1)
      pontuacao += 3
    else if(tentativa == 2)
      pontuacao += 2
    else if(tentativa == 3)
      pontuacao++

    pergunta++
    tentativa = 1
  }
  else {
    document.getElementById('tela2').style.border = 'red 3px solid'

    tentativa++

    if(tentativa > 3) {
      pergunta++
      tentativa = 1
    }
  }

  document.getElementById('tela1').value = `${programa}->${pergunta}:${resposta}`
  document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`

  if(pergunta > 5) {
    document.getElementById('tela1').value = '***FIM***'
    document.getElementById('tela2').value = `Pontuação: ${pontuacao}`
  }
}