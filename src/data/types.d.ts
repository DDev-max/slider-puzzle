export interface PuzzleCntxtValues {
    movements: number[]
    setMovements: Dispatch<SetStateAction<number[]>>
    victory: boolean
    setVictory: Dispatch<SetStateAction<boolean>>
}


export interface UseStopWatchStorageProps {
    stopWatch: number
    setStopWatch: Dispatch<SetStateAction<number>>
}


export interface UseMovementsStorageProps {
    movements: number[]
    setMovements: Dispatch<SetStateAction<number[]>>
}


export interface UseHasWinProps {
    movements: number[]
    setVictory: Dispatch<SetStateAction<boolean>>

}

export interface UseChangeStopWatchProps {
    setStopWatch: Dispatch<SetStateAction<number>>
    victory: boolean
}

export interface RestartGameProps {
    setStopWatch: Dispatch<SetStateAction<number>>
    setRefresh: Dispatch<SetStateAction<number>>
    setMovements: Dispatch<SetStateAction<number[]>>
    randomArray: number[]
    setVictory: Dispatch<SetStateAction<boolean>>
}


export interface VictoryProps {
    stopWatch: number
    setStopWatch: Dispatch<SetStateAction<number>>
}


export interface ResetBtnProps{
    setStopWatch: Dispatch<SetStateAction<number>>
}

export interface SelectPieceProps{
    idx: number
    e: DragEvent<HTMLDivElement>
    setGrabIdx: Dispatch<SetStateAction<number>>
    isGrabbingEmptyPiece: MutableRefObject<boolean>
}


export interface ExchangePiecesProps{
    oldPieceIdx: number
    setMovements: Dispatch<SetStateAction<number[]>>
    movements: number[]
    newPieceIdx: number

}


export interface DependentAttributesProps{
    idx: number
    emptyPiece: number
    elmnt: number
    movements: number[]
    isGrabbingEmptyPiece: MutableRefObject<boolean>
    size: number
    grabIdx: number
    setMovements:  Dispatch<SetStateAction<number[]>>
    allPiecesRef: MutableRefObject<HTMLDivElement[]>
}