import { createContext } from "react";

export const VictoriaCntxt= createContext()

if (VictoriaCntxt == undefined) {
    throw new Error("'VictoriaCntx' deberia ser utilizado dentro de ...");
    
}