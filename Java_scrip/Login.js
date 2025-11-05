//pasar del login al registrarse y diseversa 
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {

    wrapper.classList.add("active");
})

loginLink.addEventListener("click", () => {

    wrapper.classList.remove("active");
})



//formulario

//login
const formLogin = document.querySelector(".form-box.login form");
const emailInput = formLogin.querySelector('input[type="email"]');
const passInput = formLogin.querySelector('input[type="password"]');
const modalError = document.getElementById("modal-error");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value.trim() === "" || passInput.value.trim() === "") {
        modalError.classList.remove("oculto");
        setTimeout(() => {
            modalError.classList.add("oculto");
        }, 2000);
    } else {
        alert("Inicio de sesión exitoso");
    }
    modalError.addEventListener("click", () => {
            modalError.classList.add("oculto");
        })
        //registrarse
    const formRegister = document.querySelector(".form-box.register form");
    const usernameInput = formRegister.querySelector('input[type="text"]');
    const emailRegisterInput = formRegister.querySelector('input[type="email"]');
    const passRegisterInput = formRegister.querySelector('input[type="password"]');

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        if (
            usernameInput.value.trim() === "" ||
            emailRegisterInput.value.trim() === "" ||
            passRegisterInput.value.trim() === ""
        ) {
            modalError.classList.remove("oculto");
            setTimeout(() => {
                modalError.classList.add("oculto");
            }, 2000);
        } else {
            alert("Registro exitoso");
        }
    });
});