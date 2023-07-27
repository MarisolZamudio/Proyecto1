function mostrarEmpleados() {
    let empleados = []
    let localEmpleados = localStorage.getItem("empleados")
    if(localEmpleados){
        medicos = JSON.parse(localEmpleados)
    }
    const tablaEmpleados = document.getElementById("tabla-empleados")
    const cuerpoTabla = tablaEmpleados.getElementsByTagName("tbody")[0]
    medicos.forEach(empleado => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreEmpleado = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaCargo = fila.insertCell()
        let celdaARL = fila.insertCell()
        let celdaCorreo = fila.insertCell()

        celdaNombreEmpleado.textContent = empleado.nombre
        celdaApellido.textContent = empleado.apellido
        celdaNumeroCedula.textContent = empleado.cedula
        celdaCargo.textContent = empleado.cargo
        celdaARL.textContent = empleado.consultorio
        celdaCorreo.textContent = empleado.correo
    });
}

mostrarMedicos()