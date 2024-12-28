import { useEffect } from "react"

export function useHasWin({movements, setVictory}) {
    const solution = [...movements].sort((a,b)=> a - b)
  

    useEffect(()=>{
      for (let i = 0; i < solution.length; i++) {
        if (solution[i] != movements[i]) {
          setVictory(false)
          break
        } else{
          setVictory(true)
        }
      }
  
    }, [movements])
  }
  