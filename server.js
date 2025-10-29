const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// --- Middlewares ---
// Habilita CORS para permitir que tu front-end (que corre en un origen diferente) se comunique con este servidor.
app.use(cors());
// Permite al servidor entender y procesar cuerpos de petición en formato JSON.
app.use(express.json());

// --- Base de Datos en Memoria (Simulación) ---
// En una aplicación real, esto sería una conexión a una base de datos como MongoDB o PostgreSQL.
// Usamos un objeto para simular el carrito de un único usuario.
let cart = [];


// --- API Endpoints (Rutas) ---

/**
 * GET /api/cart
 * Devuelve el estado actual del carrito.
 */
app.get('/api/cart', (req, res) => {
    res.json(cart);
});

/**
 * POST /api/cart
 * Actualiza un item en el carrito (añade, incrementa, decrementa).
 */
app.post('/api/cart', (req, res) => {
    const { index, quantityChange } = req.body;

    if (typeof index === 'undefined' || typeof quantityChange === 'undefined') {
        return res.status(400).json({ message: 'Se requiere "index" y "quantityChange".' });
    }

    const itemIndex = cart.findIndex(item => item.index === index);

    if (itemIndex > -1) {
        // El item ya existe, actualizamos la cantidad
        cart[itemIndex].quantity += quantityChange;

        // Si la cantidad es 0 o menos, lo eliminamos
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    } else if (quantityChange > 0) {
        // El item no existe y se está añadiendo
        cart.push({ index: index, quantity: quantityChange });
    }

    console.log('Carrito actualizado:', cart);
    res.status(200).json(cart);
});

/**
 * DELETE /api/cart
 * Vacía completamente el carrito.
 */
app.delete('/api/cart', (req, res) => {
    cart = [];
    console.log('Carrito vaciado.');
    res.status(200).json(cart);
});


// --- Iniciar el servidor ---
app.listen(port, () => {
    console.log(`Servidor de ejemplo corriendo en http://localhost:${port}`);
    console.log('Este servidor simula tu back-end.');
    console.log('Las peticiones del front-end llegarán aquí en lugar de usar localStorage.');
});