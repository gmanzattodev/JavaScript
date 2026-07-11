# 📘 Aula 05 - Formulários

## 🎯 Objetivo

Aprender como capturar dados de um formulário, validar os campos e adicionar informações na página utilizando JavaScript.

---

## 💻 Código

```javascript
const root = document.querySelector(".root");
const texto = document.querySelector(".texto");
const pass = document.querySelector(".pass");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!texto.value || !pass.value) {
        alert("Digite todos os campos.");
        return;
    }

    if (texto.value.length >= 30) {
        alert("O nome é muito grande.");
        return;
    }

    const nome = document.createElement("div");
    nome.classList.add("nome");

    const senha = document.createElement("div");
    senha.classList.add("senha");

    nome.textContent = texto.value;
    senha.textContent = pass.value;

    root.appendChild(nome);
    root.appendChild(senha);

    texto.value = "";
    pass.value = "";
});
```

---

## 📚 O que aprendemos

- `submit`
- `preventDefault()`
- Validação de campos
- `.value`
- `.length`
- `createElement()`
- `classList.add()`
- `textContent`
- `appendChild()`

---

## 📝 Explicação

### Capturando o envio

```javascript
form.addEventListener("submit", (e) => {
```

Executa o código quando o formulário é enviado.

---

### Evitando o recarregamento

```javascript
e.preventDefault();
```

Impede que a página seja recarregada ao enviar o formulário.

---

### Validando os campos

```javascript
if (!texto.value || !pass.value) {
    alert("Digite todos os campos.");
    return;
}
```

Verifica se os campos estão vazios.

---

### Limitando caracteres

```javascript
if (texto.value.length >= 30)
```

Verifica a quantidade de caracteres digitados.

---

### Criando elementos

```javascript
const nome = document.createElement("div");
const senha = document.createElement("div");
```

Cria duas novas `<div>`.

---

### Inserindo os dados

```javascript
nome.textContent = texto.value;
senha.textContent = pass.value;
```

Coloca o valor digitado dentro das novas `<div>`.

---

### Adicionando na página

```javascript
root.appendChild(nome);
root.appendChild(senha);
```

Insere os elementos dentro de `.root`.

---

### Limpando os campos

```javascript
texto.value = "";
pass.value = "";
```

Apaga os valores após o envio.

---

## 📝 Resumo

Nesta aula aprendemos a trabalhar com **formulários**, capturar informações digitadas pelo usuário, validar os campos, criar elementos dinamicamente e exibir os dados na página sem recarregá-la.