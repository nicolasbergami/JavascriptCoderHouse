const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')


const carrito = JSON.parse(localStorage.getItem('carrito')) || []


let stock = []

fetch('./stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        stock = data

        stock.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')

            div.innerHTML = `
                            
                            <img src=${producto.img} alt="" class="imagen-producto">
                            <h3>${producto.nombre}</h3>
                            <p class="precioProducto">Precio: $${producto.precio}</p>
                            <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                        `

            productosContainer.append(div)
        })
    })



const agregarAlCarrito = (id) => {
    const item = stock.find((producto) => producto.id === id)
    carrito.push(item)

    showMensaje(item.nombre)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    carrito.length = 0

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>
                    <button  onclick="removerDelCarrito(${item.id})" class="boton-eliminar" ><i class="fas fa-trash-alt"></i></button>
                    `

        carritoContenedor.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}

const showMensaje = (producto) => {
    Toastify({
        text: `Se agregó ${producto} al carrito!`,
        duration: 3000,
        gravity: 'bottom',
        ClassName: 'toast',
        style: {

        }
    }).showToast()
}
const btnToast = document.querySelector('#vaciarCarrito')
btnToast.addEventListener('click', () => {

    Toastify({
        text: 'El Carrito se vacio correctamente!',
        duration: 3000,
        gravity: 'bottom',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast()
})






renderCarrito()
renderCantidad()
renderTotal()

