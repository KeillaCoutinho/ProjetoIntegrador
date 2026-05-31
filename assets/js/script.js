const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

const form = document.getElementById("contatoForm");

if(form){
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Mensagem enviada com sucesso!");

        form.reset();
    });
}