const tareaInput = document.getElementById("tarea");
const AgregarButton = document.getElementById("agregar");
const ListaTareas = document.getElementById("Lista");

const tareasAgregadas = [];

function actualizarContenido(){
    ListaTareas.innerHTML = "";
    tareasAgregadas.forEach((valor, indice) =>{
        const div = document.createElement("div");
        ListaTareas.appendChild(div);

        const p = document.createElement("p");
        p.textContent = valor;
        div.appendChild(p);

        const button = document.createElement("button");
        button.textContent = "delete";
        button.addEventListener("click", () => {
            tareasAgregadas.splice(indice,1);
            actualizarContenido();
        });
        div.appendChild(button)
    })
}



function agregarTexto() {
    const tareas = tareaInput.value

    if (tareas.trim() !==""){
        tareasAgregadas.push(tareas)
                                                            
        actualizarContenido()                       

    }
    tareaInput.value = "";
}

AgregarButton.addEventListener("click", agregarTexto);

