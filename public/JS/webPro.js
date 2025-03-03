import { getConsults, postConsults } from "./services/consultas.js";


const cons = document.getElementById("cons")
const sal = document.getElementById("sal")
const contenedorP = document.getElementById("contenedorP")


verConsultas()

async function verConsultas() {

    const datosE = await getConsults()
    
    for (let index = 0; index < datosE.length; index++) {
        const element = datosE[index];
        
        let divConsulta = document.createElement("div")
        divConsulta.id = "res"

        let pCon = document.createElement("p")
        pCon.id = "pCon"
        pCon.textContent = element.consulta;

        let pFecha = document.createElement("p")
        pFecha.id = "pFecha"
        pFecha.textContent = element.fecha;


        divConsulta.appendChild(pCon)

        divConsulta.appendChild(pFecha)
    
        contenedorP.appendChild(divConsulta)

 
    }
}

sal.addEventListener("click", function () {
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