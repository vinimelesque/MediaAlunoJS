function MostrarMedia() {

    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = (nota1 + nota2) / 2;
    var situacao;

    if (media < 5) {
        situacao="Reprovado!!!";
    } else {
        situacao="Aprovado."
    }
    alert("A média do aluno " + nome + " é: " + media + ". portanto, o aluno está " + situacao);
}
