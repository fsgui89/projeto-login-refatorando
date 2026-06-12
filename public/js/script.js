const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");
const formTitle = document.getElementById("form-title");
const toggleForm = document.getElementById("toggle-form");
const toggleText = document.getElementById("toggle-text");
const loginOptions = document.getElementById("login-options");
const message = document.getElementById("message");
const forgotPassword = document.getElementById("forgot-password");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const registerName = document.getElementById("register-name");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerConfirmPassword = document.getElementById("register-confirm-password");

let users = JSON.parse(localStorage.getItem("users")) || [];
let isRegisterMode = false;
let isPrivacyMode = false;

/* Ícones do olho */

const eyeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
`;

const eyeClosedIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.88 5.09A9.77 9.77 0 0112 4.88C18 4.88 21.75 12 21.75 12a18.8 18.8 0 01-3.05 3.86" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.53 6.53C3.82 8.27 2.25 12 2.25 12S6 19.12 12 19.12a9.82 9.82 0 004.04-.86" />
    </svg>
`;

const passwordToggles = document.querySelectorAll(".toggle-password");

/* Alinhamento do SVG com a imagem */

const sphereScene = document.querySelector(".sphere-scene");
const spherePhoto = document.querySelector(".sphere-photo");
const faceLayer = document.querySelector(".sphere-face-layer");

function syncFaceLayerWithPhoto() {
    const imageWidth = spherePhoto.naturalWidth || 1024;
    const imageHeight = spherePhoto.naturalHeight || 683;

    const sceneWidth = sphereScene.clientWidth;
    const sceneHeight = sphereScene.clientHeight;

    const imageRatio = imageWidth / imageHeight;
    const sceneRatio = sceneWidth / sceneHeight;

    let renderedWidth;
    let renderedHeight;
    let left;
    let top;

    if (sceneRatio > imageRatio) {
        renderedWidth = sceneWidth;
        renderedHeight = sceneWidth / imageRatio;
        left = 0;
        top = (sceneHeight - renderedHeight) / 2;
    } else {
        renderedHeight = sceneHeight;
        renderedWidth = sceneHeight * imageRatio;
        top = 0;
        left = (sceneWidth - renderedWidth) / 2;
    }

    faceLayer.style.width = `${renderedWidth}px`;
    faceLayer.style.height = `${renderedHeight}px`;
    faceLayer.style.left = `${left}px`;
    faceLayer.style.top = `${top}px`;
}

spherePhoto.addEventListener("load", syncFaceLayerWithPhoto);
window.addEventListener("resize", syncFaceLayerWithPhoto);

if (spherePhoto.complete) {
    syncFaceLayerWithPhoto();
}

/* Elementos da expressão */

const leftPupil = document.getElementById("left-pupil");
const rightPupil = document.getElementById("right-pupil");
const leftEye = document.getElementById("left-eye");
const rightEye = document.getElementById("right-eye");
const leftBrow = document.getElementById("left-brow");
const rightBrow = document.getElementById("right-brow");
const sphereMouth = document.getElementById("sphere-mouth");
const sphereMouthShocked = document.getElementById("sphere-mouth-shocked");
const sphereMouthSide = document.getElementById("sphere-mouth-side");

let currentSphereExpression = "normal";

function getPasswordInputs() {
    return document.querySelectorAll(
        "#login-password, #register-password, #register-confirm-password"
    );
}

function isVisibleElement(element) {
    return element.offsetParent !== null;
}

function hasVisiblePassword() {
    return Array.from(getPasswordInputs()).some(function (input) {
        return input.type === "text" && isVisibleElement(input);
    });
}

function resetPasswordVisibility() {
    getPasswordInputs().forEach(function (input) {
        input.type = "password";
    });

    passwordToggles.forEach(function (toggle) {
        toggle.innerHTML = eyeIcon;
        toggle.setAttribute("aria-label", "Mostrar senha");
    });

    isPrivacyMode = false;
}

function moveEyes(x, y) {
    leftPupil.style.transform = `translate(${x}px, ${y}px)`;
    rightPupil.style.transform = `translate(${x}px, ${y}px)`;
}

function showNormalMouth() {
    sphereMouth.style.display = "block";
    sphereMouthShocked.style.display = "none";
    sphereMouthSide.style.display = "none";
}

function showShockedMouth() {
    sphereMouth.style.display = "none";
    sphereMouthShocked.style.display = "block";
    sphereMouthSide.style.display = "none";
}

function showSideMouth() {
    sphereMouth.style.display = "none";
    sphereMouthShocked.style.display = "none";
    sphereMouthSide.style.display = "block";
}

function resetEyes() {
    leftEye.setAttribute("rx", "22");
    leftEye.setAttribute("ry", "24");
    rightEye.setAttribute("rx", "22");
    rightEye.setAttribute("ry", "24");
}

function setSphereExpression(expression) {
    currentSphereExpression = expression;

    resetEyes();
    showNormalMouth();

    if (expression === "normal") {
        moveEyes(0, 0);
        leftBrow.setAttribute("d", "M401 333 Q432 327 463 333");
        rightBrow.setAttribute("d", "M489 329 Q520 323 551 329");
        sphereMouth.setAttribute("d", "M468 401 Q476 407 484 401");
    }

    if (expression === "email") {
        moveEyes(4, 0);

        leftEye.setAttribute("rx", "21");
        leftEye.setAttribute("ry", "21");
        rightEye.setAttribute("rx", "21");
        rightEye.setAttribute("ry", "21");

        leftBrow.setAttribute("d", "M400 331 Q432 329 464 331");
        rightBrow.setAttribute("d", "M488 327 Q520 325 552 327");

        showSideMouth();
        sphereMouthSide.setAttribute("d", "M470 404 Q480 405 490 401");
    }

    if (expression === "password") {
        moveEyes(11, 2);

        leftBrow.setAttribute("d", "M401 339 Q432 337 463 339");
        rightBrow.setAttribute("d", "M489 321 Q520 313 551 319");

        showSideMouth();
        sphereMouthSide.setAttribute("d", "M478 402 Q486 406 494 400");
    }

    if (expression === "privacy") {
        moveEyes(-14, 0);

        leftBrow.setAttribute("d", "M401 334 Q432 329 463 334");
        rightBrow.setAttribute("d", "M489 332 Q520 326 551 332");

        sphereMouth.style.display = "block";
        sphereMouthShocked.style.display = "none";
        sphereMouthSide.style.display = "none";
        sphereMouth.setAttribute("d", "M469 401 Q476 405 483 401");
    }

    if (expression === "shocked") {
        leftEye.setAttribute("rx", "24");
        leftEye.setAttribute("ry", "27");
        rightEye.setAttribute("rx", "24");
        rightEye.setAttribute("ry", "27");

        leftBrow.setAttribute("d", "M401 317 Q432 298 463 317");
        rightBrow.setAttribute("d", "M489 313 Q520 295 551 313");

        showShockedMouth();
    }

    if (expression === "success") {
        moveEyes(0, 3);
        leftBrow.setAttribute("d", "M401 335 Q432 329 463 335");
        rightBrow.setAttribute("d", "M489 331 Q520 325 551 331");
        sphereMouth.setAttribute("d", "M458 395 Q476 419 494 395");
    }
}

/* Animação de erro no login */

function shakeLoginError() {
    const passwordBox = loginPassword.closest(".password-container");
    const loginButton = formLogin.querySelector('button[type="submit"]');

    passwordBox.classList.remove("shake-error");
    loginButton.classList.remove("shake-error");

    void passwordBox.offsetWidth;
    void loginButton.offsetWidth;

    passwordBox.classList.add("shake-error");
    loginButton.classList.add("shake-error");

    setTimeout(function () {
        passwordBox.classList.remove("shake-error");
        loginButton.classList.remove("shake-error");
    }, 400);
}

/* Movimento dos olhos */

document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    if (!isPrivacyMode && currentSphereExpression !== "success") {
        const pupilX = Math.max(-14, Math.min(14, mouseX * 28));
        const pupilY = Math.max(-10, Math.min(10, mouseY * 20));

        moveEyes(pupilX, pupilY);
    }
});

/* Clique fora */

document.addEventListener("click", function (event) {
    const clickedElement = event.target;

    const clickedInsideInteractiveElement =
        clickedElement.closest("input") ||
        clickedElement.closest("button") ||
        clickedElement.closest("a") ||
        clickedElement.closest(".password-container");

    if (!clickedInsideInteractiveElement && !hasVisiblePassword()) {
        isPrivacyMode = false;
        setSphereExpression("normal");
    }
});

/* Eventos dos campos */

function activateEmailExpression() {
    if (hasVisiblePassword()) {
        return;
    }

    isPrivacyMode = false;
    setSphereExpression("email");
}

function activatePasswordExpression() {
    if (hasVisiblePassword()) {
        isPrivacyMode = true;
        setSphereExpression("privacy");
        return;
    }

    isPrivacyMode = false;
    setSphereExpression("password");
}

loginEmail.addEventListener("focus", activateEmailExpression);
loginEmail.addEventListener("click", activateEmailExpression);

registerName.addEventListener("focus", activateEmailExpression);
registerName.addEventListener("click", activateEmailExpression);

registerEmail.addEventListener("focus", activateEmailExpression);
registerEmail.addEventListener("click", activateEmailExpression);

loginPassword.addEventListener("focus", activatePasswordExpression);
loginPassword.addEventListener("click", activatePasswordExpression);

registerPassword.addEventListener("focus", activatePasswordExpression);
registerPassword.addEventListener("click", activatePasswordExpression);

registerConfirmPassword.addEventListener("focus", activatePasswordExpression);
registerConfirmPassword.addEventListener("click", activatePasswordExpression);

/* Esqueci minha senha */

forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();

    showMessage("Verifique seu e-mail e siga o passo a passo para realizar o login.", "success");

    if (!hasVisiblePassword()) {
        isPrivacyMode = false;
        setSphereExpression("email");
    }
});

/* Troca login/cadastro */

toggleForm.addEventListener("click", function (event) {
    event.preventDefault();

    resetPasswordVisibility();

    isRegisterMode = !isRegisterMode;

    message.textContent = "";
    message.className = "";

    if (isRegisterMode) {
        formTitle.textContent = "Crie sua Conta";

        formLogin.classList.add("hidden");
        formRegister.classList.remove("hidden");

        loginOptions.classList.add("hidden");

        toggleText.textContent = "Já tem uma conta?";
        toggleForm.textContent = "Voltar para o login";

        setSphereExpression("email");
    } else {
        formTitle.textContent = "Faça seu Login";

        formRegister.classList.add("hidden");
        formLogin.classList.remove("hidden");

        loginOptions.classList.remove("hidden");

        toggleText.textContent = "Não tem uma conta?";
        toggleForm.textContent = "Inscreva-se";

        setSphereExpression("normal");
    }
});

/* Cadastro */

formRegister.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = registerName.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value;
    const confirmPassword = registerConfirmPassword.value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        isPrivacyMode = false;
        showMessage("Preencha todos os campos.", "error");
        setSphereExpression("shocked");
        return;
    }

    if (!validateEmail(email)) {
        isPrivacyMode = false;
        showMessage("Digite um e-mail válido.", "error");
        setSphereExpression("shocked");
        return;
    }

    if (!validatePassword(password)) {
        isPrivacyMode = false;
        showMessage("A senha precisa ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.", "error");
        setSphereExpression("shocked");
        return;
    }

    if (password !== confirmPassword) {
        isPrivacyMode = false;
        showMessage("As senhas não são iguais.", "error");
        setSphereExpression("shocked");
        return;
    }

    const userAlreadyExists = users.find(function (user) {
        return user.email === email;
    });

    if (userAlreadyExists) {
        isPrivacyMode = false;
        showMessage("Este e-mail já está cadastrado.", "error");
        setSphereExpression("shocked");
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    isPrivacyMode = false;
    showMessage("Conta criada com sucesso! Agora você já pode fazer login.", "success");
    setSphereExpression("success");

    formRegister.reset();
    resetPasswordVisibility();

    setTimeout(function () {
        toggleForm.click();
    }, 1800);
});

/* Login */

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    if (email === "" || password === "") {
        isPrivacyMode = false;
        showMessage("Preencha e-mail e senha.", "error");
        setSphereExpression("shocked");
        shakeLoginError();
        return;
    }

    const userFound = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (userFound) {
        isPrivacyMode = false;
        showMessage(`Login realizado com sucesso. Bem-vindo, ${userFound.name}!`, "success");
        setSphereExpression("success");
        formLogin.reset();
        resetPasswordVisibility();
    } else {
        isPrivacyMode = false;
        showMessage("E-mail ou senha incorretos.", "error");
        setSphereExpression("shocked");
        shakeLoginError();
    }
});

/* Validações */

function validatePassword(password) {
    const hasMinimumCharacters = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasMinimumCharacters && hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
}

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

/* Configuração inicial dos olhos */

passwordToggles.forEach(function (toggle) {
    toggle.innerHTML = eyeIcon;

    toggle.addEventListener("click", function () {
        const inputId = toggle.getAttribute("data-target");
        const passwordInput = document.getElementById(inputId);

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggle.innerHTML = eyeClosedIcon;
            toggle.setAttribute("aria-label", "Ocultar senha");

            isPrivacyMode = true;
            setSphereExpression("privacy");
        } else {
            passwordInput.type = "password";
            toggle.innerHTML = eyeIcon;
            toggle.setAttribute("aria-label", "Mostrar senha");

            isPrivacyMode = false;

            if (document.activeElement === passwordInput) {
                setSphereExpression("password");
            } else {
                setSphereExpression("normal");
            }
        }
    });
});

setSphereExpression("normal");