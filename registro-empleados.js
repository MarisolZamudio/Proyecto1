const formulario = document.getElementById("registro-empleado-form")
const empleado = document.getElementById("empleado")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const cargo = document.getElementById("cargo")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const objetoEmpleado ={
        empleado: empleado.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        cargo: cargo.value,
    }
    let cargo = []
    let localCargo = localStorage.getItem("empleados")
    if (localCargo) {
        cargo = JSON.parse(localCargo)
    }
    empleados.push(objetoEmpleados)
    localStorage.setItem("empleados", JSON.stringify(empleados))
    formulario.reset()
    alert("Empleado registrado con exito")
})