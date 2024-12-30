import { createContext } from "react";
import { PuzzleCntxtValues } from "../data/types";


export const PuzzleCntxt= createContext<PuzzleCntxtValues | undefined>(undefined)
