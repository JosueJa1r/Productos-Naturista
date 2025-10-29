// --- Lógica para Renderizar el Catálogo ---
// La función se ejecuta cuando el DOM está listo gracias al atributo 'defer' en el tag <script>
const catalogoContainer = document.getElementById('catalogo-container');
const cartCounterElement = document.getElementById('cart-counter');
const cartContainer = document.querySelector('.cart-container');
const cartModal = document.getElementById('cart-modal');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartModalCounter = document.getElementById('cart-modal-counter');
const cartItemsList = document.getElementById('cart-items-list');
const clearCartBtn = document.getElementById('clear-cart-btn');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const notificationContainer = document.getElementById('notification-container');
const checkoutBtn = document.getElementById('checkout-btn');

/**
 * Formatea un número como una cadena de moneda.
 * @param {number} price - El precio a formatear.
 * @returns {string} - El precio formateado (ej. "$70.00 MXN").
 */
function formatPrice(price) {
    return `$${price.toFixed(2)} MXN`;
}

/**
 * Muestra una notificación en la pantalla.
 * @param {string} message - El mensaje a mostrar.
 * @param {string} [type='success'] - El tipo de notificación (para futuros estilos).
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notificationContainer.appendChild(notification);

    // Forzar un reflow para que la animación de entrada se ejecute
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Ocultar y eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => notification.remove());
    }, 3000);
}

function actualizarAccionesProducto(index, enCarrito) {
    const accionesContainer = document.querySelector(`.producto-acciones[data-index="${index}"]`);
    if (!accionesContainer) return;

    if (enCarrito) {
        accionesContainer.innerHTML = `
            <span class="added-text">✅ Añadido</span>
            <button class="quitar-btn" data-index="${index}">Quitar</button>
        `;
    } else {
        accionesContainer.innerHTML = `<button class="comprar-btn" data-index="${index}">Comprar</button>`;
    }
}

function cargarEstadoCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // El contador ahora muestra la cantidad total de productos (sumando cantidades)
    const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);
    cartCounterElement.textContent = totalItems;

    // Actualizar el estado de todos los botones de producto
    const indicesEnCarrito = carrito.map(item => item.index);
    document.querySelectorAll('.producto-acciones').forEach(container => {
        const index = container.dataset.index;
        actualizarAccionesProducto(index, indicesEnCarrito.includes(index));
    });
}

function renderizarProductos() {
    catalogoContainer.innerHTML = productos.map((producto, index) => `
        <div class="producto-card">
            <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" class="producto-imagen">
            <div class="producto-info">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <span class="producto-precio">${formatPrice(producto.precio)}</span>
                <div class="producto-acciones" data-index="${index}">
                    <button class="comprar-btn" data-index="${index}">Comprar</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);

    if (carrito.length === 0) {
        cartItemsList.innerHTML = '<p class="empty-cart-message">El carrito está vacío.</p>';
    } else {
        cartItemsList.innerHTML = carrito.map(cartItem => {
            const productIndex = parseInt(cartItem.index, 10);
            const producto = productos[parseInt(cartItem.index)];
            total += producto.precio * cartItem.quantity;
            return `
            <div class="cart-item" data-index="${cartItem.index}">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="cart-item-image" />
                <div class="cart-item-details">
                    <h3>${producto.nombre}</h3>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease-quantity" data-index="${cartItem.index}">-</button>
                        <span>${cartItem.quantity}</span>
                        <button class="quantity-btn increase-quantity" data-index="${cartItem.index}">+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">
                    <p>${formatPrice(producto.precio * cartItem.quantity)}</p>
                    <button class="cart-item-remove-btn" data-index="${cartItem.index}">🗑️</button>
                </div>
            </div>
        `}).join('');
    }

    // Actualizar el contador dentro del modal del carrito
    cartModalCounter.textContent = `(${totalItems} productos)`;

    // Actualizar el precio total en el DOM
    cartTotalPriceElement.textContent = formatPrice(total); // Corregido: usar formatPrice
}

function removeItemFromCart(indexToRemove) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Filtramos para eliminar el producto sin importar la cantidad
    carrito = carrito.filter(item => item.index !== indexToRemove);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito(); // Volver a renderizar el modal para reflejar el cambio
    cargarEstadoCarrito(); // Recargamos todo para mantener la consistencia
}

function clearAllItemsFromCart() {
    // Limpiamos el localStorage
    localStorage.removeItem('carrito');
    renderizarCarrito(); // Volver a renderizar el modal para reflejar el cambio
    cargarEstadoCarrito();
}

function updateCartQuantity(index, change) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const itemIndex = carrito.findIndex(item => item.index === index);

    if (itemIndex > -1) {
        carrito[itemIndex].quantity += change;

        // Si la cantidad llega a 0 o menos, eliminamos el producto del carrito
        if (carrito[itemIndex].quantity <= 0) {
            carrito.splice(itemIndex, 1);
        }
    } else if (change > 0) {
        // Si el item no existe y el cambio es positivo, lo añadimos
        carrito.push({ index: index, quantity: change });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    if (change > 0) {
        // Determinar si el producto era nuevo en el carrito antes de la actualización
        const eraNuevo = carrito.find(item => item.index === index)?.quantity === change;
        const producto = productos[parseInt(index, 10)];

        if (eraNuevo) {
            showNotification(`¡${producto.nombre} añadido al carrito!`);
        } else {
            showNotification(`Cantidad de ${producto.nombre} actualizada`);
        }

        // Añadir animación al botón del carrito
        cartContainer.classList.add('shake');
        // Eliminar la clase después de que termine la animación
        setTimeout(() => {
            cartContainer.classList.remove('shake');
        }, 820); // 820ms es la duración de la animación
    }
    cargarEstadoCarrito();
    renderizarCarrito(); // Volver a renderizar el modal para reflejar el cambio
}

function inicializarCatalogo() {
    renderizarProductos();
    cargarEstadoCarrito();

    // Event listeners para abrir y cerrar el carrito
    cartContainer.addEventListener('click', () => {
        renderizarCarrito(); // Re-renderizar por si acaso antes de abrir
        cartModal.classList.add('open');
    });
    cartCloseBtn.addEventListener('click', () => {
        cartModal.classList.remove('open');
    });

    // Event listener para el botón de Finalizar Compra
    checkoutBtn.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    // Nuevo: Event listener para el botón Vaciar Carrito
    clearCartBtn.addEventListener('click', () => {
        clearAllItemsFromCart();
    });

    // Event listener para eliminar productos desde el carrito (usando delegación)
    cartItemsList.addEventListener('click', (event) => {
        const target = event.target;
        const index = target.dataset.index;

        if (target.classList.contains('cart-item-remove-btn')) {
            removeItemFromCart(index);
        } else if (target.classList.contains('increase-quantity')) {
            updateCartQuantity(index, 1);
        } else if (target.classList.contains('decrease-quantity')) {
            updateCartQuantity(index, -1);
        }
    });
    
    // Delegación de eventos para los botones "Comprar"
    catalogoContainer.addEventListener('click', (event) => {
        const target = event.target;
        const index = target.dataset.index;

        if (target.classList.contains('comprar-btn')) {
            // Si no está, lo añadimos
            updateCartQuantity(index, 1);
        } else if (target.classList.contains('quitar-btn')) {
            // Si el producto ya está en el carrito, lo eliminamos
            removeItemFromCart(index);
            showNotification('Producto eliminado del carrito');
        }
    });
}

// Iniciar todo cuando el DOM esté listo
inicializarCatalogo();