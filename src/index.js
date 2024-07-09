const campo = document.querySelectorAll(".campo")
const button = document.querySelector(".btn")

button.addEventListener('click', (event) => {
    event.preventDefault()

    campo.forEach((input) => {
        if (input.value) {
            input.classList.add('valido')
            input.nextElementSibling.classList.remove('error')
        } else {
            input.classList.remove('valido')
            input.classList.add('invalido')
            input.nextElementSibling.classList.add('error')
        }
    });
})