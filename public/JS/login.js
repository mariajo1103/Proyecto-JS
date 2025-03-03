import {getUsers} from "../JS/services/llamados.js";

const usuario = document.getElementById("usuario")
const pas = document.getElementById("pas")
const iniciar = document.getElementById("iniciar")



iniciar.addEventListener("click", async function() {


    const usuarioRegistrado = await getUsers()

    for (let index = 0; index < usuarioRegistrado.length; index++) {

        if (usuario.value === usuarioRegistrado[index].usuario && pas.value === usuarioRegistrado[index].contraseña) {
            
            if (usuarioRegistrado[index].rol === "admi") {
                window.open("../HTML/webprofe.html", "_self")
            } else{
                window.open("../HTML/webestudiante.html", "_self")
            }
            
            
        } else
        
                    Swal.fire({
                        icon: "error",
                        title: "Su clave es incorrecta"
                      });
        
    }
    
    
})