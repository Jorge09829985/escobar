// app.test.js
const { getMessiInfo, getTituloPrincipal } = require('./app');

// Test unitario con error intencional (nombre incorrecto)
test('Debe devolver información correcta de Messi', () => {
const info = getMessiInfo();
expect(info.nombre).toBe("Lionel Andres Messi"); // Error intencional
expect(info.seleccion).toBe("Argentina");
});

// Test de integración con error intencional (cantidad incorrecta)
test('Debe generar una frase con el número correcto de títulos', () => {
const info = getMessiInfo();
const frase = getTituloPrincipal(info);
expect(info.titulos.length).toBe(6); // Error intencional
expect(frase).toContain("Lionel Messi ha ganado");
});