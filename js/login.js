function loguear() {
  
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("pass").value;    
  
  // Si el usuario y la contraseña son correctos, redirigir al usuario a la página de la tabla
  console.log(usuario+" "+password);
  if (usuario == "admin" && password == "123"){
    window.location.href = "tabla_productos.html";
    return false
  }
  else{
    alert("Usuario o contraseña incorrectos");
    return false
  }
}