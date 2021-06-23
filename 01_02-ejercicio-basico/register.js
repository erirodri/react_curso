// Generar un service Worker para funcionalidad de React
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js");
}