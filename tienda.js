// Variables globales
const carrito = document.getElementById('carrito');
const productos = document.getElementById('productos');
const itemsCarrito = document.getElementById('items-carrito');
const totalCarrito = document.getElementById('total-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
let articulosCarrito = [];

// Eventos
cargarEventos();

function cargarEventos() {
  // Agregar producto al carrito
  productos.addEventListener('click', agregarProducto);

  // Eliminar productos del carrito
  itemsCarrito.addEventListener('click', eliminarProducto);

  // Vaciar carrito
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

  // Cargar carrito desde local storage
  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarCarritoHTML();
  });
}

// Funciones
function agregarProducto(e) {
  if (e.target.classList.contains('agregar-carrito')) {
    const productoSeleccionado = e.target.parentElement;
    leerDatosProducto(productoSeleccionado);
  }
}

function leerDatosProducto(producto) {
  const infoProducto = {
    id: producto.querySelector('li').getAttribute('data-id'),
    nombre: producto.querySelector('li').getAttribute('data-nombre'),
    precio: producto.querySelector('li').getAttribute('data-precio'),
    cantidad: 1
  }

  const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);

  if (existe) {
    const productos = articulosCarrito.map(producto => {
      if (producto.id === infoProducto.id) {
        producto.cantidad++;
        return producto;
      } else {
        return producto;
      }
    });
    articulosCarrito = [...productos];
  } else {
    articulosCarrito = [...articulosCarrito, infoProducto];
  }

  actualizarCarritoHTML();
}

function eliminarProducto(e) {
  if (e.target.classList.contains('eliminar-producto')) {
    const productoId = e.target.getAttribute('data-id');

    articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

    actualizarCarritoHTML();
  }
}

function vaciarCarrito() {
  articulosCarrito = [];

  actualizarCarritoHTML();
}

function actualizarCarritoHTML() {
  limpiarHTML();}

  articulosCarrito.for
 producto => {
const {id, nombre, precio,}