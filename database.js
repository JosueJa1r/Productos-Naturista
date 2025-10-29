// --- Base de Datos de Productos ---
// Para añadir, editar o eliminar un producto, solo tienes que modificar esta lista.
const productos = [
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    // 50 productos adicionales
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 80.00,
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 60.00,
        imagen: "https://plus.unsplash.com/premium_photo-1668623399923-5382a6ce9659?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 75.00,
        imagen: "https://images.unsplash.com/photo-1519961966203-7824b4d45a8a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1628695245892-c935d42f0e08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 70.00,
        imagen: "https://images.unsplash.com/photo-1598965674350-1545470948a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        nombre: "(Producto)",
        descripcion: "(Aqui va la descripcion del producto)",
        precio: 65.00,
        imagen: "https://images.unsplash.com/photo-1597362925123-51054bdea443?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    }
];