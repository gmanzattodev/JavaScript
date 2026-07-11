# 📘 Aula 04 - Manipulando Classes e Criando Elementos

Nesta aula vamos aprender como modificar elementos da página utilizando JavaScript.

Além de alterar classes, também criaremos elementos dinamicamente e os removeremos da página após alguns segundos.

---

# 🎯 Objetivo

Ao clicar em um elemento da página iremos:

- Adicionar uma nova classe CSS.
- Alterar seu conteúdo.
- Criar uma nova `<div>`.
- Inserir essa `<div>` na página.
- Removê-la automaticamente após 3 segundos.

---

# 💻 Código

```javascript
const root = document.getElementById("root");

root.classList.add("root");

root.addEventListener("click", () => {

    root.classList.add("vb");

    root.textContent = "<strong>giovan</strong>";

    const div = document.createElement("div");

    div.classList.add("div");

    root.appendChild(div);

    setTimeout(() => {

        root.removeChild(div);

    }, 3000);

});
```

---

# 📖 Selecionando um elemento

```javascript
const root = document.getElementById("root");
```

Seleciona o elemento que possui o atributo:

```html
<div id="root"></div>
```

Agora podemos modificar esse elemento utilizando JavaScript.

---

# 📖 Adicionando uma classe

```javascript
root.classList.add("root");
```

Adiciona a classe CSS chamada:

```css
.root
```

É o mesmo que escrever no HTML:

```html
<div id="root" class="root"></div>
```

---

# 📖 O método classList

O objeto `classList` permite manipular as classes de um elemento.

Alguns métodos importantes:

```javascript
classList.add()
```

Adiciona uma classe.

---

```javascript
classList.remove()
```

Remove uma classe.

---

```javascript
classList.toggle()
```

Liga ou desliga uma classe.

---

```javascript
classList.contains()
```

Verifica se a classe existe.

---

# 📖 Evento de Clique

```javascript
root.addEventListener("click", () => {

});
```

Quando o usuário clicar no elemento, todo o código dentro das chaves será executado.

---

# 📖 Adicionando outra classe

```javascript
root.classList.add("vb");
```

Depois do clique, a classe:

```css
.vb
```

é adicionada ao elemento.

Isso normalmente é usado para:

- trocar cores
- fazer animações
- alterar tamanho
- esconder elementos
- mostrar elementos

---

# 📖 Alterando o texto

```javascript
root.textContent = "<strong>giovan</strong>";
```

O método `textContent` adiciona apenas texto.

Resultado:

```
<strong>giovan</strong>
```

Perceba que ele **não interpreta HTML**.

Se quisermos interpretar HTML devemos utilizar:

```javascript
root.innerHTML = "<strong>giovan</strong>";
```

Resultado:

**giovan**

---

# 📖 Criando elementos

```javascript
const div = document.createElement("div");
```

O JavaScript cria uma nova `<div>` na memória.

Neste momento ela ainda não aparece na página.

Representação:

```
Memória

↓

<div></div>
```

---

# 📖 Adicionando classe ao elemento criado

```javascript
div.classList.add("div");
```

A nova `<div>` recebe a classe:

```css
.div
```

---

# 📖 Inserindo na página

```javascript
root.appendChild(div);
```

Agora a `<div>` passa a fazer parte do HTML.

Antes:

```html
<div id="root"></div>
```

Depois:

```html
<div id="root">

    <div class="div"></div>

</div>
```

---

# 📖 setTimeout()

```javascript
setTimeout(() => {

},3000);
```

Executa um código após determinado tempo.

Neste caso:

```
3000 ms

↓

3 segundos
```

---

# 📖 Removendo elementos

```javascript
root.removeChild(div);
```

Remove a `<div>` criada anteriormente.

Fluxo:

```
Criar

↓

Adicionar

↓

Esperar 3 segundos

↓

Remover
```

---

# 🔄 Fluxo do programa

```
Página inicia

↓

Seleciona #root

↓

Adiciona classe root

↓

Usuário clica

↓

Adiciona classe vb

↓

Altera o texto

↓

Cria uma nova div

↓

Adiciona a div

↓

Espera 3 segundos

↓

Remove a div
```

---

# 📚 Métodos aprendidos

- getElementById()
- classList.add()
- addEventListener()
- textContent
- createElement()
- appendChild()
- removeChild()
- setTimeout()

---

# 💡 Observação Importante

Neste código foi utilizado:

```javascript
root.textContent = "<strong>giovan</strong>";
```

Como `textContent` trata tudo como texto, a tag `<strong>` será exibida literalmente na tela.

Se a intenção for deixar o texto em negrito, utilize:

```javascript
root.innerHTML = "<strong>giovan</strong>";
```

---

# 📝 Resumo

Nesta aula aprendemos a manipular classes CSS com `classList`, criar elementos dinamicamente usando `createElement()`, inserir elementos na página com `appendChild()`, removê-los com `removeChild()` e executar ações após um tempo utilizando `setTimeout()`. Também vimos a diferença entre `textContent`, que exibe apenas texto, e `innerHTML`, que interpreta código HTML.