export default function redondearPrecio(precio) {
    // Obtenemos la última cifra (decena) del precio
    const decena = precio % 100;

    // Redondeo según la decena
    if (decena <= 25) {
        return Math.floor(precio / 100) * 100; // Redondea hacia abajo
    } else if (decena >= 26 && decena <= 75) {
        return Math.floor(precio / 100) * 100 + 50; // Redondea hacia 50
    } else {
        return Math.ceil(precio / 100) * 100; // Redondea hacia arriba
    }
}