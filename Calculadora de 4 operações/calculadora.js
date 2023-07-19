const entrada1 = prompt("Insira o primeiro valor: ")
const entrada2 = prompt("Insira o segundo valor: ")

const a = parseFloat(entrada1)
const b = parseFloat(entrada2)

const soma = a + b
const diferenca = a - b
const multiplica = a * b
const divide = a / b

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + diferenca +
    "\nMultiplicação: " + multiplica +
    "\nDivisão: " + divide
)
