
// Productos //
const fetchData = async () => {
    try {
        let data = await fetch('../js/productos.json');
        let dataJSON = await data.json();
        crear(dataJSON);
        console.log(dataJSON)
    } catch (error) {
        document.getElementById('productosAgregados').innerHTML = '<h4>Error al cargar los productos</h4>';
        console.log(error);
    }
}

const crear = dataJSON => {
    dataJSON.forEach(producto => {
        
        let galeria = document.getElementById('productosAgregados')

        //crear div
        let div = document.createElement('div');
        div.classList.add('producto');

        //crear imagen
        let img = document.createElement('img');
        img.src = producto.url;

        //crear h3
        let h3 = document.createElement('h6');
        h3.classList.add('productoNombre');
        h3.textContent = producto.nombre;

        //crear h6
        let h6 = document.createElement('p');
        h6.classList.add('productoPrecio');
        h6.textContent = `$${producto.precio}`;

        //crear boton
        let button = document.createElement('button');
        button.classList.add('comprar');
        button.dataset.id = producto.id;
        button.textContent = 'Comprar';

        //agregar a div
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(h6);
        div.appendChild(button);

        //agregar a galeria
        galeria.appendChild(div);

    });
}

document.addEventListener("DOMContentLoaded", fetchData())


