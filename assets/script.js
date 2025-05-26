function checkAnswer(parameter) {
    let btnName=''
    idParagraph=''
    

    if (parameter=='question1') {
        btnName='q1'
        idParagraph='feedback1'
    }
    else {
        btnName='q2'
        idParagraph='feedback2'
    }
    let btnSelected=document.querySelector("input[name="+btnName+"]:checked")

    if (btnSelected==null) {
        alert("Necessário selecionar ao menos uma resposta!")
        return
    }
    
    let valueBtnSelected=document.querySelector("input[name="+btnName+"]:checked").value;

    let paragraph=document.getElementById(idParagraph)

    if (valueBtnSelected=="correct") {
        paragraph.className="correct"
        paragraph.textContent="RESPOSTA CORRETA!"
    }
    else {
        paragraph.className="wrong"
        paragraph.textContent="RESPOSTA INCORRETA!"
    }
}
const respostas = {
    1: {
        verifica: ['início', 'número', 'resto', 'divisão', 'par', 'ímpar', 'fim'],
        resposta: `<strong>Algoritmo para verificar se um número é par ou ímpar:</strong><br><br>
        1. Início<br>
        2. Pedir para o usuário digitar um número<br>
        3. Ler o número digitado<br>
        4. Calcular o resto da divisão do número por 2<br>
        5. Se o resto for igual a 0:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Mostrar "O número é par"<br>
        6. Senão:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Mostrar "O número é ímpar"<br>
        7. Fim<br><br>
        <em>💡 Este é um algoritmo em linguagem natural que pode ser transformado em qualquer linguagem de programação!</em>`
    },

    2: {
        verifica: ['scanf', 'if', 'else', '%'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int numero;<br>&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;if(numero % 2 == 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Par\\n");<br>&nbsp;&nbsp;&nbsp;&nbsp;else<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Ímpar\\n");<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    3: {
        verifica: ['printf', 'Olá', 'stdio.h'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Olá, Mundo!\\n");<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    4: {
        verifica: ['#include', 'stdio.h', 'printf', '//', 'main'],
        resposta: `#include &lt;stdio.h&gt; // Inclui a biblioteca padrão para entrada e saída<br><br>int main() { // Função principal do programa<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Meu nome é João\\n"); // Imprime o nome na tela<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0; // Indica que o programa terminou com sucesso<br>}`
    },
    5: {
        verifica: ['int', 'variavel', '10'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int variavel = 10;<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Valor da variável: %d\\n", variavel);<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    6: {
        verifica: ['#define', 'PI', '3.14'],
        resposta: `#include &lt;stdio.h&gt;<br>#define PI 3.14<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Valor de PI: %.2f\\n", PI);<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    7: {
        verifica: ['2', '+', '3', '*', '4', '14'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int resultado = 2 + 3 * 4;<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("2 + 3 * 4 = %d\\n", resultado);<br>&nbsp;&nbsp;&nbsp;&nbsp;// Resultado: 14 (multiplicação primeiro)<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    8: {
        verifica: ['10', '-', '2', '8'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int resultado = (10 - 2) + (3 - 3);<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Resultado: %d\\n", resultado);<br>&nbsp;&nbsp;&nbsp;&nbsp;// Resultado: 8<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    9: {
        verifica: ['scanf', 'if', 'else', 'par', 'ímpar'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int numero;<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite um número: ");<br>&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;if(numero % 2 == 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("O número %d é par\\n", numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;else<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("O número %d é ímpar\\n", numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    10: {
        verifica: ['switch', 'case', 'scanf', 'dia'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int dia;<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite o dia da semana (1-7): ");<br>&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &dia);<br>&nbsp;&nbsp;&nbsp;&nbsp;switch(dia) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 1: printf("Domingo\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 2: printf("Segunda\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 3: printf("Terça\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 4: printf("Quarta\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 5: printf("Quinta\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 6: printf("Sexta\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 7: printf("Sábado\\n"); break;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default: printf("Dia inválido\\n");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    11: {
        verifica: ['for', 'int', 'i', '<=', '10', 'printf'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;for(int i = 1; i <= 10; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d\\n", i);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    },
    12: {
        verifica: ['while', 'scanf', '!=', '0'],
        resposta: `#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int numero;<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite números (0 para sair):\\n");<br>&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;while(numero != 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Você digitou: %d\\n", numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &numero);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Programa encerrado!\\n");<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}`
    }
};

function verificarResposta(numero) {
    const resposta = document.getElementById('resposta' + numero).value;
    const resultado = document.getElementById('resultado' + numero);
    const verifica = respostas[numero].verifica;
    
    let correto = true;
    for(let palavra of verifica) {
        if(!resposta.includes(palavra)) {
            correto = false;
            break;
        }
    }
    
    if(correto) {
        resultado.innerHTML = '✅ Correto!';
        resultado.style.color = 'green';
        resultado.style.backgroundColor = '#d4edda';
    } else {
        resultado.innerHTML = '❌ Incorreto. Tente novamente.';
        resultado.style.color = 'red';
        resultado.style.backgroundColor = '#f8d7da';
    }
}

function mostrarResposta(numero) {
    const resultado = document.getElementById('resultado' + numero);
    resultado.innerHTML = '<strong>Resposta:</strong><br>' + respostas[numero].resposta;
    resultado.style.color = 'blue';
    resultado.style.backgroundColor = '#d1ecf1';
}
