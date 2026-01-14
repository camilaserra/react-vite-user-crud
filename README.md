# Tinnova React Test Front-end

Aplicação front-end desenvolvida como parte do teste técnico da Tinnova, utilizando **React**, **Vite** e **JavaScript**.  
O projeto simula um fluxo completo de **cadastro de usuários**, **listagem**, **edição**, **exclusão** e **validação de dados**, com foco em boas práticas, organização do código e testes automatizados.

---

## 🧠 Visão Geral do Projeto

O desenvolvimento foi dividido em **fases**, visando clareza, evolução incremental e fácil avaliação:

1. **Criação e configuração do projeto**
2. **Implementação da listagem de usuários**
   - Exibição dos dados
   - Ações de editar e excluir
   - Persistência dos dados (localStorage)
3. **Tela de cadastro**
   - Inputs controlados
   - Máscaras para CPF e telefone
4. **Validações**
   - Nome obrigatório
   - CPF válido
   - Telefone válido
5. **Design**
   - Ajustes visuais conforme layout solicitado
6. **Testes**
   - Testes unitários com **Vitest**
   - Testes E2E com **Cypress**
7. **Ajustes finais e deploy**

---

## 🚀 Tecnologias Utilizadas

### Built With

- **React 18**
- **Vite**
- **JavaScript (ES6+)**
- **React Router DOM**
- **Vitest** (testes unitários)
- **@testing-library/react**
- **Cypress** (testes end-to-end)
- **CSS**

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm ou yarn

---

## ⚙️ Instalação e Execução

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
