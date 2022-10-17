//código carousel 
let count = 1;
setInterval(function () {
    document.getElementById('slide' + count).checked = true;
    count++
    if (count > 5) {
        count = 1;
    }
}, 3000)
//fim código carousel

// Confirmação do Fale Conosco

function verifica() {
                if (document.getElementById("nome").value == ""){
                alert('Por favor, preencha o seu nome.');
                return;
                }
                else if (document.getElementById("telefone").value == ""){
                    alert('Por favor, preencha o seu telefone.');
                return;
                }
                else if (document.getElementById("comentario").value == ""){
                    alert('Por favor, escreva a sua mensagem.');
                return;
                }
                else {
                    alert('Obrigado pelo seu contato. Em breve, retornaremos!');
                }
}

function matricula() {
        if (document.getElementById("nome").value == ""){
        alert('Por favor, preencha o nome da criança.');
        return;
        }
        else {
            alert('Parabéns! Você acaba de ganhar 30% de desconto.');
        }
}