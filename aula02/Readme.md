# 📘 Aula 02 - Variáveis

## 📖 O que são Variáveis?

Variáveis são espaços na memória do computador utilizados para armazenar informações que podem ser utilizadas durante a execução do programa.

Podemos imaginar uma variável como uma **caixa com um nome**, onde guardamos um valor para utilizá-lo sempre que necessário.

### Exemplo

```javascript
let nome = "Giovani";
```

Nesse exemplo:

- `let` → cria uma variável.
- `nome` → é o identificador (nome da variável).
- `"Giovani"` → é o valor armazenado.

---

## 🧠 Como funciona uma variável?

Quando o JavaScript executa uma linha como:

```javascript
let idade = 22;
```

Acontece o seguinte:

1. O JavaScript reserva um espaço na memória.
2. Esse espaço recebe o nome `idade`.
3. O valor `22` é armazenado nesse espaço.
4. Sempre que utilizarmos `idade`, o JavaScript retornará o valor armazenado.

Representação:

```text
Memória

┌─────────────┐
│ idade → 22  │
└─────────────┘
```

---

## 📌 Sintaxe

```javascript
let nomeDaVariavel = valor;
```

Exemplo:

```javascript
let cidade = "São Paulo";
```

---

## 📌 Regras para criar variáveis

✅ Pode conter letras.

```javascript
let nome;
```

✅ Pode conter números (mas não iniciar com eles).

```javascript
let idade2;
```

❌ Errado

```javascript
let 2idade;
```

---

✅ Pode utilizar `_`

```javascript
let nome_completo;
```

---

✅ Pode utilizar `$`

```javascript
let $valor;
```

---

❌ Não pode conter espaços

Errado

```javascript
let meu nome;
```

Correto

```javascript
let meuNome;
```

---

## 📌 Tipos de declaração

### let

Permite alterar o valor posteriormente.

```javascript
let nome = "João";

nome = "Carlos";

console.log(nome);
```

Resultado

```
Carlos
```

---

### const

Cria uma constante.

Seu valor **não pode ser alterado**.

```javascript
const PI = 3.14;
```

Errado

```javascript
const PI = 3.14;

PI = 5;
```

Resultado

```
Erro
```

---

### var

Forma antiga de declarar variáveis.

```javascript
var idade = 20;
```

Hoje em dia é pouco utilizada.

Na maioria dos projetos modernos utilizamos apenas:

- let
- const

---

# 📌 Exemplos

### Texto

```javascript
let nome = "Maria";
```

---

### Número

```javascript
let idade = 25;
```

---

### Decimal

```javascript
let altura = 1.75;
```

---

### Booleano

```javascript
let aprovado = true;
```

---

## 📌 Alterando valores

```javascript
let pontos = 10;

pontos = 20;

console.log(pontos);
```

Resultado

```
20
```

---

## 📌 Utilizando variáveis

```javascript
let nome = "Lucas";

console.log(nome);
```

Resultado

```
Lucas
```

---

## 📌 Concatenando

```javascript
let nome = "Ana";
let idade = 30;

console.log(nome + " tem " + idade + " anos.");
```

Resultado

```
Ana tem 30 anos.
```

---

## 📌 Template String

Forma moderna de juntar textos.

```javascript
let nome = "Ana";
let idade = 30;

console.log(`${nome} tem ${idade} anos.`);
```

Resultado

```
Ana tem 30 anos.
```

---

# ⚠️ Boas práticas

✔ Utilize nomes claros.

```javascript
let nomeUsuario;
let quantidadeProdutos;
let precoTotal;
```

Evite:

```javascript
let x;
let y;
let a;
```

---

✔ Utilize **camelCase**

```javascript
let nomeCompleto;
let idadeUsuario;
let valorTotalCompra;
```

---

✔ Use `const` sempre que o valor não mudar.

```javascript
const PI = 3.14159;
```

Use `let` apenas quando precisar alterar o valor.

---

# 📝 Resumo

- Variáveis armazenam informações.
- `let` permite alterar o valor.
- `const` cria valores que não podem ser alterados.
- `var` é uma forma antiga e pouco utilizada.
- Utilize nomes descritivos para facilitar a leitura do código.
- Prefira `const` por padrão e use `let` apenas quando necessário.