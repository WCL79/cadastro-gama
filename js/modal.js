//Modal referente block reutilizado para sucesso
const detect = document.querySelector("#detect");
const wrapper = document.querySelector(".wrapper");
const button = wrapper.querySelector("button");

button.addEventListener("click", function() {
    wrapper.classList.remove("show");
    return window.history.go(-1);
});


