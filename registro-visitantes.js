// Se obtienen los campos del formulario
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const habitacion = document.getElementById("habitación")
const correo = document.getElementById("correo")
const tipoViajero = document.getElementById("Tipo de viajero")
const formularioRegistro = document.getElementById("registro-medicos-form")
// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const medico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        habitacion: numeroHabitacion.value,
        correo: correo.value,
        tipoViajero: tipoViajero.value
    }
    let medicos = []
    let localVisitantes = localStorage.getItem("visitantes")
    if (localVisitantes){
        visitantes = JSON.parse(localVisitantes)
    }
    visitantes.push(visitante)
    localStorage.setItem("visitantes", JSON.stringify(visitantes))
    formularioRegistro.reset()
    alert("Visitantes registrado con exito")
})