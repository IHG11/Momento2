import {gastos} from "./simuladorBD.js"


let descripcionInput=document.getElementById("descripcion")
let montoInput=document.getElementById("monto")
let categoriaInput=document.getElementById("categoria")
let fechaInput=document.getElementById("fecha")
let botonRegistroGasto=document.getElementById("botonRegistro")

botonRegistroGasto.addEventListener("click",function(evento){
    evento.preventDefault()
    let gasto={
        id:5,
        descripcion:descripcionInput.value,
        monto:montoInput.value,
        categoria:categoriaInput.value,
        fecha:fechaInput.value
    }

    
    gastos.push(gasto)
    
    
    sessionStorage.setItem("datos",JSON.stringify(gastos))
    
    Swal.fire({
        title: "Gasto registrado con exito",
        text: "Estamos para servirte",
        icon: "success"
    });

})