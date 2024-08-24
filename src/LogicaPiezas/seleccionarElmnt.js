export function selecccionarElmnt({indice, event, setIndiceAgarrado, agarrandoPiezaVacia}) { //dragStart 
    if (event.target.innerText == ""){
        agarrandoPiezaVacia.current = true
    }else{
        agarrandoPiezaVacia.current = false
    }
    
    event.target.classList.add("tablero__agarrando")
    setIndiceAgarrado(indice)
}
