const cargarApi = async () => {
    try {
        const respuesta = await fetch('http://127.0.0.1:8000/Products/');
        const datos = await respuesta.json();
        console.log(datos);

    } catch (error) {
        console.log(error)
    }
}
cargarApi();