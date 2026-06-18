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

const revealElements = document.querySelectorAll(".scroll-reveal");

if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));
}

