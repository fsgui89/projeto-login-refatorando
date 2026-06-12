# Interactive Login with JavaScript

Login and sign-up page project developed with **HTML, CSS, and JavaScript**, focused on form validation, visual interaction, and user experience.

The purpose of this project was to transform a simple login page into a more dynamic interface, using JavaScript to control simulated authentication, user registration, password validation, feedback messages, and an interactive animation in the visual panel.

## Preview

Interface with:

* Login page;
* Sign-up page;
* E-mail validation;
* Strong password validation;
* Show/hide password button;
* Success and error messages;
* Local data storage with `localStorage`;
* Interactive animation following mouse movement.

## Features

### Login

The user can enter an e-mail and password to access the application. If the credentials are correct, a success message is displayed. Otherwise, the interface displays an error message.

### Sign-up

On the sign-up page, the user enters name, e-mail, password, and password confirmation.

The password must contain:

* At least 8 characters;
* At least one uppercase letter;
* At least one lowercase letter;
* At least one number;
* At least one special character.

### Show and hide password

The password fields include an eye icon button, allowing the user to show or hide the typed password.

### Password recovery

When clicking on “Forgot my password”, a message instructs the user to check their e-mail and follow the steps to recover access.

### Interactive animation

The visual panel includes an animated interaction controlled by JavaScript:

* The eyes follow the mouse movement;
* When clicking on the e-mail field, the expression changes;
* When clicking on the password field, the expression changes again;
* When showing the password, the expression looks to the other side, simulating privacy;
* When hiding the password, the animation returns to normal;
* In case of error, the expression changes to surprise;
* In case of success, the expression changes to approval.

### Error animation

When the user tries to log in with empty fields or incorrect credentials, the project applies a shake animation to the password field and the “Login” button.

This feature was built with:

* CSS `@keyframes`;
* `.shake-error` class;
* JavaScript class manipulation;
* Removing and reapplying the class to allow the animation to run again after multiple attempts.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* LocalStorage
* SVG
* DOM manipulation
* Mouse, click, and form events

## Project Structure

```bash
projeto_login/
│
├── index.html
│
└── public/
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   └── script.js
    │
    └── images/
        ├── Logo_Horizontal_colorida_Refatorando_1.png
        ├── google.svg
        └── las-vegas-sphere.png
```

## How to Run

1. Clone this repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

2. Access the project folder:

```bash
cd projeto_login
```

3. Open the `index.html` file in your browser or use the **Live Server** extension in VS Code.

## What I Learned

During the development of this project, I practiced important JavaScript concepts, such as:

* Selecting elements with `getElementById` and `querySelector`;
* Manipulating CSS classes;
* Handling `click`, `focus`, `submit`, and `mousemove` events;
* Form validation;
* Using arrays and objects;
* Storing data with `localStorage`;
* Controlling visual states;
* Integrating HTML, CSS, and SVG interactions.

## Note

This project was developed for study, practice, and portfolio purposes. Authentication is simulated on the front end using `localStorage`, so it should not be used as a real login system in production without a back end, database, and proper security measures.

## Author

Developed by Guilherme Ferreira Soares.

linkedin.com/in/guilhermefsdev
fsgui89.github.io

Em português:
# Login Interativo com JavaScript

Projeto de tela de login e cadastro desenvolvido com **HTML, CSS e JavaScript**, com foco em validação de formulário, interação visual e experiência do usuário.

A proposta do projeto foi transformar uma tela de login simples em uma interface mais dinâmica, utilizando JavaScript para controlar autenticação simulada, cadastro de usuários, validação de senha, mensagens de feedback e uma animação interativa no painel visual.

## Preview

Interface com:

* Tela de login;
* Tela de cadastro;
* Validação de e-mail;
* Validação de senha forte;
* Botão para mostrar/ocultar senha;
* Mensagens de sucesso e erro;
* Armazenamento local com `localStorage`;
* Animação interativa acompanhando o movimento do mouse.

## Funcionalidades

### Login

O usuário pode inserir e-mail e senha para acessar a aplicação. Caso os dados estejam corretos, uma mensagem de sucesso é exibida. Caso contrário, a interface exibe uma mensagem de erro.

### Cadastro

Na tela de cadastro, o usuário informa nome, e-mail, senha e confirmação de senha.

A senha precisa conter:

* Pelo menos 8 caracteres;
* Pelo menos uma letra maiúscula;
* Pelo menos uma letra minúscula;
* Pelo menos um número;
* Pelo menos um caractere especial.

### Mostrar e ocultar senha

Os campos de senha possuem um botão com ícone de olho, permitindo que o usuário visualize ou oculte a senha digitada.

### Recuperação de senha

Ao clicar em “Esqueci minha senha”, uma mensagem orienta o usuário a verificar o e-mail e seguir o passo a passo para recuperar o acesso.

### Animação interativa

O painel visual possui uma interação animada controlada por JavaScript:

* Os olhos acompanham o movimento do mouse;
* Ao clicar no campo de e-mail, a expressão muda;
* Ao clicar no campo de senha, a expressão muda novamente;
* Ao mostrar a senha, a expressão olha para o outro lado, simulando privacidade;
* Ao ocultar a senha, a animação volta a funcionar normalmente;
* Em caso de erro, a expressão muda para surpresa;
* Em caso de sucesso, a expressão muda para aprovação.

### Animação de erro

Quando o usuário tenta entrar com campos vazios ou dados incorretos, o projeto aplica uma animação de tremor no campo de senha e no botão “Entrar”.

Essa funcionalidade foi feita com:

- `@keyframes` no CSS;
- Classe `.shake-error`;
- Manipulação de classes com JavaScript;
- Remoção e reaplicação da classe para permitir que a animação seja executada novamente em múltiplas tentativas.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage
* SVG
* Manipulação do DOM
* Eventos de mouse, clique e formulário

## Estrutura do projeto

```bash
projeto_login/
│
├── index.html
│
└── public/
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   └── script.js
    │
    └── images/
        ├── Logo_Horizontal_colorida_Refatorando_1.png
        ├── google.svg
        └── las-vegas-sphere.png
```

## Como executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd projeto_login
```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no VS Code.

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de JavaScript, como:

* Seleção de elementos com `getElementById` e `querySelector`;
* Manipulação de classes CSS;
* Eventos de `click`, `focus`, `submit` e `mousemove`;
* Validação de formulários;
* Uso de arrays e objetos;
* Armazenamento de dados no `localStorage`;
* Controle de estados visuais;
* Interação entre HTML, CSS e SVG.

## Observação

Este projeto foi desenvolvido para fins de estudo, prática e portfólio. A autenticação é simulada no front-end com `localStorage`, portanto não deve ser utilizada como sistema real de login em produção sem back-end, banco de dados e segurança adequada.

## Autor

Desenvolvido por Guilherme Ferreira Soares.

linkedin.com/in/guilhermefsdev
fsgui89.github.io