const envio = document.querySelector(".submit")

const preventDefault = (e) => {
    let input = document.querySelectorAll(".form-control");
    let alerta = document.querySelector("#alerta");

    input.forEach(element => {
        if (element.value === "") {
            e.preventDefault();
            element.classList.add("alert-danger")
            alerta.classList.remove("d-none");
        } else {
            element.classList.remove("alert-danger");
            alerta.classList.add("d-none");
        }
    });
};

envio.addEventListener("click", preventDefault);