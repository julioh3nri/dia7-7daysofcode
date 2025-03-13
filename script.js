// ** Funções em JavaScript **
// Funções em Js são usadas para fazer uma tarefa específica. Pode ser chamada a qualquer momento. Exemplo: 
// function soma(a, b) {
//    return a + b;
// }
// console.log(soma(5, 3)); // Resolução: 8

// Resolução Dia 7
// Funções para cada operação
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero!";
    }
    return a / b;
}

// Função principal da calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        // Mostrar as opções para o usuário
        let opcao = prompt("Escolha uma operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair");

        // Caso o usuário deseje sair
        if (opcao === "5") {
            alert("Até a próxima!");
            continuar = false;
            break;
        }

        // Pedir os valores para a operação
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        // Variável para o resultado
        let resultado;

        // Realizar a operação conforme a escolha
        switch (opcao) {
            case "1":
                resultado = somar(num1, num2);
                alert(`Resultado da soma: ${resultado}`);
                break;
            case "2":
                resultado = subtrair(num1, num2);
                alert(`Resultado da subtração: ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                alert(`Resultado da multiplicação: ${resultado}`);
                break;
            case "4":
                resultado = dividir(num1, num2);
                alert(`Resultado da divisão: ${resultado}`);
                break;
            default:
                alert("Opção inválida! Tente novamente.");
                break;
        }
    }
}