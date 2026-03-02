// Importamos Express (framework para crear servidores web)
import express from "express";
// Importamos el módulo fs (File System) para leer archivos
import fs from "fs";
// Creamos la aplicación de Express
const app = express();
// Definimos el puerto donde correrá el servidor
const PORT = 3000;

// API es un acrónimo de Application Programming Interface (Interfaz de Programación de Aplicaciones)
// sirve para poder compartir datos, archivos, consultas de base de datos creando un link/ruta/endpoint
// ===============================
// API QUE LEE UN ARCHIVO JSON
// ===============================

// Definimos una ruta GET en /api/json
// Cuando alguien entre a esa URL se ejecuta esta función
// get recibe dos parametros req que es la solicitud del cliente y res que es la respuesta que enviaremos
app.get("/api/json", (req, res) => {
  try {
    // Leemos el archivo data.json de forma síncrona
    const data = fs.readFileSync("./data/data.json", "utf8");
    // Convertimos el texto leído a un objeto JSON
    const jsonData = JSON.parse(data);
    // Enviamos el objeto como respuesta en formato JSON
    res.json(jsonData);
  } catch (error) {
    // Si ocurre algún error (archivo no existe, error de parseo, etc.)
    // enviamos un estado 500 (error interno del servidor)
    res.status(500).json({ error: "Error leyendo JSON" });
  }
});

// ===============================
// API QUE LEE UN ARCHIVO TXT
// ===============================

// Definimos una ruta GET en /api/texto
// get recibe dos parametros req que es la solicitud del cliente y res que es la respuesta que enviaremos
app.get("/api/mensaje", (req, res) => {
  try {
    // Leemos el archivo mensaje.txt como texto de forma síncrona
    const data = fs.readFileSync("./data/mensaje.txt", "utf8");
    // Enviamos el contenido tal cual (texto plano)
    res.send(data);
  } catch (error) {
    // Si hay un error, enviamos un mensaje con estado 500
    res.status(500).send("Error leyendo TXT");
  }
});

// ===============================
// INICIAMOS EL SERVIDOR
// ===============================

// listen es una función que arranca el servidor y acepta una función de callback
// Le indicamos a Express que escuche en el puerto definido
app.listen(PORT, () => {
  // Este mensaje aparece en consola cuando el servidor arranca correctamente
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
