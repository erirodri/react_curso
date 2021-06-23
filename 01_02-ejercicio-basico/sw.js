// Un service Worker es un archivo js que nos permite guardar información en Cache
// y así evitar el uso de internet, ya que la información la tendremos almacenada para
// el funcionamiento de la aplicación --> PWA
// Se define una variable que almacenara el cache de nuestras rutas que correspondan
// a nuestra aplicación
const CACHE_ELEMENTS = [
  "./",
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
  "./style.css",
  "componentes/Contenido.js",
];

const CACHE_NAME = "v1_cache_contador_react"; // Nombre con el que almacenaremos el cache

// self == this
// install es el primer ciclo de vida de un SW (Service Worker)
self.addEventListener("install", (e) => {
    // Espera a que algo suceda
    e.waitUntil(
    caches
      .open(CACHE_NAME) //Nos permite utilizar el cache de los dispositivos
      .then((cache) => {
        cache
          .addAll(CACHE_ELEMENTS) // Agregamos los elementos que queremos cachear
          .then(() => {
            self.skipWaiting(); // Para indicar que actualize automaticamente para encontrar nuevo contenido en el cache
          })
          .catch(console.log());
      })
  );
});

// ACTIVATE -> Ahora indicamos que hacer cuando el SW este activo
self.addEventListener("activate", (e) => {
  const cacheWhiteList = [CACHE_NAME];
  e.waitUntil(
    // Espera a que algo suceda
    caches.keys().then((cachesName) => {
      // Nos da las claves del cache para evaluarlos (En ocaciones tenemos varios registros de cache)
      return Promise.all(
        cachesName.map((cacheEvaluated) => {
          // Comparar las caches para ver si son iguales y poder borrar las mas viejas
          return (
            cacheWhiteList.indexOf(cacheEvaluated) === -1 &&
            caches.delete(cacheEvaluated)
          );
        })
      );
    }).then( () => self.clients.claim())
  );
});

// FETCH -> Capturar peticiones y cachearlas.. 
// Si la peticion no tiene cache va a internet y la guarda para que despues lo tome de cache
self.addEventListener("fetch", (e) => {
    e.respondWith(
        catches.match(e.request).then( (res) => {
            (res)? res : fetch(e.request) ;
        })
    );
});