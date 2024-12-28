import { useContext } from "react";
import { PuzzleCntxt } from "./PuzzleCntxt";
import {NoProviderError} from "./NoProviderError"

export function usePuzzleCntxt() {

    try {
        const context = useContext(PuzzleCntxt);

        if (context === undefined) {
            throw new NoProviderError("'PuzzleCntxt' should be used inside of 'PuzzleProviderCntxt'");
        }

        return context;

    } catch (error) {
        if (error instanceof NoProviderError) {
            console.error(error)
        }

        return
    }

}