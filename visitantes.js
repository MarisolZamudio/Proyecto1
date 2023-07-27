function mostrarVisitantes() {
    let visitantes = []
    let localVisitantes = localStorage.getItem("visitantes")
    if (localVisitantes) {
        visitantes = JSON.parse(localVisitantes)
    }
    const tablaVisitantes = document.getElementById("tabla-visitantes")
    const cuerpoTabla = tablaVisitantes.getElementsByTagName("tbody")[0]

    visitantes.forEach(visitante => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombre = fila.insertCell()
        celdaNombre.textContent= visitante.visitante
        const celdaApellido = fila.insertCell();
        celdaApellido.textContent=visitante.apellido
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent=visitante.cedula
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent=visitante.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=visitante.telefono
        const celdaMotivo = fila.insertCell();
        celdaMotivo.textContent=visitante.motivo
    });
}

mostrarVisitantes()