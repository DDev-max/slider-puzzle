import { useEffect } from "react"

export function usevictoria({movimientos, setVictoria}) {
    const solucion= [...movimientos].sort((a,b)=> a - b)
  
    useEffect(()=>{// SE PUEDE HACER MEJOR?
      for (let i = 0; i < solucion.length; i++) {
        if (solucion[i] != movimientos[i]) {
          setVictoria(false)
          break
        } else{
          setVictoria(true)
        }
      }
  
    }, [movimientos])
  }
  