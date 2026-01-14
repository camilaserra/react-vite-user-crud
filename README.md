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
git clone https://github.com/camilaserra/tinnova-react-test-front-end.git
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


## Executando os testes E2E com cypress

1 - Utilizei dois terminais
    - No primeiro terminal, inicie a aplicação:
   
   ```
   npx cypress open
   
   ```
   
   - No segundo terminal, execute o cypress:
   
   ```
   npx cypress open
   
   ```
   <img width="1447" height="279" alt="image" src="https://github.com/user-attachments/assets/73c54ed5-ad5c-41bd-ae6b-d963daef5c9b" />


2 - Selecione a opção “E2E Testing”

   Ao abrir o Cypress, uma tela será exibida no navegador.
   Nela, selecione a opção E2E Testing.
   
   <img width="1084" height="474" alt="image" src="https://github.com/user-attachments/assets/48c00137-e9c5-4a3a-99ac-cf98d90762d9" />

3 - Escolha o navegador
    Selecione o Chrome e, em seguida, clique em “Start E2E Testing in Chrome”.
   
   <img width="775" height="334" alt="image" src="https://github.com/user-attachments/assets/da446c9a-b179-4eb5-a28c-20d2bd7d7cb4" />

4 - Selecione o arquivo de teste
    Na lista de testes, selecione o arquivo:
   
   userForm.cy.js
   
   <img width="1890" height="832" alt="image" src="https://github.com/user-attachments/assets/c8210cd2-dcad-4da0-a0ab-d844a47b2a20" />

5 - Acompanhe a execução dos testes

   Após selecionar o arquivo, será possível visualizar os testes sendo executados em tempo real no navegador.

   <img width="1843" height="846" alt="image" src="https://github.com/user-attachments/assets/4550f3a1-af94-4bf9-8930-ae3463cf5e2c" />

6 - Execução isolada de testes

   Também é possível executar e analisar cada teste de forma isolada, facilitando o debug e a validação de cenários específicos.

   <img width="1820" height="846" alt="image" src="https://github.com/user-attachments/assets/0ddac66a-5fb4-4a4a-aedb-545db0991d69" />

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











