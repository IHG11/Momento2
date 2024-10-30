
let gastos=JSON.parse(sessionStorage.getItem("datos"))

let fila=document.getElementById("fila")


gastos.forEach(function(gasto){
    
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow","p-5")

    let descripcion=document.createElement("h3")
    descripcion.classList.add("text-center", "fw-bold")
   
    descripcion.textContent=gasto.descripcion

    let montoGasto=document.createElement("h2")
    montoGasto.classList.add("text-center","text-success")
    montoGasto.textContent="$ "+gasto.monto

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid")
    
    if(gasto.categoria=="transporte"){
        imagen.src="../../assets/img/transporte.png"
    }else if(gasto.categoria=="comida"){
        imagen.src="../../assets/img/food-restaurant.png"
    }else if(gasto.categoria=="entretenimiento"){
        imagen.src="../../assets/img/mascaradas.png"
    }
    
    
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(montoGasto)
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})