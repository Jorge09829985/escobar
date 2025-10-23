// app.test.js

const { getMessiInfo, getTituloPrincipal } = require('./app');

// Test unitario corregido (nombre correcto)
test('Debe devolver información correcta de Messi', () => {
const info = getMessiInfo();
expect(info.nombre).toBe("Lionel Messi"); // corregido
expect(info.seleccion).toBe("Argentina");
});

// Test de integración corregido (cantidad incorrecta)
test('Debe generar una frase con el número correcto de títulos', () => {
const info = getMessiInfo();
const frase = getTituloPrincipal(info);
expect(info.titulos.length).toBe(4); // corregido
expect(frase).toContain("Lionel Messi ha ganado");
});