valores = []

function add(){
    
    var num = Number(document.getElementById('sequency').value)
    var res = document.getElementById('result')
    var tab = document.getElementById('tabela')
    valores.push(num)
   
    if(num >100 || num <1){
        alert ('Por favor, digite um número entre 1 e 100')
    } else{
        var option = document.createElement('option')

    tab.setAttribute('size','13')
    option.text = `Valor ${num} adicionado`
    tab.appendChild(option)
    document.getElementById('result-finaly').innerHTML = ''

    }
    
    
    
}


function finalizar(){
    var finaly = document.getElementById('result-finaly')
    var list = [document.getElementById('option')]
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
    if (valores == 0){
        alert('Por favor, adicione um número')
        finaly.innerHTML = ('')
    }else{
        for(var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior )
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / valores.length
        finaly.innerHTML = `<br> Ao todo, temos ${valores.length} números cadastrados<br><br>`

        finaly.innerHTML += `O maior valor informado foi ${maior}<br><br>`

        finaly.innerHTML += `O menor valor informado foi ${menor}<br><br>`

        finaly.innerHTML += `Somando todos os valores, temos ${soma}<br><br>`

        finaly.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}`
    }


    
}

function zerar(){
    if (valores == 0){
        alert('A lista já está zerada')
    }else{
    location.reload()
    }
}