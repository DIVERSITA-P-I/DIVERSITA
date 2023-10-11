const usr = document.getElementById("email")
const btn = document.getElementById("boton")

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const usuario = usr.value
    if (usuario) {
        alert("Hola " + usuario)  
    }
})
