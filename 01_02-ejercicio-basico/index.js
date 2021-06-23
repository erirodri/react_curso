// En este documento se hace el llamado de todos los elementos que se definen en el archivo Contenido.js
// Este documento sera el encargado de establecer la comunicación entre el HTML y lo desarrollado en Js y así ser mostrado al usuario
// Se van creando etiquestas que correspondan a los elementos que se van creando
//  en este caso se utiliza **querySelector** para que pueda recorrer el DOM e identifcar el *div* donde se pondra el contenido
ReactDOM.render(<Contador />, document.querySelector("#root"));