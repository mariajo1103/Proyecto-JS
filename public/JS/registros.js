 import { postUsers } from "./services/llamados.js"

const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const btnregistro = document.getElementById("btnregistro")


//  MostrarUsuarios()

btnregistro.addEventListener("click",function () {
    
    
    postUsers(usuario.value,contraseña.value)
    
    

})


    







//      async function MostrarUsuarios() {
    

//     const datos = await getUsers()
   
//     console.log(datos);

//     for (let index = 0; index < datos.length; index++) {
   
//      let p = document.createElement("p")

//      p.innerText= datos[index].usuario + " "+ datos[index].contraseña
//      mostrar.appendChild(p)


    
//     }
   

//  }


