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
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/camilaserra/tinnova-react-test-front-end.git)
cd seu-repositorio

npm install

npm run dev

http://localhost:5173
```

## 🧪 Testes
### Testes Unitários (Vitest)

Os testes unitários foram criados focando nos cenários mais críticos da aplicação, especialmente na atualização dos inputs e botão de submit desabilitado com formulário inválido.

Cenários testados:

   - Validação dos inputs (nome, CPF e telefone;
   - Desabilitação do botão de cadastro quando os dados são inválidos;
   - Liberação do fluxo quando os dados estão corretos;
  

Rodar os testes unitários

```
npm run test
```

---

### Testes End-to-End (Cypress)

O teste E2E cobre o fluxo completo do usuário com dados de (CPF inválido e válido / Nome com no minímo 3 caracteres):

   -Preenchimento do formulário;
   -Validação dos campos
   -Cadastro com sucesso
   -Redirecionamento para a tela de listagem

Rodar o Cypress

```
npx cypress open

```

---

## 📦 Persistência de Dados

Os dados dos usuários são armazenados utilizando localStorage, permitindo:
   
   - Manter os registros após recarregar a página
   - Simular um cenário real sem dependência de backend

---

## 🎨 Design

### O layout foi ajustado conforme solicitado no enunciado do teste, com foco em:

   - Clareza visual
   - Organização dos elementos
   - Boa experiência de uso











