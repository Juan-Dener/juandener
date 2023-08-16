
const distancia = document.querySelector('#nota1')
const rendimento = document.querySelector('#nota2')
const preco = document.querySelector('#nota3')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//eventos

calcular.addEventListener('click', calcularMedia)

//funções



function calcularMedia(){

    event.preventDefault()
    //desativar a origem do formulario back-ende tranformar-lo em recusto neutro

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)

    //"blabla".value pra pegar somente o valor

    //calculo da nota

    let mediaFinal = ((n1 + n2 + n3)/3).toFixed(1)
    
    if (mediaFinal >= 7) {
        resultado.innerHTML = `<h3>Você foi aprovado com média de$ {mediaFinal}</h3>`   
    }if (mediaFinal < 7 && mediaFinal >= 4 ) {
        resultado.innerHTML = `<h3>Calmae paizão, vai pra final com média de ${mediaFinal}</h3>`       
    } else {
        resultado.innerHTML = `<h3>Você foi reprovado com média final de ${mediaFinal}</h3>`       
    }

}