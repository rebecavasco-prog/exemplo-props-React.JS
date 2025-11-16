# 📘 Projeto React — Estrutura, Componentes e Props

Este projeto foi desenvolvido com o objetivo de demonstrar, de forma prática e didática, como funciona a estrutura básica de um projeto React utilizando **Vite**, abordando conceitos fundamentais como **componentização**, **props**, **componentes de classe**, **componentes funcionais** e **organização de pastas**.

O exemplo implementado é um formulário simples de **Login**, construído utilizando uma combinação de componentes reutilizáveis.

---

# 📌 Descrição do Projeto

O projeto consiste em uma interface básica contendo:

- Um título "Login"
- Campos de entrada para usuário e senha
- Um botão de ação

Cada parte da interface foi separada em componentes próprios, demonstrando a importância da modularização no React.

O projeto também apresenta o fluxo padrão:

**index.html → main.jsx → App.jsx → Login.jsx → Componentes menores**

Isso reforça o conceito de aplicação hierárquica e reutilizável do React.

---

# 📁 Estrutura do Projeto


### 📄 **index.html**
Contém o `<div id="root">`, ponto onde o React será montado.

### 📄 **main.jsx**
Inicializa o React, chama `App` e envolve tudo em `<StrictMode>`.

### 📄 **App.jsx**
Componente raiz responsável por renderizar o componente `Login`.

### 📂 Pasta `/components/props`
Contém todos os componentes reutilizáveis:

- **Login.jsx** — formulário completo  
- **Label.jsx** — exibe texto simples (classe)  
- **Labelln.jsx** — exibe textos com quebra de linha (função)  
- **InputText.jsx** — campo de entrada de texto  
- **Button.jsx** — botão (classe)  

---

# 🧠 Conceitos Abordados

### 🔹 1. Componentização
Divisão da interface em componentes pequenos, reutilizáveis e independentes.

### 🔹 2. Props
Permitem que componentes recebam valores externos, tornando-os flexíveis e configuráveis.

### 🔹 3. Componentes Funcionais
Estrutura moderna do React, mais simples e objetiva.

### 🔹 4. Componentes de Classe
Versão clássica, ainda usada em projetos antigos ou para certos casos específicos.

### 🔹 5. Fluxo de Montagem do React
**HTML → JavaScript → React → Componentes Filhos**

### 🔹 6. Estrutura com Vite
Vite oferece:

- Carregamento rápido
- Compilação otimizada
- Ambiente de desenvolvimento leve

---

# 🚀 Como Executar o Projeto

### ✔ 1. Clone o repositório:

```bash
git clone https://github.com/rebecavasco/exemplo-props-React.JS.git
