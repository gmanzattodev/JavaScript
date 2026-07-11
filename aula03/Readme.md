# 📘 Aula 03 - Variáveis na Prática

Nesta aula vamos utilizar uma variável para controlar o estado da aplicação.

Até agora aprendemos a criar variáveis. Agora veremos como elas podem ser utilizadas para tomar decisões e alterar o comportamento da página.

---

# 🎯 Objetivo

Criar um botão que alterna entre **Modo Claro** e **Modo Escuro**, utilizando uma variável para armazenar o estado atual da página.

---

# 💻 Código

```javascript
const botao = document.querySelector("#botaoCor");
const mensagem = document.querySelector("#mensagem");
const h1 = document.querySelector("h1");

// Criamos uma variável que controla o tema.
let temaEscuro = false;

// Adicionamos um evento de clique ao botão.
botao.addEventListener("click", () => {

    if (temaEscuro === false) {
        h1.textContent = "giocanii";
        document.body.style.backgroundColor = "#1f2937";
        mensagem.textContent = "Agora a página está no modo escuro!";
        temaEscuro = true;
    } else {
        h1.textContent = "volto";
        document.body.style.backgroundColor = "#f2f2f2";
        mensagem.textContent =
            "Clique no botão para transformar a aparência desta página.";
        temaEscuro = false;
    }

});
```

---

# 📖 O que aprendemos?

## Selecionando elementos do HTML

```javascript
const botao = document.querySelector("#botaoCor");
```

Seleciona o botão através do seu **id**.

---

```javascript
const mensagem = document.querySelector("#mensagem");
```

Seleciona o elemento que exibirá a mensagem.

---

```javascript
const h1 = document.querySelector("h1");
```

Seleciona o primeiro `<h1>` da página.

---

# 📌 A variável

```javascript
let temaEscuro = false;
```

Esta variável guarda uma informação muito importante:

> A página está no modo escuro?

No início ela vale:

```javascript
false
```

Ou seja,

```
Modo Claro
```

---

Depois do clique ela passa para

```javascript
true
```

Agora significa

```
Modo Escuro
```

Essa variável funciona como uma chave liga/desliga.

```
false → Claro

↓

true → Escuro

↓

false → Claro

↓

true → Escuro
```

Ela vai mudando de valor sempre que o usuário clica no botão.

---

# 📌 Evento de Clique

```javascript
botao.addEventListener("click", () => {

});
```

Estamos dizendo ao JavaScript:

> Quando o usuário clicar no botão, execute o código dentro das chaves.

---

# 📌 A Condição

```javascript
if (temaEscuro === false)
```

O JavaScript pergunta:

> O tema está claro?

Se a resposta for **sim**, executa o primeiro bloco.

Caso contrário, executa o `else`.

---

# 📌 Alterando o texto

```javascript
h1.textContent = "giocanii";
```

Troca o texto do título.

---

```javascript
mensagem.textContent =
"Agora a página está no modo escuro!";
```

Troca a mensagem exibida na tela.

---

# 📌 Alterando a cor

```javascript
document.body.style.backgroundColor = "#1f2937";
```

Modifica a cor de fundo da página.

---

# 📌 Mudando o valor da variável

```javascript
temaEscuro = true;
```

Agora a variável passa a armazenar:

```
true
```

Na próxima vez que o botão for clicado, o JavaScript executará o bloco `else`.

---

Depois fazemos o contrário:

```javascript
temaEscuro = false;
```

Voltando ao modo claro.

---

# 🔄 Fluxo do programa

```
Página inicia

↓

temaEscuro = false

↓

Usuário clica

↓

if (temaEscuro === false)

↓

Modo Escuro

↓

temaEscuro = true

↓

Usuário clica novamente

↓

else

↓

Modo Claro

↓

temaEscuro = false

↓

Repete o processo...
```

---

# 🧠 O que praticamos nesta aula

- Variáveis (`let`)
- Constantes (`const`)
- querySelector()
- addEventListener()
- Evento de clique (`click`)
- Condicional (`if / else`)
- textContent
- style.backgroundColor
- Manipulação do DOM
- Alteração dinâmica da interface

---

# 📝 Resumo

Nesta aula aprendemos que uma variável pode armazenar o estado da aplicação. Utilizamos `temaEscuro` como uma chave para saber se a página estava no modo claro ou escuro. A cada clique no botão, verificamos o valor da variável com `if/else`, alteramos o conteúdo da página, mudamos a cor de fundo e atualizamos a própria variável para que o processo pudesse se repetir.