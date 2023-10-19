function validarFormulario() {
  
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var telefono = document.getElementById("telefono").value.trim(); 
    
    if(nombre==="" || apellido==="" || telefono===""){
      alert("Por favor, completar todos los campos vacíos del formulario.")
      return false
    }
  
    
    var nombreTest = /^[a-zA-Z]+$/.test(nombre) 
  
    if(nombreTest === false){
      alert("Por favor,ingrese un nombre con letras del alfabeto.")
      return false
    }
  
    
    if(telefono.length!==10){
      alert("Por favor,ingrese telefono con diez números.")
      return false
    }
  
    
    if(isNaN(telefono)){
      alert("Por favor,ingrese sólo números.")
      return false
    }
    
    
    alert("Se enviaron los datos correctamente.")
  }