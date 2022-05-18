const cargarApi = async () => {
    try {
        const respuesta = await fetch('http://127.0.0.1:8000/Products/');
        const productos = await respuesta.json();
        productos.forEach(producto => {
            if (producto.url_image == null || producto.url_image == "") {
                producto.url_image = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
            }
            console.log(producto.category_id)
            tabla = document.getElementById('tabla');
            tabla.innerHTML +=
                `<div class="col-12 col-md-6 col-lg-4" id="` + producto.id + `">
                        <div class="card" id="producto">
                            <div class="thumbnail">
                            <img src=`+ producto.url_image + ` width="150" height="150"
                            alt="...">
                            <div class="caption">
                                <h4>`+ producto.name + `</h4>
                                <p
                                    style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: large;">
                                    <strong>Precio:</strong> $`+ producto.price + `
                                </p>
                                <div>
                                    <a href="#" class="btn btn-primary" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>`

        });

        const filtrarProducto = () => {
            filtro = document.getElementById('filters')
            filtro.addEventListener('click', (target) => {
                if (target.target.id === 'formCheck-1') {
                    productos.forEach(producto => {
                        if (producto.category_id === 1) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }

                else if (target.target.id === 'formCheck-2') {
                    productos.forEach(producto => {
                        if (producto.category_id === 2) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }
                else if (target.target.id === 'formCheck-3') {
                    productos.forEach(producto => {
                        if (producto.category_id === 3) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }
                else if (target.target.id === 'formCheck-4') {
                    productos.forEach(producto => {
                        if (producto.category_id === 4) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }
                else if (target.target.id === 'formCheck-5') {
                    productos.forEach(producto => {
                        if (producto.category_id === 5) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }
                else if (target.target.id === 'formCheck-6') {
                    productos.forEach(producto => {
                        if (producto.category_id === 6) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }
                else if (target.target.id === 'formCheck-7') {
                    productos.forEach(producto => {
                        if (producto.category_id === 7) {
                            document.getElementById(producto.id).style.display = 'block'
                            
                        }
                        else {
                            document.getElementById(producto.id).style.display = 'none'
                            
                        }
                    }
                    )
                }

                
            })
            
        }
filtrarProducto();
            } catch (error) {
                console.log(error)
            }
        }
        cargarApi();