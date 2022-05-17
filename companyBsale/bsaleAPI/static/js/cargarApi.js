const cargarApi = async () => {
    try {
        const respuesta = await fetch('http://127.0.0.1:8080/Products/');
        const productos = await respuesta.json();
        console.log(productos);
        productos.forEach(producto => {
        console.log(producto);
        if (producto.url_image == null || producto.url_image == "") {
            producto.url_image = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';
        }
        tabla = document.getElementById('tabla');
        tabla.innerHTML += `<div class="col-12 col-md-6 col-lg-4" id="producto" >
                        <div class="thumbnail">
                            <img src=`+producto.url_image+` width="150" height="150"
                            alt="...">
                            <div class="caption">
                                <h3>`+producto.name+`</h3>
                                <p
                                    style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: large;">
                                    <strong>Precio:</strong> $`+producto.price+`
                                </p>
                                <div>
                                    <a href="#" class="btn btn-primary" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                    </div>`
             
        });
    } catch (error) {
        console.log(error)
    }
}
cargarApi();