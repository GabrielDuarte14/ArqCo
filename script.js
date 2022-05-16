const perguntaResposta = [{
        "id": "1",
        "pergunta": "É a unidade central de processamento do Computador, ou seja, todo o tipo de processamento que seja demandado do computador, será executado lá.",
        "resposta": "CPU"
    },
    {
        "id": "2",
        "pergunta": "Parte da CPU que faz o processamento aritmético. Faz os processamentos de Adição e do booleano AND.",
        "resposta": "ULA"
    },
    {
        "id": "3",
        "pergunta": "São memórias que armazenam BITS. Eles estão no topo da pirâmide de memória, sendo a mais rápida entre elas, já que se encontra mais perto da CPU.",
        "resposta": "REGISTRADORES"
    },
    {
        "id": "4",
        "pergunta": "Serve para guardar os dados essenciais dos programas em execução, porém ela é volátil, a cada vez que o computador perde energia, ela perde os dados que estão “gravados”.",
        "resposta": "RAM"
    },
    {
        "id": "5",
        "pergunta": "Serve para guardar os dados da fabricante, é uma memória que não pode ser alterada, apenas lida.",
        "resposta": "ROM"
    },
    {
        "id": "6",
        "pergunta": "Chip de memória não volátil que guarda os dados mesmo com o computador desligado.",
        "resposta": "EPROM"
    },
    {
        "id": "7",
        "pergunta": "Tipo de memória Eprom não volátil que guarda os dados com o computador desligado, nela não é possível excluir um dado, é necessário reprogramar todo o seu conteúdo.",
        "resposta": "FLASH"
    },
    {
        "id": "8",
        "pergunta": "Utilizada para armazenar grandes quantidades de dados.",
        "resposta": "MEMÓRIA DE MASSA"
    },
    {
        "id": "9",
        "pergunta": "É um método que permite que um dispositivo de entrada e saída envie ou receba dados diretamente da memória principal, ignorando a CPU, acelerando as operações que envolvem a memória.",
        "resposta": "DMA"
    },
    {
        "id": "10",
        "pergunta": 'É o nome de uma linha de controle em eletrônica digital usada para selecionar um (ou um conjunto) de circuitos integrados (comumente chamados de "chips") entre vários conectados ao mesmo barramento de computador, geralmente utilizando a lógica de três estados.',
        "resposta": "CS"
    },
    {
        "id": "11",
        "pergunta": "Serve para identificar o endereço do local no cache ou na memória principal que deve ser lido ou gravado.",
        "resposta": "ADDRESS BUS"
    },
    {
        "id": "12",
        "pergunta": "Um barramento de dados é um sistema dentro de um computador ou dispositivo, consistindo em um conector ou conjunto de fios, que fornece transporte de dados. Diferentes tipos de barramentos de dados evoluíram junto com computadores pessoais e outras peças de hardware. ",
        "resposta": "DATA BUS"
    },
    {
        "id": "13",
        "pergunta": "Processador da Intel que contém 6 Núcleos e 12 threads (2022).",
        "resposta": "I5"
    },
    {
        "id": "14",
        "pergunta": "Processador da Intel que contém 10 Núcleos e 12 threads (2022).",
        "resposta": "I7"
    },
    {
        "id": "15",
        "pergunta": "Processador com quatro núcleos.",
        "resposta": "QUAD CORE"
    },
    {
        "id": "16",
        "pergunta": "Processador com dois núcleos.",
        "resposta": "DUAL CORE"
    }
]
var idsSorteados = []

function perguntaAleatoria() {
    var id = Math.floor(Math.random() * perguntaResposta.length);
    if (idsSorteados.includes(id)) {
        perguntaAleatoria()
    }
    var pergunta = perguntaResposta[id].pergunta;
    var resposta = perguntaResposta[id].resposta;
    document.getElementById('dica').innerHTML = pergunta;
    var pAndR = [pergunta, resposta];
    return pAndR;
}

function inputRender(n) {
    for (var i = 1; i <= 5; i++) {
        document.getElementById('tentativas').innerHTML += ` <div id="tentativa${i}" class="tentativax"> `
        for (var a = 1; a <= n; a++) {
            if (i == 1) {
                document.getElementById(`tentativa${i}`).innerHTML += ` <input type="text" class="naosei"
            maxlength="1"  id="letra${a}">`
            } else {
                if (i == 5 && a == n) {
                    document.getElementById(`tentativa${i}`).innerHTML += ` <input type="text" class="naosei"
                    maxlength="1"  id="letra${a}" onkeyup='verultima()' readonly>`
                }else{
                document.getElementById(`tentativa${i}`).innerHTML += ` <input type="text" class="naosei"
            maxlength="1"  id="letra${a}" readonly>`
        }
            }
           
        }

        document.getElementById('tentativas').innerHTML += '</div>'
    }
}
var perguntaResp = '';
var tentativa = 1;
var palavraInserida = '';

function verultima() {


    var divPai = document.querySelectorAll('#tentativa5 input')
  
    for (let i = 0; i < divPai.length; i++) {
        palavraInserida += divPai[i].value;
        divPai[i].setAttribute('readonly', 'true');
    }
    palavraInserida = palavraInserida.toLocaleUpperCase();

    tentativa++;
    
    var resposta = perguntaResp[1].replace(/\s/g, '');
    resposta = resposta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (var a = 0; a < resposta.length; a++) {
        if (resposta.includes(palavraInserida[a]) && (resposta[a] != palavraInserida[a])) {
            divPai[a].style.backgroundColor = 'orange';
        }
        if (resposta[a] == palavraInserida[a]) {
            divPai[a].style.backgroundColor = 'green';
        }
        if (!resposta.includes(palavraInserida[a])) {
            divPai[a].style.backgroundColor = 'red';
        }
    }
    if (palavraInserida == resposta) {
        Swal.fire({
            title: '<strong>Você acertou!</strong>',
            icon: 'success',
            html:`${perguntaResp[1]}: `+perguntaResp[0] + ' Aeeeeee, você acertou na 5ª tentativa!',
            background: '#212121',
            color: '#fff',
            showCloseButton: true,
            focusConfirm: false,
            willClose: ()=>{
                location.reload();
            }                 
          })
    } else {
        Swal.fire({
            title: '<strong>Você errou!</strong>',
            icon: 'error',
            html:`${perguntaResp[1]}: `+perguntaResp[0] + ' Infelizmente você não conseguiu!',
            background: '#212121',
            color: '#fff',
            showCloseButton: true,
            focusConfirm: false,
            willClose: ()=>{
                location.reload();
            }                 
          })


    }




}

function getInputs() {


    perguntaResp = perguntaAleatoria()
   
    var resposta = perguntaResp[1].replace(/\s/g, '');
    var respostaApresentavel = perguntaResp[1]
    resposta = resposta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    inputRender(resposta.length)
    var inputs = document.getElementsByTagName('input');
    inputs[0].focus()

    for (let i = 0; i < inputs.length; i++) {
        //nao colocar onkeyup no ultimo input
        if (i == inputs.length - 1) {
        } else {
        inputs[i].onkeyup = function (evento) {

            if (evento.key == "Backspace") {
                inputs[i-1].value = ''
                inputs[i - 1].focus();

            } else if ((i + 1) < inputs.length && this.value.length >= 1) {

                inputs[i + 1].focus();
                var divPai = (inputs[i + 1].parentNode);
                var divAntesPai = (inputs[i].parentNode);
                var idDiv = divPai.id;
                var idDivNum = idDiv.replace('tentativa', '');
                var idDivNumInt = parseInt(idDivNum);
                var qtInputs = (divAntesPai.children)
                if (idDivNumInt == (tentativa + 1)) {
                    for (let i = 0; i < qtInputs.length; i++) {
                        palavraInserida += qtInputs[i].value;
                        qtInputs[i].setAttribute('readonly', 'true');
                    }
                    palavraInserida = palavraInserida.toLocaleUpperCase();

                    tentativa++;
                    

                    for (var a = 0; a < resposta.length; a++) {
                        if (resposta.includes(palavraInserida[a]) && (resposta[a] != palavraInserida[a])) {
                            qtInputs[a].style.backgroundColor = 'orange';
                        }
                        if (resposta[a] == palavraInserida[a]) {
                            qtInputs[a].style.backgroundColor = 'green';
                        }
                        if (!resposta.includes(palavraInserida[a])) {
                            qtInputs[a].style.backgroundColor = 'red';
                        }
                    }
                    if (palavraInserida == resposta) {
                        Swal.fire({
                            title: '<strong>Você acertou!</strong>',
                            icon: 'success',
                            html:`${perguntaResp[1]}: `+perguntaResp[0] + ` Aeeeeee, você acertou na ${tentativa-1}ª tentativa!`,
                            background: '#212121',
                            color: '#fff',
                            showCloseButton: true,
                            focusConfirm: false,
                            willClose: ()=>{
                                location.reload();
                            }                 
                          })
                       // alert('Parabéns você acertou a palavra é: ' + respostaApresentavel)
                        //location.reload();
                    } else {
                        
                        var qtInputs = (divPai.children)
                        palavraInserida = '';
                        for (let i = 0; i < inputs.length; i++) {

                            qtInputs[i].removeAttribute('readonly');
                        }


                    }
                }
            }

        }

    }
    }



}