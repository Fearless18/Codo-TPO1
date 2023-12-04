function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let apellido_ingresado = document.getElementById("apellido").value 
    let email_ingresado = document.getElementById("email").value 
    let horario_ingresado = document.getElementById("horario").value 

    let datos = {
        nombre: nombre_ingresado,
        apellido: apellido_ingresado,
        email: email_ingresado,
        horario: horario_ingresado
    }

    console.log(datos);

    let url = "https://web2023.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "tabla_productos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}