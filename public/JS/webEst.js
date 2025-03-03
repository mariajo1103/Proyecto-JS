import { getConsults, postConsults } from "./services/consultas.js";

let consulta = document.getElementById("consulta");
const btnSalir = document.getElementById("btnSalir")
const btnEnviar = document.getElementById("btnEnviar"); 
const listaConsultas = document.getElementById("listaConsultas");


btnSalir.addEventListener("click", function () {
    Swal.fire({
        title: "Cerrar sesión",
        text: "",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace("../HTML/login.html")

        }
    })

})

btnEnviar.addEventListener("click", async function () {
    let consultaF = consulta.value.trim();

    crearConsultas(consultaF);
});

function crearConsultas(consultaF) {
    let fecha = new Date().toLocaleString('es-ES', { hour12: false, second: '2-digit', minute: '2-digit', hour: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }).slice(0, -3);
    postConsults(fecha,consultaF);
    consulta.value = "";
    location.reload()
}

mostrarConsultas()

async function mostrarConsultas() {
    listaConsultas.textContent = "Consultas Enviadas:";

    const datos = await getConsults();
    
    for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        
    
        const div = document.createElement("div");
        div.id = "divConsulta"

        const pConsulta = document.createElement("p");
        pConsulta.id = "pConsulta"
        pConsulta.textContent = element.consulta;
        
        const pFecha = document.createElement("p");
        pFecha.id = "pFecha"
        pFecha.textContent = element.fecha;
        

        div.appendChild(pConsulta);
        div.appendChild(pFecha);

        listaConsultas.appendChild(div);
    };
}
