document.addEventListener('DOMContentLoaded', () => {
    const summaryItemsList = document.getElementById('summary-items-list');
    const summaryTotalPriceElement = document.getElementById('summary-total-price');
    const checkoutForm = document.getElementById('checkout-form');
    const mainContainer = document.querySelector('.checkout-main');

    /**
     * Formatea un número como una cadena de moneda.
     * @param {number} price - El precio a formatear.
     * @returns {string} - El precio formateado (ej. "$70.00 MXN").
     */
    function formatPrice(price) {
        return `$${price.toFixed(2)} MXN`;
    }

    /**
     * Carga los productos del carrito y los muestra en el resumen.
     */
    function loadOrderSummary() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let total = 0;

        if (carrito.length === 0) {
            mainContainer.innerHTML = `
                <h2 style="text-align: center;">Tu carrito está vacío.</h2>
                <p style="text-align: center;"><a href="index.html" class="back-to-store-btn">Vuelve a la tienda para añadir productos</a></p>
            `;
            return;
        }

        summaryItemsList.innerHTML = ''; // Limpiar la lista

        carrito.forEach(cartItem => {
            const producto = productos[parseInt(cartItem.index, 10)];
            if (producto) {
                total += producto.precio * cartItem.quantity;

                const itemElement = document.createElement('div');
                itemElement.classList.add('summary-item');
                itemElement.innerHTML = `
                    <span class="summary-item-name">${producto.nombre} <span>(x${cartItem.quantity})</span></span>
                    <span class="summary-item-price">${formatPrice(producto.precio * cartItem.quantity)}</span>
                `;
                summaryItemsList.appendChild(itemElement);
            }
        });

        summaryTotalPriceElement.textContent = formatPrice(total);
    }

    /**
     * Maneja el envío del formulario de pago.
     */
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que la página se recargue

        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const formData = new FormData(checkoutForm);
        const phoneNumber = "5634623584"; // Tu número de WhatsApp

        // 1. Construir el mensaje
        let message = "¡Hola! Quisiera hacer el siguiente pedido:\n\n";
        message += "*--- Datos del Cliente ---*\n";
        message += `*Nombre:* ${formData.get('name')}\n`;
        message += `*Teléfono:* ${formData.get('phone')}\n`;
        message += `*Dirección:* ${formData.get('address')}\n\n`;
        message += "*--- Resumen del Pedido ---*\n";

        let total = 0;
        carrito.forEach(cartItem => {
            const producto = productos[parseInt(cartItem.index, 10)];
            if (producto) {
                message += `- ${producto.nombre} (x${cartItem.quantity})\n`;
                total += producto.precio * cartItem.quantity;
            }
        });

        message += `\n*Total a pagar: ${formatPrice(total)}*`;

        // 2. Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(message);

        // 3. Crear la URL de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Limpiar el carrito después de una compra exitosa
        localStorage.removeItem('carrito');

        // 4. Redirigir al usuario a WhatsApp
        window.location.href = whatsappURL;
    });

    // Cargar el resumen del pedido al iniciar la página
    loadOrderSummary();
});