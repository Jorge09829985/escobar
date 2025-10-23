// app.js

function getMessiInfo() {
return {
nombre: "Lionel Messi",
edad: 38,
equipo_actual: "Inter Miami",
seleccion: "Argentina",
titulos: [
"Copa del Mundo 2022",
"Copa América 2021",
"Champions League (4)",
"Balón de Oro (8)"
]
};
}

function getTituloPrincipal(info) {
return `${info.nombre} ha ganado ${info.titulos.length} títulos destacados.`;
}

// Exportar funciones para tests
module.exports = { getMessiInfo, getTituloPrincipal };

// --- Servidor HTTP para mostrar info en navegador ---

const http = require('http');

const info = getMessiInfo();
const titulo = getTituloPrincipal(info);

const server = http.createServer((req, res) => {
if (req.url === '/') {
res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
res.write(titulo + '\n\n');
res.write('Detalles:\n');
res.write(`Nombre: ${info.nombre}\n`);
res.write(`Edad: ${info.edad}\n`);
res.write(`Equipo actual: ${info.equipo_actual}\n`);
res.write(`Selección: ${info.seleccion}\n`);
res.write('Títulos:\n');
info.titulos.forEach((titulo, i) => {
res.write(` ${i + 1}. ${titulo}\n`);
});
res.end();
} else {
res.writeHead(404);
res.end('Página no encontrada');
}
});

const PORT = 3000;

// Solo iniciar servidor si NO estamos en modo test
if (process.env.NODE_ENV !== 'test') {

server.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
}