const url = 'https://dolarapi.com/v1/dolares/blue';
fetch(url)
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        let dolarVenta = document.getElementById('dolarVenta'); 
        let dolarFecha = document.getElementById('dolarFecha'); 
        // trae la fecha media rara... corregimos unos caracteres
        let dolarFecha2 =data.fechaActualizacion.slice(0, -5);
        let arreglo = dolarFecha2.split(''); // Divide la cadena en un arreglo de caracteres
        arreglo.splice(10, 1, ' '); // Reemplaza la letra con un espacio en blanco
        let nuevaCadena = arreglo.join(''); // Une el arreglo.

        dolarVenta.innerHTML = (data.venta)
        dolarFecha.innerHTML = (nuevaCadena)
        
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));
