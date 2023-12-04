function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let apellido_ingresado = document.getElementById("apellido").value 
    let email_ingresado = document.getElementById("email").value 
    let horario_ingresado = document.getElementById("horario").value 

    console.log(nombre_ingresado,apellido_ingresado,email_ingresado,horario_ingresado);
    // Se arma el objeto de js 
    let datos = {
        nombre: nombre_ingresado,
        apellido: apellido_ingresado,
        email: email_ingresado,
        horario: horario_ingresado
    }
    console.log(datos);
    
    let url = "https://web2023.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "tabla_productos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar")
            console.error(err);
        })
}